type Consturctor = { new (...args: any[]): any };

function School<T extends Consturctor> (BaseClass: T) {
  return class extends BaseClass {
    // 新增属性 school
    public school = 'qinghua'
  }
}

class Base {
  school: string
}

@School
class Student extends Base { // 必须要继承 Base
  getSchool () {
    return this.school // Property 'school' does not exist on type 'Student'
  }
}

console.log(new Student().school) // Property 'school' does not exist on type 'Student'

export default Student
