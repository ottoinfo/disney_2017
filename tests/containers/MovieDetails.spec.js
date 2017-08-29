import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { MovieDetails } from 'containers/MovieDetails';

describe('(Containers) MovieDetails', () => {
    it('should render correctly', () => {
        const _spies = {};
        const props = {};

        const wrapper = shallow(<MovieDetails {...props} />);
        expect(wrapper).to.be.defined;
    });
});
