import {
  useContext
} from "react";
import contentStore from "../stores/contentStore";
import storeContext from "../contexts/storeContext";
import UserStore from '../stores/UserStore'
//const useStores = () => useContext(storeContext);
// const useStores = () =>({
//     contentStore
// })
const useStores = () => ({
  contentStore,
  UserStore
});
export default useStores;