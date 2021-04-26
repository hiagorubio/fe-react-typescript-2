import React from 'react';

import { User } from '..';
import { Card } from '../../atoms';

interface OwnProps {
  onClick: () => void;
  login: string;
  avatarUrl: string;
  gitHubPage: string;
  id: number;
}

export const UserCard = ({ onClick, login, avatarUrl, gitHubPage, id }: OwnProps) => (
    <Card buttonText="Details" onClick={onClick}>
      <User
        login={login}
        avatarUrl={avatarUrl}
        gitHubPage={gitHubPage}
        id={id}
        imageSize={'76'}
      />
    </Card>
  );

export default UserCard;
