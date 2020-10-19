
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (matrix !== undefined){
    return [].concat(
      ...matrix.map((item, index) => (index % 2 === 1 ? item.reverse() : item))
    ); 
  }else return [];
  
} 
