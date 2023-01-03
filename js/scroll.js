function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element_show");
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let header = document.querySelectorAll(".header");
let hero = document.querySelectorAll(".hero-title");
let partners = document.querySelectorAll(".partners");
let facts = document.querySelectorAll(".facts");
let works = document.querySelectorAll(".works-title");
let workstitle = document.querySelectorAll(".works-item-title");
let workssubtitle = document.querySelectorAll(".works-item-subtitle");
let about = document.querySelectorAll(".about");
let features = document.querySelectorAll(".features");
let feedback = document.querySelectorAll(".feedback");
let skills = document.querySelectorAll(".skills");
let blog = document.querySelectorAll(".blog");
let talk = document.querySelectorAll(".talk");
let footer = document.querySelectorAll(".footer");
let blogtitleour = document.querySelectorAll(".blog-title-our");
for (let elm of header) {
  observer.observe(elm);
}
for (let elm of hero) {
  observer.observe(elm);
}
for (let elm of partners) {
  observer.observe(elm);
}
for (let elm of facts) {
  observer.observe(elm);
}
for (let elm of workssubtitle) {
  observer.observe(elm);
}
for (let elm of works) {
  observer.observe(elm);
}
for (let elm of workstitle) {
  observer.observe(elm);
}
for (let elm of about) {
  observer.observe(elm);
}
for (let elm of features) {
  observer.observe(elm);
}
for (let elm of feedback) {
  observer.observe(elm);
}
for (let elm of blogtitleour) {
  observer.observe(elm);
}
for (let elm of skills) {
  observer.observe(elm);
}
for (let elm of blog) {
  observer.observe(elm);
}
for (let elm of talk) {
  observer.observe(elm);
}
for (let elm of footer) {
  observer.observe(elm);
}
