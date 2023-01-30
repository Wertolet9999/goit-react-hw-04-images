import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ dataImages, openModal }) => {
  return dataImages.map(({ id, webformatURL, largeImageURL, tags }) => (
    <li
      key={id}
      className={css.ImageGalleryItem}
      onClick={() => {
        openModal(largeImageURL);
      }}
    >
      <img className={css.ImageGalleryItemImage} src={webformatURL} alt={tags} />
    </li>
  ));
};

ImageGalleryItem.protoTypes = {
  dataImages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      webformatURL: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
    })
  ).isRequired,
  openModal: PropTypes.func.isRequired,
};
