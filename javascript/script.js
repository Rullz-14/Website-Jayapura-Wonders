// menambah event lister pada window saat posisi scroll
window.addEventListener('scroll', function(){

  // buat variabel untuk mengambil id navigasi
  const scrollNavigasi = document.getElementById("navigasi");

  // buat variabel untuk mendapatkan posisi scroll vertical
  const scrollPosition = window.scrollY;

  // buat variabel untuk mendapatkan tinggi pada window browser
  const scrollHeight = window.innerHeight; 

  // buata variabel untuk menghitung posisi navigasi pada saat scroll
  const scrollEfek = scrollHeight * 0.1;

  if (scrollPosition >= scrollEfek) {
    // jika posisi tinggi navigasi pada saat di scroll mencapai tinggi 10% atau lebih dari 10%, jalankan perintah ini
    scrollNavigasi.classList.add('effect');

  } else {
    // jika posisi tinggi navigasi berada di bawah 10%, jalankan perintah ini
    scrollNavigasi.classList.remove('effect');
  }
});