function showDate() {
    const locales = [
        { locale: 'ru-RU', label: 'русской локали' },
        { locale: 'en-US', label: 'американской локали' },
        { locale: 'fr-FR', label: 'французской локали' },
        { locale: 'de-DE', label: 'немецкой локали' },
        { locale: 'ja-JP', label: 'японской локали' }
    ];
    
    let out = document.getElementById('current-date');
    let today = new Date();
    let html = '';

    locales.forEach(item => {
        html += `<p>Дата и время для ${item.label}: <span class="date-time">${today.toLocaleString(item.locale)}</span></p>`;
    });

    out.innerHTML = html;
}
