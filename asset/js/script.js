document.getElementById('photo').addEventListener('change', function(event) {
    // Akses file yang dipilih
    const file = event.target.files[0];
    if (file) {
        // Tampilkan file yang dipilih
        console.log('File yang dipilih:', file);
    }
});
