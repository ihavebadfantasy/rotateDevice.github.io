let NOTIFICATION_WRAPPER_CLASS = 'notification-wrapper';
let NOTIFICATION_BLOCK_CLASS = 'notification-block';
let NOTIFICATION_MAIN_MESSAGE_CLASS = 'notification-main-message';
let NOTIFICATION_EXTRA_MESSAGE_CLASS = 'notification-extra-message';
let NOTIFICATION_IMAGE_WRAPPER_CLASS = 'notification-img-wrapper';
const contentWrapper = document.body;
const ORIENTATIONCHANGE_DELAY = 50; 

export abstract class NotificationClass {
  isTouchDevice: boolean;
  mainMessage: string;
  extraMessage: string;
  notificationWrapper: HTMLUnknownElement;
  allowContentShow: boolean;
  showClass: string;
  notificationClassPrefix: string;
  iconPath: any;
  appearAnimation: string;
  hideAnimation: string;
  hideAnimationDuration: number;
  appearAnimationArr?: string[] | [];
  hideAnimationArr?: string[]| [];
  notificationState: boolean;
  constructor(opts: any) {
    this.isTouchDevice = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(navigator.userAgent);
    this.mainMessage = opts.mainMessage;
    this.extraMessage = opts.extraMessage;
    this.allowContentShow = opts.allowContentShow;
    this.showClass = 'show';
    this.notificationClassPrefix = opts.notificationClassPrefix;
    this.iconPath = opts.iconPath;
    this.appearAnimation = opts.appearAnimation;
    this.hideAnimation = opts.hideAnimation;
    this.hideAnimationDuration = (opts.hideAnimationDuration === 0 && opts.hideAnimation !== '')? (400):(opts.hideAnimationDuration);
    this.notificationState = false;
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
    notyBlock.classList.add(`${this.notificationClassPrefix}-${NOTIFICATION_BLOCK_CLASS}`);
    const notyMainMessage = document.createElement('p');
    notyMainMessage.classList.add(`${this.notificationClassPrefix}-${NOTIFICATION_MAIN_MESSAGE_CLASS}`);
    notyMainMessage.innerText = this.mainMessage;
    let notyExtraMessage;
    if (this.extraMessage) {
      notyExtraMessage = document.createElement('p');
      notyExtraMessage.classList.add(`${this.notificationClassPrefix}-${NOTIFICATION_EXTRA_MESSAGE_CLASS}`);
      notyExtraMessage.innerText = this.extraMessage;
    }
    notyBlock.appendChild(notyMainMessage);
    const imageWrapper = document.createElement('div');
    imageWrapper.classList.add(`${this.notificationClassPrefix}-&${NOTIFICATION_IMAGE_WRAPPER_CLASS}`);
    let image;
    if (typeof this.iconPath === 'string') {
      image = document.createElement('img');
      image.src = this.iconPath;
      image.alt = 'icon';
    } else {
      image = this.iconPath;
    }
    notyBlock.appendChild(image);
    if (notyExtraMessage) {
      notyBlock.appendChild(notyExtraMessage);
    }
    notyWrapper.appendChild(notyBlock);
    contentWrapper.insertAdjacentElement('afterbegin', notyWrapper);
    this.notificationWrapper = notyWrapper;
    this.appearAnimationArr = this.getAnimationClasses(this.appearAnimation);
    this.hideAnimationArr = this.getAnimationClasses(this.hideAnimation);
  }

  getAnimationClasses (str: string): string[] | [] {
    if (str.length > 0) {
      return str.split(' ');
    }
    return []
  }

  setAnimationClasses (block: HTMLElement, classes: string[] | []): void {
    if (classes.length > 0) {
      classes.forEach( (value: string) => {
        block.classList.add(value);
      });
    }
  }

  removeAnimationClasses (block: HTMLElement, classes: string[] | []): void {
    if (classes.length > 0) {
      classes.forEach( (value: string) => {
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
    setTimeout( () => {
      this.notificationWrapper.classList.remove(this.showClass);
      contentWrapper.style.overflow = '';
      this.removeAnimationClasses(this.notificationWrapper, this.hideAnimationArr);
    }, this.hideAnimationDuration)
  }

  hideNotificationOnClick() {
    window.addEventListener('click', () => {
      this.hideNotification();
    });
  }

  abstract startNotification(): void; 

  init() {
    window.addEventListener('load', () => {
      this.buildNotificationHtml();
      this.startNotification();
    });
    window.addEventListener('resize', () => {
      setTimeout( ()=> {
        this.startNotification();
      }, ORIENTATIONCHANGE_DELAY)
    });
  }

}


