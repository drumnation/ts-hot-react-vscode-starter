import * as vscode from 'vscode';
import { setupHotReload } from './hotReload';

let currentPanel: vscode.WebviewPanel | undefined = undefined;

export function createWebviewPanel(context: vscode.ExtensionContext): vscode.WebviewPanel {
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

    setupMessageHandler(currentPanel, context);
    setupPanelCleanup();
    setupHotReload(context, currentPanel);
  }
  return currentPanel;
}

function setupMessageHandler(panel: vscode.WebviewPanel, context: vscode.ExtensionContext) {
  panel.webview.onDidReceiveMessage(
    message => {
      switch (message.command) {
        case 'showMessage':
          vscode.window.showInformationMessage(message.text);
          return;
      }
    },
    undefined,
    context.subscriptions
  );
}

function setupPanelCleanup() {
  currentPanel!.onDidDispose(() => {
    currentPanel = undefined;
  });
}

export function getWebviewPanel(): vscode.WebviewPanel | undefined {
  return currentPanel;
}