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
  filterCheckboxIsActive() {
    this.users = this.users.filter(({isActive}) =>{
     if(isActive) {
        return isActive;
      } else {
      }
    })
    this.sendUpdateNotification(this.users);
  }
  
}

export const userService = new UserService();
