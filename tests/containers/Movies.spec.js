import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { Movies } from 'containers/Movies';

describe('(Containers) Movies', () => {
    it('should render correctly', () => {
        const _spies = {};
        const props = {};

        const wrapper = shallow(<Movies {...props} />);
        expect(wrapper).to.be.defined;
    });
});
