//Loader
class LoadersModal {
    commonLoading: boolean = false;
}

//User Auth Details 
class UserDataModal {
    email: string = '';
    password: string = '';
}

//Internet Check InternetStatusModel
class InternetStatusModel {
    isConnected: boolean = false
}

//Main ReducersModal Model
class ReducersModal {
    userDataReducer: UserDataModal = new UserDataModal();
    globalLoaderReducer: LoadersModal = new LoadersModal();
    internetStatusReducer: InternetStatusModel = new InternetStatusModel();
}

export {
    LoadersModal,
    ReducersModal,
    UserDataModal,
    InternetStatusModel
}