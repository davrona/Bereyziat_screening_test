type CalcFunction = (v: number) => number

const pipey = (...funcs: CalcFunction[]): Function => {
  return funcs.reduce((func1, func2) => {
    return (param) => func2(func1(param))
  })
}

const square = (v) => v * v
const double = (v) => v * 2
const addOne = (v) => v + 1

const res = pipey(square, double, addOne)
console.log(res(3))