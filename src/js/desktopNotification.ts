import { NotificationClass } from './notificationGeneral';

const notificationSVG = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 206 160" style="enable-background:new 0 0 206 160;" xml:space="preserve">
<g>
<g>
 <path d="M181.64,160H24.36C10.93,160,0,149.07,0,135.64V24.36C0,10.93,10.93,0,24.36,0h157.28C195.07,0,206,10.93,206,24.36
   v111.28C206,149.07,195.07,160,181.64,160z M24.36,6C14.24,6,6,14.24,6,24.36v111.28C6,145.76,14.24,154,24.36,154h157.28
   c10.12,0,18.36-8.24,18.36-18.36V24.36C200,14.24,191.76,6,181.64,6H24.36z"/>
</g>
<g>
 <rect x="3" y="33.77" width="200" height="6"/>
</g>
<g>
 <circle cx="28.5" cy="21.5" r="4.5"/>
</g>
<g>
 <circle cx="41.5" cy="21.5" r="4.5"/>
</g>
<g>
 <circle cx="54.5" cy="21.5" r="4.5"/>
</g>
<g>
 <path d="M59.7,125.19c-0.99,0-1.96-0.49-2.53-1.38c-0.89-1.39-0.49-3.25,0.91-4.14L151,60.09c1.4-0.89,3.25-0.49,4.14,0.91
   c0.89,1.39,0.49,3.25-0.91,4.14l-92.92,59.58C60.82,125.04,60.26,125.19,59.7,125.19z"/>
</g>
<g>
 <path d="M76.78,129.81c-0.22,0-0.45-0.02-0.67-0.08l-17.92-4.09c-0.78-0.18-1.45-0.65-1.87-1.33c-0.42-0.67-0.56-1.49-0.38-2.26
   l4.4-19.3c0.37-1.62,1.98-2.63,3.59-2.26c1.62,0.37,2.63,1.98,2.26,3.59l-3.74,16.38l15,3.42c1.62,0.37,2.63,1.98,2.26,3.59
   C79.38,128.87,78.15,129.81,76.78,129.81z"/>
</g>
<g>
 <path d="M148.75,84.58c-0.22,0-0.45-0.02-0.67-0.08c-1.62-0.37-2.63-1.98-2.26-3.59l3.74-16.38l-15-3.42
   c-1.62-0.37-2.63-1.98-2.26-3.59c0.37-1.62,1.98-2.63,3.59-2.26l17.92,4.09c0.78,0.18,1.45,0.65,1.87,1.33
   c0.42,0.67,0.56,1.49,0.38,2.26l-4.4,19.3C151.35,83.64,150.11,84.58,148.75,84.58z"/>
</g>
</g>
</svg>`;

const desktopNotificationConfig = {
  allowContentShow: true,
  mainMessage: 'Please expand your browser window',
  extraMessage: 'or click to continue',
  desktopHeightBreak: 350,
  desktopWidthBreak: 400,
  showClass: 'show',
  notificationClassPrefix: 'desktop',
  iconPath: notificationSVG,
  appearAnimation: '',
  hideAnimation: '',
  hideAnimationDuration: 0,
  type: 'desktop',
  customHTML: false,
}

const createDesktopNotification = (userOpts?: object) => {
  const opts = { ...desktopNotificationConfig, ...userOpts };
  return new DesktopNotification(opts);
}

class DesktopNotification extends NotificationClass {
  desktopWidthBreak: number;
  desktopHeightBreak: number;
  constructor(opts: any) {
    super(opts);
    this.desktopWidthBreak = opts.desktopWidthBreak;
    this.desktopHeightBreak = opts.desktopHeightBreak;
  }

  startNotification() {
    if (this.getWindowHeight() < this.desktopHeightBreak || this.getWindowWidth() < this.desktopWidthBreak) {
      this.showNotification();
    } else {
      this.hideNotification();
    }
  }

}


const b = createDesktopNotification({
  hideAnimation: 'animated fadeOut',
  desktopHeightBreak: 500,
  desktopWidthBreak: 900,
});
b.init();