import css from './Modal.module.css';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount = () => {
    window.addEventListener('keydown', this.closeModalOnEsc);
  };

  componentWillUnmount = () => {
    window.removeEventListener('keydown', this.closeModalOnEsc);
  };

  closeModalOnEsc = event => {
    if (event.code === 'Escape') {
      this.props.closeModal();
    }
  };

  closeModalOnBackdropClick = event => {
    if (event.target === event.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    return createPortal(
      <div className={css.Overlay} onClick={this.closeModalOnBackdropClick}>
        <div className={css.Modal}>
          <img src={this.props.largeImageUrl} alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  largeImageUrl: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
