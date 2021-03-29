import {header} from '../components/header'
import {person} from '../components/person'
import {button} from '../components/button'
import './styles.css'
import {html} from '../html-IoC'

const data = {
  "alias": "vote",
  "data": {
    "title": "Самый 🔎 внимательный разработчик",
    "subtitle": "Спринт № 213",
    "emoji": "🔎",
    "selectedUserId": 4,
    "users": [
      {"id": 1, "name": "Евгений Дементьев", "avatar": "1.jpg", "valueText": "22 голоса"},
      {"id": 4, "name": "Вадим Пацев", "avatar": "4.jpg", "valueText": "19 голосов"},
      {"id": 10, "name": "Яна Берникова", "avatar": "10.jpg", "valueText": "17 голосов"},
      {"id": 12, "name": "Алексей Ярошевич", "avatar": "12.jpg", "valueText": "16 голосов"},
      {"id": 11, "name": "Юрий Фролов", "avatar": "11.jpg", "valueText": "11 голосов"},
      {"id": 2, "name": "Александр Шлейко", "avatar": "2.jpg", "valueText": "10 голосов"},
      {"id": 5, "name": "Александр Николаичев", "avatar": "5.jpg", "valueText": "9 голосов"},
      {"id": 6, "name": "Андрей Мокроусов", "avatar": "6.jpg", "valueText": "8 голосов"},
      {"id": 8, "name": "Александр Иванков", "avatar": "8.jpg", "valueText": "7 голосов"},
      {"id": 7, "name": "Дмитрий Андриянов", "avatar": "7.jpg", "valueText": "6 голосов"},
      {"id": 3, "name": "Дарья Ковалева", "avatar": "3.jpg", "valueText": "5 голосов"},
      {"id": 9, "name": "Сергей Бережной", "avatar": "9.jpg", "valueText": "4 голоса"}
    ]
  }
}
const column = (elems) => html`<div class="vote__column">${elems}</div>`
const getVerticalColumns = (users, selectedUserId) =>{ 
  const people = users.map(user => person('vote', {...user, valueText: ''},user.id === selectedUserId, '👍' , user.id === selectedUserId))
  return html`<div class="vote__users--vertical">${[
  column([people[0], people[3], people[6]]), 
  column([button('vote', 'up', true), people[1], people[4], button('vote', 'down')]),
  column([people[2], people[5], people[7]])
  ]}</div>`
}

export const screenTemplate = (data) => html`${
  [
  header(data.title, data.subtitle), 
  html`<div class="vote__users--horizontal">${[...data.users.map(user => html`<div class="vote__person__wrapper">${person('vote',{ ...user, valueText: ''}, 
  user.id === data.selectedUserId, '👍' , user.id === data.selectedUserId)}</div>`), button('vote', 'up', true), button('vote', 'down'), 
  html`<div class="vote__buttonwrapper vote__buttonwrapper--horizontal">${[button("vote__buttonwrapper", 'up', true), button("vote__buttonwrapper", 'down')]}</div>`
]}</div>`,
getVerticalColumns(data.users, data.selectedUserId)
]}`