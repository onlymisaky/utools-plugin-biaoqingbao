import { FaBiaoQing } from "./spider";

declare global {
  interface Window {
    fba: FaBiaoQing;
    copyImage(url): void;
  }
}

export { }
