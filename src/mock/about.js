import Mock from "mockjs";

Mock.mock("/api/about", "get", {
    code: 0,
    msg: 'success',
    data: 'https://www.strml.net/'
})
