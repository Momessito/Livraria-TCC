import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"; // Importe o módulo Firestore

const firebaseConfig = {
    apiKey: "AIzaSyBTrpzWpp-LW-9WoIEkRjdSAj3NfNUoeOw",
    authDomain: "didacto-e3c0e.firebaseapp.com",
    projectId: "didacto-e3c0e",
    storageBucket: "didacto-e3c0e.appspot.com",
    messagingSenderId: "32642567618",
    appId: "1:32642567618:web:9216cf2038c306ec585a5b",
    measurementId: "G-4786RBK6DQ"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore(); // Obtenha uma referência para o Firestore

export const auth = firebase.auth();
export { db, firebase };

// Funções CRUD para Instituições
export const addInstituicao = async (instituicaoId, Password) => {
  await db.collection("instituicoes").add({
    instituicaoId,
    Password
  });
};

// Função para obter instituições com professores aninhados
export const getInstituicoes = async () => {
    try {
      const snapshot = await db.collection("instituicoes").get();
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      console.log("Instituições:", data);
      return data;
    } catch (error) {
      console.error("Erro ao buscar instituições:", error);
      throw error;
    }
  };
  
  export const getProfessores = async () => {
    try {
      const snapshot = await db.collection("professores").get();
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      console.log("Professores:", data);
      return data;
    } catch (error) {
      console.error("Erro ao buscar professores:", error);
      throw error;
    }
  };
  
  export const getLivros = async () => {
    try {
      const snapshot = await db.collection("livros").get();
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      console.log("Livros:", data);
      return data;
    } catch (error) {
      console.error("Erro ao buscar livros:", error);
      throw error;
    }
  };
  
    
  
// Funções CRUD para Professores
export const addProfessor = async (nome, disciplina, instituicaoId) => {
  await db.collection("professores").add({
    nome,
    disciplina,
    instituicaoId,
  });
};


// Funções CRUD para Livros
export const addLivro = async (nome,
  editora,
  imagem,
  materia,
  quantidade,
  validade) => {
  await db.collection("livros").add({
    nome,
    editora,
    imagem,
    materia,
    quantidade,
    validade,
  });
};
