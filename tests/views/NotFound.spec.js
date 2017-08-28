import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import NotFound from 'views/NotFound';
import styles from 'views/NotFound/NotFound.scss';

describe('(View) NotFound', () => {
    it('should exist', () => {
        const wrapper = shallow(<NotFound />);
        expect(wrapper.props().className).to.equal(styles.NotFound);
    });
});
