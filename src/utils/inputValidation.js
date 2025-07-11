export const onlyLetters = (e) => {
  const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]$/;
  if (!regex.test(e.key) && e.key !== "Backspace") {
    e.preventDefault();
  }
};
