import Axios from 'axios';

class Service{

    getAxiosResponse(){
        return Axios.get("https://reqres.in/api/users?page=1");
    }
}

export default new Service();