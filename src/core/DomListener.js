export class DomListener {
    constructor($root, listeners = []) {
        this.$root = $root
        this.listeners = listeners
    }
    initDOMListner() {
        this.listeners.forEach((listener) => {
            let method = getMetodName(listener)

            this.$root.on(listener, this[method])
        })
    }
    removeDOMListners() {
        this.listeners.forEach((listener) => {
            let method = getMetodName(listener)
            this.$root.of(listener, this[method])
        })
    }

}
function getMetodName(string) {
    if (typeof string !== 'string') {
        return ''
    }
    string = string.charAt(0).toUpperCase() + string.slice(1)
    return 'on' + string
}

