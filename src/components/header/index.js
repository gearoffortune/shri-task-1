import { html } from "../../html-IoC";
import "./styles.css";
/**
 *
 * @param {string} title
 * @param {string} subtitle
 */
export const header = (title, subtitle) => html`<div class="header">
  <h1 class="header__mainheader">${title}</h1>
  <h2 class="header__secondaryheader">${subtitle}</h2>
</div>`;
