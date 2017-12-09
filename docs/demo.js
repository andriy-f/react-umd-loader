import React from 'react';

import LoadUmd from '../src';

const SAMPLE_PROPS = { username: 'Person', message: 'you are here' };

class Demo extends React.Component {
  render() {
    return (<div style={ { textAlign:'center', margin: '0 auto' } }>
              <h3>async loading of react-json-viewer component demo</h3>
              <center>
                <LoadUmd url="https://rawgit.com/coryhouse/my-component/master/umd/my-component.js" name="MyComponent" props={SAMPLE_PROPS}>
                    <div>Loading remote component...</div>
                </LoadUmd>
              </center>
            </div>)
  }
}

export default Demo
