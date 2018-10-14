# es6-complete

es6-complete is an NPM for protecting objects at runtime in ES6

[![NPM version](http://img.shields.io/npm/v/es6-complete.svg)](https://www.npmjs.com/package/es6-complete)


# notes

- clone
- npm install
- npm run test

# use

use it to protect things like static object properties...


```

import complete from 'es6-complete';

export default class SomeObject {}
SomeObject.foo = 'foo';

complete(SomeObject);

// the foo property is immutable

```


... or, instances


```
import complete from 'es6-complete';

export default class SomeClass {
    constructor() {
        this.foo = 'foo';
        complete(this);
    }
}

```

... or, complete something at just the right time.. .


```
import complete from 'es6-complete';

const handler = (thing) => {
    complete(thing);
    // send it somewhere
};

let a = 'this';
a = 'that';
a = 'the other thing';
handler(a);
```
