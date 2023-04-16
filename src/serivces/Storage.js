class Storage {
  static get(key) {
    if (this.isNull(key)) return false;

    return JSON.parse(localStorage.getItem(key));
  }

  static set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static isNull(key) {
    if (localStorage.getItem(key) === null) return true;

    return false;
  }
}

export default Storage;
