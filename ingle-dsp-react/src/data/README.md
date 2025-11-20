# DSP Programs Data Structure

## 重构完成总结

### 新结构

```
src/data/
├── programs/          # 115个独立的程序文件
│   ├── ex020100.js
│   ├── ex020200.js
│   ├── ...
│   └── ex083000.js
├── matlab/            # 原始章节文件（保留作为备份）
│   ├── dsp-chapter-02.js
│   ├── dsp-chapter-03.js
│   └── ...
├── index.js           # 汇总所有程序的入口文件
├── split_programs.py  # 拆分脚本
└── fix_python_code.py # Python代码修复脚本
```

### 统计信息

- **总程序数**: 115
  - Chapter 02: 11 programs
  - Chapter 03: 23 programs
  - Chapter 04: 6 programs
  - Chapter 05: 20 programs
  - Chapter 06: 5 programs
  - Chapter 07: 26 programs
  - Chapter 08: 24 programs

- **Python代码修复**: 96/115 已自动修复
- **代码问题**: 1 个文件需要手动检查 (ex020100.js)

### 程序文件格式

每个程序文件都是一个独立的ES模块，包含：

```javascript
// 程序标题
// 程序描述

const ex020100 = {
  "id": "ex020100",
  "title": "...",
  "displayName": "...",
  "description": "...",
  "category": "DSP - Chapter 02",  // 保留章节信息用于前端分组
  "chapter": "02",
  "source": "matlab",
  "pythonCode": "...",              // 已修复的Python代码
  "matlabCode": "...",              // 原始MATLAB代码
  "defaultParams": {},
  "params": [],
  "tags": [...],
  "wikipediaLinks": [...]
};

export default ex020100;
```

### Python代码修复内容

自动修复包括：
1. MATLAB数组语法 `[0:10]` → Python `np.arange(0, 11)`
2. 复数表示 `j` → `1j`
3. MATLAB函数添加 `np.` 前缀
4. `randn()` → `np.random.randn()`
5. `length()` → `len()`
6. `fliplr()` → `np.flip()`
7. `grid` → `plt.grid(True)`
8. 绘图函数 `stem()`, `plot()`, `axis()` → `plt.*`
9. 删除MATLAB特定命令 (`clf`, `pause`, `print`, 等)
10. 修复语法错误和断行问题

### 前端使用方式

```javascript
// 导入所有程序
import programs from './data/index.js';

// 按章节筛选
const chapter02Programs = programs.filter(p => p.chapter === '02');

// 按类别筛选
const dspPrograms = programs.filter(p => p.category.includes('DSP'));

// 直接导入单个程序
import ex020100 from './data/programs/ex020100.js';
```

### 优势

1. **模块化**: 每个程序是独立文件，易于维护和更新
2. **可扩展**: 添加新程序只需创建新文件并在index.js中导入
3. **保留章节信息**: category和chapter字段允许前端按章节组织展示
4. **代码修复**: Python代码已自动修复大部分MATLAB/Python混合语法错误
5. **完整性**: 同时保留MATLAB原始代码和Python运行代码

### 后续步骤

1. 手动检查并修复 `ex020100.js` 中的JSON解析错误
2. 在前端React组件中使用新的数据结构
3. 实现按章节分组的UI界面
4. 可选：删除 `matlab/` 目录中的旧章节文件（建议先保留作为备份）
