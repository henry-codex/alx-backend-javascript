export default function createIteratorObject(report) {
  let nextIndex = 0;
  let departments = Object.values(report.allEmployees);

  return {
    [Symbol.iterator]() {
      return this;
    },

    next() {
      if (nextIndex < departments.length) {
        return {
          value: departments[nextIndex++][0],
          done: false
        };
      } else {
        return {
          done: true
        };
      }
    }
  };
}