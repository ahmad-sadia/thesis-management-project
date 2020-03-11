export class User {
    username: string;
    password: string;
    roleId: number;
    id: number;
    email: string;
    firstName: string;
    lastName: string;

    constructor(document = null) {
        if (document != null) {
            this.fromDocument(document);
        }
    }

    private fromDocument(document) {
        this.id = document.id;
        this.username = document.username;
        this.password = document.password;
        this.email = document.email;
        this.firstName = document.firstName;
        this.lastName = document.lastName;
        this.roleId = document.roleId;
    }

    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }

    isStudent() {
        return this.roleId === 1 || this.roleId === 6 || this.roleId === 7;
    }

    isOpponent() {
        return this.roleId === 2 || this.roleId === 6 || this.roleId === 9 || this.roleId === 10;
    }

    isSupervisor() {
        return this.roleId === 3 || this.roleId === 8 || this.roleId === 9;
    }

    isReader() {
        return this.roleId === 4 || this.roleId === 7 || this.roleId === 8 || this.roleId === 10;
    }

    isCoordinator() {
        return this.roleId === 5;
    }

    getRole() {
        return this.roleId === 0 ? '' :
            this.isStudent() ?
                'Student' : this.isOpponent() ?
                'Opponent' : this.isSupervisor() ?
                    'Supervisor' : this.isReader() ?
                        'Reader' : this.isCoordinator() ?
                            'Coordinator' : '';
    }

}
