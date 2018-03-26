const { paths } = require('../../config');
const gitRepo = require('../../models/gitRepo');
const { expect, assert } = require('chai');

describe('Тестирование gitRepo', () => {
    it('Вовращает имена репозиториев', () => {
        const gitRepo1 = new gitRepo(paths[0]);
        const gitRepo2 = new gitRepo(paths[1]);

        expect(gitRepo1.getNameRepo()).to.equal('repo1');
        expect(gitRepo2.getNameRepo()).to.equal('repo2')
    });

    it('Возвращает ветки репозиториев', async() => {
        const gitRepo1 = new gitRepo(paths[0]);

        assert.isArray(await gitRepo1.getBranches(), ['master', 'develop']);
    });

    it('Переключает ветки', async() => {
        const gitRepo1 = new gitRepo(paths[0]);
        const branches = await gitRepo1.getBranches();

        for (let i = 0; i < branches.length; i++) {
            await gitRepo1.switchBranch(branches[i]);

            expect(await gitRepo1.getCurrentBranch()).to.equal(branches[i]);
        }
    });
});



