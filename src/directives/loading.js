import loadingUrl from '@/assets/loading-white.svg'
import './loading.moudle.scss'

function getLoadingImage(el) {
    return el.querySelector('img[data-role=loading]')
}

function createLoadingImage() {
    const img = document.createElement('img')
    img.dataset.role = 'loading'
    img.src = loadingUrl
    img.className = 'loading'
    return img
}

export default function(el, binding) {
    const curImg = getLoadingImage(el)
    if (binding.value) {
        if (!curImg) {
            const img = createLoadingImage()
            el.appendChild(img)
        }
    } else {
        if (curImg) {
            curImg.remove()
        }
    }
}
