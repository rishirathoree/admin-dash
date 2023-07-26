// import { getMessaging } from "firebase/messaging";
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries


// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBOvi3r-wMUQYHgyLSEik9Xx85djIufbXM",
//   authDomain: "kedireact.firebaseapp.com",
//   projectId: "kedireact",
//   storageBucket: "kedireact.appspot.com",
//   messagingSenderId: "330499917000",
//   appId: "1:330499917000:web:3e0858371efe8a840bd1fd"
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);

// // Initialize Firebase Cloud Messaging and get a reference to the service
// export const message = getMessaging(app)


// // const registerServiceWorker = async () => {
// //     if ("serviceWorker" in navigator) {
// //       try {
// //         const registration = await navigator.serviceWorker.register('/firebase-messaging-sw.js');
// //         console.log("Service Worker registered:", registration);
// //       } catch (error) {
// //         console.log("Service Worker registration failed:", error);
// //       }
// //     }
// //   };

// //   const reqPermission = async () => {
// //     try {
// //       if (Notification.permission === "granted") {
// //         const token = await getToken();
// //         console.log("Token:", token);
// //       } else if (Notification.permission !== "denied") {
// //         const permission = await Notification.requestPermission();
// //         if (permission === "granted") {
// //           const token = await getToken();
// //           console.log("Token:", token);
// //         } else {
// //           console.log("Notification permission denied.");
// //         }
// //       }
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   };

// //   const getToken = async () => {
// //     return await messaging.getToken({valid: 'BHVrJ7D4K9kR9EFhvn56tzvowoKGi54oihipj;O5W1q-dewUUK_QmzD_4Lyoex8CY_KW5Jxo1RMQ09Y3FJ2mXu3uQosG0M'});
// //   };