// Elementos
const notesContainer = document.querySelector("#notes-container");
const noteInput = document.querySelector("#note-content");
const addNoteBtn = document.querySelector(".add-note");

// Funções
function addNote() {
  const noteObject = {
    id: generateId(),
    content: noteInput.value,
    fixed: false,
  };

  console.log(noteObject);
}

function generateId() {
  return Math.floor(Math.random() * 5000);
}
// Eventos
addNoteBtn.addEventListener("click", () => addNote());
