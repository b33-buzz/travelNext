import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import app from "./init";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const firestore = getFirestore(app);
const auth = getAuth(app);

export async function signOutHandler() {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error);
  }
}

export async function signUpHandler(
  email: string,
  password: string,
  username: string
) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Update the user profile with the display name
    await updateProfile(user, {
      displayName: username,
    });

    // Optionally, you can also store additional user information in your Firestore database
    // Example: await setDoc(doc(firestore, 'users', user.uid), { displayName: username });

    console.log(user);
  } catch (error) {
    console.error(error);
  }
}

export async function signInHandler(email: string, password: string) {
  try {
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    });
  } catch (error) {
    console.log(error);
  }
}

export async function retrieveData(collectionName: string) {
  const snapshot = await getDocs(collection(firestore, collectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
}

export async function retrieveDataById(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(firestore, collectionName, id));
  const data = snapshot.data();
  return data;
}
