import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import Movies from '../Movies/Movies'
import Details from '../Details/Details'
import TopFive from '../TopFive/TopFive'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import Loading from '../Loading/Loading'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      error: false,
      errorStatus: 0,
      movies: [],
      displayedMovies: [],
      searchBar: '',
    }
  }

  handleChange = (event) => {
    const { value } = event.target

    const filteredMovies = this.state.movies.filter(movie => {
      return movie.title.toLowerCase().includes(value.toLowerCase())
    })

    this.setState({ displayedMovies: filteredMovies, searchBar: value })
  }

  componentDidMount = () => {
    const fetchData = this.fetchData('movies')
    fetchData.then(response => this.handleResponse(response))
  }

  fetchData = (input) => {
    let fetchResponse

    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/${input}`)
      .then(response => {
        fetchResponse = response.status
        return response.json()
      })
      .catch(error => {
        this.setState({
          errorStatus: fetchResponse,
          error: true,
          isLoading: false
        })
      })
  }

  handleResponse(response) {
    if (!this.state.error) {
      this.setState({
        movies: response.movies,
        displayedMovies: response.movies,
        isLoading: false,
      })
    }
    window.onpopstate = () => {
      this.setState({
        errorStatus: 0,
        error: false,
        displayedMovies: response.movies,
        movies: response.movies
      })
    }
  }

  handleError = (error) => {
    this.setState({ errorMessage: error, error: true })
  }

  resetError = (event) => {
    window.onpopstate = () => {
      this.setState({ errorStatus: 0, error: false })
    }

    this.setState({ errorStatus: 0, error: false })
  }

  render() {
    return (
      <Router>
        <div className='App'>
          <NavBar
            searchBar={this.state.searchBar}
            handleChange={this.handleChange}
            resetError={this.resetError}
          />
          {this.state.error &&
            <ErrorMessage
              status={this.state.errorStatus}
              message={this.state.errorMessage}
            />
          }
          {this.state.isLoading ? <Loading /> :
            <Switch>
              <Route
                path='/movies/:id'
                render={({ match }) => {
                  return <Details
                    id={match.params.id}
                    fetchData={this.fetchData}
                    error={this.state.error}
                    errorStatus={this.state.errorStatus}
                    handleError={this.handleError}
                  />}}
                />
              <Route
                exact path='/'
                render={() =>
                  <div>
                    <TopFive movies={this.state.movies} />
                    <Movies movies={this.state.displayedMovies} />
                  </div>
                }
              />
            </Switch>
          }
        </div>
      </Router>
    )
  }
}

export default App
