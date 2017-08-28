import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import VideoAsset from 'components/VideoAsset';
import styles from 'components/VideoAsset/VideoAsset.scss';

describe('(Component) VideoAsset', () => {
    it('should exist', () => {
        const wrapper = shallow(<VideoAsset />);
        expect(wrapper.props().className).to.equal(styles.VideoAsset);
    });
});
