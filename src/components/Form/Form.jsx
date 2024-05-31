import { useForm } from 'react-hook-form';

import {
  ButtonWrapper,
  CheckBox,
  CheckBoxContainer,
  CheckBoxLabel,
  CreateForm,
  CreateImageButton,
  ErrorMessage,
  FormFieldWrapper,
  FormFieldsContainer,
  Input,
  TextArea,
} from './styles';
import { useLogic } from './useLogic';

export const Form = ({ addImageInList }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { handleSubmitCreateImage, isChecked, handleCheckBoxChange } = useLogic(
    addImageInList,
    reset,
  );

  return (
    <CreateForm onSubmit={handleSubmit(handleSubmitCreateImage)}>
      <FormFieldsContainer>
        <FormFieldWrapper>
          <div>Название фото</div>

          <Input
            {...register('name', { required: true })}
            placeholder="Yosemite National Park"
            error={errors.name}
          />
          {errors.name && <ErrorMessage>Поле обязательное</ErrorMessage>}
        </FormFieldWrapper>
        <FormFieldWrapper>
          <div>Ссылка на фото</div>

          <Input
            {...register('url', {
              required: 'Поле обязательное',
              pattern: {
                value:
                  /\b(?:https?|ftp):\/\/[-\w+&@#/%?=~|$!:,.;]*\.(?:jpg|jpeg|png|gif|bmp)\b/,
                message: 'Введите корректную ссылку',
              },
            })}
            placeholder="https://unsplash.com/photos-123.png"
            error={errors.url}
          />
          {errors.url && <ErrorMessage>{errors.url.message}</ErrorMessage>}
        </FormFieldWrapper>
      </FormFieldsContainer>
      <CheckBoxContainer>
        <CheckBox
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckBoxChange}
        />
        <CheckBoxLabel>Есть описание</CheckBoxLabel>
      </CheckBoxContainer>

      {isChecked && (
        <FormFieldWrapper>
          <TextArea
            {...register('description', { required: true })}
            placeholder="Введите описание"
            error={errors.description}
          />
          {errors.description && <ErrorMessage>Поле обязательное</ErrorMessage>}
        </FormFieldWrapper>
      )}

      <ButtonWrapper>
        <CreateImageButton>Добавить фото</CreateImageButton>
      </ButtonWrapper>
    </CreateForm>
  );
};
