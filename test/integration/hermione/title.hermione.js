const assert = require('chai').assert;

describe('Title', () => {
    it('Должен вернуть iGit', function() {
        return this.browser
            .url('/')
            .getTitle()
            .then((title) => {
                assert.equal(title, 'iGit');
            });
    });
});
