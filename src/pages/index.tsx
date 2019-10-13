import React from 'react';
import styled from 'styled-components';
import { Page } from 'components';

const Title = styled.h1`
  color: red;
  font-size: 30px;
`;

export default () => {
  return (
    <Page title="Dashboard">
      <Title>This is the dashboard for unnext boilerplate</Title>
    </Page>
  );
};
