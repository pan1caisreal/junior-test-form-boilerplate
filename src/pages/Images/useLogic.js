import { useCallback, useEffect, useState } from 'react';

import { imageApi } from '../../api';

import { formatImagesData } from './utils';

const defaultImageCount = 5;
const useLogic = () => {
  const [imagesList, setImagesList] = useState([]);

  useEffect(() => {
    imageApi.getRandomImages(defaultImageCount).then((images) => {
      setImagesList(formatImagesData(images));
    });
  }, []);

  const addImageInList = useCallback((imageElement) => {
    setImagesList((prevImagesList) => [...prevImagesList, imageElement]);
  }, []);

  const deleteImageInList = useCallback(
    (id) => () => {
      setImagesList((prevImagesList) =>
        prevImagesList.filter((item) => item.id !== id),
      );
    },
    [],
  );

  return { addImageInList, deleteImageInList, imagesList };
};

export default useLogic;
