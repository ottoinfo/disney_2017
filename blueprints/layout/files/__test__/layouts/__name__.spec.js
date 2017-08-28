import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import <%= pascalEntityName %> from 'layouts/<%= pascalEntityName %>';
import styles from 'layouts/<%= pascalEntityName %>/<%= pascalEntityName %>.scss';

describe('(Layout) <%= pascalEntityName %>', () => {
    it('should exist', () => {
        const wrapper = shallow(<<%= pascalEntityName %> />);
        expect(wrapper.props().className).to.equal(styles.<%= pascalEntityName %>);
    });
});
