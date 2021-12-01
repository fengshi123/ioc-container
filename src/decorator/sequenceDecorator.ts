function f (key: string): any {
  console.log('evaluate: ', key)
  return function () {
    console.log('call: ', key)
  }
}

@f('Class Decorator')
class C {
  @f('Static Property')
  static prop?: number;

  @f('Static Method')
  static method (@f('Static Method Parameter') foo:any) {}

  // eslint-disable-next-line no-useless-constructor
  constructor (@f('Constructor Parameter') foo:any) {}

  @f('Instance Method')
  method (@f('Instance Method Parameter') foo:any) {}

  @f('Instance Property')
  prop?: number;
}

export default C

/* 输出顺序如下
evaluate:  Instance Method
evaluate:  Instance Method Parameter
call:  Instance Method Parameter
call:  Instance Method
evaluate:  Instance Property
call:  Instance Property
evaluate:  Static Property
call:  Static Property
evaluate:  Static Method
evaluate:  Static Method Parameter
call:  Static Method Parameter
call:  Static Method
evaluate:  Class Decorator
evaluate:  Constructor Parameter
call:  Constructor Parameter
call:  Class Decorator
*/
