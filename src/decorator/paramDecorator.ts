function ParamDecorator (target: Object, property: string,
  paramIndex: number): void {
  console.log(property)
  console.log(paramIndex)
}

class Person {
  private name: string;

  public setNmae (@ParamDecorator school: string, name: string) { // setNmae 0
    this.name = school + '_' + name
  }
}
export default Person
