import {html} from 'lit-html'
import './styles.css'
/**
 * 
 * @param {string} parentBlockName 
 * @param {import(../../../stories.d.ts).User} userObj
 * @param {boolean} isEmojiNeeded 
 * @param {string} emoji 
 * @returns 
 */
export const person = (parentBlockName, {name, avatar, valueText, id}, isEmojiNeeded, emoji, isActive) => html`
<div class="${parentBlockName}__person person ${isActive ? 'person--active' :''}">
  <div class="${parentBlockName}__person__imgwrapper person__imgwrapper">
    ${isEmojiNeeded ? html`<div class="${parentBlockName}__person__imgwrapper__emoji person__imgwrapper__emoji">${emoji}</div>` : html``}
    <img src="/images/1x/${avatar}" alt="" class="${parentBlockName}__person__imgwrapper__img person__imgwrapper__img">
  </div>
  <p class="${parentBlockName}__person__name person__name">${name}</p>
  <p class="${parentBlockName}__person__number person__number">${valueText}</p>
</div>`