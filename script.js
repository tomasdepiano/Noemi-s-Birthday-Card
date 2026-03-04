const startBtn = document.getElementById("startBtn");
const intro = document.getElementById("intro");
const gallery = document.getElementById("gallery");
const container = document.getElementById("cardContainer");

const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeBtn");
const modalName = document.getElementById("modalName");
const modalMessage = document.getElementById("modalMessage");
const modalPhotos = document.getElementById("modalPhotos");

startBtn.addEventListener("click", () => {
  intro.classList.add("hidden");
  gallery.classList.remove("hidden");
});

birthdayMessages.forEach((person) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerText = person.name;

  card.addEventListener("click", () => openLetter(person));
  container.appendChild(card);
});

function openLetter(person) {
  modalName.innerText = person.name;
  modalMessage.innerText = person.message;

  modalPhotos.innerHTML = "";

  person.photos.forEach((photo) => {
    const img = document.createElement("img");
    img.src = photo;
    modalPhotos.appendChild(img);
  });

  modal.style.display = "flex";
}

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
