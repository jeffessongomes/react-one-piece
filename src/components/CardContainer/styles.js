import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 450px;
  background: #fff;

  img {
    width: 200px;
    height: 300px;
    object-fit: cover;
    margin: 0;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 5px solid #fff;
    border-top: none;
    border-bottom: none;
    border-radius: 0 0 4px 4px;
    margin: 0;

    h2 {
      width: 100%;
      text-align: center;
      font-size: 1.3em;
      padding: 5px 0;
      margin: 0;
      background: #e74c3c;
      border-bottom: 2px solid #fff;
    }

    p {
      text-align: center;
      font-weight: bold;
      font-size: 1.5em;
      padding: 5px 0;
      background: #fff;
      color: #000;
    }
  }
`;
