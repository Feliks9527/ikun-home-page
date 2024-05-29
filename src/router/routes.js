import Home from '@/views/Home'
import About from '@/views/About'
import Blog from "@/views/Blog";
import Message from "@/views/Message";
import Project from "@/views/Project";
import BlogDetail from "@/views/Blog/Detail.vue";
import Fiction from "@/views/Fiction";

export default [
    {name: 'home', path: '/', component: Home, meta: {title: '首页'}},
    {name: 'about', path: '/about', component: About, meta: {title: '关于'}},
    {name: 'blog', path: '/blog', component: Blog, meta: {title: '博客'}},
    {name: 'categoryBlog', path: '/blog/cate/:categoryId', component: Blog, meta: {title: '博客'}},
    {name: 'blogDetail', path: '/blog/:id', component: BlogDetail, meta: {title: '博客详情'}},
    {name: 'message', path: '/message', component: Message, meta: {title: '留言'}},
    {name: 'project', path: '/project', component: Project, meta: {title: '项目'}},
    {name: 'fiction', path: '/fiction', component: Fiction, meta: {title: '小说'}},
]
