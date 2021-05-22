setInterval(function () {
    // 获取元素
    const show = document.querySelector('span[data-show]')
    // 获取下一个元素
    const next = show.nextElementSibling || document.querySelector('span:first-child')
    const up = document.querySelector('span[data-up]')
    if(up) {
        up.removeAttribute('data-up')
    }
    show.removeAttribute('data-show')
    show.setAttribute('data-up', '')
    next.setAttribute('data-show', '')
},2000)