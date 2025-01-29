// // Array berisi data 20 guru
// const dataGuru = [
//   { nama: "Fathullah S.Pd", nip: "-", foto: "img/kepsek.jpg" },
//   { nama: "M.Irwan", nip: "-", foto: "guru/irwan.jpeg" },
//   { nama: "Fathullah S.Pd", nip: "-", foto: "img/kepsek.jpg" },
//   { nama: "Fathullah S.Pd", nip: "-", foto: "img/kepsek.jpg" },
//   { nama: "Fathullah S.Pd", nip: "-", foto: "img/kepsek.jpg" },
//   { nama: "Fathullah S.Pd", nip: "-", foto: "img/kepsek.jpg" },
//   { nama: "Fathullah S.Pd", nip: "-", foto: "img/kepsek.jpg" },
//   { nama: "Fathullah S.Pd", nip: "-", foto: "img/kepsek.jpg" },
//   { nama: "Fathullah S.Pd", nip: "-", foto: "img/kepsek.jpg" },
//   { nama: "Fathullah S.Pd", nip: "-", foto: "img/kepsek.jpg" },
//   { nama: "Fathullah S.Pd", nip: "-", foto: "img/kepsek.jpg" },
//   { nama: "Fathullah S.Pd", nip: "-", foto: "img/kepsek.jpg" },
//   { nama: "Fathullah S.Pd", nip: "-", foto: "img/kepsek.jpg" },
//   { nama: "Fathullah S.Pd", nip: "-", foto: "img/kepsek.jpg" },
//   { nama: "Fathullah S.Pd", nip: "-", foto: "img/kepsek.jpg" },
//   { nama: "Fathullah S.Pd", nip: "-", foto: "img/kepsek.jpg" },
//   { nama: "Fathullah S.Pd", nip: "-", foto: "img/kepsek.jpg" },
//   { nama: "Fathullah S.Pd", nip: "-", foto: "img/kepsek.jpg" },
//   { nama: "Fathullah S.Pd", nip: "-", foto: "img/kepsek.jpg" },
//   { nama: "Fathullah S.Pd", nip: "-", foto: "img/kepsek.jpg" },
// ];

// // Fungsi untuk membuat card HTML
// function buatCardGuru(guru) {
//   return `
//       <div class="col-6 col-md-4 col-lg-3">
//         <div class="card text-center shadow-sm">
//           <img src="${guru.foto}" class="card-img-top" alt="Foto Guru" />
//           <div class="card-body">
//             <h6 class="card-title fw-bold mb-1">${guru.nama}</h6>
//             <p class="text-muted medium mb-1">NIP: ${guru.nip}</p>
//             <button class="btn-sekolah btn-sm">Lihat Biodata</button>
//           </div>
//         </div>
//       </div>
//     `;
// }

// // Render 8 card pertama
// const guruContainer = document.getElementById("guruContainer");
// dataGuru.slice(0, 8).forEach((guru) => {
//   guruContainer.innerHTML += buatCardGuru(guru);
// });

// // Event listener untuk tombol Lihat Selengkapnya
// const btnLihatSelengkapnya = document.getElementById("lihatSelengkapnya");
// btnLihatSelengkapnya.addEventListener("click", () => {
//   // Tampilkan sisa guru (9-20)
//   dataGuru.slice(8).forEach((guru) => {
//     guruContainer.innerHTML += buatCardGuru(guru);
//   });
//   // Sembunyikan tombol setelah semua guru ditampilkan
//   btnLihatSelengkapnya.style.display = "none";
// });
