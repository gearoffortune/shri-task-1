import { html } from "../../html-IoC";
import "./styles.css";
/**
 *
 * @param {string} parentBlock
 * @param {'up'|'down'} orientation
 * @param {boolean} isDisabled
 * @returns
 */
export const button = (parentBlock, orientation, isDisabled) =>
  html`<div
    class="button ${parentBlock}__button ${orientation === "up"
      ? "button--up"
      : "button--down"}${isDisabled ? " button--disabled" : ""}"
  ></div>`;
