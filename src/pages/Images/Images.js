import React from 'react';

import { Form, ImageList } from '../../components';

import useLogic from './useLogic';

export const Images = () => {
  const { addImageInList, deleteImageInList, imagesList } = useLogic();

  return (
    <>
      <Form addImageInList={addImageInList} />

      <section>
        <ImageList
          imagesList={imagesList}
          deleteImageInList={deleteImageInList}
        />
      </section>
    </>
  );
};
