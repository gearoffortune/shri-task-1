import {html} from '../../html-IoC'
import './styles.css'
export const donut = (parentBlockName, extraShare, maxShare, midShare, minShare, centralTextLabel, subtitleLabel) => {
  const degs = [extraShare, maxShare, midShare, minShare].map(x => x*Math.PI*2);
  const deg = Math.PI/180;

  const getCoordinates = (angleOne, angleTwo) => {
    let res = '';
    if(Math.abs(angleOne) < Math.PI/4){
      res += `calc((1 + ${Math.tan(angleOne)})*50%) 0%`
    }
    if(Math.PI/4 < angleOne && angleOne < 3*Math.PI/4){
      res += `100% calc(50% *(1 + (${-Math.tan(Math.PI/2 - angleOne)})))`
    }
    if(Math.PI/4 < -angleOne && -angleOne < 3*Math.PI/4){
      res += `0% calc(50% *(1 + (${-Math.tan(Math.PI/2 + angleOne)})))`
    }
    if(Math.PI*3/4 < angleOne && angleOne < Math.PI*5/4){
      res += `calc((1 - ${Math.tan(angleOne)})*50%) 100%`
    }
    if(Math.PI*5/4 < angleOne && angleOne < Math.PI*7/4){
      res += `0% calc(50% *(1 - (${-Math.tan(Math.PI/2 - angleOne)})))`
    }
    if(Math.PI*7/4 < angleOne && angleOne < 2*Math.PI){
      res += `calc((1 + ${Math.tan(angleOne)})*50%) 0%`
    }
    

    if(angleOne < -Math.PI/4){
      res += `, 0% 0%`
    }

    if(Math.abs(angleTwo) < Math.PI/4){
      return res + `, calc((1 + ${Math.tan(angleTwo)})*50%) 0% , 50% 50%`
    }

    if(angleOne < Math.PI/4){
      res += `, 100% 0%`
    }
    if(Math.PI/4 < angleTwo && angleTwo < 3*Math.PI/4){
      return res + `, 100% calc(50% *(1 + (${-Math.tan(Math.PI/2 - angleTwo)}))) , 50% 50%`
    }
    if(angleOne < Math.PI*3/4){
      res += `, 100% 100%`
    }
    if(Math.PI*3/4 < angleTwo && angleTwo < Math.PI*5/4){
      return res + `, calc((1 - ${Math.tan(angleTwo)})*50%) 100% , 50% 50%`
    }
    if(angleOne < Math.PI*5/4){
      res += `, 0% 100%`
    }
    if(Math.PI*5/4 < angleTwo && angleTwo < Math.PI*7/4){
      return res + `, 0% calc(50% *(1 - (${-Math.tan(Math.PI/2 - angleTwo)}))) , 50% 50%`
    }
    if(angleOne < Math.PI*7/4){
      res += `, 0% 0%`
    }
    if(Math.PI*7/4 < angleTwo && angleTwo < 2*Math.PI){
      return res + `, calc((1 + ${Math.tan(angleTwo)})*50%) 0% , 50% 50%`
    }
  }
  return html`<div class="${parentBlockName}__mydonut mydonut">
<div class="${parentBlockName}__mydonut__slice mydonut__slice mydonut__slice__first" 
style="clip-path: polygon(${getCoordinates(-degs[0]/2, degs[0]/2)});"></div>
<div class="${parentBlockName}__mydonut__slice mydonut__slice mydonut__slice__second" 
style="clip-path: polygon(${getCoordinates(degs[0]/2, degs[0]/2 + degs[1])});"></div>
<div class="${parentBlockName}__mydonut__slice mydonut__slice mydonut__slice__third" 
style="clip-path: polygon(${getCoordinates(degs[0]/2 + degs[1], degs[0]/2 + degs[1] + degs[2])});"></div>
<div class="${parentBlockName}__mydonut__slice mydonut__slice mydonut__slice__fourth" 
style="clip-path: polygon(${getCoordinates(degs[0]/2 + degs[1] + degs[2], degs[0]/2 + degs[1] + degs[2] + degs[3])});"></div>
<div class="${parentBlockName}__mydonut__label mydonut__label">
  <div class="${parentBlockName}__mydonut__label__heading mydonut__label__heading">
    ${centralTextLabel}
  </div>
  <div class="${parentBlockName}__mydonut__label__sub mydonut__label__sub">
    ${subtitleLabel}
  </div>
</div>
</div>`
}