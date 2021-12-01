import { Container } from './container'
import { load } from './load'
import { class_path } from './constant'

const init = function () {
  const container = new Container()
  // 通过加载，会先执行装饰器（设置元数据），
  // 再由 container 统一管理元数据中，供后续使用
  load(container, class_path)
  const a:any = container.get('a') // A { b: B { n: 10 }, c: C {} }
  console.log(a)
  a.c.print() // hello
}

init()
