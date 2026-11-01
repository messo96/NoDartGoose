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

The GitHub Actions workflow publishes the static app on pushes to `master` and the setup branch. It keeps the app on GitHub Pages while Firestore remains the data backend. Pages must be enabled with the Actions source in the repository settings. The app falls back to this browser's local storage while Firebase is unavailable. After deployment, install it from the browser's install control where supported; on iPhone/iPad use Safari's “Aggiungi alla schermata Home”.
