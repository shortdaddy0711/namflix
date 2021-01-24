import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from '../../Components/Section';
import Loader from '../../Components/Loader';
import Message from '../../Components/Message';
import Poster from '../../Components/Poster';

const Container = styled.div`
  padding: 0px 20px;
`;

const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing">
          {nowPlaying.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              imageUrl={movie.poster_path}
              title={movie.original_title}
              rating={movie.vote_average}
              year={movie.release_date.substring(0, 4)}
              isMovie
            />
          ))}
        </Section>
      )}
      {upcoming && upcoming.length > 0 && (
        <Section title="Upcoming movie">
          {upcoming.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              imageUrl={movie.poster_path}
              title={movie.original_title}
              rating={movie.vote_average}
              year={movie.release_date.substring(0, 4)}
              isMovie
            />
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular movie">
          {popular.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              imageUrl={movie.poster_path}
              title={movie.original_title}
              rating={movie.vote_average}
              year={movie.release_date.substring(0, 4)}
              isMovie
            />
          ))}
        </Section>
      )}
      {error && <Message text={error} color="e74c3c" />}
    </Container>
  );

HomePresenter.propTypes = {
  nowPlaying: PropTypes.arrayOf.isRequired,
  popular: PropTypes.arrayOf.isRequired,
  upcoming: PropTypes.arrayOf.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};

export default HomePresenter;
