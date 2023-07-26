importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker
firebase.initializeApp({
  apiKey: "AIzaSyBOvi3r-wMUQYHgyLSEik9Xx85djIufbXM",
  authDomain: "kedireact.firebaseapp.com",
  projectId: "kedireact",
  storageBucket: "kedireact.appspot.com",
  messagingSenderId: "330499917000",
  appId: "1:330499917000:web:3e0858371efe8a840bd1fd"
});

// Retrieve the messaging instance
const messaging = firebase.messaging();

// Use the imported messaging variable directly
messaging.setBackgroundMessageHandler((payload) => {
  console.log("Received background message:", payload);

  return self.registration.showNotification("Background Message", {
    body: payload.data.message,
  });
});
