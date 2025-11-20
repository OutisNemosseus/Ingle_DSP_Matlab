#!/usr/bin/env python3
"""Script to split chapter files into individual program files"""

import json
import os
import re
from pathlib import Path

# Get the directory where this script is located
script_dir = Path(__file__).parent
matlab_dir = script_dir / 'matlab'
programs_dir = script_dir / 'programs'

# Create programs directory
programs_dir.mkdir(exist_ok=True)

chapters = ['02', '03', '04', '05', '06', '07', '08']
all_programs = []

for chapter_num in chapters:
    chapter_file = matlab_dir / f'dsp-chapter-{chapter_num}.js'

    if not chapter_file.exists():
        print(f'Warning: {chapter_file} not found')
        continue

    # Read the file content
    content = chapter_file.read_text(encoding='utf-8')

    # Extract the array part using regex
    match = re.search(r'const chapter\d+Programs = (\[[\s\S]*?\]);?\s*export default', content)

    if not match:
        print(f'Warning: Could not parse {chapter_file}')
        continue

    array_str = match.group(1)

    # Parse as JSON
    try:
        programs = json.loads(array_str)
    except json.JSONDecodeError as e:
        print(f'Error parsing {chapter_file}: {e}')
        continue

    print(f'\nProcessing Chapter {chapter_num}: {len(programs)} programs')

    for program in programs:
        program_id = program['id']
        var_name = program_id.replace('-', '_')
        file_name = f'{program_id}.js'
        file_path = programs_dir / file_name

        # Create the individual program file
        display_name = program.get('displayName', program.get('title', ''))
        description = program.get('description', '')

        file_content = f'''// {display_name}
// {description}

const {var_name} = {json.dumps(program, indent=2, ensure_ascii=False)};

export default {var_name};
'''

        file_path.write_text(file_content, encoding='utf-8')
        print(f'  [OK] Created {file_name}')

        all_programs.append(program_id)

# Create index.js that imports all programs
index_content = f'''// Auto-generated index file for all DSP programs
// Total programs: {len(all_programs)}

'''

for program_id in all_programs:
    var_name = program_id.replace('-', '_')
    index_content += f'import {var_name} from \'./programs/{program_id}.js\';\n'

index_content += '\nconst programs = [\n'
for program_id in all_programs:
    var_name = program_id.replace('-', '_')
    index_content += f'  {var_name},\n'
index_content += '];\n\nexport default programs;\n'

index_file = script_dir / 'index.js'
index_file.write_text(index_content, encoding='utf-8')
print(f'\n[OK] Created index.js with {len(all_programs)} programs')

print('\n[DONE] All programs have been split into individual files.')
print(f'   Total: {len(all_programs)} programs')
