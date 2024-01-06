import { Skeleton, Stack } from '@mui/material';
import { SkeletonListProps } from './SkeletonListTypes';

export function SkeletonList({
  variant,
  count,
  width,
  height,
}: SkeletonListProps) {
  const skeletons = Array.from({ length: count }, (_, index) => (
    <Skeleton
      key={index}
      variant={variant}
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
