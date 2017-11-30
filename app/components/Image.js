import React from 'react';
import PropTypes from 'prop-types';

const Image = (props) => {
  const { src, title, onClickHandler, modalClose } = props;
  return (
    <div className="image-container">
      <div className="image" style={{
          backgroundImage: `url('${src}')`
        }}
        alt={title}
        onClick={() => onClickHandler(src, title)}
      ></div>
      <div className="image-title">
        {title}
      </div>
    </div>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Image;
