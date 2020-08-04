import { $ } from "../../core/dom";

export class Excel {
  constructor(selector, options) {
    this.$el = $(selector)
    this.components = options.components || []
  }
  getRoot() {
    let $root = $.create('div', 'excel')

    this.components = this.components.map(Companent => {
      let $el = $.create('div', Companent.className)
      let companent = new Companent($el)
      if (companent.name) {
        window[companent.name] = companent
      }

      $el.html(companent.toHTML())
      $root.append($el)

      return companent
    });

    return $root
  }
  render() {
    this.$el.append(this.getRoot())

    this.components.forEach(element => {
      console.log(element)
      element.init()

    });
  }
}
