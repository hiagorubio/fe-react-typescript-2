import { withStyles } from '@material-ui/core';
import React, { useCallback } from 'react';
import { withRouter } from 'react-router';

import { Page } from '../../templates';

import styles from './styles';
import { Props } from './types';

export const DetailsPage = ({ history }: Props) => {
  const handleBack = useCallback(
    () => {
      history.goBack();
    },
    [history.goBack],
  );

  return (
      <Page
        useBackButton
        onClickBack={handleBack}
      >
        DetailsPage
      </ Page >
  );
};

export default withStyles(styles)(withRouter(DetailsPage));
