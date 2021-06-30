import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import firebase from 'firebase';
import {User} from '../../models/user.model';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    token: BehaviorSubject<String>;

    constructor(private afs: AngularFirestore, private afa: AngularFireAuth
    ) {
        this.token = new BehaviorSubject<String>(null);
    }

    signUp(newUser: User) {
        return new Promise((res, rej) => {
            firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
                .then((currentUser) => {
                    this.token.next(currentUser.user.refreshToken);
                    newUser.id = currentUser.user.uid;
                    this.afs.collection('users')
                        .doc(currentUser.user.uid)
                        .set(newUser.toPlainObj())
                        .then(() => res());
                })
                .catch((err) => {

                    if (err.code === 'auth/email-already-in-use') {
                        rej('L\'adresse email est d�j� utilis�e.');
                    }

                    if (err.code === 'auth/invalid-email') {
                        rej('L\'adresse email est invalide.');
                    }

                    if (err.code === 'auth/operation-not-allowed') {
                        rej('Une erreur est survenue.');
                    }

                    if (err.code === 'auth/weak-password') {
                        rej('Le mot de passe n\'est pas s�curis�.');
                    }

                    rej('Une erreur est survenue.');
                })
        })
    }

    signIn(email: string, password: string) {
        return new Promise((res, rej) => {
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then((currentUser) => {
                    this.token.next(currentUser.user.refreshToken);
                    res();
                })
                .catch(err => {
                    console.log('err');
                });
        });
    }
}
