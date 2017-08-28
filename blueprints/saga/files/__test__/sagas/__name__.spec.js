import watcher, * as sagas from 'redux/sagas/<%= camelEntityName %>';

describe('(Saga) <%= pascalEntityName %>', () => {
    it('should export a watcher', () => {
        const generator = watcher();
        const next = generator.next();
        expect(next.value).to.be.an.array;
    });
});
