import React from "react";
import axios from "axios";
import * as S from "./Style";

const apiFilmes = axios.create({
  baseURL:
    " https://api.themoviedb.org/3/movie/popular?api_key=fcc2247abf0c01da22000c2d5d7c94fb"
});

export default class App extends React.Component {
  state = {
    listFilmes: [],
    filmesBuscados: []
  };

  componentDidMount() {
    this.getMovies();
  }
  getMovies = async () => {
    const response = await apiFilmes.get();
    // console.log(response.data.results)

    const filmes = response.data.results.map((item) => {
      return {
        ...item,
        poster_path: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
      };
    });

    this.setState({
      listFilmes: filmes,
      filmesBuscados: filmes
    });
  };

  buscar = (event) => {
    const { listFilmes } = this.state;
    const BuscarFilmes = listFilmes.filter((item) => {
      if (item.title.toLowerCase().includes(event.target.value.toLowerCase())) {
        return true;
      }
    });
    this.setState({
      filmesBuscados: BuscarFilmes
    });
  };

  render() {
    return (
      <div>
        <S.BoxInput>
          <S.Input
            onChange={this.buscar}
            type="text"
            placeholder="  Buscar filmes"
          />
        </S.BoxInput>
        <S.Container>
          {this.state.filmesBuscados.map((item) => (
            <S.BoxGeral>
              <S.Title>{item.title}</S.Title>
              <S.Pop>View's {item.popularity}</S.Pop>
              <S.Poster src={item.poster_path} alt={item.title} />
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
