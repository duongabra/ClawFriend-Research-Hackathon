declare global {
  interface Window {
    Hls?: {
      isSupported: () => boolean;
      new (): {
        loadSource: (url: string) => void;
        attachMedia: (el: HTMLMediaElement) => void;
        on: (event: string, fn: () => void) => void;
        Events: { MANIFEST_PARSED: string; ERROR: string };
      };
      Events: { MANIFEST_PARSED: string; ERROR: string };
    };
  }
}

export {};
