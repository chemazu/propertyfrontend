class Auth {
  constructor() {
    this.authenticated = false;
  }

  login(cb) {
    if (localStorage.getItem("loggedInUser")) {
      this.authenticated = true;
    }

    cb();
  }

  logout(cb) {
    if (!localStorage.getItem("loggedInUser")) {
      this.authenticated = false;
    }
    cb();
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();
