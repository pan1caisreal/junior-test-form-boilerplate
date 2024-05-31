import Delete_Icon from '../../assets/delete_icon.svg';

import {
  DateLabel,
  DateValue,
  DeleteIcon,
  Description,
  Image,
  ImageCard,
  ImageInfoContainer,
  ImageListWrapper,
} from './styles';
import { useLogic } from './useLogic';

export const ImageList = ({ imagesList, deleteImageInList }) => {
  const { formatDate } = useLogic();

  return (
    <ImageListWrapper>
      {imagesList.map((item) => (
        <ImageCard key={item.id}>
          <ImageInfoContainer name={item.name}>
            {item.name}
            <DeleteIcon
              src={Delete_Icon}
              alt="delete"
              onClick={deleteImageInList(item.id)}
            />
          </ImageInfoContainer>
          <ImageInfoContainer>
            <DateLabel>Дата добавления:</DateLabel>
            <DateValue>{formatDate(item.createdAt)}</DateValue>
          </ImageInfoContainer>
          <Image src={item.url} />
          {item?.description && <Description>{item.description}</Description>}
        </ImageCard>
      ))}
    </ImageListWrapper>
  );
};
