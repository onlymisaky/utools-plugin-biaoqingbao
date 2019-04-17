import React from 'react';
import { debounce } from 'lodash';

interface IProps {
  onLoad(...args: Array<any>): void;
  finished: boolean;
  loadingText?: '加载中' | string;
  finishedText?: '' | string;
  errorText?: '' | string;
}

export class ScrollList extends React.Component<IProps> {

  handleScroll(e: React.UIEvent<HTMLDivElement>) {
    if (!this.props.finished) {
      this.props.onLoad(e);
    }
  }

  render() {
    const { children } = this.props;

    return (
      <div className="ScrollList"
        onScroll={debounce(this.handleScroll.bind(this), 1000)}>
        {React.Children.map(children, (child, index) => {
          return child;
        })}
      </div>
    );
  }
}
