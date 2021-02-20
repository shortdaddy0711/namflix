import React from 'react';
import DetailPresenter from './DetailPresenter';
import { moviesApi, tvApi } from '../../api';

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      // eslint-disable-next-line react/prop-types
      location: { pathname },
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      // eslint-disable-next-line react/prop-types
      isMovie: pathname.includes('/movie/'),
    };
  }

  // eslint-disable-next-line consistent-return
  async componentDidMount() {
    const {
      // eslint-disable-next-line react/prop-types
      match: {
        // eslint-disable-next-line react/prop-types
        params: { id },
      },
      // eslint-disable-next-line react/prop-types
      history: { push },
    } = this.props;
    const { isMovie } = this.state;
    // eslint-disable-next-line radix
    const parsedId = parseInt(id);
    if (Number.isNaN(parsedId)) {
      return push('/');
    }
    let result = null;
    try {
      if (isMovie) {
        ({ data: result } = await moviesApi.movieDetail(parsedId));
      } else {
        ({ data: result } = await tvApi.showDetail(parsedId));
      }
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({ loading: false, result });
    }
  }

  render() {
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
