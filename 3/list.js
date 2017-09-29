class List {
  constructor () {
    this.datas = []
    this.listSize = 0
    this.index = 0
  }
  clear () {
    delete this.datas
    this.datas = []
    this.listSize = this.index = 0
  }
  length () {
    return this.listSize
  }
  elements () {
    return this.datas.join(', ')
  }
  current () {
    return this.datas[this.index]
  }
  append (element) {
    if (!element) return
    this.datas[this.listSize++] = element
  }
  findIndex (element) {
    for (let i = 0; i < this.datas.length; i++) {
      if (this.datas[i] === element) {
        return i
      }
    }
    return -1
  }
  insert (element, after) {
    const pos = this.findIndex(element)
    if (pos > -1) {
      this.datas.splice(pos, 0, element)
      this.listSize += 1
      return true
    }
    return false
  }
  remove (element) {
    const index = this.findIndex(element)
    if (index > -1) {
      this.datas.splice(index, 1)
      this.listSize -= 1
      return true
    }
    return false
  }
  contains (element) {
    if (this.datas.contains) {
      return this.datas.contains(element)
    } else {
      for (let i = 0; i < this.datas.length; i++) {
        if (element === this.datas[i]) {
          return true
        }
      }
      return false
    }
  }
  first () {
    return this.datas[0]
  }
  last () {
    return this.datas[this.listSize]
  }
  prev () {
    this.index -= 1
    return this.position()
  }
  next () {
    if (this.index < this.listSize) {
      this.index += 1
    }
    return this.position()
  }
  hasNext () {
    return this.index < this.listSize 
  }
  hasPrev () {
    return this.index > 0 
  }
  moveFront () {
    this.index = 0
  }
  moveEnd () {
    this.index = this.listSize - 1
  }
  moveTo (pos) {
    if (pos >= 0 && pos < this.listSize) {
      this.index = pos
    }
  }
  position () {
    return this.index + 1
  }
}

const names = new List()
names.append('Perry')
names.append('Genoveva')
names.append('Lavina')
names.append('Verlie')
names.append('Ernesto')
names.append('Sigrid')

names.moveFront()
console.log(names.current(), names.position())

names.moveEnd()
console.log(names.current(), names.position())

for (names.moveFront(); names.hasNext(); names.next()) {
  console.log(names.current(), names.position())
}



