/*

const NOTIFICATION_WRAPPER_CLASS = 'notification-wrapper';
const NOTIFICATION_BLOCK_CLASS = 'notification-block';
const NOTIFICATION_MAIN_MESSAGE_CLASS = 'notification-main-message';
const NOTIFICATION_EXTRA_MESSAGE_CLASS = 'notification-extra-message';
// const SHOW_CLASS = 'show';
const contentWrapper = document.body;


abstract class NotificationClass {
  isTouchDevice: boolean;
  mainMessage: string;
  extraMessage: string;
  notificationWrapper: any;
  allowContentShow: boolean;
  showClass: string;
  constructor(opts) {
    this.isTouchDevice = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(navigator.userAgent);
    this.mainMessage = opts.mainMessage;
    this.extraMessage = opts.extraMessage;
    this.allowContentShow = opts.allowContentShow;
    this.showClass = 'show';
  }
  protected getWindowWidth(): number {
    return window.innerWidth;
  }

  protected getWindowHeight(): number {
    return window.innerHeight;
  }

  protected buildNotificationHtml() {
    const notyWrapper = document.createElement('div');
    notyWrapper.classList.add(NOTIFICATION_WRAPPER_CLASS);
    const notyBlock = document.createElement('div');
    notyBlock.classList.add(NOTIFICATION_BLOCK_CLASS);
    const notyMainMessage = document.createElement('p');
    notyMainMessage.classList.add(NOTIFICATION_MAIN_MESSAGE_CLASS);
    notyMainMessage.innerText = this.mainMessage;
    let notyExtraMessage;
    if (this.extraMessage) {
      notyExtraMessage = document.createElement('p');
      notyExtraMessage.classList.add(NOTIFICATION_EXTRA_MESSAGE_CLASS);
      notyExtraMessage.innerText = this.extraMessage;
    }
    notyBlock.appendChild(notyMainMessage);
    if (notyExtraMessage) {
      notyBlock.appendChild(notyExtraMessage);
    }
    notyWrapper.appendChild(notyBlock);
    document.body.insertAdjacentElement('beforebegin', notyWrapper);
    this.notificationWrapper = notyWrapper;
  }

  showNotification() {
    this.notificationWrapper.classList.add(this.showClass);
    document.body.style.overflow = 'hidden';
    if (this.allowContentShow) {
      this.hideNotificationOnClick();
    }
  }

  hideNotification() {
    this.notificationWrapper.classList.remove(this.showClass);
    document.body.style.overflow = '';
  }

  hideNotificationOnClick() {
    window.addEventListener('click', () => {
      this.hideNotification();
    });
    window.addEventListener('touchstart', () => {
      this.hideNotification();
    }, false);
  }

}

interface DesktopNotificationInterface {
  allowContentShow: boolean;
  mainMessage: string;
  extraMessage: string;
  desktopWidthBreak: number;
  desktopHeightBreak: number;
  showNotification(): void;
  hideNotification(): void;
  hideNotificationOnClick(): void;
  startNotification(): void;
  init(): void;
}

class TouchDeviceNotification extends NotificationClass implements TouchDeviceNotificationInterface {
  desiredOrientation: string;
  onlyMobile: boolean;
  responsiveLandscapeBreak: number;
  responsivePortraitBreak: number;
  constructor(opts) {
    super(opts);
    this.desiredOrientation = opts.desiredOrientation;
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

  }

  init () {

  }

  printMethods(): void {
    console.log(this.isTouchDevice)
    console.log(this.mainMessage)
    console.log(this.extraMessage)
  }
}

const touchDeviceNotificationConfig = {
  desiredOrientation: 'landscape',
  allowContentShow: true,
  onlyMobile: true,
  mainMessage: 'Please turn your device',
  extraMessage: 'or tap the screen to continue',
  responsivePortraitBreak: 767,
  responsiveLandscapeBreak: 850,
}

const touchDeviceNotificationOpts = { ...touchDeviceNotificationConfig, ...userOpts}

const a = new TouchDeviceNotification({
  mainMessage: 'hi',
  extraMessage: 'bye',
  allowContentShow: true,
});
a.printMethods();

*/


