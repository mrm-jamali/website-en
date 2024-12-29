const boldBtn = document.getElementById("bold");
const italicBtn = document.getElementById("italic");
const underlineBtn = document.getElementById("underline");
const clearBtn = document.getElementById("clear");
const saveBtn = document.getElementById("save");
const editor = document.getElementById("editor");

boldBtn.addEventListener("click", () => {
    document.execCommand("bold", false, null);
});

italicBtn.addEventListener("click", () => {
    document.execCommand("italic", false, null);
});

underlineBtn.addEventListener("click", () => {
    document.execCommand("underline", false, null);
});

clearBtn.addEventListener("click", () => {
    editor.innerHTML = "";
});

saveBtn.addEventListener("click", () => {
    const content = editor.innerHTML;
    const blob = new Blob([content], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "editor-content.html";
    link.click();
});
