
//PERSONALIZADO-----------------------------------------------
// Importa las funciones que necesitas del SDK de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBaN3nU6pWcXq8jyIxx7KqrMF5tcfoV8ys",
    authDomain: "data-cloud-2e700.firebaseapp.com",
    projectId: "data-cloud-2e700",
    storageBucket: "data-cloud-2e700.appspot.com",
    messagingSenderId: "878887741872",
    appId: "1:878887741872:web:f055e5a0a58ac6f1750e75",
    measurementId: "G-H6NZ1F2ZNW"
  };
//fin de codigo personalizado-------------------------------------

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log("Conexióna a firebase establecida correctamente");

document.getElementById('student-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const boleta = document.getElementById('boleta').value;
    const edad = document.getElementById('edad').value;
    const semestre = document.getElementById('semestre').value;
    const carrera = document.getElementById('carrera').value;

    try {
        await addDoc(collection(db, "students"), {
            name: name,
            boleta: boleta,
            edad: edad,
            semestre: semestre,
            carrera: carrera
        });
        document.getElementById('status').innerText = "Datos guardados correctamente";
    } catch (error) {
        console.error("Error al guardar los datos: ", error);
    }
});
