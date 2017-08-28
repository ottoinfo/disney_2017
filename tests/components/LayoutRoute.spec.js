import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import LayoutRoute from 'components/LayoutRoute';
import styles from 'components/LayoutRoute/LayoutRoute.scss';

describe('(Component) LayoutRoute', () => {
    it('should exist', () => {
        const wrapper = shallow(<LayoutRoute />);
        expect(wrapper.props().className).to.equal(styles.LayoutRoute);
    });
});
