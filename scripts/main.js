document.addEventListener('DOMContentLoaded', function() {
        var elemSelect = document.querySelectorAll('select');
        var instanceSelect = M.FormSelect.init(elemSelect);
        var elemDate = document.querySelectorAll('.datepicker');
        var instanceDate = M.Datepicker.init(elemDate);
        var elemTime = document.querySelectorAll('.timepicker');
        var instanceTime = M.Timepicker.init(elemTime);
    }

);
document.addEventListener('DOMContentLoaded', function() {
    var registerTabs = document.querySelectorAll('.tabs');
    var instance = M.Tabs.init(registerTabs);
});

document.addEventListener('DOMContentLoaded', function() {
    var sideNav = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(sideNav);
});