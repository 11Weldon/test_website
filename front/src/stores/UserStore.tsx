import {makeAutoObservable} from "mobx";

export default class UserStore{
    get user(): {} {
        return this._user;
    }
    set user(value: {}) {
        this._user = value;
    }
    private _user: {};
    get isAuth(): boolean {
        return this._isAuth;
    }
    set isAuth(value: boolean) {
        this._isAuth = value;
    }
    private _isAuth: boolean;

    constructor() {
        this._isAuth = false
        this._user={}
        makeAutoObservable(this)
    }
}