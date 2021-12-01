import "reflect-metadata";

@Reflect.metadata('type', 'class')
class A {  
  constructor(
    public name: string, 
    public age: number
  ) {  }  

  @Reflect.metadata(undefined, undefined)  
  method(name: string, age: number):boolean {    
    return true  
  }
}

  const t1 = Reflect.getMetadata('design:type', A.prototype, 'method')
  const t2 = Reflect.getMetadata('design:paramtypes', A.prototype, 'method')
  const t3 = Reflect.getMetadata('design:returntype', A.prototype, 'method')
  
  console.log(t1)  // [Function: Function]
  console.log(...t2) // [Function: String] [Function: Number]
  console.log(t3) // [Function: Boolean]