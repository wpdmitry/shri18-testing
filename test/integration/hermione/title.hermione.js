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


// describe('Работа с деревом файлов в ветке по умолчанию', () => {
//     it('Должен отображаться корректный список файлов и папок при переходе по папкам', function() {
//         return this.browser
//             .url('/')
//             .click('.repos__item:first-child > a')
//             .getText('option[selected]')
//             .then((text) => {
//                 assert.equal(text, 'master');
//             });
//     });
//
//     it('Должен отображаться список комитов', function () {
//         return this.browser
//             .url('/')
//             .click('.repos__item:first-child > a')
//             .click('.controls__history-commits > a')
//             .isExisting('.commits__list')
//             .then((exist) => {
//                 assert.ok(exist, 'Список комитов не отображается');
//             });
//     });
//
//     it('Должен отображаться корректный список файлов', function () {
//         const gitRepo1 = new gitRepo(paths[0]);
//
//         const tree = gitRepo1.getTree('/');
//
//         return this.browser
//             .url('/')
//             .click('.repos__item:first-child > a')
//             .isExisting('.tree__list')
//             .then((exist) => {
//                 assert.ok(exist, 'Cписок файлов не отображается');
//             });
//     });
// });