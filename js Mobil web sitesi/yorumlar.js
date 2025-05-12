// Yorumları DOM'a eklemek
window.addEventListener('DOMContentLoaded', () => {
    const yorumlarContainer = document.getElementById('yorumlar-container');

    // localStorage'dan tüm yorumları alıyoruz
    const yorumlar = JSON.parse(localStorage.getItem('yorumlar')) || [];

    // Yorumları ters çeviriyoruz ve son 5 yorumu alıyoruz
    const son5Yorum = yorumlar.reverse().slice(0, 5);  // Ters sıraya çevir ve ilk 5 yorumu al

    son5Yorum.forEach(yorum => {
        // Yorumları eklemek için bir div oluşturuyoruz
        const yorumDiv = document.createElement('div');
        yorumDiv.classList.add('yorum');

        const yorumContent = `
            <p class="yorum-author">${yorum.isim} ${yorum.soyisim}</p>
            <p class="yorum-text">${yorum.yorum}</p>
        `;

        yorumDiv.innerHTML = yorumContent;
        yorumlarContainer.appendChild(yorumDiv);
    });
});

// Yorum gönderme işlemi
document.getElementById('commentForm').addEventListener('submit', (e) => {
    e.preventDefault();  // Sayfa yenilemesini engelle

    // Form verilerini alıyoruz
    const isim = document.getElementById('isim').value;
    const soyisim = document.getElementById('soyisim').value;
    const yorum = document.getElementById('yorum').value;

    // Yeni yorum oluşturuyoruz
    const yeniYorum = {
        isim: isim,
        soyisim: soyisim,
        yorum: yorum
    };

    // localStorage'dan mevcut yorumları alıyoruz
    const yorumlar = JSON.parse(localStorage.getItem('yorumlar')) || [];

    // Yeni yorumu mevcut yorumlara ekliyoruz
    yorumlar.push(yeniYorum);

    // Yorumları localStorage'a kaydediyoruz
    localStorage.setItem('yorumlar', JSON.stringify(yorumlar));

    // Formu sıfırlıyoruz
    document.getElementById('commentForm').reset();

    // Sayfayı yeniden yüklüyoruz ki yeni yorumlar görünsün
    location.reload();
});
