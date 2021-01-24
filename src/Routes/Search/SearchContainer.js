import React from 'react';
import SearchPresenter from './SearchPresenter';
import { moviesApi, tvApi } from '../../api';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieResults: null,
      tvResults: null,
      searchTerm: '',
      error: null,
      loading: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { searchTerm } = this.state;
    if (searchTerm !== '') {
      this.searchByTerm();
    }
  }

  handleInput(e) {
    e.preventDefault();
    const {
      target: { value },
    } = e;
    this.setState({ searchTerm: value });
  }

  async searchByTerm() {
    const { searchTerm } = this.state;
    this.setState({ loading: true });
    try {
      const {
        data: { results: movieResults },
      } = await moviesApi.search(searchTerm);
      const {
        data: { results: tvResults },
      } = await tvApi.search(searchTerm);
      this.setState({
        movieResults,
        tvResults,
      });
    } catch {
      this.setState({ error: "Can't find results." });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { movieResults, tvResults, searchTerm, error, loading } = this.state;
    return (
      <SearchPresenter
        handleSubmit={this.handleSubmit}
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        error={error}
        loading={loading}
        updateTerm={this.handleInput}
      />
    );
  }
}
