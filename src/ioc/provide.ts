import 'reflect-metadata'
import * as camelcase from 'camelcase'
import { class_key } from './constant'

// Provider 装饰的类，表示要注册到 IOC 容器中
export function Provider (identifier?: string, args?: Array<any>) {
  return function (target: any) {
    // 类注册的唯一标识符
    identifier = identifier ?? camelcase(target.name)

    Reflect.defineMetadata(class_key, {
      id: identifier, // 唯一标识符
      args: args || [] // 实例化所需参数
    }, target)
    return target
  }
}
