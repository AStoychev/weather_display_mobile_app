## About the app

A mobile application that displays the temperature in Celsius, Fahrenheit and Kelvin, written in React Native.


## How to install and run the project?

1. Clone the repo: `https://github.com/AStoychev/weather_display_mobile_app.git` .

2. In the terminal, enter the command: `npm install`.

3. Register at [Open Weather Map](https://openweathermap.org/) and get your API KEY:
    - Create **.env** file in root directory of the project.
    - Add in **.env** file **EXPO_PUBLIC_API="YOUR API KEY"**.

4. To run the application on an Android device.
    - First enable developer option on your device from settings.
        * For Android devices you can see here:
            - [Android Developer Mode](https://developer.android.com/studio/debug/dev-options);
            - [Android Phone Developer Mode](https://www.digitaltrends.com/mobile/how-to-get-developer-options-on-android/)

        * For iOS devices you can see here:
            - [iOS Developer Mode](https://docs.expo.dev/guides/ios-developer-mode/);

        * *** Sometimes enabling developer mode may be different depending on the manufacturer and model of the device! ***
        
    - Download Expo Go to your device.
        - [Useful link - set up your environment Expo](https://docs.expo.dev/get-started/set-up-your-environment/?platform=android&device=physical)

5. Start the app with command: `npx expo start` .
    - After launching the app, open Expo Go and scan the QR code from the terminal.
    - If everything went successfully your application should work.

6. Start the tests with command: `npm run test` .


## Some Screenshots

**Start page**
<p align="center">
  <img src="https://github.com/AStoychev/weather_display_mobile_app/blob/master/assets/Screenshots/start-screen.jpg">
</p>

**Home page**
<p align="center">
  <img src="https://github.com/AStoychev/weather_display_mobile_app/blob/master/assets/Screenshots/home.jpg">
</p>

**Search**
<p align="center">
  <img src="https://github.com/AStoychev/weather_display_mobile_app/blob/master/assets/Screenshots/search-first.jpg">
</p>

**Search**
<p align="center">
  <img src="https://github.com/AStoychev/weather_display_mobile_app/blob/master/assets/Screenshots/search-second.jpg">
</p>

**Search**
<p align="center">
  <img src="https://github.com/AStoychev/weather_display_mobile_app/blob/master/assets/Screenshots/search-third.jpg">
</p>

**Error Message**
<p align="center">
  <img src="https://github.com/AStoychev/weather_display_mobile_app/blob/master/assets/Screenshots/error.jpg">
</p>

**Something funny**
<p align="center">
  <img src="https://github.com/AStoychev/weather_display_mobile_app/blob/master/assets/Screenshots/carrot.jpg">
</p>
