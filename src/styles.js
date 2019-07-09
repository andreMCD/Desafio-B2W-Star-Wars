import styled from "styled-components";

export const Container = styled.div`
  border: 2px solid #ffc300;
  max-width: 400px;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -30%);
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
  justify-items: center;

  h1 {
    color: #0b032d;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 20px;
  }
  button {
    height: 40px;
    color: #ffc300;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 5px;
    cursor: pointer;
    border: none;
    border-radius: 10px;
  }
`;

export const Title = styled.h2`
  margin: 20px 0 5px 0;
  text-align: center;
  font-size: 30px;
  color: #0b032d;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Paragraph = styled(Title)`
  margin: 5px 0 5px 0;
  font-size: 16px;
`;
