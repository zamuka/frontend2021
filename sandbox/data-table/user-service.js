class UserService extends EventTarget {
  users = [];

  load(url) {
    const req = new XMLHttpRequest();
    req.addEventListener('load', () => {
      setTimeout(() => {
        this.users = JSON.parse(req.responseText);
        this.sendUpdateNotification();
      }, 3000);
    });
    req.open('GET', url);
    req.send();
  }

  delete(id) {
    this.users = this.users.filter(({ _id }) => _id !== id);
    this.sendUpdateNotification();
  }

  sendUpdateNotification() {
    const event = new CustomEvent('change', { detail: this.users });
    this.dispatchEvent(event);
  }
}

export const userService = new UserService();
