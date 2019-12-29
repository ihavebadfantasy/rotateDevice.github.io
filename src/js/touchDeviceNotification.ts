import  { NotificationClass } from './notificationGeneral';

interface TouchDeviceNotificationInterface {
  desiredOrientation: string;
  allowContentShow: boolean;
  onlyMobile: boolean;
  mainMessage: string;
  showClass: string,
  responsiveLandscapeBreak: number;
  responsivePortraitBreak: number;
  notificationClassPrefix: string;
  isPortrait(): boolean;
  isMobileInLandscape(): boolean;
  isMobileInPortrait(): boolean;
  showNotification(): void;
  hideNotification(): void;
  hideNotificationOnClick(): void;
  startNotification(): void;
  init(): void;
}

const touchDeviceNotificationConfig = {
  desiredOrientation: 'landscape',
  allowContentShow: true,
  onlyMobile: true,
  mainMessage: 'Please turn your device',
  extraMessage: 'or tap the screen to continue',
  responsivePortraitBreak: 767,
  responsiveLandscapeBreak: 850,
  showClass: 'show',
  notificationClassPrefix: 'touch-device',
}

const createTouchDeviceNotification = (userOpts: object) => {
  const opts = {...touchDeviceNotificationConfig, ...userOpts};
  return new TouchDeviceNotification(opts);
}

class TouchDeviceNotification extends NotificationClass implements TouchDeviceNotificationInterface {
  desiredOrientation: string;
  onlyMobile: boolean;
  responsiveLandscapeBreak: number;
  responsivePortraitBreak: number;
  showClass: string;
  notificationClassPrefix: string;
  constructor(opts: any) {
    super(opts);
    this.desiredOrientation = opts.desiredOrientation;
    this.onlyMobile = opts.onlyMobile;
    this.responsiveLandscapeBreak = opts.responsiveLandscapeBreak;
    this.responsivePortraitBreak = opts.responsivePortraitBreak;
    this.showClass = opts.showClass;
    this.notificationClassPrefix = opts.notificationClassPrefix;
  }

  isPortrait() {
    const mql = window.matchMedia('(orientation: portrait)');
    return mql.matches;
  }

  isMobileInPortrait() {
    return (window.innerWidth < this.responsivePortraitBreak);
  }

  isMobileInLandscape() {
    return (window.innerWidth < this.responsiveLandscapeBreak);
  }

  startNotification () {
    this.hideNotification();
    if (this.isTouchDevice) {
      switch (this.desiredOrientation) {
        case 'portrait':
          if (this.isPortrait()) {
            if (this.onlyMobile && this.isMobileInPortrait()) {
              this.showNotification();
            } else if (!this.onlyMobile) {
              this.showNotification();
            }
          }
          break;

        case 'landscape':
          if (!this.isPortrait()) {
            if (this.onlyMobile && this.isMobileInLandscape()) {
              this.showNotification();
            } else if (!this.onlyMobile) {
              this.showNotification();
            }
          }
          break;

        default:
          break;
      }
    }
  }
}

const a = createTouchDeviceNotification({
  mainMessage: 'hi',
  extraMessage: 'bye',
  allowContentShow: true,
});
a.init();
