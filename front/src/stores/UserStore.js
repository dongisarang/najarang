import { observable } from "mobx";

const UserStore = observable({
  isLogin: false,
  createAccount: false,
  userToken: "",
  setUserToken(userToken) {
    this.userToken = userToken;
  },
  getUserToken() {
    return this.userToken;
  },
  setLogin(isLogin) {
    this.isLogin = isLogin;
  },
  getLogin() {
    return this.isLogin;
  },
  setCreateAccount(createAccount) {
    this.createAccount = createAccount;
  },
  getCreateAccount() {
    return this.createAccount;
  },
});
export default UserStore;
