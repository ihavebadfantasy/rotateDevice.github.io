const NOTIFICATION_WRAPPER_CLASS = 'notification-wrapper';
const NOTIFICATION_BLOCK_CLASS = 'notification-block';
const NOTIFICATION_MAIN_MESSAGE_CLASS = 'notification-main-message';
const NOTIFICATION_EXTRA_MESSAGE_CLASS = 'notification-extra-message';
const NOTIFICATION_IMAGE_WRAPPER_CLASS = 'notification-img-wrapper';
const DEFAULT_ICON_CLASS = 'default-icon';
const contentWrapper = document.body;

export abstract class NotificationClass {
  type: string;
  mainMessage: string;
  extraMessage: string;
  notificationWrapper: HTMLUnknownElement | null;
  allowContentShow: boolean;
  showClass: string;
  notificationClassPrefix: string;
  iconPath: string;
  appearAnimation: string;
  hideAnimation: string;
  hideAnimationDuration: number;
  appearAnimationArr?: string[] | [];
  hideAnimationArr?: string[] | [];
  notificationState: boolean;
  customHTML: string | boolean;
  initialized: boolean;
  constructor(opts: any) {
    this.type = opts.type;
    this.mainMessage = opts.mainMessage;
    this.extraMessage = opts.extraMessage;
    this.allowContentShow = opts.allowContentShow;
    this.showClass = 'show';
    this.notificationClassPrefix = opts.notificationClassPrefix;
    this.iconPath = opts.iconPath;
    this.appearAnimation = opts.appearAnimation;
    this.hideAnimation = opts.hideAnimation;
    this.hideAnimationDuration = (opts.hideAnimationDuration === 0 && opts.hideAnimation !== '') ? (400) : (opts.hideAnimationDuration);
    this.notificationState = false;
    this.customHTML = opts.customHTML;
    this.initialized = false;
    this.startNotification = this.startNotification.bind(this);
  }

  protected deviceType(): string {
    return /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(navigator.userAgent) ? ('touchDevice') : ('desktop')
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
    if (typeof this.customHTML === 'boolean') {
      if (this.iconPath[0] !== '<') {
        this.iconPath = `<img src="${this.iconPath}" alt="icon">`
      }
      let extraMessage: HTMLElement | string;
      if (this.extraMessage) {
        extraMessage = `<p class="${this.notificationClassPrefix}-${NOTIFICATION_EXTRA_MESSAGE_CLASS}">${this.extraMessage}</p>`
      } else {
        extraMessage = '';
      }
      notyWrapper.innerHTML = `<div class="${this.notificationClassPrefix}-${NOTIFICATION_BLOCK_CLASS}">
      <p class="${this.notificationClassPrefix}-${NOTIFICATION_MAIN_MESSAGE_CLASS}">${this.mainMessage}</p> <div class="${this.notificationClassPrefix}-${NOTIFICATION_IMAGE_WRAPPER_CLASS} ${this.notificationClassPrefix}-${DEFAULT_ICON_CLASS}">${this.iconPath}</div> ${extraMessage}
      </div>`
    } else {
      notyWrapper.innerHTML = this.customHTML;
    }

    contentWrapper.insertAdjacentElement('afterbegin', notyWrapper);
    this.notificationWrapper = notyWrapper;
    this.appearAnimationArr = this.getAnimationClasses(this.appearAnimation);
    this.hideAnimationArr = this.getAnimationClasses(this.hideAnimation);
  }

  protected getAnimationClasses(str: string): string[] | [] {
    if (str.length > 0) {
      return str.split(' ');
    }
    return [];
  }

  protected setAnimationClasses(block: HTMLElement, classes: string[] | []): void {
    if (classes.length > 0) {
      classes.forEach((value: string) => {
        block.classList.add(value);
      });
    }
  }

  protected removeAnimationClasses(block: HTMLElement, classes: string[] | []): void {
    if (classes.length > 0) {
      classes.forEach((value: string) => {
        block.classList.remove(value);
      });
    }
  }

  showNotification() {
    this.removeAnimationClasses(this.notificationWrapper, this.hideAnimationArr);
    this.setAnimationClasses(this.notificationWrapper, this.appearAnimationArr);
    this.notificationWrapper.classList.add(this.showClass);
    contentWrapper.style.overflow = 'hidden';
    this.notificationState = true;
    if (this.allowContentShow) {
      this.hideNotificationOnClick();
    }
  }

  hideNotification() {
    this.removeAnimationClasses(this.notificationWrapper, this.appearAnimationArr);
    this.setAnimationClasses(this.notificationWrapper, this.hideAnimationArr);
    this.notificationState = false;
    setTimeout(() => {
      this.notificationWrapper.classList.remove(this.showClass);
      contentWrapper.style.overflow = '';
      this.removeAnimationClasses(this.notificationWrapper, this.hideAnimationArr);
    }, this.hideAnimationDuration)
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

  initialization() {
    if (this.type === this.deviceType()) {
      if (!this.notificationWrapper) {
        this.buildNotificationHtml();
        this.startNotification();
        this.initialized = true;
      }
      if (this.type === 'touchDevice') {
        window.addEventListener('orientationchange', this.startNotification)
      } else {
        window.addEventListener('resize', this.startNotification);
      }
    }
  }

  init() {
    this.initialization();
    window.addEventListener('resize', () => {
      if (this.deviceType() === this.type && !this.initialized) {
        this.initialization();
      } else if (this.deviceType() !== this.type && this.initialized) {
        this.destroy();
      }
    })
  }

  destroy() {
    if (this.initialized) {
      if (this.type === 'touchDevice') {
        window.removeEventListener('orientationchange', this.startNotification)
      } else {
        window.removeEventListener('resize', this.startNotification);
      }
      this.notificationState = false;
      contentWrapper.style.overflow = '';
      this.initialized = false;
      contentWrapper.removeChild(this.notificationWrapper);
      this.notificationWrapper = null;
    }
  }

}


