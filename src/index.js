// JS - ./js/index.js

// SCSS
import './scss/main.scss';

import createDesktopNotification from './js/desktopNotification';
import createTouchDeviceNotification from './js/touchDeviceNotification';

// export function rotateDevice(type, opts) {
//   if (type === 'desktop') {
//     return createDesktopNotification(opts);
//   } else if (type === 'touchDevice') {
//     return createTouchDeviceNotification(opts);
//   } else {
//     console.warn('Wrong notification type in createRotateDeviceNotification(). Please use "desktop" type argument for desktop notification and "touchDevice" type argument for touch Device notification');
//   }
// }

function rotateDevice() {
  return {
    createDesktopNotification,
    createTouchDeviceNotification,
  };
}
rotateDevice();

export default rotateDevice;
