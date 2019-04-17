import React from 'react';
import { Picture } from './Picture';
import { ScrollList } from './ScrollList';

interface IProps {
  data: Array<{
    url: string;
    name?: string;
  }>;
}

export class PictureList extends React.Component<IProps> {

  finished: boolean = false;

  state = {
    finished: false,
  }

  handleLoad(e: React.MouseEvent) {
    console.log(e);
  }

  render() {
    return (
      <ScrollList
        onLoad={this.handleLoad.bind(this)}
        finished={this.state.finished}>
        {this.props.data.map(item => {
          return (
            <Picture url={item.url} name={item.name} key={item.name} />
          )
        })}
      </ScrollList>
    );
  }
}
