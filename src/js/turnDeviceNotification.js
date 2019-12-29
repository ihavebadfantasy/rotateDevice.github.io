/* eslint-disable eqeqeq */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-restricted-globals */
/* eslint-disable class-methods-use-this */
/* eslint-disable max-len */

const turnDeviceNotification = (userOpt) => {
  // getting actual notification config opts
  const defaultOpt = {
    desiredOrientation: 'portrait',
    allowContentShow: false,
    onlyMobile: false,
    mainMessage: 'Please turn your device',
    img: null,
    isTouchDevice: /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(navigator.userAgent),
    responsiveLandscapeBreak: 850,
    responsivePortraitBreak: 767,
    allowDesktopNotification: false,
    desktopWidthBreak: 700,
    desktopHeightBreak: 350,
  };

  const opt = { ...defaultOpt, ...userOpt };

  // default notification class
  class TouchScreenNotification {
    constructor(options) {
      this.desiredOrientation = options.desiredOrientation;
      this.allowContentShow = options.allowContentShow;
      this.onlyMobile = options.onlyMobile;
      this.mainMessage = options.mainMessage;
      this.extraMessage = (this.allowContentShow) ? (options.extraMessage || '(or tap your screen to continue)') : null;
      this.img = options.img || null;
      this.isTouchDevice = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(navigator.userAgent);
      this.responsivePortraitBreak = options.responsivePortraitBreak;
      this.responsiveLandscapeBreak = options.responsiveLandscapeBreak;
    }

    // class helper methods
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

    getWindowWidth() {
      return window.innerWidth;
    }

    getWindowHeight() {
      return window.innerHeight;
    }

    // class general methods
    buildNotificationHtml() {
      const notyWrapper = document.createElement('div');
      notyWrapper.classList.add('notification-wrapper');
      const notyBlock = document.createElement('div');
      notyBlock.classList.add('notification-block');
      const notyMainMessage = document.createElement('p');
      notyMainMessage.classList.add('notification-main-message');
      notyMainMessage.innerText = this.mainMessage;
      let notyExtraMessage;
      if (this.extraMessage) {
        notyExtraMessage = document.createElement('p');
        notyExtraMessage.classList.add('notification-extra-message');
        notyExtraMessage.innerText = this.extraMessage;
      }
      notyBlock.appendChild(notyMainMessage);
      if (typeof notyExtraMessage !== 'undefined') {
        notyBlock.appendChild(notyExtraMessage);
      }
      notyWrapper.appendChild(notyBlock);
      document.body.insertAdjacentElement('beforeBegin', notyWrapper);
      this.notificationWrapper = notyWrapper;
    }

    showNotification() {
      this.notificationWrapper.classList.add('show');
      document.body.style.overflow = 'hidden';
      if (this.allowContentShow) {
        this.hideNotificationOnClick();
      }
    }

    hideNotification() {
      this.notificationWrapper.classList.remove('show');
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

    // class logic methods
    startNotification() {
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

    // class action method
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

  // class with that will show notification on desktop also

  class TouchScreenAndDesktopNotification extends TouchScreenNotification {
    constructor(options) {
      super(options);
      this.allowDesktopNotification = true;
      this.desktopWidthBreak = options.desktopWidthBreak || 700;
      this.desktopHeightBreak = options.desktopHeightBreak || 350;
      this.mainMessage = (this.mainMessage === 'Please turn your device') ? ('Please expand your browser window') : options.mainMessage;
      this.extraMessage = (this.extraMessage === '(or tap your screen to continue)') ? ('(or click to continue)') : options.extraMessage;
    }

    setDesktopNotification() {
      if (!this.isTouchDevice) {
        if (this.getWindowHeight() < this.desktopHeightBreak || this.getWindowWidth() < this.desktopWidthBreak) {
          this.showNotification();
        }
      }
    }

    startNotification() {
      super.startNotification();
      this.setDesktopNotification();
    }
  }

  if (!opt.allowDesktopNotification) {
    return new TouchScreenNotification(opt);
  }
  return new TouchScreenAndDesktopNotification(opt);
};

export default turnDeviceNotification;
