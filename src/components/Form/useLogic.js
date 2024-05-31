import { useState } from 'react';
import { uid } from 'uid';

export const useLogic = (addImageInList, reset) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBoxChange = () => {
    setIsChecked(!isChecked);
  };
  const handleSubmitCreateImage = (values) => {
    const getCurrentDateTime = new Date().toISOString();
    const imageData = {
      createdAt: getCurrentDateTime,
      id: uid(),
      ...values,
    };

    addImageInList(imageData);
    reset();
  };

  return { handleSubmitCreateImage, handleCheckBoxChange, isChecked };
};
