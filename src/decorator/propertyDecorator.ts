function NameObserve (target: Object, property: string): void {
  console.log('target:', target)
  console.log('property:', property)
  const _property = Symbol(property)
  Object.defineProperty(target, property, {
    set (val) {
      if (val.length > 4) {
        throw new Error('名称不能超过4位!')
      }
      this[_property] = val
    },
    get: function () {
      return this[_property]
    }
  })
}

class Student {
  @NameObserve
  public name: string; // target: Student {}   key: 'name'
}

const stu = new Student()
stu.name = 'jack'
console.log(stu.name) // jack
// stu.name = 'jack1';  // Error: 名称不能超过4位!

export default Student
