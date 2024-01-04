/* eslint-disable react/no-array-index-key */
import { Skeleton, Stack } from '@mui/material';

interface HeaderSkeletonProps {
  count: number;
  width: number;
  height: number;
}

export function HeaderSkeleton({ count, width, height }: HeaderSkeletonProps) {
  const skeletons = Array.from({ length: count }, (_, index) => (
    <Skeleton
      key={index}
      variant="circular"
      animation="wave"
      width={width}
      height={height}
    />
  ));

  return (
    <Stack spacing={3} direction="row">
      {skeletons}
    </Stack>
  );
}
