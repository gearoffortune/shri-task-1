const concatMatrix = (matrix) => {
    return matrix.reduce((accum, iter) => accum.concat(iter), []);
  }
const getIntervals = (dataMatrix) => {
    const min = Math.min(...(concatMatrix(dataMatrix).filter(x => x!==0)))
    const max = Math.max(...concatMatrix(dataMatrix))
    const interval = Math.floor((max - min)/3) + 1
    const intervalBlocks = [0, min, min + interval, min + 2*interval ]
    console.log(intervalBlocks)
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
  const arrayLikeData = dayNumber.map(day => data.data.data[day]);

  const squashDataInTwoHourBlocks = (dataMatrix) => {
    return dataMatrix.map(dailyData => {
      const res = [];
      for(let i = 1; i < Math.floor(dailyData.length/2)*2; i+=2){//Math.floor(dailyData.length/2)*2 gets the closest even number smaller than dailyData.length
        res.push(dailyData[i-1]+dailyData[i]);
      }
      return res;
    })
  }

  const interval = getIntervals(squashDataInTwoHourBlocks(arrayLikeData))
  console.log('zero', interval(0))
  console.log('one', interval(1))
  console.log('two', interval(2))
  console.log('three', interval(3))
  console.log('four', interval(4))
console.log('five', interval(5))
console.log('six', interval(6))

