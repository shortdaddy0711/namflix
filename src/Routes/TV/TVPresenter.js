import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from '../../Components/Section';
import Loader from '../../Components/Loader';
import Error from '../../Components/Message';

const Container = styled.div`
  padding: 0px 20px;
`;

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated Shows">
          {topRated.map((show) => (
            <li>{show.name}</li>
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular shows">
          {popular.map((show) => (
            <li>{show.name}</li>
          ))}
        </Section>
      )}
      {airingToday && airingToday.length > 0 && (
        <Section title="Airing Today">
          {airingToday.map((show) => (
            <li>{show.name}</li>
          ))}
        </Section>
      )}
      {error && <Error text={error} />}
    </Container>
  );

TVPresenter.propTypes = {
  topRated: PropTypes.arrayOf.isRequired,
  popular: PropTypes.arrayOf.isRequired,
  airingToday: PropTypes.arrayOf.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};

export default TVPresenter;
