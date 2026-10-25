/* =============================================================
   QAMO 4651 — Social Media & Anxiety (simple regression)
   THE ONLY FILE YOU NEED TO EDIT.

   Uses the SAME Firebase project and rules as the other activities.
   Only the `activity` id (and this activity's settings) differ.
   ============================================================= */

window.APP_CONFIG = {

  // -------- Firebase (same QAMO 4651 project as before) ----------
  firebase: {
    apiKey: "AIzaSyD9hu9H7M1m7vAOaL8pqtHG8K7JHlbZeHc",
    authDomain: "qamo4651-lecture3.firebaseapp.com",
    projectId: "qamo4651-lecture3",
    storageBucket: "qamo4651-lecture3.firebasestorage.app",
    messagingSenderId: "97391190278",
    appId: "1:97391190278:web:d68eaa22b62e9097743e87"
  },

  // -------- Activity id (unique per weekly activity) ------------
  activity: "socialanxiety",

  // -------- Survey settings (safe to leave as-is) ---------------
  maxMinutes: 1440,      // reject impossible entries (minutes in a day)
  anxietyMin: 1,         // anxiety scale low end
  anxietyMax: 10,        // anxiety scale high end

  // The regression uses X in HOURS per day (students enter minutes; we divide by 60),
  // so beta-1-hat reads as "change in anxiety per extra HOUR on social media".
  // Set to "minutes" if you'd rather keep X in minutes.
  xUnit: "hours",

  // -------- Instructor page passcode (SHA-256 hash, NOT the passcode itself) -----
  // Same passcode as Meet the Class.
  // To change it, tell Claude the new passcode, or run:
  //   echo -n "YOUR PASSCODE" | shasum -a 256
  instructorPasscodeHash: "b7751d67986ca67b3984d2107797a55373b0bfe8ede2710ed986f58da7dd7294"
};
