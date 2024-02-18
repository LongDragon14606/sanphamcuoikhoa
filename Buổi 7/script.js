import {
    addDoc,
    collection,
    deleteDoc,
    deleteField,
    doc,
    getDocs,
    updateDoc,
  } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
  
  import { db } from './firebase.js';
  
  console.log("đang chạy file script.js");
  
  //// Chạy thử C,R,U,D để xem firestore hoạt động như nào nhé?
  // try {
  //   const docRef = await addDoc(collection(db, "users"), {
  //     first: "Nguyen",
  //     last: "Trai",
  //     born: 1800
  //   });
  //   console.log("in ra id rồi nhé");
  //   console.log("Document written with ID: ", docRef.id); /// hiển thị id của doc đó
  // } catch (e) {
  //   console.error("Error adding document: ", e); // hiển thị lỗi nếu có.
  // }
  
  
  ////// Read Database.
  // const querySnapshot = await getDocs(collection(db, "users"));
  // querySnapshot.forEach((doc) => {
  //   console.log(`${doc.id} => ${doc.data()}`);
  // });
  
  ///// lấy ra tất cả data trong collection.
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
  
  
  ///// Update database
  const user1 = doc(db, "users", "user1");
  // await updateDoc(user1, {
  //   born: 1000,
  //   last: "Tran"
  // });
  
  
  ///// Delete database
  
  // delele doc
  await deleteDoc(doc(db, "users", "user1"));
  
  
  //// Delete field
  const userRef = doc(db, 'users', 'aKyCh8NepAu068Ips0hy');
  
  // Remove the 'born' field from the document
  await updateDoc(userRef, {
    born: deleteField()
  });