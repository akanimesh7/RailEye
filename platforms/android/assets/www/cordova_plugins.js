cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-background-mode.BackgroundMode",
    "file": "plugins/cordova-plugin-background-mode/www/background-mode.js",
    "pluginId": "cordova-plugin-background-mode",
    "clobbers": [
      "cordova.plugins.backgroundMode",
      "plugin.backgroundMode"
    ]
  },
  {
    "id": "cordova-plugin-badge.Badge",
    "file": "plugins/cordova-plugin-badge/www/badge.js",
    "pluginId": "cordova-plugin-badge",
    "clobbers": [
      "cordova.plugins.notification.badge"
    ]
  },
  {
    "id": "cordova-plugin-dialogs.notification",
    "file": "plugins/cordova-plugin-dialogs/www/notification.js",
    "pluginId": "cordova-plugin-dialogs",
    "merges": [
      "navigator.notification"
    ]
  },
  {
    "id": "cordova-plugin-dialogs.notification_android",
    "file": "plugins/cordova-plugin-dialogs/www/android/notification.js",
    "pluginId": "cordova-plugin-dialogs",
    "merges": [
      "navigator.notification"
    ]
  },
  {
    "id": "cordova-plugin-geolocation.geolocation",
    "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
    "pluginId": "cordova-plugin-geolocation",
    "clobbers": [
      "navigator.geolocation"
    ]
  },
  {
    "id": "cordova-plugin-geolocation.PositionError",
    "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
    "pluginId": "cordova-plugin-geolocation",
    "runs": true
  },
  {
    "id": "cordova-plugin-local-notification.LocalNotification",
    "file": "plugins/cordova-plugin-local-notification/www/local-notification.js",
    "pluginId": "cordova-plugin-local-notification",
    "clobbers": [
      "cordova.plugins.notification.local"
    ]
  },
  {
    "id": "cordova-plugin-local-notification.LocalNotification.Core",
    "file": "plugins/cordova-plugin-local-notification/www/local-notification-core.js",
    "pluginId": "cordova-plugin-local-notification",
    "clobbers": [
      "cordova.plugins.notification.local.core",
      "plugin.notification.local.core"
    ]
  },
  {
    "id": "cordova-plugin-local-notification.LocalNotification.Util",
    "file": "plugins/cordova-plugin-local-notification/www/local-notification-util.js",
    "pluginId": "cordova-plugin-local-notification",
    "merges": [
      "cordova.plugins.notification.local.core",
      "plugin.notification.local.core"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-android-support-v4": "21.0.1",
  "cordova-plugin-app-event": "1.2.1",
  "cordova-plugin-device": "2.0.1",
  "cordova-plugin-background-mode": "0.7.2",
  "cordova-plugin-badge": "0.8.7",
  "cordova-plugin-dialogs": "2.0.1",
  "cordova-plugin-geolocation": "4.0.1",
  "cordova-plugin-local-notification": "0.9.0-beta.2",
  "cordova-plugin-whitelist": "1.3.3"
};
// BOTTOM OF METADATA
});