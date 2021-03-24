import {header} from '../components/header'
import './styles.css'
import {html} from '../html-IoC'

const data = {
  "alias": "diagram",
  "data": {
    "title": "Размер коммитов",
    "subtitle": "Спринт № 213",
    "totalText": "182 коммита",
    "differenceText": "+42 с прошлого спринта",
    "categories": [
      {"title": "> 1001 строки", "valueText": "30 коммитов", "differenceText": "+8 коммитов"},
      {"title": "501 — 1000 строк", "valueText": "32 коммита", "differenceText": "+6 коммитов"},
      {"title": "101 — 500 строк", "valueText": "58 коммитов", "differenceText": "+16 коммитов"},
      {"title": "1 — 100 строк", "valueText": "62 коммита", "differenceText": "+12 коммитов"}
    ]
  }
}

const category = (category) => html`  <div class="diagram__categories__category">
<div class="diagram__categories__category__type">
  <div class="diagram__categories__category__type__color"></div>
  <div class="diagram__categories__category__type__title">${category.title}</div>
</div>
<div class="diagram__categories__category__nums">
  <div class="diagram__categories__category__nums__change">${category.differenceText}</div>
  <div class="diagram__categories__category__nums__number">${category.valueText}</div>
</div>
</div>`

const diagram = (categories) => {
  const categoriesWithNums = categories.map(category => parseInt(category.valueText));
  const sum = categoriesWithNums.reduce((acc, iter) => acc + iter );
  const shares = categoriesWithNums.map(category => category/sum);
}

const diagramCategories = (categories) => html`<div class="diagram__categories">
${categories.map(cat => category(cat))}
</div>`

export const screenTemplate = (data) => html`${[header(data.title, data.subtitle), diagramCategories(data.categories)]}`