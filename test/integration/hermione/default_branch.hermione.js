const assert = require('chai').assert;
const { paths } = require('../../../config');
const gitRepo = require('../../../models/gitRepo');

describe('Отображение ветки по умолчанию', () => {
    it('Должена быть выбрана master', function() {
        return this.browser
            .url('/')
            .click('.repos__item:first-child > a')
            .getText('option[selected]')
            .then((text) => {
                assert.equal(text, 'master');
            });
    });

    it('Должен отображаться список комитов', function () {
        return this.browser
            .url('/')
            .click('.repos__item:first-child > a')
            .click('.controls__history-commits > a')
            .isExisting('.commits__list')
            .then((exist) => {
                assert.ok(exist, 'Список комитов не отображается');
            });
    });

    it('Должен отображаться корректный список файлов и папок', async function () {
        const gitRepo1 = new gitRepo(paths[0]);

        return this.browser
            .url('/')
            .click('.repos__item:first-child > a')
            .elements('.tree__item')
            .then(response => {
                const promisesText = response.value.map(el => {
                    const id = el.ELEMENT;

                    return this.browser.elementIdText(id);
                });

                Promise.all(promisesText)
                    .then(async(results) => {
                        const texts = results.map(r => r.value);
                        const treeList = (await gitRepo1.getTree('/')).map(t => t.name);

                        assert.sameMembers(texts, treeList, 'Не корректный список файлов и папок');
                    })
            })
    });
});
