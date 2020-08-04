class Dom {
    constructor(selector) {
        this.elem = typeof selector === 'string'
            ? document.querySelector(selector)
            : selector
    }
    html(html) {
        if (typeof html === 'string') {
            this.elem.innerHTML = html
            return this
        }
        return this.elem.outerHTML
    }
    append(node) {
        if (node instanceof Dom) {
            node = node.elem
        }
        if (Element.prototype.append) {
            this.elem.append(node)
        }
        return this
    }
    on(eventType, callback) {
        this.elem.addEventListener(eventType, callback)

    }
    of(eventType, callback) {
        this.elem.removeEventListener(eventType, callback)

    }
}

export function $(selector) {
    return new Dom(selector)
}
$.create = (tagName, classes = '') => {
    let el = document.createElement(tagName);
    if (classes) {
        el.classList.add(classes)
    }
    return $(el)
}
