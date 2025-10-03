const track = document.querySelector(".slider-track");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let index = 0;
const visibleCards = 4;
const cardWidth = 210; // card width + gap
const totalCards = track.children.length;

function updateArrows() {
  // hide left arrow if at start
  if (index === 0) {
    prev.classList.add("hidden");
  } else {
    prev.classList.remove("hidden");
  }

  // hide right arrow if at end
  if (index >= totalCards - visibleCards) {
    next.classList.add("hidden");
  } else {
    next.classList.remove("hidden");
  }
}

next.addEventListener("click", () => {
  if (index < totalCards - visibleCards) {
    index++;
    track.style.transform = `translateX(${-index * cardWidth}px)`;
    updateArrows();
  }
});

prev.addEventListener("click", () => {
  if (index > 0) {
    index--;
    track.style.transform = `translateX(${-index * cardWidth}px)`;
    updateArrows();
  }
});

// Initial state
updateArrows();








const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  item.querySelector(".faq-question").addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

