//product menu
document.getElementById("products").addEventListener("mouseover", openMenu1);

function openMenu1() {
  document.getElementById("productsDropdown").classList.toggle("active");
}






//services menu
document.getElementById("services").addEventListener("mouseover", openMenu2);

function openMenu2() {
  document.getElementById("servicesDropdown").classList.toggle("active");
}






//company menu
document.getElementById("company").addEventListener("mouseover", openMenu3);

function openMenu3() {
  document.getElementById("companyDropdown").classList.toggle("active");
}
