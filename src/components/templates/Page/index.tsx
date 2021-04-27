import React from 'react';

import { Header } from '../../atoms';

import useStyles from './styles';
import { Props } from './types';

const Page = ({ children, useBackButton, onClickBack }: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.page}>
      <Header useBackButton={useBackButton} onClickBack={onClickBack} />
      {children}
    </div>
  );
};

export default Page;
