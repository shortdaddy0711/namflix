import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from '../../Components/Loader';

const Container = styled.div`
  padding: 0px 20px;
`;

const DetailPresenter = ({ results, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {results}
      {error}
    </Container>
  );

DetailPresenter.propTypes = {
  results: PropTypes.shape.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};

export default DetailPresenter;
