import {html} from 'lit-html'

export const header = (title, subtitle) => html`<div class="header">
<h1 class="header__mainheader">${title}</h1>
<h2 class="header__secondaryheader">${subtitle}</h2>
</div>`

export const person = (name, avatar, valueText, isEmojiNeeded, emoji) => html`<div class="ratings__person">
<div class="ratings__person__imgwrapper">
  ${isEmojiNeeded ? html`<div class="ratings__person__imgwrapper__emoji">${emoji}</div>` : html``}
  <img src="../assets/images/1x/${avatar}.jpg" alt="" class="ratings__person__imgwrapper__img">
</div>
<p class="ratings__person__name">${name}</p>
<p class="ratings__person__number">${valueText}</p>
</div>`