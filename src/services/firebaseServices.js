import * as firebase from 'firebase';

export function addDVCForm(id, name, tel, univers, vision, change, promise, says, cristaos, nCristaos ){
    firebase.database().ref("dvc-data/1").set(
        {
            name: name,
            tel: tel,
            univers: univers, 
            vision: vision, 
            change: change , 
            promise: promise, 
            says: says, 
            cristaos: cristaos, 
            nCristaos: nCristaos
        }
    )
}

function updateDVCForm(){

}

