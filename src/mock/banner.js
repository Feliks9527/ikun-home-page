import Mock from 'mockjs'

Mock.mock('/api/banner', 'get', {
    code: 0,
    msg: 'success',
    data: [
        {
            id: 5,
            title: 'NEVER MINDED ILL FIND SOMEONE LIKE YOU',
            desc: '从前从前有个人爱你很久',
            imgUrl: 'http://aier.asia/aierImages/5.jpg',
            link: 'http://aier.asia/aierImages/5.png'
        },
        {
            id: 1,
            title: 'HAHAHA,THIS IS A BANNER',
            desc: '你干嘛哎哟',
            imgUrl: 'http://aier.asia/aierImages/1.jpg',
            link: 'http://aier.asia/aierImages/1.png'
        },
        {
            id: 2,
            title: 'THIS IS AMAZING',
            desc: '一顿不吃饿得慌',
            imgUrl: 'http://aier.asia/aierImages/2.jpg',
            link: 'http://aier.asia/aierImages/2.png'
        },
        {
            id: 7,
            title: '1998 CAIJIAXUCUN CHICKEN COMES',
            desc: '1998 蔡家徐村 鸡鸣来',
            imgUrl: 'https://img0.baidu.com/it/u=1802998400,2540242310&fm=253&fmt=auto&app=120&f=JPEG?w=1200&h=800',
            link: 'https://img2.baidu.com/it/u=220748365,316775995&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=500'
        },
        {
            id: 3,
            title: 'THIS IS A TRULY IKUN ABOSOLUTELY!',
            desc: '一个真真的曼',
            imgUrl: 'http://aier.asia/aierImages/3.jpg',
            link: 'http://aier.asia/aierImages/3.png'
        },
        {
            id: 8,
            title: 'I AM A SUPER STAR,SING JUMP RAP',
            desc: '梳起中分 穿上背带 唱跳RAP',
            imgUrl: 'https://img0.baidu.com/it/u=2085546223,1756663521&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
            link: 'https://img0.baidu.com/it/u=2114070121,3169587258&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500'
        },
        {
            id: 4,
            title: 'I BE TOO LONG ON MY OWN',
            desc: '十年寒窗无人问',
            imgUrl: 'http://aier.asia/aierImages/4.jpg',
            link: 'http://aier.asia/aierImages/4.png'
        }
    ]
})
