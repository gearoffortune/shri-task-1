import {html} from '../html-IoC'
import './styles.css';

const performanceBlocks = [
  html`<div class="activitychart__activityrow__activityblock activitychart__activityrow__activityblock--min"></div>`,
  html`<div class="activitychart__activityrow__activityblock activitychart__activityrow__activityblock--mid"></div>`,
  html`<div class="activitychart__activityrow__activityblock activitychart__activityrow__activityblock--max"></div>`,
  html`<div class="activitychart__activityrow__activityblock activitychart__activityrow__activityblock--extra"></div>`,
]

const activitybar = (hourlyArray, getInterval) => html`    
<div class="activitychart__activityrow">
${hourlyArray.map((hourlyData) => performanceBlocks[getInterval(hourlyData)])}
</div>`
const data = {
  "alias": "activity",
  "data": {
    "title": "Коммиты, 1 неделя",
    "subtitle": "Спринт № 213",
    "data": {
      "mon": [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2, 3, 2, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      "tue": [0, 0, 0, 0, 1, 0, 0, 0, 0, 5, 0, 4, 0, 0, 0, 0, 1, 0, 3, 0, 0, 2, 1, 0],
      "wed": [1, 0, 0, 0, 1, 0, 5, 0, 0, 4, 0, 0, 0, 5, 0, 2, 1, 0, 0, 0, 0, 0, 0, 1],
      "thu": [0, 1, 0, 1, 0, 0, 0, 0, 6, 0, 1, 0, 0, 1, 0, 0, 5, 0, 0, 0, 1, 0, 0, 0],
      "fri": [0, 0, 0, 0, 0, 0, 0, 1, 3, 0, 0, 5, 0, 4, 0, 0, 3, 0, 0, 0, 0, 1, 0, 0],
      "sat": [0, 0, 0, 0, 2, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
      "sun": [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0]
    }
  }
}

const dayNumber = ['mon', 'tue', 'wed','thu', 'fri', 'sat', 'sun']
const concatMatrix = (matrix) => {
  return matrix.reduce((accum, iter) => accum.concat(iter), []);
}
const matrixT = (matrix) => {
  const newMatrix = Array(matrix[0].length).fill([]).map(_ => []);
  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){
      newMatrix[j][i] = matrix[i][j];
    }
  }
  return newMatrix;
}
const squashDataInTwoHourBlocks = (dataMatrix) => {
  return dataMatrix.map(dailyData => {
    const res = [];
    for(let i = 1; i < Math.floor(dailyData.length/2)*2; i+=2){//Math.floor(dailyData.length/2)*2 gets the closest even number smaller than dailyData.length
      res.push(dailyData[i-1]+dailyData[i]);
    }
    return res;
  })
}


const getIntervals = (dataMatrix) => {
  const intervalBlocks = getIntervalBlocks(dataMatrix);
  return (number) => {
    if(number===0){
      return 0;
    }
    for(let i = 1; i < intervalBlocks.length - 1; i++){
      if(intervalBlocks[i]<=number&&intervalBlocks[i+1]>number){
        return i;
      }
    }
    return 3
  }
}
const renderHorizontalWeeklyBar = (data) => {
  const arrayLikeData = dayNumber.map(day => data[day]);

  const twoHourBlocks = squashDataInTwoHourBlocks(arrayLikeData);
  const intervals = getIntervals(twoHourBlocks);
  return html`<div class="activitychart activitychart--horizontal">${twoHourBlocks.map((data) => activitybar(data, intervals))}</div>`;
}

const renderVerticalWeeklyBar = (data) => {
  const arrayLikeData = dayNumber.map(day => data[day]);

  const intervals = getIntervals(arrayLikeData);
  const vertical = matrixT(arrayLikeData)
  return html`<div class="activitychart activitychart--vertical">${vertical.map((data) => activitybar(data, intervals))}</div>`;
}

const header = (title, subtitle) => html`<div class="header">
<h1 class="header__mainheader">${title}</h1>
<h2 class="header__secondaryheader">${subtitle}</h2>
</div>`

export const screenTemplate = (data) => {
  return html`${[
    header(data.title, data.subtitle), 
    renderHorizontalWeeklyBar(data.data), 
    renderVerticalWeeklyBar(data.data), 
     html`<div class="scale__wrapper">
       <div class="scale">${scale(getIntervalBlocks(dayNumber.map(day => data.data[day])))}</div>
     </div>`
  ]}`
}

const hoursScaleDash = (hoursScale, orientation) => html`<div class="scale__scaleblock scale__scaleblock--${orientation}">
  <div class="scale__scaleblock__dash"></div>
  <p class="scale__scaleblock__desc scale__scaleblock__desc--dash">${hoursScale}</p>
</div>`

const scales = (ranges) => html`
  <div class="scale__scaleblock">
    <div class="scale__scaleblock__colorblock scale__scaleblock__colorblock--min"></div>
    <p class="scale__scaleblock__desc">${ranges[0]}</p>
  </div>
  <div class="scale__scaleblock">
    <div class="scale__scaleblock__colorblock scale__scaleblock__colorblock--mid"></div>
    <p class="scale__scaleblock__desc">${ranges[1] +' — ' + ranges[2]}</p>
  </div>
  <div class="scale__scaleblock">
    <div class="scale__scaleblock__colorblock scale__scaleblock__colorblock--max"></div>
    <p class="scale__scaleblock__desc">${ranges[2]+' — '+ranges[3]}</p>
  </div>
  <div class="scale__scaleblock">
    <div class="scale__scaleblock__colorblock scale__scaleblock__colorblock--extra"></div>
    <p class="scale__scaleblock__desc">${ranges[3]+' — '+ranges[4]}</p>
  </div>
`

const scale = (ranges) => {

  return [hoursScaleDash('1 час', 'vertical'), hoursScaleDash('2 часа', 'horizontal'), scales(ranges)]
}


function getIntervalBlocks(dataMatrix) {
  const min = Math.min(...(concatMatrix(dataMatrix).filter(x => x !== 0)));
  const max = Math.max(...concatMatrix(dataMatrix));
  const interval = Math.floor((max - min) / 3) + 1;
  const intervalBlocks = [0, min, min + interval, min + 2 * interval, max];
  return intervalBlocks;
}
