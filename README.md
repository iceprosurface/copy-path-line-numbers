# Copy Path with Line Numbers

一个简单的 VSCode 插件，用于快速复制文件路径和选中代码的行号范围。

## 功能

- 使用 `Shift+Cmd+C` (Mac) 或 `Shift+Ctrl+C` (Windows/Linux) 快速复制
- 自动生成相对路径（相对于工作区根目录）
- 支持单行和行范围

## 使用方法

1. 在编辑器中选中代码（或将光标放在某一行）
2. 按下 `Shift+Cmd+C` (Mac) 或 `Shift+Ctrl+C` (Windows/Linux)
3. 路径和行号已复制到剪贴板

## 输出格式

- 单行：`src/components/Button.vue:23`
- 多行：`src/components/AppButton/composables/useAppButtonMode.ts:23-30`

## 安装方法

### 方法 1：从源码安装（推荐）

1. 克隆或下载此项目
2. 打开终端，进入项目目录
3. 运行命令：
   ```bash
   npm install -g @vscode/vsce
   vsce package
   ```
4. 会生成 `copy-path-with-lines-1.0.0.vsix` 文件
5. 在 VSCode 中：`Extensions` → `...` → `Install from VSIX...` → 选择生成的 .vsix 文件

### 方法 2：开发模式（快速测试）

1. 打开此项目文件夹在 VSCode 中
2. 按 `F5` 启动调试
3. 会打开一个新的 VSCode 窗口，插件已激活
4. 在新窗口中测试功能

## 自定义快捷键

如果想修改快捷键，在 VSCode 中：

1. 打开 `Preferences: Open Keyboard Shortcuts`
2. 搜索 `Copy Path with Line Numbers`
3. 修改为你喜欢的快捷键

## 许可

MIT
