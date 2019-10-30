import React, { useLayoutEffect } from 'react';
import styled from 'styled-components';
import { Page } from 'components';
import { useDispatch } from 'react-redux';
import { fetchPostsRequest, fetchPostsSuccess } from 'redux-store/posts/actions';
// import { createStructuredSelector } from 'reselect';
// import { selectIsInProgressFlags } from 'redux-store/flags/selectors';

const Heading = styled.h1`
  color: red;
  font-size: 30px;
`;
const Body = styled.div``;

export default () => {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(fetchPostsRequest());

    setTimeout(() => {
      dispatch(fetchPostsSuccess());
    }, 3000);
  });

  return (
    <Page title="Dashboard">
      <Heading>This is the dashboard for unnext boilerplate</Heading>
      <Body>This is the body of the page</Body>
    </Page>
  );
};
