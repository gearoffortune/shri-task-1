import {html} from '../../html-IoC'
import './styles.css'
export const donut = html`<div class="donut" style="--first: .40; --second: .33; --third: .12; --fourth: .08; --fifth: 0.07">
<div class="donut__slice donut__slice__first"></div>
<div class="donut__slice donut__slice__second"></div>
<div class="donut__slice donut__slice__third"></div>
<div class="donut__slice donut__slice__fourth"></div>
<div class="donut__slice donut__slice__fifth"></div>
<div class="donut__label">
  <div class="donut__label__heading">
    CSSScript.Com
  </div>
  <div class="donut__label__sub">
    Donut Chart
  </div>
</div>
</div>`