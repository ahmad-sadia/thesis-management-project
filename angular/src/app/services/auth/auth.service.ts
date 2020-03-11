/*
 * Author: Cristian Babes
 * Description: This service is responsible to all the authentication needs.
 * It has functions for login, logout, checking the user role and retrieving user information
*/

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from 'src/app/models/user';
import {environment} from '../../../environments/environment';
import {createParameters} from '../formData';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    private currentUser: User = null;
    private token = null;

    constructor(private http: HttpClient) {
        this.token = localStorage.getItem('token');
        if (this.token != null) {
            this.currentUser = new User(JSON.parse(localStorage.getItem('user')));
        }
    }

    isLoggedIn() {
        return this.currentUser != null;
    }

    getUserName() {
        if (this.isLoggedIn()) {
            return this.currentUser.username;
        }
    }

    getCurrentUser() {
        return this.currentUser;
    }

    getCurrentUserId() {
        return this.currentUser.id;
    }

    logout() {
        localStorage.clear();
        this.currentUser = null;
    }

    login(args = null): Promise<User> {
        return new Promise((resolve, reject) => {
            this.http.post<any>(environment.serverUrl + '/login', {},
                {params: createParameters(args)})
                .subscribe(
                    (next) => {
                        this.currentUser = new User(next.user);
                        localStorage.setItem('token', next.token);
                        localStorage.setItem('user', JSON.stringify(this.currentUser));
                        resolve(this.currentUser);
                    },
                    (error) => {
                        console.log(error);
                        reject(error);
                    }
                );
        });
    }

    isCoordinator() {
        return this.isLoggedIn() && this.currentUser.isCoordinator();
    }

    isStudent() {
        return this.isLoggedIn() && this.currentUser.isStudent();
    }

    isSupervisor() {
        return this.isLoggedIn() && this.currentUser.isSupervisor();
    }

    isReader() {
        return this.isLoggedIn() && this.currentUser.isReader();
    }

    isOpponent() {
        return this.isLoggedIn() && this.currentUser.isOpponent();
    }
}

