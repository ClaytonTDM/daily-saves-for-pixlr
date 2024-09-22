localStorage.setItem('user-settings', '{"lastNewsCheck":"1970-01-01T00:00:00Z"}');
let deletedModal = false;
window.addEventListener('load', function () {
    /*
    let targetNode = document.body;
    let config = { childList: true, subtree: true };
    let observer = new MutationObserver(function (mutationsList, observer) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                let modal = document.getElementsByClassName('modal')[0];
                if (modal && !deletedModal) {
                    setTimeout(() => {
                        modal.remove();
                        deletedModal = true;
                    }, 50);
                }
            }
        }
    });
    observer.observe(targetNode, config);
    */
    setInterval(() => {
        console.log('resetting daily saves')
        localStorage.setItem('user-settings', `{"lastNewsCheck":"${new Date().toISOString()}"}`);
    }, 500);
});
