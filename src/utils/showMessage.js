import getComponentRootDom from "@/utils/getComponentRootDom";
import Icon from "@/components/Icon";
import styles from './showMessage.module.scss';

/**
 * @params {String} content 提示内容
 * @params {String} type 提示类型 info success warning error
 * @params {HTMLElement} container 提示容器
 * @params {Number} duration 提示时间 默认2s 0为不消失
 * */
export function showMessage(options = {}) {
    const content = options.content || '';
    const name = options.type || 'info';
    const container = options.container || document.body;
    const duration = options.duration || 2000;

    const div = document.createElement('div');
    const iconDom = getComponentRootDom(Icon, {
        name: `icon-${name}`, // icon图标名称
        color: '#fff',
        size: '20'
    });
    div.innerHTML = `<span class="${styles.icon}">${iconDom.outerHTML}</span><div>${content}</div>`;

    const typeClassName = styles[`message-${name}`];
    div.className = `${styles.message} ${typeClassName}`;

    // 加入容器 -- 不传container则默认为body，body不设置position
    if(options.container){
        if (getComputedStyle(container).position === 'static') {
            container.style.position = 'relative';
        }
    }
    container.appendChild(div);

    div.clientHeight; // 重绘--reflow--强行渲染

    // 显示
    div.style.opacity = 1;
    div.style.transform = `translate(-50%, -50%)`;

    // 消失
    if (duration === 0) {
        return;
    } else {
        setTimeout(() => {
            div.style.opacity = 0;
            div.style.transform = `translate(-50%, -50%) translateY(-15px)`;
            div.addEventListener('transitionend', function () {
                div.remove();
                // 执行回调
                options.callback && options.callback();
            }, {once: true});
        }, duration);
    }
}

