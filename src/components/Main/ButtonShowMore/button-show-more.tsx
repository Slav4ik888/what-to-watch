import * as React from 'react';


type Props = {
  onShowMore: () => void,
  showButton: boolean,
};


const ButtonShowMore: React.FC<Props> = ({showButton, onShowMore}) => {
  if (!showButton) {
    return null;
  }

  const handleShowMore = () => {
    onShowMore();
  };

  return (
    <div
      className="catalog__more"
      onClick={handleShowMore}
    >
      <button className="catalog__button" type="button">Show more</button>
    </div>
  )
};

export default ButtonShowMore;
