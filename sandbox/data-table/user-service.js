class UserService extends EventTarget {
  users = [];
  searchResult = [];

  load(url) {
    const req = new XMLHttpRequest();
    req.addEventListener('load', () => {
      this.users = JSON.parse(req.responseText);
      this.sendUpdateNotification(this.users);
    });
    req.open('GET', url);
    req.send();
  }

  searchFilter(values) {
    this.searchResult = this.users;
    
    if (values.status) {
      const status = document.querySelector('#status');
      if (status.checked) {
        this.searchResult = this.searchResult.filter(({ isActive }) => isActive);
      }
    }
    
    if (values.symbol) {
      this.searchResult = this.searchResult.filter(({ name }) => {
        return name.toLowerCase().includes(values.symbol.toLowerCase());
      });
    }

    this.sendUpdateNotification(this.searchResult);
  }

  delete(id) {
    this.users = this.users.filter(({ _id }) => _id !== id);
    this.sendUpdateNotification(this.users);
  }

  sendUpdateNotification(updateData) {
    const event = new CustomEvent('change', { detail: updateData });
    this.dispatchEvent(event);
  }
}
  export const userService = new UserService();
