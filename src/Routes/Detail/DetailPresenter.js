/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from '../../Components/Loader';
import Message from '../../Components/Message';
import noPostImg from '../../assets/noPosterSmall.png';

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
`;

const Cover = styled.div`
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  width: 30%;
  height: 70%;
  border-radius: 10px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 32px;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 50%;
`;

const YoutubeContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;
  margin: 20px 0;
`;

const Youtube = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 50%;
`;

const DetailPresenter = ({ result, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : noPostImg
          }
        />
        <Data>
          <Title>
            {result.original_title
              ? result.original_title
              : result.original_name}
          </Title>
          <ItemContainer>
            <Item>
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date.substring(0, 4)}
            </Item>
            <Divider>🥑</Divider>
            <Item>
              {result.runtime ? result.runtime : result.episode_run_time[0]} min
            </Item>
            <Divider>🥑</Divider>
            <Item>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1
                    ? genre.name
                    : `${genre.name} / `,
                )}
            </Item>
          </ItemContainer>
          <Overview>{result.overview}</Overview>
          <YoutubeContainer>
            <Youtube
              src={
                result.videos.results[0]
                  ? `https://www.youtube.com/embed/${result.videos.results[0].key}`
                  : 'https://www.youtube.com/embed/el2muxlkPKA'
              }
              frameborder="0"
              allowfullscreen
            />
          </YoutubeContainer>
        </Data>
      </Content>
      {error && <Message text={error} color="e74c3c" />}
    </Container>
  );

DetailPresenter.propTypes = {
  result: PropTypes.shape.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};

export default DetailPresenter;
