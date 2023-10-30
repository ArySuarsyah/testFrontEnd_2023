// slide section
const branding = document.querySelector(".branding");
const design = document.querySelector(".design");
const marketing = document.querySelector(".marketing");

const groupIcon = document.querySelector(".group-icon");
const groupIcon2 = document.querySelector(".group-icon2");
const groupIcon3 = document.querySelector(".group-icon3");
const content1 = document.querySelector(".content1");
const content2 = document.querySelector(".content2");
const content3 = document.querySelector(".content3");

document.addEventListener("DOMContentLoaded", () => {
  groupIcon.classList.add("show-content");
  content1.classList.add("show-content");
});

branding.addEventListener("click", () => {
  if (branding.classList.contains("selected")) {
    branding.classList.remove("selected");
    design.classList.add("selected");
    marketing.classList.add("selected");

    groupIcon.classList.add("show-content");
    groupIcon2.classList.remove("show-content");
    groupIcon3.classList.remove("show-content");

    content1.classList.add("show-content");
    content2.classList.remove("show-content");
    content3.classList.remove("show-content");
  }
});

design.addEventListener("click", () => {
  if (design.classList.contains("selected")) {
    design.classList.remove("selected");
    branding.classList.add("selected");
    marketing.classList.add("selected");

    groupIcon.classList.remove("show-content");
    groupIcon2.classList.add("show-content");
    groupIcon3.classList.remove("show-content");

    content1.classList.remove("show-content");
    content2.classList.add("show-content");
    content3.classList.remove("show-content");
  }
});

marketing.addEventListener("click", () => {
  if (marketing.classList.contains("selected")) {
    marketing.classList.remove("selected");
    design.classList.add("selected");
    branding.classList.add("selected");

    groupIcon.classList.remove("show-content");
    groupIcon2.classList.remove("show-content");
    groupIcon3.classList.add("show-content");

    content1.classList.remove("show-content");
    content2.classList.remove("show-content");
    content3.classList.add("show-content");
  }
});

// menu
const menuButton = document.querySelector(".menu-button");
const menuList = document.querySelector(".menu-list");
const footerBtn = document.querySelector(".footerBtn");
const menuListFooter = document.querySelector(".menu-list-footer");

menuButton.addEventListener("click", function () {
  if (menuList.classList.contains("show-menu")) {
    menuList.classList.remove("show-menu");
    menuList.classList.add("hide-menu");
  } else {
    menuList.classList.add("show-menu");
    menuList.classList.remove("hide-menu");
  }

  const spanElement = this.querySelector("span");
  if (spanElement.textContent === "MENU") {
    spanElement.textContent = "CLOSE";
  } else {
    spanElement.textContent = "MENU";
  }
});

footerBtn.addEventListener("click", () => {
  if (menuListFooter.classList.contains("show-menu-footer")) {
    menuListFooter.classList.add("hide-menu-footer");
    menuListFooter.classList.remove("show-menu-footer");
  } else {
    menuListFooter.classList.add("show-menu-footer");
    menuListFooter.classList.remove("hide-menu-footer");
  }

  if (footerBtn.innerHTML === "MENU") {
    footerBtn.innerHTML = "CLOSE";
  } else {
    footerBtn.innerHTML = "MENU";
  }
});

// image pagination

const imgParent = document.querySelector(".img-parent").children;
const prev = document.querySelector(".left");
const next = document.querySelector(".right");
const pageNum = document.querySelector(".page-num").children;
let currentSlide = 0;


function showSlide(index) {
  for (let i = 0; i < imgParent.length; i++) {
    imgParent[i].classList.add("d-none");
  }
  imgParent[index].classList.remove("d-none");
  imgParent[index].classList.add("row");
}

function pageInfo(index) {
  for (var i = 0; i < pageNum.length; i++) {
    if (i === index) {
      pageNum[i].classList.add("active");
    } else {
      pageNum[i].classList.remove("active");
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentSlide);
});

prev.addEventListener("click", () => {
  if (currentSlide > 0) {
    currentSlide--;
    showSlide(currentSlide);
    pageInfo(currentSlide);

  }
});

next.addEventListener("click", () => {
  if (currentSlide < imgParent.length - 1) {
    currentSlide++;
    showSlide(currentSlide);
    pageInfo(currentSlide)
  }
});
