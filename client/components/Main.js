import React, { Component } from 'react';
import { Link } from 'react-router';

class Main extends Component {
  componentDidMount() {
    this.props.requestHelloWorld();
  }
  render() {
    return <div>
        <h1>
          {this.props.helloWorld}
          <Link to="/">Reduxtagram</Link>
        </h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>;
  }
}

export default Main;