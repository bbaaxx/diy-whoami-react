/**
 *
 * Asynchronously loads the component for ResumeBasics
 *
 */

import { lazyLoad } from 'utils/loadable';

export const ResumeBasics = lazyLoad(
  () => import('./index'),
  module => module.ResumeBasics,
);
