import React from "react";
import axios from "axios";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Poster = styled.img`
  width: 110vh;
  margin-top: 15vh;
`;
const Title = styled.h1`
  margin-top: 4vh;
`;

const apiSeries = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/tv/popular?api_key=fcc2247abf0c01da22000c2d5d7c94fb&language=en-US&page=1"
});

export default class Series extends React.Component {
  state = {
    listSeries: [],
    seriesBuscadas: []
  };
  componentDidMount() {
    this.getSeries();
  }
  getSeries = async () => {
    const responseTV = await apiSeries.get();

    const series = responseTV.data.results.map((item) => {
      return {
        ...item,
        backdrop_path: `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`
      };
    });

    this.setState({
      listSeries: series,
      seriesBuscadas: series
    });
  };
  Buscar = (event) => {
    const { listSeries } = this.state;
    const BuscarSeries = listSeries.filter((item) => {
      if (item.name.toLowerCase().includes(event.target.value.toLowerCase())) {
        return true;
      }
    });
    this.setState({
      seriesBuscadas: BuscarSeries
    });
  };

  render() {
    return (
      <div>
        <Carousel enableAutoPlay>
          {this.state.seriesBuscadas.map((item) => (
            <Container>
              <Poster src={item.backdrop_path} alt={item.name} />
              <Title>{item.name}</Title>
            </Container>
          ))}
        </Carousel>
      </div>
    );
  }
}
