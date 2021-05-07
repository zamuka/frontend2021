/* eslint-disable arrow-body-style */
class UserService extends EventTarget {
  users = [];

  searchResults = [];

  load(url) {
    const req = new XMLHttpRequest();
    req.addEventListener('load', () => {
      this.users = JSON.parse(req.responseText);
      this.sendUpdateNotification(this.users);
    });
    req.open('GET', url);
    req.send();
  }

  search(values) {
    this.searchResults = this.users;

    if (values.symbols) {
      this.searchResults = this.searchResults.filter(({ name }) => {
        return name.toLowerCase().includes(values.symbols.toLowerCase());
      });
    }

    if (values.status) {
      this.searchResults = this.searchResults.filter(({ isActive }) => {
        return String(isActive) === values.status;
      });
    }

    if (values.gender) {
      this.searchResults = this.searchResults.filter(({ gender }) => {
        return gender === values.gender;
      });
    }

    this.sendUpdateNotification(this.searchResults);
  }

  delete(id) {
    this.users = this.users.filter(({ _id }) => _id !== id);
    this.sendUpdateNotification(this.users);
  }

  sendUpdateNotification(updatedData) {
    const event = new CustomEvent('change', { detail: updatedData });
    this.dispatchEvent(event);
  }
}

export const userService = new UserService();
