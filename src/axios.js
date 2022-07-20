import axios from "axios";

const instance =axios.create({
    baseURL:"https://whatsapp-backend816109.herokuapp.com/"
});

export default instance;