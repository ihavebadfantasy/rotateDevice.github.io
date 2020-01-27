// JS - ./js/index.js

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

export default rotateDevice();
