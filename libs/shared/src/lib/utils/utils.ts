export class Utils {
  static getLocalStorageItem(key: string) {
    return localStorage.getItem(key);
  }

  static setLocalStorageItem(key: string, value: string) {
    return localStorage.setItem(key, value);
  }

  static getDate() {
    const date = new Date();
    return `${date.getFullYear()}`;
  }
}
