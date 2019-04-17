import React from 'react';
import { img2Base64 } from './../utils/index';

interface IProps {
  url: string;
  name?: string;
}

export class Picture extends React.Component<IProps> {

  img!: HTMLImageElement;

  handleCopyPicture(e: React.MouseEvent) {
    console.log(e);
  }

  render() {
    return (
      <div className="picture-wallpaper" onClick={this.handleCopyPicture.bind(this)}>
        <img className="picture" src={this.props.url} alt={this.props.name} ref={(img: HTMLImageElement) => this.img = img} />
      </div>
    );
  }

}


