import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import <%= pascalEntityName %> from 'views/<%= pascalEntityName %>';
import styles from 'views/<%= pascalEntityName %>/<%= pascalEntityName %>.scss';

describe('(View) <%= pascalEntityName %>', () => {
    it('should exist', () => {
        const wrapper = shallow(<<%= pascalEntityName %> />);
        expect(wrapper.props().className).to.equal(styles.<%= pascalEntityName %>);
    });
});
