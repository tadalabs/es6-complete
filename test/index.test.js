import complete from '../src/index';
import { expect } from 'chai';

describe('complete', () => {
    it('should complete Me', () => {
        expect(() => {
            class Me { get foo() { return 'foo' }}
            complete(Me);
            Me.bar = 'bar';
        }).to.throw('Cannot add property bar, object is not extensible');
    });
});
