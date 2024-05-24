import { initializeApp } from "firebase/app";
import { secretFirebase } from "../secret/secret";
import { doc, getDoc, getFirestore, setDoc, updateDoc, where, writeBatch } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { query, orderBy } from "firebase/firestore";

import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { getFunctions, httpsCallable } from 'firebase/functions';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional



const firebaseConfig = {
  apiKey: secretFirebase.apiKey,
  authDomain: secretFirebase.authDomain,
  projectId: secretFirebase.projectId,
  storageBucket: secretFirebase.storageBucket,
  messagingSenderId: secretFirebase.messagingSenderId,
  appId: secretFirebase.appId,
  measurementId: secretFirebase.measurementId
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app);
const functions = getFunctions(app);
export const firestore = getFirestore(app);


export const clientAPI = {

  create: async (name, email, domain) => {

    try {
      const getAprilData = httpsCallable(functions, 'getAprilData');
      let aprilData = await getAprilData({ name, email, domain, fields: [], products: [], number: 0 })

      return client.data
    } catch (error) {
      console.log(error)
    }

  },

  updateClient: async (clientId, fields) => {
    const docRef = doc(db, "clients", clientId);
    const docSnap = await getDoc(docRef);

    let client = null
    if (docSnap.exists()) {
      client = docSnap.data()

    } else {
      console.log("No such document!");
    }
  },

  getClients: async () => {
    let result = []
    try {
      const queryGet = query(collection(db, "clients"), orderBy("name"));
      const querySnapshot = await getDocs(queryGet);


      querySnapshot.forEach((doc) => {
        let data = doc.data()
        result.push(data)

      });
      console.log('get clients')
      // console.log(result)

      return result
    } catch (error) {
      console.log(error)
      return result

    }


  },

  getClient: async (clientId) => {
    let result = undefined
    try {

      const queryGet = query(collection(db, "clients"), where("number", "==", clientId));
      const querySnapshot = await getDocs(queryGet);


      querySnapshot.forEach((doc) => {
        if (doc.data().number === clientId) {
          result = doc.data()
        }
      });
      return result
    } catch (error) {
      console.log(error)
      return result

    }


  },

  setProducts: async (clientId, products) => {
    let result
    try {

      const queryGet = query(collection(db, "clients"), where("number", "==", clientId));
      const querySnapshot = await getDocs(queryGet);


      let searchingClient

      querySnapshot.forEach((client) => {
        if (client.data().number === clientId) {
          // result = client.data()
          searchingClient = doc(db, "clients", client.id);

        }
      });


      await updateDoc(searchingClient, { products });

      const resultClientsFetch = query(collection(db, "clients"), where("number", "==", clientId));
      const resultClients = await getDocs(resultClientsFetch);


      resultClients.forEach((doc) => {
        if (doc.data().number === clientId) {
          result = doc.data()
        }
      });
      return result
    } catch (error) {
      console.log(error)
      return result

    }
  },

  updateFields: async (fields, clientId) => {



    let result
    try {

      const queryGet = query(collection(db, "clients"), where("number", "==", clientId));
      const querySnapshot = await getDocs(queryGet);


      let searchingClient

      querySnapshot.forEach((client) => {
        if (client.data().number === clientId) {
          // result = client.data()
          searchingClient = doc(db, "clients", client.id);

        }
      });


      await updateDoc(searchingClient, { fields });

      const resultClientsFetch = query(collection(db, "clients"), where("number", "==", clientId));
      const resultClients = await getDocs(resultClientsFetch);


      resultClients.forEach((doc) => {
        if (doc.data().number === clientId) {
          result = doc.data()
        }
      });
      return result
    } catch (error) {
      console.log(error)
      return result

    }

    // let docRef = doc(db, "clients", `${clientId}`)
    // await setDoc(docRef, { fields }, { merge: true });

    // let result = []
    // let updatedClient = await getDoc(docRef)

    // if (updatedClient.exists()) {
    //   console.log(updatedClient.data())
    //   let data = updatedClient.data()
    //   result = data.fields
    //   console.log("updated clients fields:", result);

    // }
    // return result
  },

  updateClientsProducts: async (newProductData) => {

    // Получаем все документы из коллекции "clients"
    const queryGet = query(collection(db, "clients"), orderBy("name"));
    const clientsSnapshot = await getDocs(queryGet);

    // Перебираем каждый документ (клиента) в коллекции



    clientsSnapshot.docs.forEach(async (clientDoc) => {
      // Получаем ссылку на коллекцию продуктов текущего клиента
      const productsRef = collection(doc(db, 'clients', clientDoc.id), 'products');
      const productsSnapshot = await getDocs(productsRef);

      // Перебираем каждый продукт и обновляем его данные
      productsSnapshot.docs.forEach(async (productDoc) => {
        await setDoc(doc(productsRef, productDoc.id), newProductData, { merge: true });
      });
    });



    const updatequeryGet = query(collection(db, "clients"), orderBy("name"));
    const updateclientsSnapshot = await getDocs(updatequeryGet);

    // Перебираем каждый документ (клиента) в коллекции
    let result = []
    updateclientsSnapshot.forEach((doc) => {
      let data = doc.data()
      result.push(data)

    });


    return result

  },

  getProducts: async (clientId) => {
    let client = null
    let id = null
    let products = []

    try {
      const clientsQuery = query(collection(db, "clients"), where("number", "==", clientId));
      const clientsQueryuerySnapshot = await getDocs(clientsQuery);


      clientsQueryuerySnapshot.forEach((doc) => {
        if (doc.data().number === clientId) {
          client = doc.data()
          id = doc.id
        }
      });


      // const querySnapshot = await getDocs(collection(db, "fields"), orderBy("number"));
      const queryGet = query(collection(db, "ClientProducts"), where("clientId", "==", id));
      const querySnapshot = await getDocs(queryGet);

      querySnapshot.forEach((doc) => {
        let data = doc.data()

        products.push(data)
      });

      return products
    } catch (error) {

      console.log(error)
    }

    return products
  }
}




export const fieldsAPI = {

  getFields: async () => {

    let result = []
    try {
      // const querySnapshot = await getDocs(collection(db, "fields"), orderBy("number"));
      const queryGet = query(collection(db, "fields"), orderBy("number"));
      const querySnapshot = await getDocs(queryGet);

      querySnapshot.forEach((doc) => {
        let data = doc.data()

        result.push(data)
      });

      return result
    } catch (error) {

      console.log(error)
    }

    return result
  },

  setFields: async (fields) => {
    try {

      const batch = writeBatch(db)
      let field = {}

      let docRef = null
      // for (const key in fields) {

      for (let i = 0; i < fields.length; i++) {


        // console.log(fields[i].id)
        field = fields[i]

        docRef = doc(db, "fields", `${fields[i].id}`);
        let newDoc = batch.set(docRef, field, `${fields[i].id}`)
      


      }



      // }


      //  let newDoc = await setDoc(docRef, field, 1);

      await batch.commit();




    } catch (error) {
      console.error(error)
    }
  },

  updateField: async (fieldNumber, value, type) => {


    let docRef = doc(db, "fields", `${fieldNumber}`)

    await setDoc(docRef, { [`${type}`]: value }, { merge: true });

    let result = []
    let updatedField = await getDoc(docRef)

    if (updatedField.exists()) {

      result = updatedField.data()


    }
    return result
  }


}



export const fireAPI = {
  getVersion: async () => {
    let version = false
    try {

      const versionFetch = httpsCallable(functions, 'getVersion');
      const versionData = (await versionFetch()).data

      if (versionData.resultCode === 0) {

        version = versionData.data.version

      }

      return version
    } catch (error) {
      return version
    }
  },

  getData: async (domain) => {

    try {
      const getAprilData = httpsCallable(functions, 'getApril');

      let aprilData = await getAprilData(domain)

      if (aprilData.data.resultCode === 0.) {
     

      }

      return aprilData.data
    } catch (error) {
      console.log(error)
    }
  }
}




export const generalAPI = {


  getCollection: async (collectionName) => {

    let result = []
    try {
      // const querySnapshot = await getDocs(collection(db, "fields"), orderBy("number"));
      const queryGet = query(collection(db, collectionName), orderBy("number"));
      const querySnapshot = await getDocs(queryGet);

      querySnapshot.forEach((doc) => {
        let data = doc.data()

        result.push(data)
      });

      return result
    } catch (error) {

      console.log(error)
    }

    return result
  },

  setCollection: async (collectionName, objects) => {
    try {

      const batch = writeBatch(db)
      let docRef = null

      for (let i = 0; i < objects.length; i++) {

        const item = objects[i]
        docRef = doc(db, collectionName, `${objects[i].number}`);
        let newDoc = batch.set(docRef, item, `${objects[i].number}`)

        // console.log(newDoc)
      }

      await batch.commit();
      let result = await generalAPI.getCollection(collectionName)
      return result


    } catch (error) {
      console.error(error)
    }
  },
}




export const ai = async (content) => {

  try {
    const getAi = httpsCallable(functions, 'ai');
    let ai = await getAi(content)
    console.log(ai.data)
    return ai.data
  } catch (error) {
    console.log(error)
  }


}





export const authApi = {
  getAuth: async () => {

    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    auth.languageCode = 'ru';

    await signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // resultUser = user.name
        // IdP data available using getAdditionalUserInfo(result)
        // ...

        return user

      }).catch((error) => {

        // Handle Errors here.
        // const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorMessage)
        // console.log(credential)

      });
    const user = auth.currentUser;


    //todo login with google data?

    return user

  },

  getCurrentUser: async () => {
    const auth = getAuth();
    let resultUser = null
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // const uid = user.uid;
        resultUser = user

        // ...
      } else {
        // User is signed out
        // ...
      }

    });

    return resultUser
  }
}


export const dealAPI = {




  addDeal: async (data) => {
    // За кулисами .add(...) и .doc().set(...) полностью эквивалентны, поэтому вы можете использовать то, что удобнее
    //with ID
    let rslt = null
    // console.log(data)
    try {
      const setDeal = httpsCallable(functions, 'setDeal');
      let newDeal = await setDeal(data)
      // console.log('newDeal')
      // console.log(newDeal)
      if (newDeal && newDeal.data) {
        // console.log(newDeal.data)
        rslt = newDeal.data
      }

      return rslt

    } catch (error) {
      console.log(error)
      return rslt
    }



    //or

    //without ID
    // Add a new document with a generated id.


    // const docRef = await addDoc(collection(db, "deals"), {
    //   dealId, domain, state
    // });
    // console.log("Document written with ID: ", docRef.id);


  },


  getDeal: async (dealId, domain) => {
    // За кулисами .add(...) и .doc().set(...) полностью эквивалентны, поэтому вы можете использовать то, что удобнее
    //with ID
    let rslt = null
    try {
      const getDeal = httpsCallable(functions, 'getDeal');
      let data = await getDeal({ dealId, domain })


      if (data && data.data && data.data.data && data.data.data.deal && data.data.resultCode === 0) {

        rslt = data.data.data.deal

      } else {
        if (data && data.data && data.data.data && data.data.resultCode === 1) {
          if (data.data.data) {
            console.log(data.data.data) //error data
          }
        }
      }

      return rslt

    } catch (error) {
      console.log(error)
      return rslt
    }



  },


  deleteDeal: async () => {
    await deleteDoc(doc(db, "cities", "DC"));
  },
}