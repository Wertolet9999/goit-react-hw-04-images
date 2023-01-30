import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';
import React, { useContext, useState, useEffect } from 'react';
import { apiService } from 'api/api.js';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';
import { DataImagesContext, QueryContext, PageContext } from 'index';

export function ImageGallery({ openModal }) {
  const { dataImages, setDataImages } = useContext(DataImagesContext);
  const { query } = useContext(QueryContext);
  const { page, setPage } = useContext(PageContext);
  const [setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }
    const getSearchedImages = async () => {
      setIsLoading(true);
      const data = await apiService(query, page);
      setDataImages(prev => [...prev, ...data.hits]);
    };
    getSearchedImages()
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  }, [query, page, setDataImages, setError]);

  const changePageOnClick = () => {
    setPage(prev => prev + 1);
  };
  return (
    <>
      <ul className={css.ImageGallery}>
        {dataImages.map(el => (
          <ImageGalleryItem key={el.id} {...el} openModal={openModal} />
        ))}
      </ul>
      <div className={css.ButtonContainer}>
        {!isLoading && dataImages.length >= 12 && (
          <Button onClick={changePageOnClick} />
        )}
        {isLoading && <Loader />}
      </div>
    </>
  );
}

ImageGallery.protoTypes = {
  openModal: PropTypes.func.isRequired,
};
  

//       return <p>Download error {error}</p>
//     };
//     return (
//       <>
//         <ul className={css.ImageGallery}>
//           <ImageGalleryItem
//             dataImages={dataImages}
//             openModal={this.props.openModal}
//           />
//         </ul>
//         <div className={css.ButtonContainer}>
//           {isLoading && <Loader />}
//           {!isLoading && dataImages.length >= 12 && (
//             <Button onClick={this.changePageOnClick} />
//           )}
//         </div>
//       </>
//     );
//   }
// }

// ImageGallery.protoTypes = {
//   query: PropTypes.string.isRequired,
//   openModal: PropTypes.func.isRequired,
// };
