import {addDoc,collection,deleteDoc,doc,getDocs,getFirestore,} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";
  
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
  
// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDsFVkLeaDRPtc3KyyrEXeILWoS6Pw7y00",
    authDomain: "jsi16-e7229.firebaseapp.com",
    projectId: "jsi16-e7229",
    storageBucket: "jsi16-e7229.appspot.com",
    messagingSenderId: "922686084020",
    appId: "1:922686084020:web:33d8081b55761d621698e1",
    measurementId: "G-76S8VQTTZ3"
};
  
const app = initializeApp(firebaseConfig); /// Khởi tạo firebase
const db = getFirestore(app); /// Kết nối và khởi tạo database
  
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

const addTask = async (description) => {
    await addDoc(collection(db, "tasks"), { description });
    getTasks(); /// Lấy dữ liệu mới nhất từ Database về web.
    taskInput.value = "";
};

addTaskBtn.addEventListener("click", () => {
    const description = taskInput.value.trim();
    if (description !== "") {
        addTask(description);
    }
});

const getTasks = async () => {
    const querySnapshot = await getDocs(collection(db, "tasks"));
    // console.log("querySnapshot: ", querySnapshot); /// Để xem nó là gì?
    const tasks = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        description: doc.data().description,
    }));
    renderTasks(tasks); /// Cập nhật lại giao diện
};

function renderTasks(tasks) {
    taskList.innerHTML = "";
    tasks.forEach((task) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${task.description}</span>
            <button class="deleteBtn" data-id="${task.id}">Xóa</button>
        `;
        taskList.appendChild(li);
  
        // Add event listener to delete button
        const deleteBtn = li.querySelector(".deleteBtn");
            deleteBtn.addEventListener("click", () => {
                deleteTask(task.id); /// Hàm xóa task
            });
        });
}

const deleteTask = (id) => {
    const docRef = doc(db, "tasks", id);  
    deleteDoc(docRef)
    .then(() => {
        console.log("Entire Document has been deleted successfully.");
        getTasks(); /// Lấy dữ liệu mới nhất từ Database về web.
    })
    .catch((error) => {
        console.log(error);
    });
};

getTasks();