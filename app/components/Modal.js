import React from 'react';
import PropTypes from 'prop-types';

const Modal = (props) => {
  const { title, src, modalClose } = props;
  return (
    <div className="modal">
      <div className="modal-header">
        <div className="title">Image Preview</div>
        <div className="close" onClick={modalClose}>Close</div>
      </div>
      <div className="modal-body">
        <div className="image-preview" style={{ backgroundImage: `url('${src}')`}}></div>
        <div className="image-title">
          {title}
        </div>
      </div>
    </div>
  );
};

Modal.defaultProps = {
  title: '',
  src: '',
};

Modal.propTypes = {
  title: PropTypes.string,
  src: PropTypes.string,
  modalClose: PropTypes.func.isRequired,
};

export default Modal;
