import {html, render} from 'lit-html'
const performanceBlocks = [
  html`<div class="activitychart__activityrow__activityblock activitychart__activityrow__activityblock--min"></div>`,
  html`<div class="activitychart__activityrow__activityblock activitychart__activityrow__activityblock--mid"></div>`,
  html`<div class="activitychart__activityrow__activityblock activitychart__activityrow__activityblock--max"></div>`,
  html`<div class="activitychart__activityrow__activityblock activitychart__activityrow__activityblock--extra"></div>`,
]

const activitybar = (hourlyArray) => html`    
<div class="activitychart__activityrow">
${hourlyArray.map((hourlyData) => performanceBlocks[Math.floor(hourlyData/2)])}
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

// const helloWorld = html`<div>hello world</div>`
const dayNumber = ['mon', 'tue', 'wed','thu', 'fri', 'sat', 'sun']
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
const renderWeeklyBar = (data) => {
  const arrayLikeData = dayNumber.map(day => data[day]);

  //return matrixT(arrayLikeData).map(activitybar);
  return squashDataInTwoHourBlocks(arrayLikeData).map(activitybar);
}

render(renderWeeklyBar(data.data.data), document.body);