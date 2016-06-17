import _ from 'lodash'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import React from 'react'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { mount, shallow } from 'enzyme'

import Collapse from './'

chai.use(chaiEnzyme())
chai.use(sinonChai)

describe('<Collapse />', () => {
  it('should render nothing', () => {
    const sut = shallow(<Collapse />)
    expect(sut).to.be.empty
  })
})
