import Vue from 'vue';

// 自动导入 components 文件夹中的所有 index.vue 文件
const requireComponent = require.context(
    // 组件目录的相对路径
    '../components',
    // 是否查询其子目录
    true,
    // 匹配 index.vue 文件的正则表达式
    /index\.vue$/
);

requireComponent.keys().forEach(fileName => {
    // 获取组件配置
    const componentConfig = requireComponent(fileName);

    // 将文件路径转换为 PascalCase 组件名称
    const componentName = fileName
        .replace(/^\.\/(.*)\/index\.vue$/, '$1') // 去掉开头的 './' 和结尾的 '/index.vue'
        .split('/')
        .map(kebab => kebab.charAt(0).toUpperCase() + kebab.slice(1)) // 转换为 PascalCase
        .join('');

    // 全局注册组件
    Vue.component(
        componentName,
        componentConfig.default || componentConfig
    );
});
