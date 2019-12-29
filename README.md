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
|blockedOrientation|string|landscape|orientation of device the user should have to use up site/app (not the one you want to block)|
|allowContentShow|boolean|true|allow site/app content show on tap|
|onlyMobile|boolean|boolean|true|show notification on mobile phones only (set to false if you want notification on tablets too)|
|mainMessage|string|'Please turn your device'|general notification message (available if you use default notification template)|
|extraMessage|string|'or tap the screen to continue'|extra notification message (available if you use default notification template and allowContentShow: true)|
|responsivePortraitBreak|number|767|determine the breakpoint on which to show notification for mobile phones (better not to change if using onlyMobile:true othervise you understand what you are doing)|
|responsiveLandscapeBreak|number|850|determine the breakpoint on which to show notification for mobile phones (better not to change if using onlyMobile:true othervise you understand what you are doing)|
iconPath|string or SVGHTMLElement|default svg icon|path to icon or svg icon (available if you use default notification template)

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
iconPath|string or SVGHTMLElement|default svg icon|path to icon or svg icon (available if you use default notification template)

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
