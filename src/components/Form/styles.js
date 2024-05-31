import styled from 'styled-components';

export const CreateForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid gray;
`;

export const Input = styled.input`
  border-radius: 7px;
  color: ${({ error }) => (error ? 'red' : 'black')};
  padding: 5px;
  border: ${({ error }) => (error ? '1px solid red' : '1px solid #ccc')};
  width: 40vw;
  box-sizing: border-box;
  height: 40px;
  font-size: 20px;
  font-family: 'ui-monospace';
  position: relative;

  &:focus {
    border-color: ${({ error }) => (error ? '1px solid red' : 'gray')};
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0, 5);
  }
`;

export const FormFieldsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

export const FormFieldWrapper = styled.div`
  color: ${({ error }) => (error ? 'red' : 'rgb(15, 107, 222)')};
  flex-direction: column;
  margin: 1em 0 20px 1em;
  display: flex;
  font-family: 'ui-monospace';
  position: relative;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ErrorMessage = styled.div`
  position: absolute;
  color: red;
  top: 100%;
  left: 0;
  transform: translateY(4px);
  font-size: 12px;
`;

export const CheckBoxLabel = styled.span`
  display: flex;
  align-items: center;
  font-weight: bold;
  color: grey;
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0 0 15px;
`;

export const CheckBox = styled.input`
  margin-right: 10px;
`;

export const TextArea = styled.textarea`
  margin-top: 10px;
  width: 50%;
  height: 100px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  font-family: 'ui-monospace';
  resize: none;
`;

export const CreateImageButton = styled.button`
  background-color: rgb(15, 107, 222);
  font-family: 'ui-monospace';
  color: white;
  width: 20vw;
  height: 6vh;
  font-size: 1em;
  padding: 0.25em 1em;
  margin: 1em;
  border-radius: 7px;
  border: none;
`;
