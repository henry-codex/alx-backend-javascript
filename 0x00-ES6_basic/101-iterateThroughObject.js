// 101. Iterate Through an Object with a for...of Statement
  export default function iterateThroughObject(reportWithIterator) {
    let string = '';
  
    for(const employee of reportWithIterator) {
      string += employee + ' | '; 
    }
  
    return string.slice(0, -3);
  }