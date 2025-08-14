// Firebase config (YOUR project)
const firebaseConfig = {
  apiKey: "AIzaSyByANBjLzBtTAsGNOwSSz5uqJm6QYuaw-g",
  authDomain: "youuh-5d9e3.firebaseapp.com",
  databaseURL: "https://youuh-5d9e3-default-rtdb.firebaseio.com",
  projectId: "youuh-5d9e3",
  storageBucket: "youuh-5d9e3.firebasestorage.app",
  messagingSenderId: "772789757705",
  appId: "1:772789757705:web:a8e73acadfcaa4324795d8"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// IMPORTANT: Safe demo — ignore real input; write only generated demo labels.
document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  // Always store a synthetic username instead of what user typed
  const demoId = Math.random().toString(36).slice(2,8);
  const payload = {
    username: "demo-user-" + demoId,
    time: new Date().toISOString()
  };
  db.ref('loginAttempts').push(payload).finally(() => {
    e.target.reset();
  });
});
