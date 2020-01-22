/* eslint-disable no-else-return */
/* eslint-disable consistent-return */
/* eslint-disable no-restricted-syntax */
// Main js file
import createDesktopNotification from './desktopNotification';
import createTouchDeviceNotification from './touchDeviceNotification';

export function rotateDevice(type, opts) {
  if (type === 'desktop') {
    return createDesktopNotification(opts);
  } else if (type === 'touchDevice') {
    return createTouchDeviceNotification(opts);
  } else {
    console.warn('Wrong notification type in createRotateDeviceNotification(). Please use "desktop" type argument for desktop notification and "touchDevice" type argument for touch Device notification');
  }
}


