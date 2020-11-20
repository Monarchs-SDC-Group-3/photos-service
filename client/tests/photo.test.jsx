import React from 'react';
import { shallow, mount } from 'enzyme';

import Photo from '../components/photo.jsx';

describe('<Photos />', () => {

  const data = [
    {
      "url": "https://loremflickr.com/1024/683/interior_design?lock=6&random0",
      "key": 1,
      "description": "bluetooth connecting client-server Advanced Sao Franc copying hub Bedfordshire Republic) Handcrafted Corporate indigo Alaska Bacon platforms bypassing Advanced Supervisor Soft parse"
    },
    {
        "url": "https://loremflickr.com/1024/683/interior_design?lock=7&random1",
        "key": 2,
        "description": "Intelligent Concrete Forward e-business"
    },
    {
        "url": "https://loremflickr.com/1024/683/interior_design?lock=8&random2",
        "key": 3,
        "description": "Markets Home calculating metrics Account Refined Soap violet exuding"
    },
    {
        "url": "https://loremflickr.com/1024/683/interior_design?lock=9&random3",
        "key": 4,
        "description": "Group deposit JSON synthesize Coves virtual Optimization Fantastic Credit Massachusetts Steel"
    },
    {
        "url": "https://loremflickr.com/1024/683/interior_design?lock=10&random4",
        "key": 5,
        "description": "Chicken"
    }
  ]

  it ('renders', () => {
    const wrapper = shallow(<Photo photos={data} changeView={() => {}} />);
    expect(wrapper.find('#gallery').length).toEqual(1);
  })
})