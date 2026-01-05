# 🧪 测试步骤

## 1. 启动调试模式

在当前 VSCode 窗口中：
- 按 `F5` 键（或者点击菜单 Run → Start Debugging）
- 会打开一个新的 VSCode 窗口，标题显示 `[Extension Development Host]`

## 2. 在新窗口中测试

### 打开测试项目：
```bash
# 在新窗口中打开你的 cupid 项目
File → Open Folder → 选择 /Users/nilibing/Documents/taptap/cupid/apps/tap-chat-search
```

### 测试场景：

#### 测试 1：单行复制
1. 打开任意 `.ts` 或 `.vue` 文件
2. 将光标放在某一行（不需要选中）
3. 按 `Shift+Cmd+C`
4. 查看状态栏是否显示 "Copied: xxx"
5. 粘贴到文本编辑器，应该看到：`src/xxx/file.ts:23`

#### 测试 2：多行范围复制
1. 选中多行代码（例如第 23-30 行）
2. 按 `Shift+Cmd+C`
3. 粘贴，应该看到：`src/components/AppButton/composables/useAppButtonMode.ts:23-30`

#### 测试 3：不同文件类型
- 测试 `.ts` 文件 ✓
- 测试 `.vue` 文件 ✓
- 测试 `.js` 文件 ✓
- 测试嵌套很深的文件路径 ✓

## 3. 检查要点

✅ 路径是相对于工作区根目录的（不是绝对路径）
✅ 行号正确（从 1 开始，不是 0）
✅ 单行格式：`path:line`
✅ 多行格式：`path:startLine-endLine`
✅ 状态栏有提示信息
✅ 快捷键不与现有快捷键冲突

## 4. 调试技巧

如果出现问题：
1. 打开调试控制台查看日志（View → Debug Console）
2. 在 `extension.js` 中修改代码
3. 在调试窗口按 `Cmd+R` 重新加载插件
4. 重新测试

## 5. 测试通过后

如果一切正常，可以：
1. 关闭调试窗口
2. 回到插件项目窗口
3. 准备打包和发布
