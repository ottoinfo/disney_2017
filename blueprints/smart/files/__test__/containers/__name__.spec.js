import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { <%= pascalEntityName %> } from 'containers/<%= pascalEntityName %>';

describe('(Containers) <%= pascalEntityName %>', () => {
    it('should render correctly', () => {
        const _spies = {};
        const props = {};

        const wrapper = shallow(<<%= pascalEntityName %> {...props} />);
        expect(wrapper).to.be.defined;
    });
});
