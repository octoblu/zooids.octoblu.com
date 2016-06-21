import React from 'react'
import Button from 'zooid-button'
import Highlight from 'react-highlight'

import 'highlight.js/styles/github.css'

const ButtonExample = () => {
  return (
    <div>
      <h1>
        Zooid Button
      </h1>
      <p>This is such great button description wow</p>

      <pre>npm install zooid-button</pre>
      <a href={'https://github.com/octoblu/zooid-button'}>Github</a>

      <div>
        <h2>Kinds</h2>

        <Button kind="default">Default Button</Button>
        <Button kind="primary">Primary Button</Button>
        <Button kind="approve">Approve Button</Button>
        <Button kind="danger">Danger Button</Button>
        <Button kind="neutral">Neutral Button</Button>
        <Button kind="hollow-primary">Hollow Primary Button</Button>
        <Button kind="hollow-approve">Hollow Approve Button</Button>
        <Button kind="hollow-danger">Hollow Danger Button</Button>
        <Button kind="hollow-neutral">Hollow Neutral Button</Button>
        <Button kind="no-style">No Style Button</Button>

        <Highlight className="html">
          {'<Button kind="default">Default Button</Button>'}
          {'\n<Button kind="primary">Primary Button</Button>'}
          {'\n<Button kind="approve">Approve Button</Button>'}
          {'\n<Button kind="danger">Danger Button</Button>'}
          {'\n<Button kind="neutral">Neutral Button</Button>'}
          {'\n<Button kind="hollow-primary">Hollow Primary Button</Button>'}
          {'\n<Button kind="hollow-approve">Hollow Approve Button</Button>'}
          {'\n<Button kind="hollow-danger">Hollow Danger Button</Button>'}
          {'\n<Button kind="hollow-neutral">Hollow Neutral Button</Button>'}
          {'\n<Button kind="no-style">No Style Button</Button>'}
        </Highlight>
      </div>

      <div>
        <h2>Sizes</h2>

        <Button size="small">Small Button</Button>
        <Button size="regular">Regular Button</Button>
        <Button size="large">Large Button</Button>

        <Highlight className="html">
          {'<Button size="small">Small Button</Button>'}
          {'\n<Button size="regular">Regular Button</Button>'}
          {'\n<Button size="large">Large Button</Button>'}
        </Highlight>
      </div>

      <div>
        <h2>Disabled</h2>

        <Button disabled>Disabled Button</Button>

        <Highlight className="html">
          {'<Button disabled>Disabled Button</Button>'}
        </Highlight>
      </div>

      <div>
        <h2>Block</h2>

        <Button block>Block Button</Button>

        <Highlight className="html">
          {'<Button block>Block Button</Button>'}
        </Highlight>
      </div>

      <div>
        <h2>href</h2>

        <Button href="#">href Button</Button>

        <Highlight className="html">
          {'<Button href="#">href Button</Button>'}
        </Highlight>
      </div>

      <div>
        <h2>ClassName</h2>

        <Button className="customCss">Custom Button</Button>

        <Highlight className="html">
          {'<Button className="customCss">Custom Button</Button>'}
        </Highlight>
      </div>

      <div>
        <h2>OnClick</h2>

        <Button onClick={(event) => console.log('clicked: ', event)}>OnClick Button</Button>

        <Highlight className="html">
          {'<Button onClick={(event) => console.log(\'clicked: \', event)}>OnClick Button</Button>'}
        </Highlight>
      </div>
    </div>
  )
}

export default ButtonExample
