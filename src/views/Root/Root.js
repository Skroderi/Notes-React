import React from 'react';
import Button from 'components/atoms/Button';
import GlobalStyle from 'theme/GlobalStyle';

const Root = () => {
  return (
    // globalStyle - componet which affect to others component
    <div>
      <GlobalStyle />
      <Button>close/save</Button>
      <Button secondary>Remove</Button>
    </div>
  );
};

export default Root;
