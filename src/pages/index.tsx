import React from 'react';
import styled from 'styled-components';
import Person from 'components/person';

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

export default () => {
  return (
    <div>
      <Person />
      <Title>My page is this, guys something</Title>
    </div>
  );
};
