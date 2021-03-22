import {html} from 'lit-html'
import './styles.css'
/**
 * 
 * @param {string} parentBlock 
 * @param {'up'|'down'} orientation 
 * @returns 
 */
export const button = (parentBlock, orientation) => html`<div class="button ${parentBlock}__button ${orientation==='up' ? 'button--up': 'button--down'}"></div>`