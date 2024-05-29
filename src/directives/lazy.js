import eventBus from "@/eventBus";
import {debounce} from "@/utils";
import defaultGif from "@/assets/ikun.gif"


let imgs = [];

function setOneImage(img){
    img.dom.src = defaultGif // 先设置默认图片
    // 是否处理过
    // 是否在可视区域
    const rect = img.dom.getBoundingClientRect()
    const clientHeight = document.documentElement.clientHeight
    const height = rect.height || 150

    if(rect.top >= -height || rect.top <= clientHeight){
        // 在视口
        const tempImage = new Image()
        // 加载成功后，再设置dom的src属性
        tempImage.onload = function() {
            img.dom.src = img.src
            img.handled = true
        }
        tempImage.src = img.src
        imgs = imgs.filter(item => item !== img)
    }
}

// 调用该函数，设置合适的图片
function setImages(){
    console.log("setImages")
    for (const img of imgs) {
        setOneImage(img)
    }
}

function handleScroll(){
    setImages()
}

eventBus.$on("mainScroll", debounce(handleScroll, 100))
export default {
    inserted(el, binding) {
        const img = {
            dom: el,
            src: binding.value,
            handled: false
        }
        imgs.push(img)
        // 立即处理
        setOneImage(img)
    },
    unbind(el) {
        imgs = imgs.filter(item => item.dom !== el)
    }
}
