import  { NotificationClass } from './notificationGeneral';
import {createSVG} from './createSvg';

const notificationSVG = createSVG('0 0 184.02 312.02','mobile-notification-icon', 'enable-background:new 0 0 184.02 312.02;', `<style type="text/css">
.st0{fill:#FFFFFF;}
</style>
<g>
<path d="M163.52,312H20.48C9.17,312,0,302.83,0,291.52V20.54C0,9.23,9.17,0.06,20.48,0.06h143.04c11.31,0,20.48,9.17,20.48,20.48
  v270.98C184,302.83,174.83,312,163.52,312z"/>
<path class="st0" d="M156.34,304.09H27.66c-10.91,0-19.75-8.84-19.75-19.75V25.56c0-10.91,8.84-19.75,19.75-19.75h128.69
  c10.91,0,19.75,8.84,19.75,19.75v258.78C176.09,295.25,167.25,304.09,156.34,304.09z"/>
<circle cx="92" cy="282.53" r="12.22"/>
<path d="M113.46,14.44H70.54c-7.5,0-14.3-4.4-17.37-11.23l-1.41-3.14h80.5l-1.41,3.14C127.76,10.04,120.96,14.44,113.46,14.44z"/>
</g>`);

const touchDeviceNotificationConfig = {
  blockedOrientation: 'landscape',
  allowContentShow: true,
  onlyMobile: true,
  mainMessage: 'Please turn your device',
  extraMessage: 'or tap the screen to continue',
  responsivePortraitBreak: 767,
  responsiveLandscapeBreak: 850,
  showClass: 'show',
  notificationClassPrefix: 'touch-device',
  iconPath: notificationSVG,
  appearAnimation: '',
  hideAnimation: '',
  hideAnimationDuration: 0,
}

const createTouchDeviceNotification = (userOpts?: object) => {
  const opts = {...touchDeviceNotificationConfig, ...userOpts};
  return new TouchDeviceNotification(opts);
}

class TouchDeviceNotification extends NotificationClass {
  blockedOrientation: string;
  onlyMobile: boolean;
  responsiveLandscapeBreak: number;
  responsivePortraitBreak: number;
  constructor(opts: any) {
    super(opts);
    this.blockedOrientation = opts.blockedOrientation;
    this.onlyMobile = opts.onlyMobile;
    this.responsiveLandscapeBreak = opts.responsiveLandscapeBreak;
    this.responsivePortraitBreak = opts.responsivePortraitBreak;
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
    if (this.isTouchDevice) {
      switch (this.blockedOrientation) {
        case 'portrait':
          if (this.isPortrait() && !this.notificationState) {
            if (this.onlyMobile && this.isMobileInPortrait()) {
              this.showNotification();
            } else if (!this.onlyMobile) {
              this.showNotification();
            }
          } else {
            this.hideNotification();
          }
          break;

        case 'landscape':
          if (!this.isPortrait() && !this.notificationState) {
            if (this.onlyMobile && this.isMobileInLandscape()) {
              this.showNotification();
            } else if (!this.onlyMobile) {
              this.showNotification();
            }
          } else {
            this.hideNotification();
          }
          break;

        default:
          break;
      }
    }
  }
}

 const a = createTouchDeviceNotification({
   blockedOrientation: 'portrait',
   appearAnimation: 'animated fadeIn',
   hideAnimation: 'animated fadeOut',
   onlyMobile: 'false',
 });
 a.init();
