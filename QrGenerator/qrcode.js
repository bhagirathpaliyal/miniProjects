const qrInput = document.getElementById("qrData");
const generateButton = document.getElementById("generateQR");
const image = document.getElementById("qrCode");
const errorMessage = document.getElementById("errorMessage");

generateButton.addEventListener("click", () => {
    if (qrInput.value.trim() === "") {
        errorMessage.textContent = "Please enter URL to generate the QR code."; 
       
    } else {
        errorMessage.textContent = "";
        QRCode.toDataURL(qrInput.value).then(dataUrl => {
            image.src = dataUrl;
        })
    }
});



