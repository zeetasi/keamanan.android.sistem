document.addEventListener("DOMContentLoaded", function () {
    // Efek loading saat pertama kali halaman dibuka
    const body = document.body;
    body.style.opacity = "0";
    body.style.transition = "opacity 1s ease-in-out";
    setTimeout(() => { body.style.opacity = "1"; }, 500);

    // Animasi border kamera
    const video = document.getElementById("video");
    if (video) {
        video.style.border = "5px solid blue";
        video.style.borderRadius = "10px";
        video.style.boxShadow = "0px 0px 15px rgba(0, 0, 255, 0.5)";
        video.style.transition = "all 0.5s ease-in-out";

        setInterval(() => {
            video.style.borderColor = video.style.borderColor === "blue" ? "red" : "blue";
        }, 1000);
    }

    // Efek notifikasi masuk
    function showNotification(message) {
        let notif = document.createElement("div");
        notif.innerText = message;
        notif.style.position = "fixed";
        notif.style.bottom = "20px";
        notif.style.right = "20px";
        notif.style.background = "rgba(0, 0, 0, 0.8)";
        notif.style.color = "white";
        notif.style.padding = "10px 20px";
        notif.style.borderRadius = "5px";
        notif.style.zIndex = "1000";
        notif.style.fontSize = "14px";
        document.body.appendChild(notif);

        setTimeout(() => {
            notif.style.opacity = "0";
            notif.style.transition = "opacity 1s ease-in-out";
            setTimeout(() => { document.body.removeChild(notif); }, 1000);
        }, 3000);
    }

    // Panggil notifikasi saat halaman dimuat
    showNotification("🔍 keamanan sistem android");
});