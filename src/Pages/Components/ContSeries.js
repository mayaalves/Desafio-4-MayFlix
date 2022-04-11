import React from "react";
import axios from "axios";
import * as S from "./Style";

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
        poster_path: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
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
        <S.BoxInput>
          <S.Input
            onChange={this.buscar}
            type="text"
            placeholder="  Buscar Series"
          />
        </S.BoxInput>
        <S.Container>
          {this.state.seriesBuscadas.map((item) => (
            <S.BoxGeral>
              <S.Title>{item.name}</S.Title>
              <S.Pop>View's {item.popularity}</S.Pop>
              <S.Poster src={item.poster_path} alt={item.name} />
              <S.Details>
                <summary>Synopsis</summary>
                <S.P>{item.overview}</S.P>
              </S.Details>
            </S.BoxGeral>
          ))}
        </S.Container>
      </div>
    );
  }
}
