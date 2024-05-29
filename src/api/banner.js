import request from './request';

async function getBanner() {
    return await request.get("/api/banner").then((res) => {
        return res.data.data
    });
}

export {getBanner};
