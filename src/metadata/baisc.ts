import "reflect-metadata";

@Reflect.metadata('classMetaData', 'A')
class SomeClass {
  @Reflect.metadata('methodMetaData', 'B')
  public someMethod(): string {
    return 'hello someMethod';
  }
}

console.log(Reflect.getMetadata('classMetaData', SomeClass)); // 'A'
console.log(Reflect.getMetadata('methodMetaData', new SomeClass(), 'someMethod')); // 'B