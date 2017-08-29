import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import MovieDetails from 'views/MovieDetails';
import styles from 'views/MovieDetails/MovieDetails.scss';

describe('(View) MovieDetails', () => {
    it('should exist', () => {
        const wrapper = shallow(<MovieDetails />);
        expect(wrapper.props().className).to.equal(styles.MovieDetails);
    });
});
