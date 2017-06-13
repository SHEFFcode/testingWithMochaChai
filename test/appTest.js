const assert = require('chai').assert;
const app = require('../index');

describe('App', () => {
    it('app should return hello', () => {
        assert.equal(app.sayHello(), 'hello');
    });

    it('sayhello returns something of type string', () => {
        let result = app.sayHello();
        assert.typeOf(result, 'string');
    });

    it('Add numbers adds to above 10', () => {
        let result = app.addNumbers(5, 5);
        assert.isAbove(result, 5);
    })
});