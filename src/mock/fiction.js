import Mock from "mockjs";
import qs from "querystring"

// 动态导入 JSON 文件
function loadFictionData(page) {
    try {
        return require(`@/assets/fiction/chapters_${page}.json`);
    } catch (e) {
        return null;
    }
}

Mock.mock(/^\/api\/fiction(\?.+)?$/, "get", function(options) {
    // 解析查询参数
    const query = qs.parse(options.url.split("?")[1]);
    const page = query.page || 1; // 获取页码，默认为1

    // 动态加载 JSON 文件
    const data = loadFictionData(page);

    if (data) {
        return Mock.mock({
            code: 0,
            msg: "success",
            data: data
        });
    } else {
        return Mock.mock({
            code: 1,
            msg: "File not found",
            data: null
        });
    }
});
