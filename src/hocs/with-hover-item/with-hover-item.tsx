import * as React from 'react';
import {Subtract} from 'utility-types';

import {CardType} from '../../types';


interface InjectingProps {
  onCardTitleClick: (card: CardType) => void,
}

interface Props {
  card: CardType;
  onHoverFilm: (card: CardType) => void | null;
};

interface State {
  isHover: boolean;
};

const withHoverItem = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithHoverItem extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);
      this.handlePointerEnter = this.handlePointerEnter.bind(this);
      this.handlePointerLeave = this.handlePointerLeave.bind(this);
    
      this.state = {
        isHover: false,
      };
    }
    
    handlePointerEnter = () => {
      if (this.props.onHoverFilm) {
        this.props.onHoverFilm(this.props.card);
      }
      this.setState({isHover: true});
    }

    handlePointerLeave = () => {
      this.setState({isHover: false});
    }
    
    render() {
      const {isHover} = this.state;

      return (
        <Component
          {...this.props}
          isHover={isHover}
          onCardMouseEnter={this.handlePointerEnter}
          onCardMouseLeave={this.handlePointerLeave}
        />
      );
    }
  }
  return WithHoverItem;
}

export default withHoverItem;
