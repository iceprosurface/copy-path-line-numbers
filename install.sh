#!/bin/bash

echo "🚀 Installing Copy Path with Line Numbers Extension..."

# 检查是否安装了 vsce
if ! command -v vsce &> /dev/null
then
    echo "📦 Installing vsce..."
    npm install -g @vscode/vsce
fi

# 打包插件
echo "📦 Packaging extension..."
vsce package

# 查找生成的 .vsix 文件
VSIX_FILE=$(ls -t *.vsix 2>/dev/null | head -1)

if [ -z "$VSIX_FILE" ]; then
    echo "❌ Failed to create .vsix file"
    exit 1
fi

echo "✅ Package created: $VSIX_FILE"
echo ""
echo "📝 To install:"
echo "1. Open VSCode"
echo "2. Go to Extensions (Cmd+Shift+X)"
echo "3. Click the '...' menu → 'Install from VSIX...'"
echo "4. Select: $(pwd)/$VSIX_FILE"
echo ""
echo "Or run: code --install-extension $VSIX_FILE"
