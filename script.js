const container = document.querySelector(".container");

let gallery = [
  { id: 1, url: "./assets/pexels1.jpg", description: "Lorem ipsum dolor sit amet." },
  { id: 2, url: "./assets/pexels2.jpg", description: "Lorem ipsum dolor sit amet." },
  { id: 3, url: "./assets/pexels3.jpg", description: "Lorem ipsum dolor sit amet." },
  { id: 4, url: "./assets/pexels4.jpg", description: "Lorem ipsum dolor sit amet." },
  { id: 5, url: "./assets/pexels5.jpg", description: "Lorem ipsum dolor sit amet." },
  { id: 6, url: "./assets/pexels6.jpg", description: "Lorem ipsum dolor sit amet." },
  { id: 7, url: "./assets/pexels7.jpg", description: "Lorem ipsum dolor sit amet." },
  { id: 8, url: "./assets/pexels8.jpg", description: "Lorem ipsum dolor sit amet." },
  { id: 9, url: "./assets/pexels9.jpg", description: "Lorem ipsum dolor sit amet." },
  { id: 10, url: "./assets/pexels10.jpg", description: "Lorem ipsum dolor sit amet." },
  { id: 11, url: "./assets/pexels11.jpg", description: "Lorem ipsum dolor sit amet." },
  { id: 12, url: "./assets/pexels12.jpg", description: "Lorem ipsum dolor sit amet." },
];

for (let picture of gallery) {
  const picContainer = document.createElement("div");
  picContainer.classList.add("pic-container");
  const pic = document.createElement("img");
  pic.classList.add("pic");
  const descriptionImg = document.createElement("p");
  descriptionImg.classList.add("none");
  pic.src = picture.url;
  descriptionImg.innerHTML = picture.description;
  container.append(picContainer);
  picContainer.append(pic);
  picContainer.append(descriptionImg);
}

container.addEventListener("click", (e) => {
  if (e.target.className === "pic" && e.target.nextElementSibling.className.includes("none")) {
    e.target.nextElementSibling.classList.add("show");
    e.target.nextElementSibling.classList.remove("none");
    e.target.parentElement.classList.remove("pic-big-container");
    e.target.parentElement.classList.add("pic-container");
    console.log(1);
  } else if (e.target.className.includes("pic") && e.target.nextElementSibling.className.includes("show")) {
    e.target.classList.add("show-pic");
    e.target.nextElementSibling.classList.remove("show");
    e.target.nextElementSibling.classList.add("none");
    e.target.classList.remove("pic");
    e.target.parentElement.classList.remove("pic-container");
    e.target.parentElement.classList.add("pic-big-container");
    console.log(2);
  } else if (e.target.className.includes("show-pic")) {
    e.target.classList.remove("show-pic");
    e.target.classList.add("pic");
    e.target.parentElement.classList.remove("pic-big-container");
    e.target.parentElement.classList.add("pic-container");
    console.log(3);
  }
});
