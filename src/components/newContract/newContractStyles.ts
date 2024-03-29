import styled from "styled-components";

export const Modal = styled.div<{ hidden?: boolean }>`
  display: ${({ hidden }) => (hidden ? "none" : "flex")};
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.55);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 5;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  width: 72%;
  height: 70vh;
  background-color: white;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  padding: 50px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  @media (min-width: 768px) {
    width: 50vw;
  }
`;

export const HeaderLogo = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    align-items: flex-end;
    max-width: 10px;
    padding-right: 50px;
    margin: 0 0 0 auto;
  }

  h1 {
    font-size: 1.7em;
  }
`;

export const Icon = styled.img`
  cursor: pointer;
`;

export const SearchArtistInputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
`;

export const SearchArtistInput = styled.input`
  width: 77%;
  height: 56px;
  border-radius: 5px 0 0 5px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-right: 0;
  padding-left: 20px;

  &::placeholder {
    font-size: 16px;
    font-weight: 600;
  }

  &:focus {
    border: 1px solid #fa8b08;
    outline: none;
  }
`;

export const SearchArtistButton = styled.button`
  height: 60px;
  width: 100px;
  background-color: #fa8b08;
  border-radius: 0 5px 5px 0;
  border: none;
  cursor: pointer;

  img {
    width: 20px;
  }
`;

export const SearchResults = styled.div`
  width: 95%;
  height: 45vh;
  max-height: 45vh;
  overflow: hidden scroll;
`;

export const FormInputTextbox = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 0.5rem;
  border-radius: 3px;
  margin: 0.5rem 0;
  border: 1px solid #545454;
  transition: 300ms;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #000;
  }

  &:disabled {
    background-color: rgb(210, 210, 210);
  }
`;

export const SignContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 75vw;
  margin: 0 auto;
  padding-right: 0.5rem;
  max-height: 50vh;
  overflow: hidden scroll;

  @media (min-width: 768px) {
    width: 40vw;
  }
`;

export const FormInputFullField = styled.input`
  width: 100%;
  height: 3vh;
  padding: 0.5rem;
  border-radius: 3px;
  margin: 0.5rem 0;
  border: 1px solid #545454;
  transition: 300ms;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #000;
  }

  &:disabled {
    background-color: rgb(210, 210, 210);
  }
`;

export const FormInputHalfField = styled.input`
  width: 100%;
  height: 3vh;
  padding: 0.5rem;
  border-radius: 3px;
  margin: 0.5rem 0;
  border: 1px solid #545454;
  transition: 300ms;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #000;
  }

  &:disabled {
    background-color: rgb(210, 210, 210);
  }
  @media (min-width: 768px) {
    width: 41%;

    &:nth-child(even) {
      margin-right: 0.5rem;
    }
    &:nth-child(odd) {
      margin-left: 0.5rem;
    }
  }
  @media (min-width: 960px) {
    width: 43.5%;
  }

  @media (min-width: 1080px) {
    width: 45.3%;
  }
`;

export const FormInputButton = styled.button`
  width: 77%;
  background-color: #ff8311;
  padding: 0.5rem;
  border-radius: 3px;
  border: none;
  box-shadow: 0 1px 4px #000;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 1.5rem;

  &::placeholder {
    color: #000;
  }

  &:disabled {
    background-color: rgb(210, 210, 210);
  }
`;

export const FormInputErrorMessage = styled.span<{ hidden: boolean }>`
  width: 90%;
  display: ${({ hidden }) => (hidden ? "none" : "inline")};
  color: black;
  font-size: 1rem;
  text-align: center;
  margin: 0.5rem 0;
`;
