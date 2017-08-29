import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Movies from 'views/Movies';
import styles from 'views/Movies/Movies.scss';

describe('(View) Movies', () => {
    it('should exist', () => {
        const wrapper = shallow(<Movies />);
        expect(wrapper.props().className).to.equal(styles.Movies);
    });
});
