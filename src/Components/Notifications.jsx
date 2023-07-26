// import { useEffect } from "react";
// import { message } from "./Firebase";
// import { getMessaging } from "firebase/messaging";

// const Notification = () => {
//   const registerServiceWorker = async () => {
//     if ("serviceWorker" in navigator) {
//       try {
//         const registration = await navigator.serviceWorker.register('/firebase-messaging-sw.js');
//         console.log("Service Worker registered:", registration);
//       } catch (error) {
//         console.log("Service Worker registration failed:", error);
//       }
//     }
//   };

//   const reqPermission = async () => {
//     try {
//       const permission = await window.Notification.requestPermission();
//       if (permission === "granted") {
//         const token = await getToken();
//         console.log("Token:", token);
//       } else if (permission === "denied") {
//         console.log("Notification permission denied.");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const getToken = async () => {
//     return await getToken(getMessaging,{valid: 'BHVrJ7D4K9kR9EFhvn56tzvowoKGi54oihipj;O5W1q-dewUUK_QmzD_4Lyoex8CY_KW5Jxo1RMQ09Y3FJ2mXu3uQosG0M'});
//   };

//   useEffect(() => {
//     registerServiceWorker();
//     reqPermission();
//   }, []);

//   return (
//     <>
//       <i className="bx bx-bell"></i>
//     </>
//   );
// };

// export default Notification;
