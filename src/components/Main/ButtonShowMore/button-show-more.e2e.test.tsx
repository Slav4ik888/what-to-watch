import * as React from 'react';
import {shallow, configure} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import ButtonShowMore from './button-show-more';


configure({adapter: new Adapter()});

describe(` <ButtonShowMore />`, () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it(`<ButtonShowMore /> click`, () => {
    const onShowMore = jest.fn();

    const component = shallow(
          <ButtonShowMore
            onShowMore={onShowMore}
            showButton={true}
          />
    )
    .find(`.catalog__more`)
    .simulate(`click`);

    expect(onShowMore).toHaveBeenCalledTimes(1);

  });
});
// npm test button-show-more.e2e.test.tsx