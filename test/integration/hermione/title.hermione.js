const assert = require('chai').assert;

let b;

describe('Title', () => {
    it('Должен вернуть iGit', function() {
        b = Object.create(this.browser);

        return this.browser
            .url('/')
            .getTitle()
            .then((title) => {
                assert.equal(title, 'iGit')
            });
    });
});