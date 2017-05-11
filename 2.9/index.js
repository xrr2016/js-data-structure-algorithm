// 1
function Score(scores) {
  this.scores = scores || []
  this.add = add
  this.avg = avg
}

function add (score) { 
  if (typeof score === 'number') { 
    this.scores.push(score)
  }
}

function avg () { 
  const total = this.scores.reduce((a, b) => { 
    return a + b
  }, 0)
  return (total / this.scores.length).toFixed(1) 
}

const scores = [80, 89, 93, 96, 89, 93]
const myScores = new Score(scores)
console.log(myScores.scores)
myScores.add(88)
console.log(myScores.scores)
console.log(myScores.avg())
// 2
const words = ['apple', 'banana', 'cat', 'dog', 'egg', 'five', 'goal', 'happy']
console.log(words)
console.log(words.reverse())
// 3

// 4