// Jalankan setelah halaman selesai dimuat
window.onload = () => {
  const music = document.getElementById("bgMusic");

  // Coba autoplay musik
  music.volume = 0;
  music.play()
    .then(() => fadeInMusic(music))
    .catch(() => {
      console.log("Autoplay diblokir, tunggu interaksi pertama.");
      // Jika autoplay gagal, jalankan musik saat klik pertama
      document.addEventListener("click", () => {
        music.play();
        fadeInMusic(music);
      }, { once: true });

      // Untuk mobile (tap layar)
      document.addEventListener("touchstart", () => {
        music.play();
        fadeInMusic(music);
      }, { once: true });
    });

  // Tampilkan judul dan tombol setelah intro
  setTimeout(() => {
    document.getElementById("title").classList.remove("hidden");
    document.getElementById("btn").classList.remove("hidden");
  }, 2500);

  // Buat balon muncul
  spawnBalloons();
};

// Fungsi fade-in musik agar tidak langsung keras
function fadeInMusic(music) {
  let vol = 0;
  const fade = setInterval(() => {
    if (vol < 0.4) { // Volume maksimal
      vol += 0.02;
      music.volume = vol;
    } else {
      clearInterval(fade);
    }
  }, 100);
}

// Fungsi menampilkan pesan ulang tahun + confetti
function showMessage() {
  const msg = document.getElementById("birthdayMessage");
  msg.classList.remove("hidden");
  launchConfetti();
}

// Fungsi untuk membuat balon animasi
function spawnBalloons() {
  for (let i = 0; i < 30; i++) {
    let balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.style.left = Math.random() * 100 + "vw";
    balloon.style.background = `hsl(${Math.random() * 360}, 70%, 70%)`;
    balloon.style.animationDuration = Math.random() * 3 + 3 + "s";
    document.body.appendChild(balloon);
  }
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
