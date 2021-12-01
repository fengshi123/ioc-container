
function logger (target: Object, property: string,
  descriptor: PropertyDescriptor): PropertyDescriptor | void {
  const origin = descriptor.value
  console.log(descriptor)
  descriptor.value = function (...args: number[]) {
    console.log('params:', ...args)
    const result = origin.call(this, ...args)
    console.log('result:', result)
    return result
  }
}

class Person {
@logger
  add (x: number, y: number) {
    return x + y
  }
}

const person = new Person()
const result = person.add(1, 2)
console.log('查看 result:', result) // 3

export default Person
