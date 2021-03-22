import {html} from 'lit-html'
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

const leaders = {
  "alias": "leaders",
  "data": {
    "title": "Больше всего коммитов",
    "subtitle": "Спринт № 213",
    "emoji": "👑",
    "users": [
      {"id": 3, "name": "Дарья Ковалева", "avatar": "3.jpg", "valueText": "32"},
      {"id": 9, "name": "Сергей Бережной", "avatar": "9.jpg", "valueText": "27"},
      {"id": 7, "name": "Дмитрий Андриянов", "avatar": "7.jpg", "valueText": "22"},
      {"id": 6, "name": "Андрей Мокроусов", "avatar": "6.jpg", "valueText": "20"},
      {"id": 8, "name": "Александр Иванков", "avatar": "8.jpg", "valueText": "19"}
    ]
  }
}

const userWithBar =(user, position) => html`
<div class="barblock">
  <div class="barblock__user">${leaders__person(user, position===0 , leaders.data.emoji)}</div>
  <div class="barblock__bar">${bar(position+1)}</div>
</div>
`

export const screenTemplate = [
  header(leaders.data.title, leaders.data.subtitle), 
  html`<div class="barblocks">${leaders.data.users.map((user, i) => userWithBar(user, i))}</div>`]