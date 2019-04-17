import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {

  componentDidMount() {
    window.fba.getList().then(response => {
      console.log(response);
    })
  }

  render() {
    return (<div>666</div>)
  }
}

ReactDom.render(<App />, document.getElementById('root'));
