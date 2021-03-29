import { html } from "../../html-IoC";
import "./styles.css";
/**
 *
 * @param {string} parentBlock
 * @param {'up'|'down'} orientation
 * @param {boolean} isDisabled
 * @param {object} dataParams
 * @returns
 */
export const button = (parentBlock, orientation, isDisabled, dataParams) =>
  html`<div
    class="button ${parentBlock}__button ${orientation === "up"
      ? "button--up"
      : "button--down"}${isDisabled ? " button--disabled" : ""}"
    ${dataParams
      ? `data-action="update" data-params='${JSON.stringify(dataParams)}'`
      : ""}
  ></div>`;
