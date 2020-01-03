/* eslint-disable prettier/prettier */
const functions = require("firebase-functions");
const admin = require("firebase-admin");
let i;
let size;
let sizeToDelete;
admin.initializeApp();

exports.onMessageCreate = functions.firestore
     .document("messages/{userId}")
     .onCreate(() => {
         const ref = admin.firestore().collection("messages").orderBy("timestamp");
         
         ref.onSnapshot(snapshot => {
             i = 0;
             size = snapshot.size;
             sizeToDelete = size - 10;
             // eslint-disable-next-line no-console
             console.log("Message Count: " + size);

             snapshot.forEach((doc) => {
                 if (i < sizeToDelete) {
                     doc.ref.delete().then(() => {
                         // eslint-disable-next-line no-console
                         console.log("Document deleted succesfully")
                     }).catch((error) => {
                         // eslint-disable-next-line no-console
                         console.log("Error removing document: " + error);
                     });
                 }
                 i++;
             })
         })
     })

