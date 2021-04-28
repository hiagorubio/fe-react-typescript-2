interface Steps {
  action: string;
  avatarUrl: string;
  date: string;
  id: string;
  login: string;
  repository: string;
}

export interface OwnProps {
  steps: Steps[];
}
