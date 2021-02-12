import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom'
import Movies from '../Movies/Movies'
import Details from '../Details/Details'
import TopFive from '../TopFive/TopFive'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import Loading from '../Loading/Loading'
import greenTomato from '../../images/icon-tomato-green.png'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      error: false,
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
    console.log('error',this.state.errorMessage);
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
          <header className='header'>
            <div className='header-company'>
              <img className='header-icon' src={greenTomato} alt='tomatillo logo' />
              <h1>RANCID TOMATILLOS</h1>
            </div>
            <div className='navigation'>
              <div className='navigation-input'>
                <label htmlFor='search'></label>
                <input
                  id='search'
                  name='searchBar'
                  value={this.state.searchBar}
                  onChange={this.handleChange}
                  placeholder='Search by movie title'
                />
              </div>
              <NavLink
                exact to='/'
                className='nav-link'
                onClick={this.resetError}>
                Home
              </NavLink>
            </div>
          </header>
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
