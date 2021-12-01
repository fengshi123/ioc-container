type Consturctor = { new (...args: any[]): any };

function School<T extends Consturctor> (BaseClass: T) {
  // 新构造器继承原有的构造器，并且返回
  return class extends BaseClass {
    // 新增属性 school
    public school = 'qinghua'
    // 重写方法 toString
    toString () {
      return JSON.stringify(this)
    }
  }
}

@School
class Student {
  public name = 'tom';
  public age = 14;
}

console.log(new Student().toString())
// {"name":"tom","age":14,"school":"qinghua"}

export default Student
