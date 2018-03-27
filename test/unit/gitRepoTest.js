const { paths } = require('../../config');
const gitRepo = require('../../models/gitRepo');
const { expect, assert } = require('chai');

describe('Тестирование gitRepo', () => {
    it('Должен вернуть имя репозитория repo1', () => {
        const gitRepo1 = new gitRepo(paths[0]);

        expect(gitRepo1.getNameRepo()).to.equal(paths[0].split('/').slice(-1)[0]);
    });

    it('Должен вернуть вернуть ветки (master, develop) репозитория repo1', async() => {
        const gitRepo1 = new gitRepo(paths[0]);

        assert.isArray(await gitRepo1.getBranches(), ['master', 'develop']);
    });

    it('Должен переключать вертки у репозитория repo1', async() => {
        const gitRepo1 = new gitRepo(paths[0]);
        const branches = await gitRepo1.getBranches();

        for (let i = 0; i < branches.length; i++) {
            await gitRepo1.switchBranch(branches[i]);

            expect(await gitRepo1.getCurrentBranch()).to.equal(branches[i]);
        }
    });
});



