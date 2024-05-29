import Mock from 'mockjs'
import qs from 'querystring'

Mock.mock('/api/blogtype', 'get', {
    code: 0,
    msg: 'success',
    "data|10-20": [
        {
            "id|+1": 1,
            name: "分类@id",
            "articleCount|0-100": 0,
            "order|+1": 1
        }
    ]
})

Mock.mock(/^\/api\/blog(\?.+)?$/, 'get', function (options) {
    const query = qs.parse(options.url)

    return Mock.mock({
        code: 0,
        msg: 'success',
        data: {
            "total|100-1000": 0,
            [`rows|${query.limit || 10}`]: [
                {
                    id: "@guid",
                    title: '@ctitle(1,50)',
                    description: '@cparagraph(10, 30)',

                    category: {
                        "id|1-10": 0,
                        name: '分类@id'
                    },
                    "scanNumber|0-1000": 0,
                    "commentNumber|0-1000": 0,
                    "thumb|1": [
                        "https://img0.baidu.com/it/u=1802998400,2540242310&fm=253&fmt=auto&app=120&f=JPEG?w=1200&h=800",
                        "https://img2.baidu.com/it/u=220748365,316775995&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=500",
                        "https://img0.baidu.com/it/u=2085546223,1756663521&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
                        "https://img0.baidu.com/it/u=2114070121,3169587258&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
                        "https://img0.baidu.com/it/u=3229372137,2000146388&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=500",
                        "https://img0.baidu.com/it/u=2188612949,3386309756&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800",
                        "https://img2.baidu.com/it/u=1976961790,894139509&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
                        "https://img1.baidu.com/it/u=1520997946,1572213435&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=500",
                        "https://img0.baidu.com/it/u=1149899296,2114529597&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
                        "https://img2.baidu.com/it/u=736017584,3947899070&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
                        "https://img2.baidu.com/it/u=2554436832,3732771941&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=333",
                        "https://img1.baidu.com/it/u=3829479660,2471478397&fm=253&fmt=auto&app=138&f=JPEG?w=778&h=500",
                        "https://img1.baidu.com/it/u=1787792251,3320247605&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
                        "https://img1.baidu.com/it/u=1578248517,908589681&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=500",
                        "https://img0.baidu.com/it/u=1303088476,2159031035&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=500",
                        "https://img0.baidu.com/it/u=1803224786,1918896525&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800",
                        "https://img0.baidu.com/it/u=2469490650,3701248769&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=313",
                        "https://img1.baidu.com/it/u=2772538822,299464342&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=310",
                        "https://img1.baidu.com/it/u=1397998180,2679419685&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500",
                        "https://img1.baidu.com/it/u=1876242037,500732836&fm=253&fmt=auto&app=138&f=JPEG?w=828&h=500",
                        "https://img0.baidu.com/it/u=4271402517,2151425020&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=500",
                        "https://img2.baidu.com/it/u=3166856671,3810006958&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500",
                        "https://img2.baidu.com/it/u=2935732693,3139803370&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
                    ],
                    createDate: '@datetime'
                }
            ]
        }
    })
})


Mock.mock(/^\/api\/blog\/[^/]+$/, 'get', {
    code: 0,
    msg: 'success',
    data: {
        id: '@guid',
        title: '@ctitle(1,50)',
        category: {
            "id|1-10": 0,
            name: '分类@id'
        },
        "scanNumber|0-1000": 0,
        "commentNumber|0-1000": 0,
        description: '@cparagraph(10, 30)',
        createDate: '@datetime',
        toc: [ //博客章节目录
            {name: 'h5c3', anchor: 'h5c3',children:[
                    {name: 'geolocation-js获取地理位置', anchor: 'geolocation-js获取地理位置'},
                    {name: '垂直居中img', anchor: '垂直居中img'},
                    {name: '在使用rem时动态计算html的font-size', anchor: '在使用rem时动态计算html的font-size'},
                    {name: 'first-letter--first-line-伪元素', anchor: 'first-letter--first-line-伪元素'},
                    {name: '图片懒加载', anchor: '图片懒加载'},
                ]
            },
            {name:'js',anchor:'js',children:[
                    {name: '判断数据类型', anchor: '判断数据类型'},
                    {name: '判断两个对象是否相等', anchor: '判断两个对象是否相等'},
                    {name: '强制转换和隐式转换', anchor: '强制转换和隐式转换'},
                ]
            }
        ],
        htmlContent: `<h1 id='h5c3'>H5C3</h1>
  <h3 id='geolocation-js获取地理位置'><strong>Geolocation: js获取地理位置</strong></h3>
  <pre><code class='language-javascript' lang='javascript'>// 检查浏览器是否支持 Geolocation API
if (&quot;geolocation&quot; in navigator) {
    console.log(&#39;navigator&#39;, navigator);
    // 支持，调用 getCurrentPosition 方法获取地理位置信息
    navigator.geolocation.getCurrentPosition(function(position) {
        // 获取经度和纬度
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        // 将经度和纬度显示在页面上
        document.getElementById(&#39;latitude&#39;).textContent = latitude;
        document.getElementById(&#39;longitude&#39;).textContent = longitude;
    }, function(error) {
        // 获取位置信息失败时的处理
        console.error(&quot;Error getting geolocation:&quot;, error);
    });
} else {
    // 不支持 Geolocation API 的浏览器
    console.error(&quot;Geolocation is not supported by this browser.&quot;);
}
</code></pre>
  <p>&nbsp;</p>
  <h3 id='垂直居中img'>垂直居中img</h3>
  <pre><code class='language-html' lang='html'>.container {
    width: 500px;
    height: 500px;
    background-color: red;
        /* display: table-cell;
        vertical-align: middle;
        text-align: center; */  table-cell或flex
    display: flex;
    justify-content: center;
    align-items: center;
}
&lt;div class=&quot;container&quot;&gt;
    &lt;img src=&quot;./svgs/1.svg&quot; alt=&quot;&quot;&gt;
&lt;/div&gt;
</code></pre>
  <p>&nbsp;</p>
  <h3 id='在使用rem时动态计算html的font-size'>在使用rem时动态计算HTML的font-size</h3>
  <p>必需<strong>动态</strong>的去设置 html 的大小，才能适配</p>
  <pre><code class='language-javascript' lang='javascript'>(function(){
var html=document.documentElement;
var width=html.getBoundingClientRect().width; //获取屏幕宽度（设备独立像素），如iPhone6 为414
html.style.fontSize=width/16 + &#39;px&#39;; //html font-size = 20px
    
//iphone5 下 1rem=20 这里之所以除以 16，是因为要把宽度分成16 份，这个数并没有固定，一般选 15，16，以 ipone5 为准是 16，因为一除可以得到整数 20，好计算。
})() ;
</code></pre>
  <p>&nbsp;</p>
  <h3 id='first-letter--first-line-伪元素'>:first-letter / :first-line 伪元素</h3>
  <p><em>将样式添加到文本的首字母</em></p>
  <pre><code class='language-html' lang='html'>p:first-letter {
    font-size: 150%;
    color: red;
    font-weight: bold;
}

&lt;h1&gt;:first-letter Demo&lt;/h1&gt;
&lt;p&gt;This is a paragraph. The first letter of this paragraph will be styled.&lt;/p&gt;

//T变红色且加粗
</code></pre>
  <p>&nbsp;</p>
  <h3 id='图片懒加载'>图片懒加载</h3>
  <p><em>可以提高页面加载速度和性能</em></p>
  <p>在 <code>&lt;img&gt;</code> 标签中使用 <code>data-src</code> 属性存储图片的真实地址，而不是使用 <code>src</code> 属性</p>
  <pre><code class='language-html' lang='html'>&lt;img data-src=&quot;image.jpg&quot; alt=&quot;Lazy Loaded Image&quot;&gt;
</code></pre>
  <p>在页面滚动时，检查每个图片是否进入了可视区域，如果进入了可视区域，则将 <code>data-src</code> 属性的值赋给 <code>src</code> 属性，从而实现图片加载。</p>
  <pre><code class='language-javascript' lang='javascript'>// 获取所有具有 data-src 属性的图片元素
var lazyImages = document.querySelectorAll(&#39;img[data-src]&#39;);

// 监听页面滚动事件
window.addEventListener(&#39;scroll&#39;, function() {
    // 遍历所有图片元素
    lazyImages.forEach(function(img) {
        // 检查图片是否进入了可视区域
        if (isInViewport(img)) {
            // 将 data-src 属性的值赋给 src 属性
            img.src = img.dataset.src;
            // 加载完成后移除 data-src 属性，防止重复加载
            img.removeAttribute(&#39;data-src&#39;);
        }
    });
});

// 检查元素是否进入了可视区域的函数
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top &gt;= 0 &amp;&amp;
        rect.left &gt;= 0 &amp;&amp;
        rect.bottom &lt;= (window.innerHeight || document.documentElement.clientHeight) &amp;&amp;
        rect.right &lt;= (window.innerWidth || document.documentElement.clientWidth)
    );
}
</code></pre>
  <p>当页面滚动时，它会检查所有具有 <code>data-src</code> 属性的图片元素是否进入了可视区域，如果是，则将 <code>data-src</code> 属性的值赋给 <code>src</code>
    属性，从而触发图片加载。这样可以减少页面加载时对网络资源的请求，提高页面加载速度，尤其是在图片较多的情况下。</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <h1 id='js'>JS</h1>
  <h3 id='判断数据类型'>判断数据类型</h3>
  <pre><code class='language-javascript' lang='javascript'>.constructor
console.log([].constructor) //ƒ Array()

Object.prototype.toString.call()
console.log(Object.prototype.toString.call([])) //[object Array]
</code></pre>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <h3 id='判断两个对象是否相等'>判断两个对象是否相等</h3>
  <p><em>比较两个对象的引用地址</em></p>
  <pre><code class='language-javascript' lang='javascript'>Object.is(obj1 , obj2) //相等true,不等false
</code></pre>
  <p>只比较内容的话，工具函数，或Lodash的<em><strong>_.isEqual()</strong></em>方法</p>
  <pre><code class='language-javascript' lang='javascript'>function deepEqual(obj1, obj2) {
    // 如果两个对象引用相同的内存地址，则直接返回 true
    if (obj1 === obj2) {
        return true;
    }
    
    // 如果两个对象中有一个不是对象类型，则直接返回 false
    if (!(obj1 instanceof Object) || !(obj2 instanceof Object)) {
        return false;
    }
    
    // 获取两个对象的属性名数组
    var keys1 = Object.keys(obj1);
    var keys2 = Object.keys(obj2);
    
    // 如果属性数量不相等，则直接返回 false
    if (keys1.length !== keys2.length) {
        return false;
    }
    
    // 遍历对象的属性，递归比较属性值
    for (var key of keys1) {
        if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
            return false;
        }
    }
    
    return true;
}
</code></pre>
  <p>&nbsp;</p>
  <h3 id='强制转换和隐式转换'>强制转换和隐式转换</h3>
  <pre><code class='language-tex' lang='tex'>强制————
转化成字符串 toString() String()
转换成数字 Number()、 parseInt()、 parseFloat()
转换成布尔类型 Boolean()

隐式————
拼接字符串
例子 var str = &quot;&quot; + 18
- / % ==
</code></pre>`,
        thumb: [Mock.Random.image('300x250', '#894FC4', '#FFF', 'png', 'Random Image'), null],
    }
})


Mock.mock('/api/comment', 'post', {
    code: 0,
    msg: 'success',
    data: {
        id: '1',
        nickname: '@cname',
        content: '@cparagraph(1, 5)',
        createDate: '@datetime',
        "avatar|1": [
            "http://p2.music.126.net/68NMbfjWNU-qo18lWf5n0Q==/109951169327092585.jpg?param=60y60",
            "http://p2.music.126.net/CvOPWzpOPXK5VJEpn2QKIA==/109951169236964516.jpg?param=60y60",
            "http://p2.music.126.net/Kxd0j5zIoWnTyUxnyAfHeg==/109951169368541050.jpg?param=60y60",
            "http://p1.music.126.net/Eg7hFPaRnBdl8vi6BTV0_g==/109951168574727728.jpg?param=60y60",
        ]
    }
})



Mock.mock(/^\/api\/comment\/?(\?.+)?$/, 'get', function(options){
    const query = qs.parse(options.url);

    return Mock.mock({
        code: 0,
        msg: 'success',
        data: {
            "total|100-1000": 0,
            [`rows|${query.limit || 10}`]: [
                {
                    id: '@guid',
                    nickname: '@cname',
                    content: '@cparagraph(1, 5)',
                    createDate: Date.now(),
                    "avatar|1": [
                        "http://p2.music.126.net/68NMbfjWNU-qo18lWf5n0Q==/109951169327092585.jpg?param=60y60",
                        "http://p2.music.126.net/CvOPWzpOPXK5VJEpn2QKIA==/109951169236964516.jpg?param=60y60",
                        "http://p2.music.126.net/Kxd0j5zIoWnTyUxnyAfHeg==/109951169368541050.jpg?param=60y60",
                        "http://p1.music.126.net/Eg7hFPaRnBdl8vi6BTV0_g==/109951168574727728.jpg?param=60y60",
                    ]
                }
            ]
        }
    })
})
