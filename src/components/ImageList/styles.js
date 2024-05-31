import styled from 'styled-components';

export const ImageListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
`;

export const ImageCard = styled.div`
  display: flex;
  border-radius: 7px;
  border: 1px solid gray;
  -webkit-box-shadow: 4px 7px 8px 0 rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 7px 8px 0 rgba(34, 60, 80, 0.2);
  box-shadow: 4px 7px 8px 0 rgba(34, 60, 80, 0.2);
  width: 25vw;
  font-family: 'ui-monospace';
  padding: 0 0 20px 20px;
  margin: 10px 10px 0 4vw;
  flex-direction: column;
`;

export const DeleteIcon = styled.img`
  margin-left: auto;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 400px;
  height: 400px;
  clip-path: inset(10px 80px 50px 0 round 5px);
`;

export const ImageInfoContainer = styled.div`
  font-weight: ${({ name }) => (name ? 'bold' : 'normal')};
  margin-top: 5px;
  width: auto;
  height: 40px;
  display: flex;
  position: relative;
`;

export const DateLabel = styled.span`
  color: grey;
  font-weight: bold;
  margin-right: 5px;
`;

export const DateValue = styled.span`
  font-weight: normal;
  color: grey;
`;

export const Description = styled.div`
  margin-top: -40px;
  display: flex;
  flex-direction: column;
  max-height: 60px;
  overflow-y: auto;
  padding-right: 20px;
  word-wrap: break-word;
`;
