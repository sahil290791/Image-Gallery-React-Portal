import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Image from './Image';
import Modal from './Modal';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src: '',
      title: '',
    };
    this.modalClickHandler = this.modalClickHandler.bind(this);
    this.renderContent = this.renderContent.bind(this);
    this.imagePreviewContainer = document.createElement('div');
    this.imagePreviewContainer.className = 'image-preview-container hide';
    this.modalClose = this.modalClose.bind(this);
  }

  componentDidMount() {
    this.mainContainer = document.getElementsByTagName('body')[0];
    this.mainContainer.appendChild(this.imagePreviewContainer);
  }

  componentWillUnmount() {
    this.mainContainer.removeChild(this.imagePreviewContainer);
  }

  renderContent() {
    this.imagePreviewContainer.classList.toggle('hide');
    ReactDOM.unstable_renderSubtreeIntoContainer(
      this,
      <Modal
        src={this.state.src}
        title={this.state.title}
        modalClose={this.modalClose}
      />,
      this.imagePreviewContainer
    );
  }

  modalClose() {
    this.imagePreviewContainer.classList.toggle('hide');
  }

  modalClickHandler(src, title) {
    this.setState({
      src,
      title,
    }, this.renderContent);
  }

  render() {
    const images = this.props.imageList.map((image, index) => {
      return (
        <Image {...image} onClickHandler={this.modalClickHandler} key={index} />
      );
    });
    return (
      <div className={'gallery'}>
        {images}
      </div>
    );
  }
};


Gallery.defaultProps = {
  imageList: [],
};

Gallery.propTypes = {
  imageList: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      title: PropTypes.string,
    }),
  ),
};

export default Gallery;
