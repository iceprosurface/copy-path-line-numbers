const vscode = require('vscode');
const path = require('path');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    console.log('Copy Path with Line Numbers extension is now active');

    let disposable = vscode.commands.registerCommand('copyPathWithLines.copy', function () {
        const editor = vscode.window.activeTextEditor;
        
        if (!editor) {
            vscode.window.showWarningMessage('No active editor found');
            return;
        }

        const document = editor.document;
        const selection = editor.selection;
        
        // 获取工作区根目录
        const workspaceFolder = vscode.workspace.getWorkspaceFolder(document.uri);
        let filePath = document.uri.fsPath;
        
        // 如果在工作区内，使用相对路径
        if (workspaceFolder) {
            filePath = path.relative(workspaceFolder.uri.fsPath, filePath);
        }
        
        // 获取行号（VSCode 行号从 0 开始，显示时需要 +1）
        const startLine = selection.start.line + 1;
        const endLine = selection.end.line + 1;
        
        // 构建最终的路径字符串
        let result;
        if (startLine === endLine) {
            // 单行
            result = `${filePath}:${startLine}`;
        } else {
            // 多行范围
            result = `${filePath}:${startLine}-${endLine}`;
        }
        
        // 复制到剪贴板
        vscode.env.clipboard.writeText(result).then(() => {
            // 显示成功消息（可选）
            vscode.window.setStatusBarMessage(`Copied: ${result}`, 3000);
        });
    });

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
