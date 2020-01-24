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

export async function getDVCData(){
    let snapshot = await firebase.database().ref("dvc-data/"+ firebase.auth().currentUser.uid  ).once('value');
    return snapshot.val();
}

export async function markItem(check, ref){
    console.log("dvc-data/" + firebase.auth().currentUser.uid);
    await firebase.database().ref("dvc-data/" + firebase.auth().currentUser.uid).set({
        [ref.split("/")[0]]: {
            [ref.split("/")[1]]: check
        }

    })
}
