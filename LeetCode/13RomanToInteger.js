//My attempt
const romanToInt = function (s) {
  let I = 1
  let V = 5
  let X = 10
  let L = 50
  let C = 100
  let D = 500
  let M = 1000

  if (s === "III") {
    console.log(I + I + I)
  }
}

romanToInt("III")

//One solution
var romanToInt1 = function (s) {
  const values = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ])

  let result = 0,
    current,
    previous = 0
  for (const char of s.split("").reverse()) {
    current = values.get(char)
    if (current >= previous) {
      result += current
    } else {
      result -= current
    }
    previous = current
  }
  return result
}

//Another solution
var romanToInt2 = function (s) {
  const sym = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  let result = 0

  for (i = 0; i < s.length; i++) {
    const cur = sym[s[i]]
    const next = sym[s[i + 1]]

    if (cur < next) {
      result += next - cur // IV -> 5 - 1 = 4
      i++
    } else {
      result += cur
    }
  }

  return result
}
