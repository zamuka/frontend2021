class UserService extends EventTarget {
  users = [];
  unchangable_users = [];

  load(url) {
    const req = new XMLHttpRequest();
    req.addEventListener('load', () => {
      this.users = JSON.parse(req.responseText);
      this.sendUpdateNotification();
    });
    req.open('GET', url);
    req.send();
  }

  filter(status) {
    if (this.unchangable_users.length === 0) {
      this.unchangable_users = this.users;
    }
    this.users = this.unchangable_users;
    this.users = this.users.filter(function (user) {
      if (user.isActive && status === 'active') {
        return user
      };
      if (!user.isActive && status === 'inactive') {
        return user
      }
      if (status === 'all') {
        return user;
      }
    });
    this.sendUpdateNotification();
  }

  delete(id) {
    this.users = this.users.filter(({ _id }) => _id !== id);
    this.sendUpdateNotification();
  }

  // sortByStatus(status) {
  //   if (status === 'active') {

  //   }
  // }

  sendUpdateNotification() {
    const event = new CustomEvent('change', { detail: this.users });
    this.dispatchEvent(event);
  }
}

export const userService = new UserService();
