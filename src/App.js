import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };

  // 데이터를 가져오는 방식, 즉 axios.get이 느릴수 있으니, rendering 이전에, componentDidMount 사이클에서
  // async 그리고 await을 사용한다 : await의 작업이 끝날때까지 기다렸다가, async 함수를 실행한다는 뜻
  getMovies = async () => {
    // ES6
    const {data: {data :{movies}}} = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");

    //this.setState({movies(from state):movies(from axios)})
    this.setState({ movies, isLoading:false });
  }
  componentDidMount(){
    this.getMovies();
  }

  render(){
    // 매번 this.state를 사용해서 data를 가져오기보다는, ES6 문법을 사용해서 가져온다.
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading ? "Loading..." : movies.map(movie => {
          return (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
            />
          );
        })}
      </div>
    );
  }


}

export default App;