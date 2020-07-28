import * as React from 'react';

import {CardType} from '../../types';


interface Props {
  isPlaying: boolean;
  card: CardType;
};

interface State {
  isSecond: boolean;
}

class VideoPlayer extends React.PureComponent<Props, State> {
  private videoRef: React.RefObject<HTMLVideoElement>;

  constructor(props) {
    super(props);
    this._isSecond = this._isSecond.bind(this);
    this.videoRef = React.createRef();

    this.state = {
      isSecond: false,
    };
  }

  componentDidMount() {
    const video = this.videoRef.current;

    video.src = this.props.card.previewVideoLink;
    video.poster = this.props.card.previewImage;
    video.width = 280;
    video.height = 175;
    video.muted = true;
  }


  _isSecond() {
    setTimeout(() => {
      this.setState({isSecond: true});
      // console.log('isSecond: true: ');
    }, 1000);
  }


  componentDidUpdate() {
    const video = this.videoRef.current;

    if (this.props.isPlaying) {
      // console.log(`hover`);
      this._isSecond();
    } else {
      // console.log(`stop`);
      video.load();
      this.setState({isSecond: false});
    }

    if (this.state.isSecond && this.props.isPlaying) {
      // console.log(`play`);
      video.play();
    } else {
      // console.log(`stop`);
      video.load();
      this.setState({isSecond: false});
    }
  }
  

  componentWillUnmount() {
    const video = this.videoRef.current;
    if (video) {
      video.src = null;
      video.poster = null;
      video.width = null;
      video.height = null;
      video.src = ``;
    }
  }

  render() {
    return (
      <>
        <video
          // className="player__video"
          ref={this.videoRef}
        />
      </>
    )
  }
};

export default VideoPlayer;
