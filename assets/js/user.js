class User {
  constructor(fullname, username, password) {
    this.fullname = fullname;
    this.username = username;
    this.password = password;
  }

  AddUser() {
    var date = new Date();
    localStorage.setItem("username", this.username);
    localStorage.setItem("password", this.password);
    localStorage.setItem("fullname", this.fullname);
    localStorage.setItem("created-date", date);
    setTimeout(() => {
      window.location = "index.html";
    }, 1000);
  }
  ValidateLogin() {
    var user = localStorage.getItem("username");
    var pwd = localStorage.getItem("password");
    if (user && user != "" && pwd && pwd != "") {
      if (this.username === user && this.password === pwd) {
        return true;
      } else {
        return false;
      }
    }
  }

  isLoggedin() {
    var user_2 = localStorage.getItem("username");
    var pwd_2 = localStorage.getItem("password");
    if (user_2 && user_2 != "" && pwd_2 && pwd_2 != "") {
      return true;
    } else {
      return false;
    }
  }
}

export default User;
