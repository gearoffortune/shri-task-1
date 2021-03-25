import {html} from '../html-IoC'
import {person} from '../components/person/'
import {header as headerComponent} from '../components/header/'
import './styles.css'

const leaders = {
  "alias": "leaders",
  "data": {
    "title": "Самый 🔎 внимательный разработчик",
    "subtitle": "Спринт № 213",
    "emoji": "🔎",
    "selectedUserId": 11,
    "users": [
      {"id": 1, "name": "Евгений Дементьев", "avatar": "1.jpg", "valueText": "22 голоса"},
      {"id": 4, "name": "Вадим Пацев", "avatar": "4.jpg", "valueText": "19 голосов"},
      {"id": 10, "name": "Яна Берникова", "avatar": "10.jpg", "valueText": "17 голосов"},
      {"id": 12, "name": "Алексей Ярошевич", "avatar": "12.jpg", "valueText": "16 голосов"},
      {"id": 11, "name": "Юрий Фролов", "avatar": "11.jpg", "valueText": "15 голосов"},
      {"id": 2, "name": "Александр Шлейко", "avatar": "2.jpg", "valueText": "14 голосов"},
      {"id": 5, "name": "Александр Николаичев", "avatar": "5.jpg", "valueText": "12 голосов"},
      {"id": 6, "name": "Андрей Мокроусов", "avatar": "6.jpg", "valueText": "9 голосов"},
      {"id": 8, "name": "Александр Иванков", "avatar": "8.jpg", "valueText": "8 голосов"},
      {"id": 7, "name": "Дмитрий Андриянов", "avatar": "7.jpg", "valueText": "6 голосов"},
      {"id": 3, "name": "Дарья Ковалева", "avatar": "3.jpg", "valueText": "5 голосов"},
      {"id": 9, "name": "Сергей Бережной", "avatar": "9.jpg", "valueText": "4 голоса"}
    ]
  }
}

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
  html`<div class="selectedperson">
    <div class="selectedperson__user">${person('selectedperson__user',data.users[data.selectedUserId], true , '👍')}</div>
    <div class="selectedperson__position position">${data.users.findIndex((user) => user.id===data.selectedUserId) + 1}</div>
  </div>`]}`