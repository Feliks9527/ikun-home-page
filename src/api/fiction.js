import request from "@/api/request";

export async function getFiction(page = 1, limit = 20) {
    return await request('/api/fiction',{
        params: {
            page,
            limit
        }
    }).then(res => {
        return res.data.data;
    });
}
