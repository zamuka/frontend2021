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
    this.users = this.users.filter(({ _id }) => _id !== id);
    this.sendUpdateNotification();
  }

  sendUpdateNotification() {
    const event = new CustomEvent('change', { detail: this.users });
    this.dispatchEvent(event);
  }

  getListOfActiveUsers() {
    const checkbox = document.querySelector('#active-users');
    if (checkbox.checked) {
      this.users = this.users.filter(({ isActive }) => isActive);
      this.sendUpdateNotification();
    } else {
      this.load('http://www.json-generator.com/api/json/get/ceyrBcxPOq');
    }
  }

  findUserByRequest() {
    const inputValue = document.querySelector('#search').value;
    const hasRequest = this.users.some((user) => Object.values(user).includes(inputValue));

    if (hasRequest) {
      this.users = this.users.filter((user) => Object.values(user).includes(inputValue));
      this.sendUpdateNotification();
    } else {
      this.load('http://www.json-generator.com/api/json/get/ceyrBcxPOq');
    }
  }
}

export const userService = new UserService();
