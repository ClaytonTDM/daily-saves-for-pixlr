window.addEventListener('load', function () {
    setTimeout(function () { document.getElementsByClassName('modal')[0].remove(); }, 500);
    setInterval(() => {
        console.log('resetting daily saves [do NOT dmca me i am NOT breaking any copyright laws]')
        localStorage.setItem('user-settings', '{"lastNewsCheck":"1969-12-31T01:01:01.900Z","dailySave":{"day":1,"tally":1}}');
    }, 1000);
});