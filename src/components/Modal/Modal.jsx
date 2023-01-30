import css from './Modal.module.css';
import PropTypes from 'prop-types';
import React, { useEffect, memo } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export const Modal = memo(({ closeModal, modalData }) => {
  useEffect(() => {
    window.addEventListener('keydown', closeModalOnEscape);

    return () => {
      window.removeEventListener('keydown', closeModalOnEscape);
    };
  });

  const closeModalOnEscape = event => {
    if (event.code === 'Escape') {
      closeModal();
    }
  };

  const closeModalOnBackdropClick = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return createPortal(
    <div className={css.Overlay} onClick={closeModalOnBackdropClick}>
      <div className={css.Modal}>
        <img src={modalData} alt="" />
      </div>
    </div>,
    modalRoot
  );
});

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  modalData: PropTypes.string.isRequired,
};
