import React, { useLayoutEffect } from 'react';
import styled from 'styled-components';
import { Page } from 'components';
import { useDispatch } from 'react-redux';
import { fetchPostsRequest, fetchPostsSuccess } from 'redux-store/posts/actions';
import { useGet } from 'restful-react';

const Heading = styled.h1`
  color: red;
  font-size: 30px;
`;

const Loading = styled.h1`
  color: red;
  font-size: 30px;
`;

const Error = styled.h1`
  color: red;
  font-size: 30px;
`;

const Body = styled.div``;

export default () => {
  const dispatch = useDispatch();

  const { data: randomDogImage, loading, error } = useGet({
    path: 'breeds/image/random',
  });

  useLayoutEffect(() => {
    dispatch(fetchPostsRequest());

    setTimeout(() => {
      dispatch(fetchPostsSuccess());
    }, 3000);
  });

  return (
    <Page title="Dashboard">
      <Heading>This is the dashboard for unnext boilerplate</Heading>
      <Body>
        {loading && <Loading>Loading...</Loading>}
        {error && <Error>Opps! Error loading a gif</Error>}
        {randomDogImage && <img alt="Here's a good boye!" src={randomDogImage && randomDogImage.message} />}
      </Body>
    </Page>
  );
};
