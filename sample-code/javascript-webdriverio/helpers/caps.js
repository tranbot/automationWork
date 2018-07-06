const path = require("path");

const iosCaps = {
  platformName: "iOS",
  automationName: "XCUITest",
  deviceName: process.env.IOS_DEVICE_NAME || "iPhone 6s",
  platformVersion: process.env.IOS_PLATFORM_VERSION || "11.1",
  app: undefined // Will be added in tests
};

const iosWebCaps = {
  platformName: "iOS",
  automationName: "XCUITest",
  deviceName: process.env.IOS_DEVICE_NAME || "iPhone 6s",
  platformVersion: process.env.IOS_PLATFORM_VERSION || "11.1",
  browserName: "Safari"
};

// Leave the Android platformVersion blank and set deviceName to a random string (Android deviceName is ignored by Appium but is still required)
// If we're using SauceLabs, set the Android deviceName and platformVersion to the latest supported SauceLabs device and version
const DEFAULT_ANDROID_DEVICE_NAME = '712KPNY1204455';
const DEFAULT_ANDROID_PLATFORM_VERSION = '9';

const androidCaps = {
  platformName: "Android",
  automationName: "UiAutomator2",
  deviceName: DEFAULT_ANDROID_DEVICE_NAME,
  platformVersion: DEFAULT_ANDROID_PLATFORM_VERSION,
  app: undefined // Will be added in tests
};

const androidWebCaps = {
  platformName: "Android",
  automationName: "UiAutomator2",
  deviceName: DEFAULT_ANDROID_DEVICE_NAME,
  platformVersion: DEFAULT_ANDROID_PLATFORM_VERSION,
  browserName: "chrome"
};

const serverConfig = {
  host: process.env.APPIUM_HOST || "localhost",
  port: process.env.APPIUM_PORT || 4723,
  logLevel: "verbose"
};

const androidOptions = Object.assign(
  {
    desiredCapabilities: androidCaps
  },
  serverConfig
);

const iosOptions = Object.assign(
  {
    desiredCapabilities: iosCaps
  },
  serverConfig
);

const androidWebOptions = Object.assign(
  {
    desiredCapabilities: androidWebCaps
  },
  serverConfig
);

const iosWebOptions = Object.assign(
  {
    desiredCapabilities: iosWebCaps
  },
  serverConfig
);

module.exports = {
  androidOptions,
  iosOptions,
  androidWebOptions,
  iosWebOptions
};
