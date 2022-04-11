import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  height: 8vh;
  color: #f2f2f2;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  backdrop-filter: blur(21px) saturate(179%);
  -webkit-backdrop-filter: blur(21px) saturate(179%);
  background-color: rgba(74, 78, 78, 0.45);
  border-radius: 25px 25px 0px 0px;
`;
const Li = styled.li`
  list-style: none;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    color: #998da4;
  }
`;
const Img = styled.img`
  width: 6vh;
  height: 6vh;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`;

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <Ul>
          <Li>Contats</Li>
          <Li>Work with us</Li>
          <Li>Feedback</Li>
          <div>
            <Img
              src="https://img.icons8.com/nolan/2x/ffffff/facebook.png"
              alt=""
            />
            <Img
              src="https://img.icons8.com/nolan/2x/ffffff/instagram-new.png"
              alt=""
            />
            <Img
              src="https://img.icons8.com/ios/2x/ffffff/youtube-play.png"
              alt=""
            />
          </div>
        </Ul>
      </div>
    );
  }
}
