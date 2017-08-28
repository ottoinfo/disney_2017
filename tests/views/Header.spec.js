import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Header from 'views/Header';
import styles from 'views/Header/Header.scss';

describe('(View) Header', () => {
    it('should exist', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.props().className).to.equal(styles.Header);
    });
});
