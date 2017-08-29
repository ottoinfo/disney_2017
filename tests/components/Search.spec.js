import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Search from 'components/Search';
import styles from 'components/Search/Search.scss';

describe('(Component) Search', () => {
    it('should exist', () => {
        const wrapper = shallow(<Search />);
        expect(wrapper.props().className).to.equal(styles.Search);
    });
});
