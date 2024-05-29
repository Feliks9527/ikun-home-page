import Mock from 'mockjs'
import qqQrCode from '@/assets/qq.jpg'
import wxQrCode from '@/assets/wx.jpg'
import favicon from '@/assets/favicon.png'

Mock.mock('/api/setting', 'get', {
    code: 0,
    msg: 'success',
    data: {
        avatar: 'https://img2.baidu.com/it/u=175376867,1479090034&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=500',
        siteTitle: 'IKUN',
        gitee: 'https://gitee.com/felikschen',
        qq: '1959210778',
        qqQrCode: qqQrCode,
        wx: 'Ran_0097',
        wxQrCode: wxQrCode,
        mail: 'R26Email@163.com',
        giteeName: 'felikschen',
        favicon: favicon,
        icp: '渝ICP备2024032638号-1',
    }
})
