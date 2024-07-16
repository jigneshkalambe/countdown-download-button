const btn = document.querySelector(".btn");
let timer = 5;
btn.onclick = function download() {
    btn.textContent = `download gonna start in ${timer} sec`;
    btn.style.background = "transparent";
    btn.disable = true;
    const countdown = setInterval(() => {
        timer--;
        btn.textContent = `download gonna start in ${timer} sec`;
        btn.style.pointerEvents = "none";
        if (timer <= 0) {
            clearInterval(countdown);
            btn.textContent = "Downloading...";
            setTimeout(() => {
                btn.textContent = "Download Now";
                btn.style.background = "#e28936";
                btn.style.pointerEvents = "auto";
                timer = 5;
                fetch(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTWYenGebfzJCuwiR4WdjzTzI7BdavwbbeHA&s`)
                    .then((response) => response.blob())
                    .then((blob) => {
                        const url = window.URL.createObjectURL(blob);
                        const a = document.createElement("a");
                        a.style.display = "none";
                        a.href = url;
                        a.download = "bgImage.jpg";
                        document.body.appendChild(a);
                        a.click();
                        window.URL.revokeObjectURL(url);
                        document.body.removeChild(a);
                    })
                    .catch(() => console.log("Download failed. Please try again."));
            }, 3000);
        }
    }, 1000);
};
