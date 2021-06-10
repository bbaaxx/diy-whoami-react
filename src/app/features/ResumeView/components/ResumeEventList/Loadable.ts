/**
 *
 * Asynchronously loads the component for ResumeEventList
 *
 */

import { lazyLoad } from 'utils/loadable';

export const ResumeEventList = lazyLoad(
  () => import('./index'),
  module => module.ResumeEventList,
);
