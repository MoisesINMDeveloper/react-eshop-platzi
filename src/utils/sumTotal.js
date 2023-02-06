//  Function  to get an arrays total sum
const sumTotal = (array) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
  const sum = array.reduce(reducer, 0);
  return sum;
}

export default sumTotal;