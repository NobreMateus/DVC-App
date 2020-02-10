import * as firebase from 'firebase';

export async function addDVCForm( state, formId ){
    await firebase.database().ref("dvc-data/" + firebase.auth().currentUser.uid +"/forms/"+formId ).set(
        {
            name: state['name'],
            phone: state['phone'],
            university: state['university'], 
            vision: state['vision'], 
            change: state['change'] , 
            promise: state['promise'], 
            order: state['order'], 
            cristhian: {
                c1:{
                    name: state['cristhian']['c1']['name'],
                    done: state['cristhian']['c1']['done'],
                }, 
                c2: {
                    name: state['cristhian']['c2']['name'],
                    done: state['cristhian']['c2']['done'],
                },
                c3: {
                    name: state['cristhian']['c3']['name'],
                    done: state['cristhian']['c3']['done'],
                },
                c4: {
                    name: state['cristhian']['c4']['name'],
                    done: state['cristhian']['c4']['done'],
                },
                c5: {
                    name: state['cristhian']['c5']['name'],
                    done: state['cristhian']['c5']['done']
                },   
            },
            
            ncristhian: {
                c1:{
                    name: state['ncristhian']['c1']['name'],
                    done: state['ncristhian']['c1']['done'],
                }, 
                c2: {
                    name: state['ncristhian']['c2']['name'],
                    done: state['ncristhian']['c2']['done'],
                },
                c3: {
                    name: state['ncristhian']['c3']['name'],
                    done: state['ncristhian']['c3']['done'],
                },
                c4: {
                    name: state['ncristhian']['c4']['name'],
                    done: state['ncristhian']['c4']['done'],
                },
                c5: {
                    name: state['ncristhian']['c5']['name'],
                    done: state['ncristhian']['c5']['done']
                },
            },
            firstTime: false
        }
    )
}

export async function createUser(email, password){
    
    let user = await firebase.auth().createUserWithEmailAndPassword(email, password);
    
    await firebase.database().ref("dvc-data/"+user.user.uid).set({
            email: email,
            firstTime: true
        })
    await user.user.sendEmailVerification();
}

export async function DVCIsReady(){
    let snapshot = await firebase.database().ref("dvc-data/"+ firebase.auth().currentUser.uid  ).once('value');
    return !snapshot.val()['firstTime'];
}

export async function getDVCData(){
    let snapshot = await firebase.database().ref("dvc-data/"+ firebase.auth().currentUser.uid  ).once('value');
    return snapshot.val();
}

export async function googleLogin(){
    console.log("TESTEI");
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
    // firebase.auth().signInWithPopup(provider).then(function(result) {
    //     // This gives you a Google Access Token. You can use it to access the Google API.
    //     var token = result.credential.accessToken;
    //     // The signed-in user info.
    //     var user = result.user;
    //     console.log("TEste");
    //     console.log(token);
    //     // ...
    //   }).catch(function(error) {
    //     console.log(error);
    //     alert(error);
    //     // Handle Errors here.
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     // The email of the user's account used.
    //     var email = error.email;
    //     // The firebase.auth.AuthCredential type that was used.
    //     var credential = error.credential;
    //     // ...
    //   });
}

export async function logout(){
    await firebase.auth().signOut();
}

export async function markItem(type, item, check){
    await firebase.database().ref(`dvc-data/${firebase.auth().currentUser.uid}/${type}/${item}/done`).set(check)
}

export async function sendEmailVer(){
    await firebase.auth().sendEmailVerification();
}