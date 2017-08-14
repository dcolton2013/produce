import { observable, action, computed, extendObservable } from "mobx";

class UserStore{
    @observable
    userName = "Mobx";

    @observable
    firstName = "";

    @observable
    lastName = "";

    @observable
    email = "";

    @observable
    phone = "";

    @action
    data(data: Object) {
        if (data.firstName) {
            this.firstName = data.firstName;
        }
        if (data.lastName) {
            this.lastName = data.lastName;
        }
        if (data.email) {
            this.email = data.email;
        }
        if (data.phone) {
            this.phone = data.phone;
        }
    }

    @computed
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    //setters
    @action
    setUsername(username) {
        this.username = username;
    }
    @action
    setFirstName(name) {
        this.firstName = name;
    }
    @action
    setLastName(name) {
        this.lastName = name;
    }
    @action
    setEmail(email) {
        this.email = email;
    }
    @action
    setPassword(password) {
        this.password = password;
    }
    @action
    setPhone(phone) {
        this.phone = phone;
    }

}


const store = new UserStore();
export default store;
