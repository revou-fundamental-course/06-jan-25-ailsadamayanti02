window.onload = function() {
    // Tampilkan prompt untuk meminta nama pengguna
    const name = prompt("Masukkan nama Anda:");

    // Cek apakah nama sudah diisi
    if (name) {
        // Ubah teks pada elemen greeting dengan nama yang dimasukkan
        document.getElementById('greeting').textContent = `Hi, ${name}! Welcome`;

        // Sembunyikan form setelah nama dimasukkan
        document.getElementById('name-form').style.display = 'none';
    } else {
        // Jika tidak ada nama yang dimasukkan, tetap tampilkan teks default
        document.getElementById('greeting').textContent = `Hi, user! Welcome to my website`;
    }
};

function toggleMenu() {
    const navbarLinks = document.querySelector('.navbar__links');
    navbarLinks.classList.toggle('active');
}


