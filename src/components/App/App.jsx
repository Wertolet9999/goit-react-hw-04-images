import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Searchbar } from 'components/Searchbar/Searchbar';
import css from './App.module.css';
import React, { Component } from 'react';
import { Modal } from 'components/Modal/Modal';

export class App extends Component {
  state = {
    dataImages: [],
    query: '',
    showModal: false,
    largeImage: '',
  };

  changeQuery = query => {
    this.setState({ query });
  };

  toggleModal = largeImage => {
    this.setState(prev => ({ showModal: !prev.showModal, largeImage }));
  };

  render() {
    const { query, showModal, largeImage } = this.state;
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.changeQuery} />
        <ImageGallery query={query} openModal={this.toggleModal} />
        {showModal && (
          <Modal largeImageUrl={largeImage} closeModal={this.toggleModal} />
        )}
      </div>
    );
  }
}
