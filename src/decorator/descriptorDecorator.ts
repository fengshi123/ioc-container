function descDecorator (target: Object, property: string,
  descriptor: PropertyDescriptor): PropertyDescriptor | void {
  const originalSet = descriptor.set
  const originalGet = descriptor.get
  descriptor.set = function (value: any) {
    return originalSet.call(this, value)
  }
  descriptor.get = function (): string {
    return 'name:' + originalGet.call(this)
  }
}

class Person {
private _name = 'tom';

@descDecorator
set name (value: string) {
  this._name = value
}

get name () {
  return this._name
}
}

const person = new Person()
person.name = ('tom')
console.log('查看:', person.name) // name:'tom'

export default Person
