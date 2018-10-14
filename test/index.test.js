import complete from '../src/index';
import { expect } from 'chai';

describe('complete', () => {
  it('should complete Me', () => {
      const expectation = () => {
          class Me {
              get foo() {
                  return 'foo';
              }
          }
          Me.too = new Me();
          complete(Me);
          Me.bar = 'bar';
      };
      expect(expectation).to.throw('Cannot add property bar, object is not extensible');
  });
  it('should prevent removing static properties, no matter how nested', () => {
      const expectation = () => {
          class SomeClass1 {
              static get foo() {
                  return 'foo';
              }
          }
          complete(SomeClass1);
          delete SomeClass1.foo;
      };
      expect(expectation).to.throw();
  });
  it('should prevent re-assignment of static properties, no matter how nested', () => {
      const expectation = () => {
          class SomeClass2 {}
          SomeClass2.foo = { bar: { foo: 'foo' } };
          complete(SomeClass2);
          SomeClass2.foo.bar.foo = 'bar';
      };
      expect(expectation).to.throw();
  });
  it('should prevent changing a complete instance of an object', () => {
      const expectation = () => {
          class SomeClass3 {
              constructor() {
                  this.foo = 'foo';
                  this.bar = 'bar';
                  complete(this);
              }
          }
          new SomeClass3().foo = 'bar';
      };
      expect(expectation).to.throw();
  });
});
