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
const { FieldValue } = firebase.firestore;

export const auth = firebase.auth();
export {db , FieldValue };
export default {firebase};



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
      const snapshot = await db.collection("usuarios").get();
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      console.log("usuarios:", data);
      return data;
    } catch (error) {
      console.error("Erro ao buscar usuarios:", error);
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


export const addLivro = async (nome, editora, imagem, materia, quantidade, validade) => {
  try {
    const livrosRef = db.collection("livros");

    // Adiciona o livro com os campos iniciais
    const docRef = await livrosRef.add({
      nome,
      editora,
      imagem,
      materia,
      quantidade,
      validade,
      emprestimos: [], // Cria o campo emprestimos como um array vazio
    });

    console.log(`Livro ${nome} adicionado com sucesso!`);
    return docRef.id; // Retorna o ID do livro adicionado
  } catch (error) {
    console.error("Erro ao adicionar livro:", error);
    throw error;
  }
};


export const addUser = async (userid,
  nome,
  cpf,
  perfil) => {
  await db.collection("usuarios").add({
    userid,
  nome,
  cpf,
  perfil
  });
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
};

export const obterInformacoesUsuarioFirestore = async (userId) => {
  try {
    const usuariosRef = db.collection('usuarios');
    const snapshot = await usuariosRef.where('userid', '==', userId).get();

    if (!snapshot.empty) {
      // A consulta pode retornar vários documentos, mas vamos assumir que há apenas um
      const dadosUsuario = snapshot.docs[0].data();
      console.log('Informações do usuário do Firestore:', dadosUsuario);
      return dadosUsuario;
    } else {
      console.log('Usuário não encontrado no Firestore');
      return null;
    }
  } catch (error) {
    console.error('Erro ao obter informações do usuário do Firestore:', error);
    throw error;
  }
};