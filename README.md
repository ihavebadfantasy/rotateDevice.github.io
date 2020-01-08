## TouchDeviceNotification Settings

Pass the settings into creating function. For example:

```js
var TouchDeviceNotification = createDesktopNotification({
  blockedOrientation: 'portrait',
  onlyMobile: false,
});
```

|Setting|Type|Default Value|Description|
|---|---|---|---|
|blockedOrientation|string|landscape|orientation of device you want to block|
|allowContentShow|boolean|true|allow site/app content show on tap|
|mainMessage|string|'Please turn your device'|general notification message (available if you use default notification template)|
|extraMessage|string|'or tap the screen to continue'|extra notification message (available if you use default notification template and allowContentShow: true)|
|responsivePortraitBreak|number|767|determine the breakpoint on which to show notification for mobile phones (default size is the one that will work on all the mobile phones but not on tablets)|
|responsiveLandscapeBreak|number|850|determine the breakpoint on which to show notification for mobile phones (default size is the one that will work on all the mobile phones but not on tablets)|
iconPath|string|default svg icon|path to icon (any format) or svg icon(available if you use default notification template)|
appearAnimation|string|''|pass the string with animation classes you want to set on notification appearance (like animate.css classes 'animated fadeIn)|
hideAnimation|string|''|pass the string with animation classes you want to set on notification hiding (like animate.css classes 'animated fadeOut)|
hideAnimationDuration|number|0/400|duration of hideAnimation (if no hideAnimation default is 0; if hideAnimation is passed and hideAnimationDuration is not set - default is 400 (ms))|

## DesktopNotification Settings

Pass the settings into creating function. For example:

```js
var DesktopNotification = createDesktopNotification({
  allowontentShow: false,
});
```

|Setting|Type|Default Value|Description|
|---|---|---|---|
|allowContentShow|boolean|true|allow site/app content show on tap|
|mainMessage|string|'Please expand your browser window'|general notification message (available if you use default notification template)|
|extraMessage|string|'or click to continue'|extra notification message (available if you use default notification template and allowContentShow: true)|
|desktopHeightBreak|number|350|determine the height breakpoint on which to show notification|
|desktopWidthBreak|number|400|determine the width breakpoint on which to show notification|
iconPath|string or SVGHTMLElement|default svg icon|path to icon or svg icon (available if you use default notification template)|
appearAnimation|string|''|pass the string with animation classes you want to set on notification appearance (like animate.css classes 'animated fadeIn)|
hideAnimation|string|''|pass the string with animation classes you want to set on notification hiding (like animate.css classes 'animated fadeOut)|
hideAnimationDuration|number|0/400|duration of hideAnimation (if no hideAnimation default is 0; if hideAnimation is passed and hideAnimationDuration is not set - default is 400 (ms))|

## DesktopNotification API

To use the API methods you must store the notification object. For example:

```js
var desktopNotification = createDesktopNotification();
desktopNotificationInit.init();
```

|Method|Description|
|---|---|
|init()|Creating HTMLElement, appending it in markup and starting notification event listeners (start notification)|

## TouchDeviceNotification API

To use the API methods you must store the notification object. For example:

```js
var TouchDeviceNotification = createDesktopNotification();
desktopNotificationInit.init();
```

|Method|Description|
|---|---|
|init()|Creating HTMLElement, appending it in markup and starting notification event listeners (start notification)|
