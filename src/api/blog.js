import request from "@/api/request";

/**
 * 获取博客列表
 */
export async function getBlogs(page = 1, limit = 10, categoryId = -1) {
    return await request.get('/api/blog', {
        params: {
            page,
            limit,
            categoryId
        }
    }).then(res => {
        return res.data.data
    })
}

/**
 * 获取博客分类
 */
export async function getBlogTypes() {
    return await request.get('/api/blogtype', {

    }).then(res => {
        return res.data.data
    })
}


/**
 * 获取博客详情
 */
export async function getBlog(id) {
    return await request.get(`/api/blog/${id}`).then(res => {
        console.log('详情',res.data.data)
        return res.data.data
    })
}


/**
 *
 * @param commentInfo
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export async function postComment(commentInfo){
    return await request.post('/api/comment',commentInfo).then(res => {
        return res.data.data
    })
}


/**
 *
 * @param blogId
 * @param page
 * @param limit
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export async function getComments(blogId,page = 1,limit = 10){
    return await request.get('/api/comment',{
        params:{
            blogId,
            page,
            limit
        }
    }).then(res => {
        return res.data.data
    })
}
