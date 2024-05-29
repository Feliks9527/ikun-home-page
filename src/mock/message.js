import Mock from "mockjs";
import qs from "querystring";

Mock.mock('/api/message', "post",{
    code: 0,
    msg: "success",
    data: {
        id: "@guid",
        nickname: "@cname",
        content: "@cparagraph(1, 10)",
        createdDate: Date.now(),
        "avatar|1": [
            "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            "https://cdn.vuetifyjs.com/images/lists/2.jpg",
            "https://cdn.vuetifyjs.com/images/lists/3.jpg",
            "https://cdn.vuetifyjs.com/images/lists/4.jpg"
        ]
    }
})

Mock.mock(/^\/api\/message\/?(\?.+)?$/, "get",function(option){
    const query = qs.parse(option.url);

    return Mock.mock({
        code: 0,
        msg: "success",
        data: {
            total: 100,
            [`rows|${query.limit || 10}`]: [
                {
                    id: "@guid",
                    nickname: "@cname",
                    content: "@cparagraph(1, 10)",
                    createDate: Date.now(),
                    "avatar|1": [
                        "https://cdn.vuetifyjs.com/images/lists/1.jpg",
                        "https://cdn.vuetifyjs.com/images/lists/2.jpg",
                        "https://cdn.vuetifyjs.com/images/lists/3.jpg",
                        "https://cdn.vuetifyjs.com/images/lists/4.jpg"
                    ]
                }
            ]
        }
    })
})
