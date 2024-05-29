import request from "@/api/request";

export async function getProjects(){
    return request.get('/api/project').then(res=>{
        return res.data.data
    })
}
