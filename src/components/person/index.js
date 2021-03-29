import { html } from "../../html-IoC";
import "./styles.css";
/**
 *
 * @param {string} parentBlockName
 * @param {import(../../../stories.d.ts).User} userObj
 * @param {boolean} isEmojiNeeded
 * @param {string} emoji
 * @param {boolean} isActive
 * @returns
 */
export const person = (
  parentBlockName,
  { name, avatar, valueText, id },
  isEmojiNeeded,
  emoji,
  isActive
) => html` <div
  class="${parentBlockName}__person person ${isActive ? "person--active" : ""}"
>
  <div class="${parentBlockName}__person__imgwrapper person__imgwrapper">
    ${isEmojiNeeded
      ? html`<div
          class="${parentBlockName}__person__imgwrapper__emoji person__imgwrapper__emoji"
        >
          ${emoji}
        </div>`
      : html``}
    <img
      src="/images/1x/${avatar}"
      srcset="
        /images/2x/${avatar} 2x,
        /images/3x/${avatar} 3x,
        /images/4x/${avatar} 4x
      "
      alt=""
      class="${parentBlockName}__person__imgwrapper__img person__imgwrapper__img"
    />
  </div>
  <p class="${parentBlockName}__person__name person__name">${name}</p>
  <p class="${parentBlockName}__person__number person__number">${valueText}</p>
</div>`;
