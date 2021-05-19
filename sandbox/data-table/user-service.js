class UserService extends EventTarget {
  users = [];

  load(url) {
    const req = new XMLHttpRequest();
    req.addEventListener('load', () => {
      this.users = JSON.parse(req.responseText);
      this.sendUpdateNotification();
    });
    req.open('GET', url);
    req.send();
  }

  delete(id) {
    debugger
    this.users = this.users.filter(({ _id }) => _id !== id);
    this.sendUpdateNotification();
  }

  sendUpdateNotification() {
    debugger
    const event = new CustomEvent('change', { detail: this.users });
    this.dispatchEvent(event);
  }
}

export const userService = new UserService();
