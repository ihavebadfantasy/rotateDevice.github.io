let NOTIFICATION_WRAPPER_CLASS = 'notification-wrapper';
let NOTIFICATION_BLOCK_CLASS = 'notification-block';
let NOTIFICATION_MAIN_MESSAGE_CLASS = 'notification-main-message';
let NOTIFICATION_EXTRA_MESSAGE_CLASS = 'notification-extra-message';
const contentWrapper = document.body;

export abstract class NotificationClass {
  isTouchDevice: boolean;
  mainMessage: string;
  extraMessage: string;
  notificationWrapper: HTMLUnknownElement;
  allowContentShow: boolean;
  showClass: string;
  abstract notificationClassPrefix: string;
  constructor(opts: any) {
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
    notyWrapper.classList.add(`${this.notificationClassPrefix}-${NOTIFICATION_WRAPPER_CLASS}`);
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
    contentWrapper.insertAdjacentElement('beforebegin', notyWrapper);
    this.notificationWrapper = notyWrapper;
  }

  showNotification() {
    this.notificationWrapper.classList.add(this.showClass);
    contentWrapper.style.overflow = 'hidden';
    if (this.allowContentShow) {
      this.hideNotificationOnClick();
    }
  }

  hideNotification() {
    this.notificationWrapper.classList.remove(this.showClass);
    contentWrapper.style.overflow = '';
  }

  hideNotificationOnClick() {
    window.addEventListener('click', () => {
      this.hideNotification();
    });
    window.addEventListener('touchstart', () => {
      this.hideNotification();
    }, false);
  }

  abstract startNotification(): void; 

  init() {
    window.addEventListener('load', () => {
      this.buildNotificationHtml();
      this.startNotification();
    });
    window.addEventListener('resize', () => {
      this.startNotification();
    });
    window.addEventListener('orientationchange', () => {
      this.startNotification();
    }, false);
  }

}


