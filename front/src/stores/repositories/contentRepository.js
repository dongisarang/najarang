import axios from "axios";

const contentRepository = {
boardsGet:async()=>{
    try{
        const response = await axios.get("/boards");
        return response;
    }
    catch (error) {
        throw Error(error);
        return false;
      }
}

}
export default contentRepository;