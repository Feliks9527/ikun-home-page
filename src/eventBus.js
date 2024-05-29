import Vue from "vue";
const app = new Vue();

Vue.prototype.$bus = app;

export default app; //方便js文件引用


// 手写实现
// const listeners = {};
//
// export default {
//     // 注册事件
//     $on(eventName, handler){
//         if(!listeners[eventName]){
//             listeners[eventName] = new Set();
//         }
//         listeners[eventName].add(handler);
//     },
//     // 注销事件
//     $off(eventName, handler){
//         if(!listeners[eventName]){
//             return;
//         }
//         listeners[eventName].delete(handler);
//     },
//     // 触发事件
//     $emit(eventName, ...args){
//         if(!listeners[eventName]){
//             return;
//         }
//         for (const handler of listeners[eventName]) {
//             handler(...args);
//         }
//     }
// }
