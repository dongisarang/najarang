import { useContext } from "react";
import contentStore from "../stores/contentStore";
import storeContext from "../contexts/storeContext";
//const useStores = () => useContext(storeContext);
// const useStores = () =>({
//     contentStore
// })
const useStores = () => ({
  contentStore,
});
export default useStores;
