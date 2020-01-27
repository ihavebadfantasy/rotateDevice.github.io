

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

const desktopNotification = createDesktopNotification();
desktopNotification.init();

const desktopsNotification = createTouchDeviceNotification();
desktopsNotification.init();

export default rotateDevice();
