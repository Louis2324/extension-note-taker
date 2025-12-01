const sel = (id) => document.getElementById(id);

document.addEventListener("DOMContentLoaded", () => {
  const noteText = sel("noteText");
  const saveButton = sel("saveNote");
  const currentPageSpan = sel("currentPage");
  const notesList = sel("notesList");

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    if (tabs[0]) {
      const currentTab = tabs[0];
      currentPageSpan.textContent = currentTab.title || "Unknown page";

      window.currentTabUrl = currentTab.url;
      window.currentTabTitle = currentTab.title;
    }
  });

  loadNotes();

  saveButton.addEventListener("click", saveNote);

  noteText.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.key == "Enter") saveNote();
  });

  function saveNote() {
    const noteContent = noteText.value.trim();

    if (!noteContent) {
      alert("Please type a note first!");
      return;
    }

    const newNote = {
      id: Date.now(), // Unique ID using timestamp
      content: noteContent,
      url: window.currentTabUrl || "",
      pageTitle: window.currentTabTitle || "Unknown page",
      date: new Date().toLocaleString(),
    };

    chrome.storage.local.get(["notes"], function (result) {
      const notes = result.notes || [];
      notes.unshift(newNote);

      chrome.storage.local.set({ notes: notes }, function () {
        noteText.value = "";
        alert("Note saved!");
        loadNotes();
      });
    });
  }

  function loadNotes() {
    chrome.storage.local.get(["notes"], function (result) {
      const notes = result.notes || [];

      if (notes.length === 0) {
        notesList.innerHTML =
          '<p class="empty-message">No notes yet. Save your first one!</p>';
        return;
      }

      let notesHTML = "";
      notes.forEach(function (note) {
        notesHTML += `
        <div class="note-item" data-id="${note.id}">
          <div class="note-content">${escapeHtml(note.content)}</div>
          <div class="note-meta">
            <span>${note.pageTitle}</span>
            <span>${note.date}</span>
            <button class="delete-btn" data-id="${note.id}">Delete</button>
          </div>
        </div>
      `;
      });

      notesList.innerHTML = notesHTML;

      document.querySelectorAll(".delete-btn").forEach((button) => {
        button.addEventListener("click", function () {
          const noteId = parseInt(this.getAttribute("data-id"));
          deleteNote(noteId);
        });
      });
    });
  }

  
  function deleteNote(noteId) {
    if (confirm("Delete this note?")) {
      chrome.storage.local.get(["notes"], function (result) {
        let notes = result.notes || [];
        notes = notes.filter((note) => note.id !== noteId);
        chrome.storage.local.set({ notes: notes }, function () {
          loadNotes();
        });
      });
    }
  }

  function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML.replace(/\n/g, "<br>");
  }
});
