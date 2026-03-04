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

  if (person.photos.length > 0) {
    modalPhotos.innerHTML = `
      <div class="carousel">
        <button class="prev">&#10094;</button>
        <img id="carouselImage" src="${person.photos[0]}" />
        <button class="next">&#10095;</button>
      </div>
      <div class="dots"></div>
    `;

    const image = document.getElementById("carouselImage");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const dotsContainer = document.querySelector(".dots");

    currentIndex = 0;

    function updateImage() {
      image.src = person.photos[currentIndex];
      updateDots();
    }

    function updateDots() {
      dotsContainer.innerHTML = "";
      person.photos.forEach((_, index) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        if (index === currentIndex) dot.classList.add("active");
        dot.addEventListener("click", () => {
          currentIndex = index;
          updateImage();
        });
        dotsContainer.appendChild(dot);
      });
    }

    prevBtn.addEventListener("click", () => {
      currentIndex =
        (currentIndex - 1 + person.photos.length) % person.photos.length;
      updateImage();
    });

    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % person.photos.length;
      updateImage();
    });

    updateDots();
  } else {
    modalPhotos.innerHTML = "";
  }

  modal.style.display = "flex";
}

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
