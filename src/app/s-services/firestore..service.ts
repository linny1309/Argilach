import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';
import { auth } from 'firebase/app';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { switchMap } from 'rxjs/operators';
import { User } from './user.model';
import { Router } from '@angular/router'

@Injectable({
    providedIn: 'root'
})

export class FirebaseService {
    user$: Observable<any>;

    public signedIn: Observable<any>;

    constructor(public fs: AngularFirestore, public auth: AngularFireAuth, public router: Router) {
        this.signedIn = new Observable((subscriber) => {
            this.auth.onAuthStateChanged(subscriber);
        });
    }

    async googleSignIn() {
        const provider = new auth.GoogleAuthProvider();
        const credential = await this.auth.signInWithPopup(provider);
        return this.updateUserData(credential.user);
      }
    
      private updateUserData(user) {
        // Sets user data to firestore on login
        const userRef: AngularFirestoreDocument<User> = this.fs.doc(`users/${user.uid}`);
    
        const data = { 
          uid: user.uid, 
          email: user.email, 
          displayName: user.displayName, 
          photoURL: user.photoURL
        } 
    
        return userRef.set(data, { merge: true })
    
      }
    

    async signIn(email: string, password: string) {
        try {
            if (!email || !password) throw new Error('Invalid email and/or password');
            await this.auth.signInWithEmailAndPassword(email, password);
            return true;
        } catch (error) {
            console.log('Sign in failed', error);
            return false;
        }
    }

    async signOut() {
        try {
            await this.auth.signOut();
            return true;
        } catch (error) {
            console.log('Sign out failed', error);
            return false;
        }
    }

    getTasks() {
        return this.fs.collection('tasks').valueChanges({ idField: 'id' });
    }

    async deleteTask(id: string) {
        try {
            if (!id) throw new Error('Invalid ID or data');
            await this.fs.collection('tasks').doc(id).delete();
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async addTask(data: any) {
        try {
            if (!data) throw new Error('Invalid data');
            data.uid = (await this.auth.currentUser).uid;
            await this.fs.collection('tasks').add(data);
            return true;
        } catch (error) {
            console.log(error);
            return true;
        }
    }

}