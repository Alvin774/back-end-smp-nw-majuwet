/*   script bgian home-banner Start  */

// Function to animate text letter by letter
function animateText(elementId, text, delay = 80) {
  const element = document.getElementById(elementId);
  element.innerHTML = ""; // Clear existing text
  element.style.visibility = "visible"; // Make element visible
  let i = 0;

  function typeLetter() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeLetter, delay);
    }
  }
  typeLetter();
}

// Start animation loop on page load
window.onload = () => {
  const text1 = "Selamat Datang di SMP Islam Sa'adatuddarain NW Majuwet";
  const text2 =
    "Sa'adatuddarain: Pendidikan Cerdas Untuk Kehidupan Bahagia Dunia dan Akhirat";

  animateText("animated-text", text1, 80);

  // Animate the second text after the first finishes
  setTimeout(() => {
    animateText("animated-subtext", text2, 80);
  }, text1.length * 80 + 500); // Add small delay after text1
};

/*   script bgian home-banner end   */

/*   script bgian berita artikel start  */

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".berita-artikel .card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = "running";
          observer.unobserve(entry.target); // Animasi hanya sekali
        }
      });
    },
    { threshold: 0.2 }
  );

  cards.forEach((card) => {
    card.style.animationPlayState = "paused"; // Animasi pause awal
    observer.observe(card);
  });
});

/*   script bgian berita artikel end  */

/*   script ppdb-home start  */

// document.addEventListener("DOMContentLoaded", () => {
//   const banner = document.querySelector(".ppdb-home img");

//   // Intersection Observer untuk memantau elemen
//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("is-visible"); // Mulai animasi
//           observer.unobserve(entry.target); // Hapus observer
//         }
//       });
//     },
//     { threshold: 0.4 } // Elemen terlihat 40% di layar
//   );

//   observer.observe(banner);
// });

/*   script ppdb-home end  */

/*   script mengapa memilih start   */
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".mengapa-pilih .card");

  // Observer untuk mendeteksi elemen yang terlihat
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const card = entry.target;
          const index = [...cards].indexOf(card); // Dapatkan indeks card
          card.style.setProperty("--delay", `${index * 0.5}s`); // Atur delay dinamis
          card.classList.add("show"); // Tambahkan kelas 'show' untuk memulai animasi
          observer.unobserve(card); // Lepaskan observer setelah animasi dimulai
        }
      });
    },
    { threshold: 0.2 } // Mulai animasi ketika 20% elemen terlihat
  );

  // Daftarkan setiap card ke observer
  cards.forEach((card) => {
    observer.observe(card);
  });
});

/*   script mengapa memilih end   */

/*   script bgian Pengumuman agenda   start   */

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".pengumuman-agenda .card");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Tambahkan kelas show untuk animasi
          entry.target.classList.add("show");
          // Hentikan observasi untuk elemen ini
          observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null, // Menggunakan viewport sebagai root
      threshold: 0.2, // 20% elemen terlihat untuk memicu animasi
    }
  );

  // Amati setiap card
  cards.forEach((card) => {
    observer.observe(card);
  });
});

/*   script bgian Pengumuman agenda   end   */

/*   script bgian statistik  start   */
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");
  const options = { threshold: 0.5 }; // Animasi dimulai jika elemen terlihat 50% di viewport

  const startCounter = (entry) => {
    if (entry.isIntersecting) {
      const counter = entry.target;
      const target = +counter.getAttribute("data-target");
      let current = 0;
      const increment = target / 230; // Menentukan kecepatan animasi

      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.innerText = Math.ceil(current);
          requestAnimationFrame(updateCounter);
        } else {
          counter.innerText = target; // Pastikan angka akhir sesuai target
        }
      };

      updateCounter();
      observer.unobserve(counter); // Hentikan pengamatan setelah animasi selesai
    }
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(startCounter);
  }, options);

  counters.forEach((counter) => {
    observer.observe(counter);
  });
});

/*   script bgian statistik  end   */
