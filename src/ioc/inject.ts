import 'reflect-metadata'
import { props_key } from './constant'

export function Inject () {
  return function (target: any, targetKey: string) {
    // 注入对象
    const annotationTarget = target.constructor
    let props = {}
    // 同一个类，多个属性注入类
    if (Reflect.hasOwnMetadata(props_key, annotationTarget)) {
      props = Reflect.getMetadata(props_key, annotationTarget)
    }

    // @ts-ignore
    props[targetKey] = {
      value: targetKey
    }

    Reflect.defineMetadata(props_key, props, annotationTarget)
  }
}
