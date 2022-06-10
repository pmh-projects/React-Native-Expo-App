 # React Native - <i>task tracker</i> 

<p align="center">

  N32-31<br>
  Team: Paweł Mach, Bartosz Kutkowski
  
 </p>
 
 <!-- TABLE OF CONTENTS -->
<details>
  <summary>Spis treści</summary>
  <ol>
    <li>
      <a href="#opis">Opis</a>
      <ul>
        <li><a href="#architektura-oprogramowania">Architektura oprogramowania</a></li>
      </ul>
    </li>
    <li>
      <a href="#app-demo-mobile android">App demo mobile Android</a>
    </li>
    <li>
      <a href="#app-demo-web">App demo web</a>
    </li>
    <li>
      <a href="#baza-danych">Baza danych</a>
    </li>
     <li>
      <a href="#start">Start</a>
    </li>
  </ol>
</details>

 
 ## Opis

  Jest to prosta aplikacja umożliwiająca po zalogowaniu się zarejestrowanego użytkownika
  dodawanie zadań do wykonania oraz oznaczania ich jako "wykonane", a także ich usuwania.
  Testowana przy pomocy emulatora Pixel 5 API 30 na Android Studio.

### Architektura oprogramowania

* [React Native](https://reactnative.dev/)
* [Firebase](https://firebase.google.com/)
* [Expo](https://expo.dev/)
* [Android Studio](https://developer.android.com/)
* [Visual Studio Code](https://code.visualstudio.com/)

## App demo mobile Android

<p align="center">
  <img src="https://github.com/pmh-projects/ern/blob/master/addfiles/reactnativeexpo2022_v02.gif" alt="animated" />
</p>

<p align="right">(<a href="#top">wróc do góry</a>)</p>

## App demo web

<p align="center">
  <img src="https://github.com/pmh-projects/ern/blob/master/addfiles/reactnativeexpo2222.gif" alt="animated" />
</p>

<p align="right">(<a href="#top">wróc do góry</a>)</p>

## Baza danych

Konta użytkowników oraz zadania są zapisywane w bazie Firebase (Cloud Firestore):
  
<p align="center">
  <img src="https://github.com/pmh-projects/ern/blob/master/addfiles/fire.png" alt="animated" />
</p><p align="center">
  <img src="https://github.com/pmh-projects/ern/blob/master/addfiles/fire2.jpg" alt="animated" />
</p>

## Start

  Po pobraniu repo należy wykonać w komendy w terminalu w folderze głównym aplikacji:

  ```sh
  npm install
  expo start
  ```

<p align="right">(<a href="#top">wróc do góry</a>)</p>
