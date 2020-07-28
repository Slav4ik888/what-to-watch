import * as React from 'react';
import {shallow, configure} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import VideoPlayer from './video-player';

import {mockListFilms} from '../../mocks/mockListFilms';


configure({adapter: new Adapter()});

describe(`<VideoPlayer> tests`, () => {

  it(`<VideoPlayer/> isPlaying={true}`, () => {
    const videoPlayer = shallow(
      <VideoPlayer
        card={mockListFilms[0]}
        isPlaying={true}
      />
    );
    expect(videoPlayer.props().isPlaying).toBe(true); 
  });

  it(`<VideoPlayer/> isPlaying={false}`, () => {
    const videoPlayer = shallow(
      <VideoPlayer
        card={mockListFilms[0]}
        isPlaying={false}
      />
    );
    expect(videoPlayer.props().isPlaying).toBe(false); 
  });
});
