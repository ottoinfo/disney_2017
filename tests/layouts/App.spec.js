import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from 'layouts/App';
import styles from 'layouts/App/App.scss';

describe('(Layout) App', () => {
    it('should exist', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.props().className).to.equal(styles.App);
    });
});
