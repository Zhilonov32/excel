import { ExcelComponent } from '@core/ExcelComponent'

export class Formula extends ExcelComponent {
    static className = 'excel__formula'
    constructor($root) {
        super($root, {
            name: 'Formula',
            listners: ['click']
        })

    }

    toHTML() {
        return `
         <div class="info">fx</div>
      <div class="input" contenteditable spellcheck="false"></div>
        `
    }

    onClick(e) {
        console.log(e)
    }
}
