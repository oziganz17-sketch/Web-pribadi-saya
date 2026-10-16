// JavaScript sederhana untuk website MyDesign

// Tampilkan tahun saat ini di footer.
document.querySelectorAll(".year").forEach(function (item) {
  item.textContent = new Date().getFullYear();
});

// Ambil tombol pengubah tema.
const themeButton = document.getElementById("themeToggle");

// Gunakan tema yang tersimpan, jika ada.
const savedTheme = localStorage.getItem("myDesignTheme");
if (savedTheme === "dark") {
  document.body.classList.add("dark");
}

function updateThemeButton() {
  if (!themeButton) return;
  if (document.body.classList.contains("dark")) {
    themeButton.textContent = "☀️ Mode Terang";
  } else {
    themeButton.textContent = "🌙 Mode Gelap";
  }
}

updateThemeButton();

// Saat tombol ditekan, ubah tema dan simpan pilihan pengguna.
if (themeButton) {
  themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    const currentTheme = document.body.classList.contains("dark")
      ? "dark"
      : "light";

    localStorage.setItem("myDesignTheme", currentTheme);
    updateThemeButton();
  });
}
