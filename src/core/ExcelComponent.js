import { DomListener } from '@core/DomListener'

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listners)
    this.name = options.name || ""

  }
  toHTML() {
    return ''
  }
  init() {
    this.initDOMListner()
  }
  destroy() {
    this.removeDOMListners()
  }
}
