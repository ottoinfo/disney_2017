import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { Root } from 'containers/Root';

describe('(Containers) Root', () => {
    it('should render correctly', () => {
        const _spies = {};
        const props = {};

        const wrapper = shallow(<Root {...props} />);
        expect(wrapper).to.be.defined;
    });
});
