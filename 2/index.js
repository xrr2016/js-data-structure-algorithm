class RandomWord {
  constructor () {
    this.letters = ['a', 'b', 'c', 'd', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  }
  newWord () {
    let word = ''
    let len = Math.floor(Math.random() * 12)
    while (word.length < len) {
      word += this.letters[Math.floor(Math.random() * 26)]
    }
    return word
  }
}

const word = new RandomWord()
console.log(word.newWord())
