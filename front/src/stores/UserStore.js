import { observable } from "mobx";

const UserStore = observable({
  createAccount: false,
  setCreateAccount(createAccount) {
    this.createAccount = createAccount;
  },
  getCreateAccount() {
    return this.createAccount;
  },
});
export default UserStore;
