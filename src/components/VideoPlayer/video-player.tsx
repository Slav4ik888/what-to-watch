import * as React from 'react';

import {CardType} from '../../types';


interface Props {
  isHover: boolean;
  card: CardType;
};

interface State {
  isPlaying: boolean;
}

class VideoPlayer extends React.PureComponent<Props, State> {
  private videoRef: React.RefObject<HTMLVideoElement>;
  private _isSecond: any | null;
  
  constructor(props) {
    super(props);
    this._isSecond = null;
    this.videoRef = React.createRef();

    this.state = {
      isPlaying: false,
    };
  }

  componentDidMount() {
    const video = this.videoRef.current;
    if (video) {
      video.src = this.props.card.previewVideoLink;
      video.poster = this.props.card.previewImage;
      video.width = 280;
      video.height = 175;
      video.muted = true;
    }
  }


  componentDidUpdate() {
    const video = this.videoRef.current;

    if (this.props.isHover) {
      // console.log(`hover`);
      this._isSecond = setTimeout(() => {
        this.setState({isPlaying: true});
      }, 1000);
    } else {
      // console.log(`hoverOut`);
      video.load();
      this.setState({isPlaying: false});
    }

    if (this.state.isPlaying && this.props.isHover) {
      // console.log(`play`);
      video.play();
    } else {
      // console.log(`stop`);
      video.load();
      this.setState({isPlaying: false});
    }
  }
  

  componentWillUnmount() {
    clearTimeout(this._isSecond);

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
