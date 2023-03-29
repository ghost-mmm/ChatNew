import Firebase from 'firebase';

const firebaseConfig ={

    apiKey: "AIzaSyDdnq39VunNBVMO9KmHuCHdX8n4qbWro80",
    databaseURL: "https://chatproject-8fff4-default-rtdb.firebaseio.com/",
    projectId: "chatproject-8fff4",
    appId: "1:793951614575:android:7c36e784cb27e8ce8b7f9a"

};

export default Firebase.initializeApp(firebaseConfig);
