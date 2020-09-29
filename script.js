gsap.registerPlugin(ScrollTrigger);

const form = gsap.timeline({
  scrollTrigger: {
    trigger: ".section",
    start: "top 25%",
    toggleActions: "restart none none reverse"
  }
});
form.to(".form", {
  opacity: 1,
  duration: 1
});

glow();
function glow() {
  let anim = new TimelineLite();
  anim.to(".icon", {
    duration: 1,
    fontSize: 120,
    stagger: 0.25,
    yoyo: true,
    repeat: -1
  });
}

var food = [];

function functionAddItem() {
  value = document.getElementById("foodfield").value;
  if (!value) {
    return;
  }
  food.push(value);
  document.getElementById("foodfield").value = "";
  console.log(food);
  renderFoodList();
}

function renderFoodList() {
  document.getElementById("foodlist").innerHTML = "";
  food.forEach((el, index) => renderSegment(index, el));
}

function renderSegment(index, el) {
  document.getElementById(
    "foodlist"
  ).innerHTML += `<div class="spacer"><input class="food-item" value="${el}"/><button class="remove" onClick="removeItem(${index})">🚫</button></div>`;
}

function removeItem(index) {
  food.splice(index, 1);
  renderFoodList();
}
