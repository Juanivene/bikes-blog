import type { AnyProp } from '@/interface/globalTypes';

export interface SkeletonProps extends AnyProp {
  type?: 'circle' | 'rect';
  className?: string;
}
