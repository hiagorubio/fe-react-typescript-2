import { Skeleton } from '@material-ui/lab';
import React, { useCallback, useState } from 'react';

interface OwnProps {
  alt: string;
  size: string | number;
  src: string;
}

export const UserCard = ({
  alt,
  src,
  size,
}: OwnProps) => {
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const handleImgLoaded = useCallback(
    () => {
      setIsImgLoaded(true);
    },
    [setIsImgLoaded],
  );

  return (
    <>
      {!isImgLoaded && <Skeleton variant="rect" width={size} height={size} />}

      <img
        src={src}
        alt={alt}
        width={size}
        height={size}
        onLoad={handleImgLoaded}
        hidden={!isImgLoaded}
      />
    </>
  );
};

export default UserCard;
