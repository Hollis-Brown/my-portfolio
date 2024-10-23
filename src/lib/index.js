// place files you want to import through the `$lib` alias in this folder.

function showCertification(index) {
  const certificationImage = document.getElementById("certificationImage");
  if (certificationImage) {
      certificationImage.src = certifications[index].src;
      certificationImage.alt = certifications[index].alt;
  }
}

function nextCertification() {
  currentIndex = (currentIndex + 1) % certifications.length;
  showCertification(currentIndex);
}

function prevCertification() {
  currentIndex = (currentIndex - 1 + certifications.length) % certifications.length;
  showCertification(currentIndex);
}

export { nextCertification, prevCertification };