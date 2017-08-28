import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from 'views/App';
import styles from 'views/App/App.scss';

describe('(View) App', () => {
    it('should exist', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.props().className).to.equal(styles.App);
    });
});
