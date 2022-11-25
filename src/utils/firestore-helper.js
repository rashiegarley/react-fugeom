import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
} from 'firebase/firestore';
import { FIREBASE_APP } from '../db/firebase.config.js';

const db = getFirestore(FIREBASE_APP);

export async function createContact(contactObj) {
  try {
    const docRef = await addDoc(collection(db, 'contacts'), contactObj);
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

export async function getContacts() {
  try {
    const querySnapshot = await getDocs(collection(db, 'contacts'));
    return querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  } catch (e) {
    console.error('Error getting documents: ', e);
  }
}

export async function getContactById(contactId) {
  try {
    const docRef = doc(db, contactId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log('Document data:', docSnap.data());
      return docSnap.data();
    } else {
      // doc.data() will be undefined in this case
      console.log('No such document!');
      return null;
    }
  } catch (e) {
    console.error('Error getting document: ', e);
  }
}
