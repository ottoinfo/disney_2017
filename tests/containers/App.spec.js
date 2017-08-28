import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { App } from 'containers/App';

describe('(Containers) App', () => {
    it('should render correctly', () => {
        const _spies = {};
        const props = {};

        const wrapper = shallow(<App {...props} />);
        expect(wrapper).to.be.defined;
    });
});
