//Loader
class LoadersModal {
    commonLoading: boolean = false;
}

//User Auth Details 
class SheMaidModel {
   date_response: Array<any> = [];
}

//Internet Check InternetStatusModel
class InternetStatusModel {
    isConnected: boolean = false
}

//Main ReducersModal Model
class ReducersModal {
    sheMaidDataReducer: SheMaidModel = new SheMaidModel();
    globalLoaderReducer: LoadersModal = new LoadersModal();
    internetStatusReducer: InternetStatusModel = new InternetStatusModel();
}

export {
    LoadersModal,
    ReducersModal,
    SheMaidModel,
    InternetStatusModel
}