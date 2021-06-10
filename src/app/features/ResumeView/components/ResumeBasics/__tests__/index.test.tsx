import * as React from 'react';
import { render } from '@testing-library/react';

import { ResumeBasics } from '..';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: str => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

describe('<ResumeBasics  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<ResumeBasics />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
