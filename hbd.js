// Tampilkan animasi intro lalu munculkan konten
window.onload = () => {
  setTimeout(() => {
    document.getElementById("title").classList.remove("hidden");
    document.getElementById("btn").classList.remove("hidden");
    playMusic();
  }, 2500);
};

// Tampilkan pesan ulang tahun + confetti
function showMessage() {
  const msg = document.getElementById("birthdayMessage");
  msg.classList.remove("hidden");

  // Efek confetti
  launchConfetti();
}

// Putar musik
function playMusic() {
  const music = document.getElementById("bgMusic");
  music.volume = 0.3; // volume kecil
  music.play().catch(() => {
    console.log("Autoplay diblokir, pengguna harus klik tombol dulu.");
  });
}

// Membuat balon animasi muncul secara acak
for (let i = 0; i < 30; i++) {
  let balloon = document.createElement("div");
  balloon.className = "balloon";
  balloon.style.left = Math.random() * 100 + "vw";
  balloon.style.background = `hsl(${Math.random() * 360}, 70%, 70%)`;
  balloon.style.animationDuration = Math.random() * 3 + 3 + "s";
  document.body.appendChild(balloon);
}

// Fungsi efek confetti
function launchConfetti() {
  var duration = 3 * 1000;
  var end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 7,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
    });
    confetti({
      particleCount: 7,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}
