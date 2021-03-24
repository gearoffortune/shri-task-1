import {screenTemplate as leaders} from './leaders/'
import {screenTemplate as activity} from './activity'
import {screenTemplate as chart} from './chart'
import {screenTemplate as diagram} from './diagram'
import {screenTemplate as vote} from './vote'
import './fonts.css'

const templates = {leaders, activity, chart, diagram, vote}

const renderTemplate = (alias, data) => {
  return templates[alias](data);
}
window.renderTemplate = renderTemplate;