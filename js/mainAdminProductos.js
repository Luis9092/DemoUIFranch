const buttonAgregarProducto = document.querySelector("#buttonAgregarProducto");
const modalProducto = document.querySelector("#modalProducto");
const btnSalir = document.querySelector(".btnSalir");

buttonAgregarProducto.addEventListener("click", () => {
  modalProducto.showModal();
});

btnSalir.addEventListener("click", () => {
  modalProducto.close();
});
