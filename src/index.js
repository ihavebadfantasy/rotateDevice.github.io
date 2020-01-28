

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


const a = createTouchDeviceNotification({
  blockedOrientation: 'portrait',
  // appearAnimation: 'animated fadeIn',
  // hideAnimation: 'animated fadeOut',
  responsivePortraitBreak: 769,
  responsiveLandscapeBreak: 1025,
  allowContentShow: true,
});
a.init();

export default rotateDevice();
