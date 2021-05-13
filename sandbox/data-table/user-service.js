class UserService extends EventTarget {
  users = [];

  searchResult = [];

  load(url) {
    const req = new XMLHttpRequest();
    req.addEventListener('load', () => {
      this.users = JSON.parse(req.responseText);
      this.sendUpdateNotification();
    });
    req.open('GET', url);
    req.send();
  }

  filterActiveUsers() {
    this.users = this.users.filter (({isActive}) => {
      if (isActive) {
        return isActive
      }
    })
    this.sendUpdateNotification(this.users)
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
