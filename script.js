import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";



const firebaseConfig = {
  apiKey: "AIzaSyB5usLyIAEnqyVI-_AATSsAiYcIutms43I",
  authDomain: "dentysta-kalendarz2.firebaseapp.com",
  projectId: "dentysta-kalendarz2",
  storageBucket: "dentysta-kalendarz2.firebasestorage.app",
  messagingSenderId: "1055190429163",
  appId: "1:1055190429163:web:80bba0484975ea43d07dae",
  measurementId: "G-GLT8DF0BXE"
};



const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


window.dodajWizyte = async function () {

  const imie =
    document.getElementById("imie").value;

  const data =
    document.getElementById("data").value;

  const godzina =
    document.getElementById("godzina").value;


  await addDoc(
    collection(db, "wizyty"),
    {
      imie,
      data,
      godzina
    }
  );

  alert("Wizyta dodana!");

  pokazWizyty();
};


async function pokazWizyty() {

  const wizytyDiv =
    document.getElementById("wizyty");

  wizytyDiv.innerHTML = "";


  const querySnapshot =
    await getDocs(collection(db, "wizyty"));


  querySnapshot.forEach((doc) => {

    const wizyta = doc.data();

    wizytyDiv.innerHTML += `

      <div class="wizyta">

        <h3>${wizyta.imie}</h3>

        <p>${wizyta.data}</p>

        <p>${wizyta.godzina}</p>

      </div>

    `;
  });
}


pokazWizyty();
