#!/usr/bin/env python3
"""Script to fix Python code errors in all program files"""

import json
import re
from pathlib import Path

script_dir = Path(__file__).parent
programs_dir = script_dir / 'programs'

# Common Python code fixes
def fix_python_code(code):
    """Apply common fixes to Python code"""

    # Skip if code is already mostly correct (has proper imports and functions)
    if 'def ' in code and 'import numpy as np' in code and '1j' in code:
        return code  # Already fixed

    # Fix MATLAB array syntax [start:end] -> np.arange(start, end+1)
    code = re.sub(r'\[(-?\d+):(-?\d+)\]', lambda m: f'np.arange({m.group(1)}, {int(m.group(2))+1})', code)
    code = re.sub(r'\[(-?\d+):1:(-?\d+)\]', lambda m: f'np.arange({m.group(1)}, {int(m.group(2))+1})', code)

    # Fix complex number j -> 1j
    code = re.sub(r'\bj\*', '1j*', code)
    code = re.sub(r'np\.exp\(j\*', 'np.exp(1j*', code)
    code = re.sub(r'\(j\*', '(1j*', code)

    # Fix MATLAB functions without np. prefix
    matlab_funcs = ['ones', 'zeros', 'real', 'imag', 'angle', 'abs', 'exp', 'sin', 'cos',
                    'sqrt', 'log', 'log10', 'floor', 'ceil', 'round', 'sum', 'mean',
                    'std', 'max', 'min', 'sort', 'conj', 'transpose']

    for func in matlab_funcs:
        # Don't replace if already has np. prefix
        code = re.sub(rf'\b{func}\(', f'np.{func}(', code)
        # Remove duplicate np.np.
        code = code.replace(f'np.np.{func}', f'np.{func}')

    # Fix randn
    code = re.sub(r'randn\(size\((\w+)\)\)', r'np.random.randn(len(\1))', code)
    code = re.sub(r'randn\(1,len\((\w+)\)\)', r'np.random.randn(len(\1))', code)
    code = re.sub(r'randn\((\d+),(\d+)\)', r'np.random.randn(\1, \2)', code)

    # Fix length() -> len()
    code = re.sub(r'\blength\(', 'len(', code)

    # Fix fliplr() -> np.flip()
    code = re.sub(r'\bfliplr\(', 'np.flip(', code)

    # Fix grid command
    code = re.sub(r'\bgrid\s*$', 'plt.grid(True)', code, flags=re.MULTILINE)
    code = re.sub(r'\bgrid\s*\\r', 'plt.grid(True)', code)

    # Fix stem plotting
    code = re.sub(r'\bstem\(', 'plt.stem(', code)

    # Fix plot
    code = re.sub(r'\bplot\(', 'plt.plot(', code)

    # Fix axis
    code = re.sub(r'\baxis\(', 'plt.axis(', code)

    # Remove MATLAB commands
    code = re.sub(r'\nclf\\r\\n', '\n', code)
    code = re.sub(r'\n pause\\r\\n', '\n', code)
    code = re.sub(r'\nprint -deps.*?\\r\\n', '\n', code)
    code = re.sub(r'subplot\(1,1,1\)\\r\\n', '', code)
    code = re.sub(r'set\(gca.*?\)\\r\\n', '', code)
    code = re.sub(r'gtext\(.*?\)\\r\\n', '', code)
    code = re.sub(r'# hold on\\r\\n', '', code)
    code = re.sub(r'# hold off\\r\\n', '', code)
    code = re.sub(r'hold on;?', '', code)
    code = re.sub(r'hold off;?', '', code)

    # Fix broken lines (e.g., "plt.plot(x, y)\n/something")
    code = re.sub(r'plt\.plot\((.*?)\)\n/', r'plt.plot(\1)', code)
    code = re.sub(r'plt\.ylabel\((.*?)\)\n,', r'plt.ylabel(\1)', code)
    code = re.sub(r'plt\.xlabel\((.*?)\)\n,', r'plt.xlabel(\1)', code)

    # Fix title/xlabel/ylabel with mixed syntax
    code = re.sub(r'titlenp\.arange\((.*?)\s*\+\s*1\)', r'plt.title(\1)', code)
    code = re.sub(r'textnp\.arange\((.*?)\)', '', code)  # Remove broken text commands

    # Fix comment syntax (already Python comments, but clean up)
    code = code.replace('#  #', '#')

    return code


print('Fixing Python code in all programs...\n')

fixed_count = 0
error_count = 0

for program_file in sorted(programs_dir.glob('ex*.js')):
    try:
        content = program_file.read_text(encoding='utf-8')

        # Extract the JSON object
        match = re.search(r'const \w+ = ({[\s\S]*?});', content)
        if not match:
            print(f'[SKIP] {program_file.name}: Could not parse')
            continue

        # Parse JSON
        program = json.loads(match.group(1))

        # Fix Python code
        original_code = program.get('pythonCode', '')
        if not original_code:
            continue

        fixed_code = fix_python_code(original_code)

        if fixed_code != original_code:
            program['pythonCode'] = fixed_code

            # Rebuild file content
            var_name = program['id'].replace('-', '_')
            display_name = program.get('displayName', '')
            description = program.get('description', '')

            new_content = f'''// {display_name}
// {description}

const {var_name} = {json.dumps(program, indent=2, ensure_ascii=False)};

export default {var_name};
'''

            program_file.write_text(new_content, encoding='utf-8')
            print(f'[FIXED] {program_file.name}')
            fixed_count += 1
        else:
            print(f'[OK] {program_file.name}')

    except Exception as e:
        print(f'[ERROR] {program_file.name}: {e}')
        error_count += 1

print(f'\n[DONE] Fixed {fixed_count} programs, {error_count} errors')
