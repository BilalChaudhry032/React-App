import React from 'react';

class HelloMessage extends React.Component {
    render() {
      return (
        <div>
          <p>Hello {this.props.name}</p>
        </div>
      );
    }
  }
  
export default HelloMessage;