import {
  cyan,
  pink,
  grey,
  white, darkBlack, fullBlack
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/styles/colorManipulator';
import spacing from 'material-ui/styles/spacing';

export default {
  spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: cyan[500],
    primary2Color: cyan[700],
    primary3Color: grey[400],
    accent1Color: pink.A200,
    accent2Color: grey[100],
    accent3Color: grey[500],
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey[300],
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: cyan[500],
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack
  }
};
