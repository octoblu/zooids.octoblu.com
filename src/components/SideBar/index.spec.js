import _ from 'lodash';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import React from 'react';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { mount, shallow } from 'enzyme';
​
import SideBar from './';
​
chai.use(chaiEnzyme());
chai.use(sinonChai);
​
describe('<SideBar />', () => {
  it('should render nothing', () => {
    const sut = shallow(<SideBar />)
    expect(sut).to.be.empty
  });
});
