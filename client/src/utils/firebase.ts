import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const { initializeAppCheck, ReCaptchaV3Provider, getToken } = require("firebase/app-check");

const firebaseConfig = {
  apiKey: "AIzaSyCM0IwJMaIjGKfhHiqlfEs5TDZORCEfkkk",
  authDomain: "ukraine-now.firebaseapp.com",
  projectId: "ukraine-now",
  storageBucket: "ukraine-now.appspot.com",
  messagingSenderId: "105230718898",
  appId: "1:105230718898:web:c4f60226b471be9548b6ab",
  measurementId: "G-YWNKXFZED7"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('6LdUuGkjAAAAABIn73PnOwYCKBbPFjrs4rTssQb9'),
  isTokenAutoRefreshEnabled: true
});

export const getAppCheckToken = async () => {
  let appCheckTokenResponse;
  try {
    appCheckTokenResponse = await getToken(appCheck, /* forceRefresh= */ false);
  } catch (err) {

    console.error('Failed to get App Check token', err);
    return;
  }

  return appCheckTokenResponse.token
  // Include the App Check token with requests to your server.
  // const apiResponse = await fetch('https://yourbackend.example.com/yourApiEndpoint', {
  //   headers: {
  //     'X-Firebase-AppCheck': appCheckTokenResponse.token,
  //   }
  // });

};