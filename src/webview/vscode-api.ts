interface VSCodeAPI {
  postMessage: (message: any) => void;
  getState: () => any;
  setState: (state: any) => void;
}

declare const acquireVsCodeApi: () => VSCodeAPI;

export const vscode = typeof acquireVsCodeApi === 'function'
  ? acquireVsCodeApi()
  : {
    postMessage: (message: any) => {
      console.log('Mock postMessage:', message);
    },
    getState: () => ({}),
    setState: (state: any) => {
      console.log('Mock setState:', state);
    },
  };