import reducer, { initialState } from 'redux/reducers/video';

describe('(Reducer) Video', () => {
    it('should have the correct initialState', () => {
        expect(reducer(undefined, {

        })).to.eql(initialState);
    });
});
