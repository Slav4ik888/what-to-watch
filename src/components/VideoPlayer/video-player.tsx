import * as React from 'react';

import {CardType} from '../../types';


interface Props {
  isPlaying: boolean;
  card: CardType;
};

interface State {
  isPlayingVideo: boolean;
}

class VideoPlayer extends React.PureComponent<Props, State> {
  private videoRef: React.RefObject<HTMLVideoElement>;

  constructor(props) {
    super(props);

    this.videoRef = React.createRef();

    this.state = {
      isPlayingVideo: false,
    };
  }

  componentDidMount() {
    const video = this.videoRef.current;

    video.src = this.props.card.previewVideoLink;
    video.poster = this.props.card.previewImage;
    video.width = 280;
    video.height = 175;
    

    // video.oncanplaythrough = () => this.setState({
    //   isLoading: false,
    // });

    video.onplay = () => {
      this.setState({
        isPlayingVideo: true,
      });
    };

    video.onpause = () => this.setState({
      isPlayingVideo: false,
    });

    // video.ontimeupdate = () => this.setState({
    //   progress: Math.floor(audio.currentTime),
    // });
  }

  componentDidUpdate() {
    const video = this.videoRef.current;

    if (this.props.isPlaying) {
      video.play();
    } else {
      video.pause();
    }
  }
  
  render() {
    return (
      <>
        <video
          muted
          ref={this.videoRef}
        />
        {/* poster={card.previewImage} width="280" height="175"  autoplay="autoplay">
          <source src={card.previewVideoLink} />
        </video> */}
      </>
    )
  }
};

export default VideoPlayer;
