import * as vscode from 'vscode';
import { setupHotReload } from './setup/hotReload';

export function activate(context: vscode.ExtensionContext) {
    let currentPanel: vscode.WebviewPanel | undefined = undefined;

    const command = vscode.commands.registerCommand('helloReact.openWebview', () => {
        if (!currentPanel) {
            currentPanel = vscode.window.createWebviewPanel(
                'helloReact',
                'Hello React!',
                vscode.ViewColumn.One,
                {
                    enableScripts: true,
                    retainContextWhenHidden: true,
                }
            );

            currentPanel.onDidDispose(() => {
                currentPanel = undefined;
            });

            setupHotReload(context, currentPanel);
        }
    });

    context.subscriptions.push(command);
}