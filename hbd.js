// Fungsi ketika tombol diklik
      function showMessage() {
        document.getElementById("birthdayMessage").style.display = "block";
      }

      // Membuat balon animasi muncul secara acak
      for (let i = 0; i < 30; i++) {
        let balloon = document.createElement("div");
        balloon.className = "balloon";

        // Posisi horizontal acak (0-100vw)
        balloon.style.left = Math.random() * 100 + "vw";

        // Warna balon acak dengan hsl
        balloon.style.background = `hsl(${Math.random() * 360}, 70%, 70%)`;

        // Durasi animasi acak
        balloon.style.animationDuration = Math.random() * 3 + 3 + "s";

        document.body.appendChild(balloon);
      }