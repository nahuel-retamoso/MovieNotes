import { db } from "./index";
import { collection, deleteDoc, doc, getDocs, setDoc } from "firebase/firestore";

export async function create (movieName, note, userId) {
    try {
        await setDoc(doc(db, `users/${userId}/movies/${movieName}`), note )
    } catch (err) {
        console.error(err)
        }
    }

    export async function readNotes (userId) {
        try {
            const read = await getDocs(collection(doc(collection(db, "users"), userId), 'movies'))
            return(read)
        } catch (err) {
            console.error(err)
        }
    }

    export async function deleteNote (title, userId) {
        try {
            await deleteDoc(doc(collection(db, "users"), userId, title))
        } catch (err) {
            console.error(err)
        }
    }
