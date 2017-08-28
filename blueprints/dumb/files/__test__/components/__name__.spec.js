import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import <%= pascalEntityName %> from 'components/<%= pascalEntityName %>';
import styles from 'components/<%= pascalEntityName %>/<%= pascalEntityName %>.scss';

describe('(Component) <%= pascalEntityName %>', () => {
    it('should exist', () => {
        const wrapper = shallow(<<%= pascalEntityName %> />);
        expect(wrapper.props().className).to.equal(styles.<%= pascalEntityName %>);
    });
});
