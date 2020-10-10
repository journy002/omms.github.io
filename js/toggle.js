(function (window, document) {
    'use strict';

    // $ => 요소를 담고 있을때 앞에 사용한다. 안붙여도 상관없다.
    const $toggles = document.querySelectorAll('.toggle');
    const $toggleBtn = document.getElementById('toggle-btn');

    $toggleBtn.addEventListener('click', function () {
        toggleElements();
    });
    // window => 브라우저를 의미한다.
    window.addEventListener('resize', function () {
        if (window.innerWidth > 1024) {
            // Off toggle element
            offElements();
        }
    });

    function toggleElements() {
        [].forEach.call($toggles, function (toggle) {
            toggle.classList.toggle('on');
        });
    }
    function offElements() {
        [].forEach.call($toggles, function (toggle) {
            toggle.classList.remove('on');
        });
    }
})(window, document)