import reducer, { initialState } from 'redux/reducers/<%= camelEntityName %>';

describe('(Reducer) <%= pascalEntityName %>', () => {
    it('should have the correct initialState', () => {
        expect(reducer(undefined, {

        })).to.eql(initialState);
    });
});
