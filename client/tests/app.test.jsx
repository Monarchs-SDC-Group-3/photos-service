import React from 'react';
import { shallow, mount } from 'enzyme';

import Photos from '../components/photos.jsx';
import Photo from '../components/photo.jsx';

describe('<Photos />', () => {
  it ('renders', () => {
    const wrapper = mount(<Photos />);
    // expect(wrapper.find(Photo).length).toEqual(1);
    console.log(wrapper.debug())
  })
})