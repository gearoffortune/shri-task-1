import { header } from "../components/header";
import "./styles.css";
import { html } from "../html-IoC";
import { donut } from "../components/my-donut";

const category = (category) => html` <div class="diagram__categories__category">
  <div class="diagram__categories__category__type">
    <div class="diagram__categories__category__type__color"></div>
    <div class="diagram__categories__category__type__title">
      ${category.title}
    </div>
  </div>
  <div class="diagram__categories__category__nums">
    <div class="diagram__categories__category__nums__change">
      ${category.differenceText}
    </div>
    <div class="diagram__categories__category__nums__number">
      ${category.valueText}
    </div>
  </div>
</div>`;

const diagram = (categories, totalText, differenceText) => {
  const categoriesWithNums = categories.map((category) =>
    parseInt(category.valueText)
  );
  const sum = categoriesWithNums.reduce((acc, iter) => acc + iter);
  const shares = categoriesWithNums.map((category) => category / sum);
  return donut("diagram", ...shares, totalText, differenceText);
};

const diagramCategories = (categories) => html`<div class="diagram__categories">
  ${categories.map((cat) => category(cat))}
</div>`;

export const screenTemplate = (data) =>
  html`${[
    header(data.title, data.subtitle),
    html`<div class="diagram">
      ${[
        diagram(data.categories, data.totalText, data.differenceText),
        diagramCategories(data.categories),
      ]}
    </div>`,
  ]}`;
