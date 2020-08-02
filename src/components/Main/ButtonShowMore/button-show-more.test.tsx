import * as React from 'react';
import * as renderer from 'react-test-renderer';

import ButtonShowMore from './button-show-more';


describe(`Snapshot <ButtonShowMore />`, () => {
  it(`Render <ButtonShowMore /> showButton={true}`, () => {
    const tree = renderer
      .create(
          <ButtonShowMore
            onShowMore={() => {}}
            showButton={true}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render <ButtonShowMore /> showButton={false}`, () => {
    const tree = renderer
      .create(
          <ButtonShowMore
            onShowMore={() => {}}
            showButton={false}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
