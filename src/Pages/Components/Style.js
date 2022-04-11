import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
  color: #f2f2f2;
`;
export const BoxGeral = styled.div`
  margin-top: 4vh;
`;
export const BoxInput = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 10vh;
`;
export const Input = styled.input`
  height: 5vh;
  width: 40vh;
  margin-top: 10vh;
  border-radius: 25px;
  border: solid 4px #998da4;
  background-color: #353340;
  color: #f2f2f2;
`;
export const Title = styled.h2`
  font-size: 2vh;
  margin-left: 4vh;
`;
export const Pop = styled.h2`
  font-size: 2vh;
  margin-left: 4vh;
`;

export const Poster = styled.img`
  border-radius: 5px;
  width: 30vh;
  height: 50vh;
  margin: 4vh;
  cursor: pointer;
  transition: transform 0.75s;
  &:hover {
    transform: scale(1.1);
  }
`;
export const Details = styled.details`
  cursor: pointer;
  width: 34vh;
  padding: 1vh;
  margin-left: 2vh;
  margin-top: -2vh;
  margin-bottom: 6vh;
  border-radius: 25px;
  border: solid 4px #998da4;
  transition: transform 0.75s;
  backdrop-filter: blur(21px) saturate(179%);
  -webkit-backdrop-filter: blur(21px) saturate(179%);
  background-color: rgba(74, 78, 78, 0.45);
  &:hover {
    transform: scale(1.1);
  }
`;
export const P = styled.p`
  width: 30vh;
  text-align: justify;
  margin-top: 2vh;
`;
