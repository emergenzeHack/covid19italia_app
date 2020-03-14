var player = document.getElementById("radioplayer"),
    button = document.getElementById("play"),
    song_info = document.getElementById("song"),
    xmlhttp = new XMLHttpRequest;
player.addEventListener("play", function() {
    button.classList.remove("play"), button.classList.contains("stop") || button.classList.add("stop")
}, !0), player.addEventListener("pause", function() {
    button.classList.remove("stop"), button.classList.contains("play") || button.classList.add("play")
}, !0), button.addEventListener("click", function() {
    player.paused ? player.play() : player.pause()
}, !0), xmlhttp.onreadystatechange = function() {
    4 === xmlhttp.readyState && 200 === xmlhttp.status && (song_info.innerText = xmlhttp.responseText, console.log(xmlhttp.responseText))
}, xmlhttp.open("GET", "/php/current_song.php"), xmlhttp.send(), setInterval(function() {
    xmlhttp.open("GET", "/php/current_song.php"), xmlhttp.send()
}, 5000), $(function() {
    var t = $(window).width();
    if (!0 == !!(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) || t < 992) {
        var e = $(".expand");
        e.on("click", function() {
            $(this).hasClass("active") ? ($(this).removeClass("active"), $(this).next(".expandable").slideUp().removeClass("expanded")) : ($(this).addClass("active"), $(this).next(".expandable").slideDown(), e.not($(this)).removeClass("active"), e.not($(this)).next(".expandable").slideUp().removeClass("expanded"))
        })
    }
}), $(document).ready(function() {
$(".gotop").on("click", function() {
        $("body,html").animate({
            scrollTop: 0
        }, 1000)
    });
    var t = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
        e = new Date,
        n = e.getDay(),
        a = e.getHours(),
        i = t[n - 1];
    i = 0 === n ? t[6] : t[n - 1];
    var s = $("#" + i);
    s.find(".expandable").addClass("expanded"), s.find(".expand").addClass("active"), $(".row-show", s).each(function() {
        var t = $(this).find(".hour").text().split(":")[0];
        return parseInt(t) > parseInt(a) ? ($(this).prev(".row-show").append('<div class="playing-bullet"></div>'), !1) : parseInt(t) == parseInt(a) ? ($(this).append('<div class="playing-bullet"></div>'), !1) : void 0
    });

        992 < $(window).width() && $("#player, #channels, #contact").stick_in_parent({
            inner_scrolling: !1,
            bottoming: !0
        }), $(".gotop").on("click", function() {
            $("body,html").animate({
                scrollTop: 0
            }, 1e3)
        });

});



/* PWA: Progressive Web Application */


/* Only register a service worker if it's supported */
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js');
}

/**
 * Warn the page must be served over HTTPS
 * The `beforeinstallprompt` event won't fire if the page is served over HTTP.
 * Installability requires a service worker with a fetch event handler, and
 * if the page isn't served over HTTPS, the service worker won't load.
 */
if (window.location.protocol === 'http:') {
    const requireHTTPS = document.getElementById('requireHTTPS');
    const link = requireHTTPS.querySelector('a');
    link.href = window.location.href.replace('http://', 'https://');
    requireHTTPS.classList.remove('hidden');
}