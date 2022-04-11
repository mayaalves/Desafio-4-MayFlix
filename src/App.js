import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import Series from "./Pages/Series";
import Login from "./Pages/Login";
import Footer from "./Pages/Components/Footer";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
}
body{
  background-color: #353340;
  color: #f2f2f2;
}
::-webkit-scrollbar{
  width: 14px;
}
::-webkit-scrollbar-track{
  background: #f2f2f2;
  border-radius: 50px;
  border: solid 2px #353340;
}
::-webkit-scrollbar-thumb{
  background: #353340;
  border-radius: 50px;
  border: solid 2px #998da4;
}
`;
const Nav = styled(Link)`
  color: #f2f2f2;
  &:hover {
    color: #998da4;
    transform: scale(1.1);
  }
`;
const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  z-index: 9;
  width: 100%;
  height: 8vh;
  backdrop-filter: blur(21px) saturate(179%);
  -webkit-backdrop-filter: blur(21px) saturate(179%);
  background-color: rgba(74, 78, 78, 0.45);
  border-radius: 0px 0px 25px 25px;
`;
const ItemList = styled.li`
  list-style: none;
  cursor: pointer;
`;
const Img = styled.img`
  width: 6vh;
  height: 6vh;
  &:hover {
    transform: scale(1.1);
  }
`;

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <GlobalStyle />
          <nav>
            <List>
              <ItemList>
                <Nav to="/">Home</Nav>
              </ItemList>
              <ItemList>
                <Nav to="/Movies">Movies</Nav>
              </ItemList>
              <ItemList>
                <Nav to="/Series">Series</Nav>
              </ItemList>
              <ItemList>
                <Nav to="/Login">
                  <Img
                    src="https://img.icons8.com/external-fauzidea-detailed-outline-fauzidea/2x/ffffff/external-login-online-learning-fauzidea-detailed-outline-fauzidea.png"
                    alt="Login"
                  />
                </Nav>
              </ItemList>
            </List>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Movies" element={<Movies />} />
            <Route path="/Series" element={<Series />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    );
  }
}
