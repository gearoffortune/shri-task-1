import {html} from '../html-IoC'
import {person} from '../components/person/'
import {header as headerComponent} from '../components/header/'
import './styles.css'

export const header = headerComponent
export const leaders__person = (user, isEmojiNeeded, emoji) => person('ratings', user, isEmojiNeeded, emoji);


const bar = (position) => html`
<div class="ratings__bar">
  <p class="ratings__bar__position position">${position}</p>
</div>
`


const userWithBar =(user, position, emoji, isActive) => html`
<div class="barblock">
  <div class="barblock__user">${person('ratings', user, position===0 , emoji)}</div>
  <div class="barblock__bar">${bar(position+1)}</div>
</div>
`
export const screenTemplate = (data) => html`${[
  header(data.title, data.subtitle), 
  html`<div class="barblocks">${data.users.map((user, i) => userWithBar(user, i, data.emoji, data.selectedUserId===user.id))}</div>`,
  html`${data.selectedUserId ? html`<div class="selectedperson">
    <div class="selectedperson__user">${person('selectedperson__user',data.users.filter(user => data.selectedUserId===user.id)[0], true , '👍')}</div>
    <div class="selectedperson__position position">${data.users.findIndex((user) => user.id===data.selectedUserId) + 1}</div>
  </div>` : ''}`]}`