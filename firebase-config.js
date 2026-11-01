// Firebase web configuration is public. Never put service-account keys here.
window.NDG_FIREBASE_CONFIG = {
  apiKey: "AIzaSyDkqdPGXkb_o24DPxfQqqkRTGKXuFL6LVA",
  authDomain: "nodartgoose.firebaseapp.com",
  projectId: "nodartgoose",
  appId: "1:135421011:web:b9a8d3c898c998c2a13aa6"
};

(() => {
  const config = window.NDG_FIREBASE_CONFIG;
  const ready = config
    && config.apiKey
    && config.projectId
    && config.appId
    && config.projectId === "nodartgoose";
  if (!ready || !window.firebase || !firebase.firestore) return;

  try {
    const app = firebase.apps.length ? firebase.app() : firebase.initializeApp(config);
    const db = app.firestore();
    db.enablePersistence({ synchronizeTabs: true }).catch(error => {
      if (error.code === "failed-precondition" || error.code === "unimplemented") {
        console.info("Cache Firestore offline non disponibile in questo browser o scheda.");
      } else {
        console.error("Cache Firestore offline non attivata:", error);
      }
    });
    window.NDG_FIREBASE = {
      db,
      user: { can: async () => true }
    };
  } catch (error) {
    console.error("Firebase non inizializzato:", error);
  }
})();
