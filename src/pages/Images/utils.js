import { uid } from 'uid';

export const formatImagesData = (imagesData) =>
  imagesData.map((imageItem) => {
    return {
      id: uid(),
      name: imageItem.alt_description,
      createdAt: imageItem.created_at,
      url: imageItem.urls.full,
    };
  });
