document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: [{
            title: 'naveen1 project',
            start: '2021-10-07'
        }, {
            title: 'naveen2 project',
            start: '2021-10-07'
        }, {
            title: 'naveen3 project',
            start: '2021-10-12'
        }]
    });
    calendar.render();
});