import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Searchbar } from 'components/Searchbar/Searchbar';
import css from './App.module.css';
import React, { useState } from 'react';
import { Modal } from 'components/Modal/Modal';

export function App() {
  const [modalData, setModalData] = useState(null);

  const toggleModal = (data = null) => {
    setModalData(data)
  };
  
return (
      <div className={css.App}>
        <Searchbar/>
        <ImageGallery openModal={toggleModal} />
        {modalData && 
          <Modal modalData={modalData} closeModal={toggleModal} />
        }
      </div>
    );
  }

