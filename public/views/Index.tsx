import React from 'react';
import { PictureList } from './../components/PictureList';

export class Index extends React.Component {
  state = {

    data: []
  }

  componentDidMount() {
    window.fba.getList().then(response => {
      this.setState({
        data: response.data
      })
    })
  }

  render() {
    return (
      <div>
        <PictureList data={this.state.data} />
      </div>
    )
  }
}
