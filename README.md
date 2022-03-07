## MealToGo 🎯

Search for restaurants in multiple cities and, get their details and save your favourite restaurants.

## Features 🔥

✔️ Authentication with email & password <br />
✔️ Render restaurants on Google/Apple Maps <br />
✔️ Google/Apple Maps <br />
✔️ Persistant data with local storage <br />
✔️ Performance improvement GraphQL caching <br />

## Screenshots 📸

![Splash screen](assets/splash.png)
![Animation](screenshots/animation.gif)
![Favourites](screenshots/favourites.gif)
![Login](screenshots/login.gif)
![Map](screenshots/map.gif)
![Restaurant Detail](screenshots/restaurant-detail.gif)
![Search](screenshots/search.gif)
![Settings](screenshots/settings.gif)

## Technologies used 🛠️

**Code**: _React Native_<br />
**Design**: _Styled Components_<br />
**Authentication**: _Firebase auth_<br />
**Map**: _Google/Apple Maps_<br />

## Usage 📋

<details open>
<summary>1. Server Setup</summary>

```bash
#1. clone this project
~ git clone https://github.com/oussamabouchikhi/MealsToGo.git
#2. cd into it
~ cd MealsToGo
#3.a install expo-cli globally (if you don have it)
~ npm i -g expo-cli
#3.b install yarn globally (if you don have it)
~ npm i -g yarn
#3.c install app dependencies
~ yarn
#4. run app
# a. On an Android emulator
~ yarn android
# b. On an ios simulator
~ yarn ios
# b. On your device
~ yarn start
# then scan the QRCode, but make sure to install expo client on your phone

```

_available scripts_

```bash
~ yarn start   # start the app (then choose where to run)
~ yarn android # run the app on an Android emulator
~ yarn ios     # run the app on an ios simulator
~ yarn web     # run the app on the browser (web version)
~ yarn eject   # eject app from expo to a normal app
~ yarn lint    # lint the app code
```

</details>

<details>
<summary>2. Firebase Setup</summary>

Remember to replace the `config` variable in your `firebase.utils.js` with your own config object from the firebase dashboard! Navigate to the project settings and scroll down to the config code. Copy the object in the code and replace the variable in your cloned code.

![Firebase](https://i.ibb.co/6ywMkBf/Screen-Shot-2019-07-01-at-11-35-02-AM.png "image to firebase config")

</details>

</details>

## Contributing 💡

Pull request are welcome but please open an issue and discuss what you will do before 😊

## License 📄

This project is open-sourced under the [MIT license](https://opensource.org/licenses/MIT).
