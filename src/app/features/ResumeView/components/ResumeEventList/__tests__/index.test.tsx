import * as React from 'react';
import { render } from '@testing-library/react';

import { ResumeEventList } from '..';

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

describe('<ResumeEventList  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<ResumeEventList />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
