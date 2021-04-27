export interface OwnProps {
  onClickBack?: () => void;
  useBackButton?: boolean;
}

export type Props = OwnProps & React.HtmlHTMLAttributes<HTMLElement>;
