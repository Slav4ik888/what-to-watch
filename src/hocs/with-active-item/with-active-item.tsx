import * as React from 'react';
import {Subtract} from 'utility-types';

import {AllGenreList} from '../../consts';


interface InjectingProps {
  selectedGenre: string,
  genreListTitle: string[],
  onGenreClick: (genre: string) => void;
}

interface State {
  isActive: string;
};

const withActiveItem = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithActiveItem extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);
      this.handleItemClick = this.handleItemClick.bind(this);
    
      this.state = {
        isActive: AllGenreList[0],
      };
    }
    
    handleItemClick = (str) => {
      this.setState({isActive: str});
    }

    render() {
      const {isActive} = this.state;

      return (
        <Component
          {...this.props}
          isActive={isActive}
          onItemClick={this.handleItemClick}
        />
      );
    }
  }
  return WithActiveItem;
}

export default withActiveItem;
