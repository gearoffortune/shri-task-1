import {html} from '../../html-IoC'
import './styles.css'
export const donut = (extraShare, maxShare, midShare, minShare, centralTextLabel, subtitleLabel) => html`<div class="donut" style="--first: ${extraShare}; --second: ${maxShare}; --third: ${midShare}; --fourth: ${minShare}">
<div class="donut__slice donut__slice__first"></div>
<div class="donut__slice donut__slice__second"></div>
<div class="donut__slice donut__slice__third"></div>
<div class="donut__slice donut__slice__fourth"></div>
<div class="donut__label">
  <div class="donut__label__heading">
    ${centralTextLabel}
  </div>
  <div class="donut__label__sub">
    ${subtitleLabel}
  </div>
</div>
</div>`