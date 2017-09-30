class Stack {
  constructor (datas = []) {
    this.datas = datas
    this.top = datas.length
  }
  elements () {
    return this.datas.join(', ')
  }
  push (data) {
    if (!data) return
    this.datas[this.top++] = data
    return true
  }
  pop () {
    return this.datas[--this.top]
  }
  peek () {
    return this.datas[this.top - 1]
  }
  length () {
    return this.top
  }
  clear () {
    this.top = 0
  }
}

const peoples = new Stack(['Tremaine', 'Kiana', 'Merritt', 'Kailyn', 'Marcelle'])

console.log(peoples.elements(), peoples.peek())

peoples.push('Florian')

console.log(peoples.length(), peoples.peek())

peoples.pop()

console.log(peoples.length(), peoples.peek())

peoples.clear()

console.log(peoples.length(), peoples.peek())








