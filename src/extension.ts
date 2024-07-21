import * as vscode from 'vscode';

import { createWebviewPanel } from './setup/webviewManager';

export function activate(context: vscode.ExtensionContext) {
    console.log('React Hot TS Starter extension is now active!');

    const command = vscode.commands.registerCommand('helloReact.openWebview', () => {
        createWebviewPanel(context);
    });

    context.subscriptions.push(command);
}
