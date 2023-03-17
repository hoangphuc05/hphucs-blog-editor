
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

const emailSignIn = async (email, password) => {
    try{
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        return userCredential
    } catch (e) {
        console.log(e);
        return null;
    }
    
}

export {emailSignIn};