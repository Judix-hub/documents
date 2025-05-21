<div id="qrContainer"></div>

<script src="https://judix-hub.github.io/documents/qr_cbites.js"></script>

<script>
const redirectPageURL = "https://join.vibia.com/app_vibia/download";

// QR style
new QRCode(document.getElementById("qrContainer"), {
    text: redirectPageURL + "?qr_scanned=true",
    width: 122,
    height: 122,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
});
</script>
