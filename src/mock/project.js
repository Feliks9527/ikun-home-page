import Mock from "mockjs";

Mock.mock(/^\/api\/project\/?$/, "get", {
    code: 0,
    message: "",
    "data|10-20": [
        {
            id: "@uuid",
            name: "@ctitle(5, 10)",
            "url|1": ["@url", null],
            "gitee|1": ["https://gitee.com/felikschen" , null],
            "description|1-4": ["@cparagraph(1, 5)"],
            thumb: "@dataImage('200x100')",
        }
    ]
})
