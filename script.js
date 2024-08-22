document.addEventListener('DOMContentLoaded', () => {
    const monthYear = document.getElementById('month-year');
    const calendarDays = document.getElementById('calendar-days');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    let currentDate = new Date();

    function renderCalendar() {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const lastDate = new Date(year, month + 1, 0).getDate();

        monthYear.textContent = `${currentDate.toLocaleString('pt-BR', { month: 'long' })} ${year}`;

        calendarDays.innerHTML = '';

        for (let i = 0; i < firstDay; i++) {
            calendarDays.innerHTML += '<div></div>';
        }

        for (let date = 1; date <= lastDate; date++) {
            const dayDiv = document.createElement('div');
            dayDiv.textContent = date;
            if (date === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear()) {
                dayDiv.classList.add('today');
            }
            calendarDays.appendChild(dayDiv);
        }
    }

    prevButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    });

    nextButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    });

    renderCalendar();
});