import axios from "axios";
import {showMessage} from "@/utils/showMessage";

const request = axios.create();
// 响应拦截器
request.interceptors.response.use(function (resp) {
    if (resp.data.code !== 0) {
        showMessage({
            content: resp.data.msg,
            type: 'error'
        });
        return null;
    }
    return resp;
})

export default request;
