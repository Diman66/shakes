var yandex = {
    "v28": 67199812,
    "v29": 67209268,
	"v30": 67715287,
	"v31": 67758169,
	"v32": 67949836,
    "v33": 68493841,
    "v34": 68611552,
    "v35": 69662716,
	"v36": 70187629,
	"v37": 70868077,
    "v38": 70869154,
    "v39": 70632508,
    "v40": 71560174,
	"v41": 71298586,
    "v42": 71515708,
    "v43": 71577994,
    "v44": 71948986,
    "v45": 72353587,
    "v46": 72353566,
    "v47": 72353479,
    "v48": 72924967,
    "v49": 72925027,
    "v50": 73289836,
    "v51": 73289833,
    "v52": 73289821,
    "v53": 73289770,
    "v54": 73635169,
    "v55": 74565307,
    "v57": 76132477,
    "v58": 75531829,
    "v59": 75572608,
    "v60": 76808446,
    "v61": 76278076,
    "v62": 77124727,
    "v63": 77668507,
    "v64": 77692111,
    "v65": 77181799,
    "v66": 77834533,
    "v67": 78315610,
    "v68": 78739452,
    "v69": 79142152,
    "v70": 81170074,
    "v71": 81170473,
	"v72": 83702443,
    "v73": 84459988,
	"v74": 84133630,
    "v75": 84284113,
    "v76": 85933580,
	"v77": 84586636,
	"v78": 85051807,
	"v79": 85052452,
	"v80": 85052644,
	"v81": 85065106,
	"v82": 85510108,
	"v83": 85510147,
    "v84": 86006102,
    "v85": 86459797,
    "v86": 86228431,
};

function $_GET(key) {
    var s = window.location.search;
    s = s.match(new RegExp(key + '=([^&=]+)'));
    return s ? s[1] : '';
}

var site = $_GET('version').replace('it', '').replace('39', '').replace('prelp', '')

if (!site) {
    var site = document.location.pathname
        .replace(/\/+/g, '')
        .replace('index.html', '')
        .replace('index2.html', '')
        .replace('prelp', '')
        .replace('it', '')
        .replace('39', '')
        .replace('confirm.html', '');

}
(function (m, e, t, r, i, k, a) {
    m[i] = m[i] || function () {
        (m[i].a = m[i].a || []).push(arguments)
    };
    m[i].l = 1 * new Date();
    k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
})
(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

ym(yandex[site], "init", {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true
});