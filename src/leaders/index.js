import {html} from '../html-IoC'
import {person} from '../components/person/'
import {header as headerComponent} from '../components/header/'
import './styles.css'

export const header = headerComponent
export const leaders__person = (user, isEmojiNeeded, emoji) => person('ratings', user, isEmojiNeeded, emoji);

export const bars = html` 
<div class="ratings__bar ratings__bar--leader">
  <p class="ratings__bar__position">1</p>
</div>
<div class="ratings__bar ratings__bar--second">
  <p class="ratings__bar__position">2</p>
</div>
<div class="ratings__bar ratings__bar--third">
  <p class="ratings__bar__position">3</p>
</div>`

const bar = (position) => html`
<div class="ratings__bar">
  <p class="ratings__bar__position">${position}</p>
</div>
`


const userWithBar =(user, position, emoji) => html`
<div class="barblock">
  <div class="barblock__user">${leaders__person(user, position===0 , emoji)}</div>
  <div class="barblock__bar">${bar(position+1)}</div>
</div>
`

export const screenTemplate = (data) => html`${[
  header(data.title, data.subtitle), 
  html`<div class="barblocks">${data.users.map((user, i) => userWithBar(user, i, data.emoji))}</div>`]}`