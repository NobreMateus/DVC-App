import * as firebase from 'firebase';

export function addDVCForm( state ){
    console.log(state);
    firebase.database().ref("dvc-data/" + firebase.auth().currentUser.uid).set(
        {
            name: state['name'],
            phone: state['phone'],
            university: state['university'], 
            vision: state['vision'], 
            change: state['change'] , 
            promise: state['promise'], 
            order: state['order'], 
            cristhian: {
                c1: state['cristhian']['c1'],
                c2: state['cristhian']['c2'],
                c3: state['cristhian']['c3'],
                c4: state['cristhian']['c4'],
                c5: state['cristhian']['c5'],    
            },
            
            ncristhian: {
                c1: state['ncristhian']['c1'],
                c2: state['ncristhian']['c2'],
                c3: state['ncristhian']['c3'],
                c4: state['ncristhian']['c4'],
                c5: state['ncristhian']['c5'],
            },
            firstTime: false
        }
    )
}

export async function getDVCData(){
    let snapshot = await firebase.database().ref("dvc-data/"+ firebase.auth().currentUser.uid  ).once('value');
    return snapshot.val();
}

export function updateDVCForm(){
    
}

export function createUser(email, password){
    firebase.auth().createUserWithEmailAndPassword(email, password).then(user=>{
        firebase.database().ref("dvc-data/"+user.user.uid).set({
            email: email,
            firstTime: true
        })
    });
}

export async function DVCIsReady(){
    let snapshot = await firebase.database().ref("dvc-data/"+ firebase.auth().currentUser.uid  ).once('value');
    return !snapshot.val()['firstTime'];
}