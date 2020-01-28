

// SCSS
import './scss/main.scss';

import createDesktopNotification from './js/desktopNotification';
import createTouchDeviceNotification from './js/touchDeviceNotification';


function rotateDevice() {
  return {
    createDesktopNotification,
    createTouchDeviceNotification,
  };
}

const b = createDesktopNotification({
  hideAnimation: 'animated fadeOut',
  desktopHeightBreak: 500,
  desktopWidthBreak: 900,
});
b.init();


const a = createTouchDeviceNotification({
  blockedOrientation: 'portrait',
  // appearAnimation: 'animated fadeIn',
  // hideAnimation: 'animated fadeOut',
  responsivePortraitBreak: 769,
  responsiveLandscapeBreak: 1025,
  mainMessage: 'hhh',
  allowContentShow: false,
});
a.init();

export default rotateDevice();
