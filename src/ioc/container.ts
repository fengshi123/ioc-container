import 'reflect-metadata'
import { props_key } from './constant'

export class Container {
  bindMap = new Map()

  // 绑定类信息
  bind (identifier: string, registerClass: any, constructorArgs: any[]) {
    this.bindMap.set(identifier, { registerClass, constructorArgs })
  }

  // 获取实例，将实例绑定到需要注入的对象上
  get<T> (identifier: string): T {
    const target = this.bindMap.get(identifier)
    if (target) {
      const { registerClass, constructorArgs } = target
      // 等价于 const instance = new registerClass([...constructorArgs])
      const instance = Reflect.construct(registerClass, constructorArgs)

      const props = Reflect.getMetadata(props_key, registerClass)
      for (const prop in props) {
        const identifier = props[prop].value
        // 递归进行实例化获取 injected object
        instance[prop] = this.get(identifier)
      }
      return instance
    }
  }
}
