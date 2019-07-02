import React from 'react';


interface IProps {
  url: string;
  name?: string;
}

export class Picture extends React.Component<IProps> {

  img!: HTMLImageElement;

  handleCopyPicture(e: React.MouseEvent) {
    window.copyImage(this.img.src)
  }

  render() {
    return (
      <div className="picture-wrapper"
        onClick={this.handleCopyPicture.bind(this)}>
        <img className="picture"
          src={this.props.url}
          alt={this.props.name}
          ref={(img: HTMLImageElement) => this.img = img} />
        <div className="picture-operation">
          <div className="picture-operation-item">
            <i className="icon iconfont icon-xihuan"></i>
          </div>
        </div>
      </div>
    );
  }

}
