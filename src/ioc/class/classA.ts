import { Provider } from '../provide'
import { Inject } from '../inject'
import B from './classB'
import C from './classC'

@Provider('a')
export default class A {
  @Inject()
  private b: B

  @Inject()
  c: C

  print () {
    this.c.print()
  }
}
