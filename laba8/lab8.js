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

    let additionalInfo = document.getElementById('additional-info');
    let daysOfWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    additionalInfo.innerHTML = `
        <p>Текущий год: <span class="date-info">${today.getFullYear()}</span></p>
        <p>Текущий месяц: <span class="date-info">${today.toLocaleString('ru-RU', { month: 'long' })}</span></p>
        <p>Текущая дата: <span class="date-info">${today.getDate()}</span></p>
        <p>День недели: <span class="date-info">${daysOfWeek[today.getDay()]}</span></p>
    `;
}
