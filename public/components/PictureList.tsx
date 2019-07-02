import React from 'react';
import { debounce } from 'lodash';
import { Picture } from './Picture';

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

  handleScroll(e: Event) {
    // console.log(`scrollHeight:`, window.scrollY, document.documentElement.scrollHeight, document.body.scrollHeight);
    // console.log(`   scrollTop:`, window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
    // console.log(`clientHeight:`, window.innerHeight, document.documentElement.clientHeight, document.body.clientHeight);
  }

  debounceScroll!: (e: Event) => void;


  handleLoad(e: React.MouseEvent) {
    console.log(e);
  }

  render() {
    return (
      <div className="picture-list">
        {this.props.data.map(item => {
          return (
            <Picture url={item.url} name={item.name} key={item.name} />
          )
        })}
      </div>
    );
  }

  componentDidMount() {
    this.debounceScroll = debounce(this.handleScroll, 1000);
    window.addEventListener('scroll', this.debounceScroll);
  }

  componentWillUnmount() {
    document.body.removeEventListener('scroll', this.debounceScroll);
  }
}
