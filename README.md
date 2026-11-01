# NoDarts Goose

## Firebase

1. `firebase-config.js` is already wired to the registered NoDarts Goose Web app in the `nodartgoose` project. Its web config is public; never put a service-account key in this app.
2. The project already has a Cloud Firestore database. Deploy the included rules:

   ```sh
   firebase login
   firebase deploy --only firestore:rules
   ```

   The `.firebaserc` selects `nodartgoose`.

**Public access warning:** `firestore.rules` allows anyone to read, change, or delete documents in the app's five collections, without signing in. The app's player passwords only gate in-app editing; their salted hashes are stored in the publicly readable `players` documents and do not protect the Firebase data. Use these rules only if that public access is intentional.

## GitHub Pages

The live app is [NoDarts Goose on GitHub Pages](https://messo96.github.io/NoDartGoose/). GitHub Pages is configured to use Actions; the workflow publishes on pushes to `master` and `messo96-responsive-pwa-firebase`. Firestore remains the data backend. The app falls back to this browser's local storage while Firebase is unavailable. Install it from the browser's install control where supported; on iPhone/iPad use Safari's “Aggiungi alla schermata Home”.
