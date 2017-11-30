import React from 'react';
import PropTypes from 'prop-types';

import Gallery from './Gallery';
import Header from './Header';

const App = (props) => {
  return (
    <div className="container">
      <Header />
      <Gallery imageList={props.imageList} />
    </div>
  );
};

App.defaultProps = {
  imageList: [
    {
      src: '../assets/images/1.jpg',
      title: 'Image 1',
    },
    {
      src: '../assets/images/2.jpg',
      title: 'Image 2',
    },
    {
      src: '../assets/images/3.jpg',
      title: 'Image 3',
    },
    {
      src: '../assets/images/4.jpg',
      title: 'Image 4',
    },
  ],
};

App.propTypes = {
  imageList: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      title: PropTypes.string,
    }),
  ),
};

export default App;
