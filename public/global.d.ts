import { FaBiaoQing } from "./../preload/spider";

declare global {
  interface Window {
    fba: FaBiaoQing;
    copyImage(url): any;
  }
}

export { }
