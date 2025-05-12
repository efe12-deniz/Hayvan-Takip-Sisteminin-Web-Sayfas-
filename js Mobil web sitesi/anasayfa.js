// Card'a tıklanması durumunda yönlendirme
const cards = document.querySelectorAll('.card');  // Tüm card'ları seçiyoruz

cards.forEach(card => {
    card.addEventListener('click', () => {
        // Özellikler sayfasına yönlendir
        window.location.href = "ozellikler.html"; // Özellikler sayfasının bağlantısını burada vereceğiz
    });
});
// Slider resimlerinin yolları
const sliderImages = [
    "HTSslider.png",
    "KKslider.png",
    "KTslider.png"
];

let currentImageIndex = 0; // Başlangıç resmi

// Resmi değiştiren fonksiyon
function changeSliderImage() {
    currentImageIndex++;

    // Eğer son resime geldiysek başa dön
    if (currentImageIndex >= sliderImages.length) {
        currentImageIndex = 0;
    }

    // Resmi güncelle
    const sliderImage = document.getElementById("slider-image");
    sliderImage.src = sliderImages[currentImageIndex];
}

// 3 saniyede bir resmi değiştirelim
setInterval(changeSliderImage, 3000);


window.addEventListener('DOMContentLoaded', () => {
    const yorumlarContainer = document.getElementById('yorumlar-container');

    // localStorage'dan tüm yorumları alıyoruz
    const yorumlar = JSON.parse(localStorage.getItem('yorumlar')) || [];

    // Konsola kontrol amacıyla yorumları yazdıralım
    console.log('Yorumlar localStorage\'dan alındı:', yorumlar);

    // Yorumlar varsa, işlem yapalım
    if (yorumlar.length > 0) {
        // Yorumları ters çeviriyoruz ve son 5 yorumu alıyoruz
        const son5Yorum = yorumlar.reverse().slice(0, 5);  // Ters sıraya çevir ve ilk 5 yorumu al

        son5Yorum.forEach(yorum => {
            // Yorumları eklemek için bir div oluşturuyoruz
            const yorumDiv = document.createElement('div');
            yorumDiv.classList.add('yorum-preview'); // Yorumları stilize etmek için sınıf ekleyin

            const yorumContent = `
                <p class="yorum-author">${yorum.isim} ${yorum.soyisim}</p>
                <p class="yorum-text">${yorum.yorum}</p>
            `;

            yorumDiv.innerHTML = yorumContent;
            yorumlarContainer.appendChild(yorumDiv);
        });
    } else {
        // Eğer yorum yoksa, uyarı ver
        yorumlarContainer.innerHTML = '<p>Henüz hiç yorum yapılmadı.</p>';
    }
});




