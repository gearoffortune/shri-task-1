import {html, render} from 'lit-html'
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
  const min = Math.min(...(concatMatrix(dataMatrix).filter(x => x!==0)))
  const max = Math.max(...concatMatrix(dataMatrix))
  const interval = Math.floor((max - min)/3) + 1
  const intervalBlocks = [0, min, min + interval, min + 2*interval ]
  return (number) => {
    if(number===0){
      return 0;
    }
    for(let i = 1; i < intervalBlocks.length; i++){
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
  return twoHourBlocks.map((data) => activitybar(data, intervals));
}

const renderVerticalWeeklyBar = (data) => {
  const arrayLikeData = dayNumber.map(day => data[day]);

  const intervals = getIntervals(arrayLikeData);
  const vertical = matrixT(arrayLikeData)
  return vertical.map((data) => activitybar(data, intervals));
}

render(renderHorizontalWeeklyBar(data.data.data), document.querySelector('.horizontal'));
render(renderVerticalWeeklyBar(data.data.data), document.querySelector('.vertical'))