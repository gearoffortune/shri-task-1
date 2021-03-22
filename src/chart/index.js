import {html} from 'lit-html'
import {header} from '../components/header';
import './styles.css'
const data = {
  "alias": "chart",
  "data": {
    "title": "Коммиты",
    "subtitle": "Спринт № 213",
    "values": [
      {"title": "203", "value": 108},
      {"title": "204", "value": 160},
      {"title": "205", "value": 126},
      {"title": "206", "value": 134},
      {"title": "207", "value": 112},
      {"title": "208", "value": 152},
      {"title": "209", "value": 128},
      {"title": "210", "value": 164},
      {"title": "211", "value": 118},
      {"title": "212", "value": 140},
      {"title": "213", "value": 182, "active": true},
      {"title": "214", "value": 0},
      {"title": "215", "value": 0},
      {"title": "216", "value": 0},
      {"title": "217", "value": 0},
      {"title": "218", "value": 0}
    ],
    "users": [
      {"id": 3, "name": "Дарья Ковалева", "avatar": "3.jpg", "valueText": "32"},
      {"id": 9, "name": "Сергей Бережной", "avatar": "9.jpg", "valueText": "27"},
      {"id": 7, "name": "Дмитрий Андриянов", "avatar": "7.jpg", "valueText": "22"}
    ]
  }
}

const chartbar = ({title, value, active}, ratio) => html`<div class="chart__chart__chartbar"><p class="chart__chart__chartbar__value${active ? ' chart__chart__chartbar__value--active' : ''}">${value===0 ? '' : value}</p>
<div class="chart__chart__chartbar__bar${active ? ' chart__chart__chartbar__bar--active' : ''}"  style="height: calc(8px + ${ratio*70}%)"></div>
<div class="chart__chart__chartbar__title">${title}</div></div>`

const chartbars = (values) =>{
  const maxValue = Math.max(...(values.map(value => value.value)));
  const activeIndex = values.findIndex(value => value.active);
  const relevantValues = values.slice(activeIndex - 6, activeIndex + 3);

  return html`<div class="chart__chart">${relevantValues.map(value => chartbar(value, value.value/maxValue))}</div>`
}
const chartleaders = (users) => html`<div class="chart__leaders"><div class="chart__leaders__leader">
  <img src="/images/1x/${users[0].avatar}" alt="" class="chart__leaders__leader__img">
  <div class="chart__leaders__leader__meta">
    <div class="chart__leaders__leader__meta__name">${users[0].name}</div>
    <div class="chart__leaders__leader__meta__text">${users[0].valueText}</div>
  </div>
</div>
<div class="chart__leaders__spacer"></div>
<div class="chart__leaders__leader">
  <img src="/images/1x/${users[1].avatar}" alt="" class="chart__leaders__leader__img">
  <div class="chart__leaders__leader__meta">
    <div class="chart__leaders__leader__meta__name">${users[1].name}</div>
    <div class="chart__leaders__leader__meta__text">${users[1].valueText}</div>
  </div>
</div></div>`

export const screenTemplate = [header(data.data.title, data.data.subtitle), chartbars(data.data.values), chartleaders(data.data.users)]