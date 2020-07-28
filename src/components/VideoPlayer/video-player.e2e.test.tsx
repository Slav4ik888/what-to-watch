import * as React from 'react';
import {mount, configure} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import VideoPlayer from './video-player';

import {mockListFilms} from '../../mocks/mockListFilms';


configure({adapter: new Adapter()});


describe(`<VideoPlayer> tests`, () => {

  it(`<VideoPlayer/> isHover={true}`, () => {
    const videoPlayer = mount(
      <VideoPlayer
        card={mockListFilms[0]}
        isHover={true}
      />
    );
    expect(videoPlayer.props().isHover).toBe(true); 
  });

  it(`<VideoPlayer/> isHover={false}`, () => {
    const videoPlayer = mount(
      <VideoPlayer
        card={mockListFilms[0]}
        isHover={false}
      />
    );
    expect(videoPlayer.props().isHover).toBe(false); 
  });
});
