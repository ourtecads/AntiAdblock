
var htmls ='<head> <meta charset="utf-8"> <meta name="author" content="MrqRama"> <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"> <meta name="description" content=""> <title>Network Error</title> <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ourtecads/AntiAdblock@aa134c5d3bebffeaf60dfc37726916de1cb6675e/vendor.bundle.css"> <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ourtecads/AntiAdblock@aa134c5d3bebffeaf60dfc37726916de1cb6675e/style.css"> <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ourtecads/AntiAdblock@aa134c5d3bebffeaf60dfc37726916de1cb6675e/theme.css"></head><body class="nk-body body-wider theme-dark"> <div class="nk-wrap ov-h"> <div class="container-fluid"> <main class="nk-pages nk-pages-centered tc-light px-0 text-center"> <div class="my-auto py-5"> <div class="row justify-content-center"> <div class="col-xl-6 col-md-7 col-sm-9"> <div class="position-relative"> <h2 class="title-xl-grad">Network Error</h2> <h5 class="pb-2">Opps! You might be using an ad blocker.</h5> <p class="">If you are, please disable it and try again.</p><b><p class="my-3">I\'m not using an ad blocker, but this message still appears. What should I do?</p></b><p>Even if you\'re not using an ad blocker, the "Do Not Track" feature in your browser might be enabled. Please check your browser settings and make sure the "Do Not Track" feature is turned off. We need certain data to analyze and improve our services, which is why it\'s important for us to collect that data.</p><p>By allowing us to collect data, we can gain valuable insights into user behavior and preferences, enabling us to enhance our services, provide personalized experiences, and deliver relevant content. Your privacy and security are important to us, and we handle your data responsibly following industry best practices.</p><p class="my-3">To learn how to disable the "Do Not Track" feature in your browser, please refer to the documentation below:</p><ul class="list-unstyled"><li><a class="btn btn-grad btn-md btn-round mb-2" href="https://support.google.com/chrome/answer/2790761?hl=en&co=GENIE.Platform%3DDesktop&oco=1" target="_blank">Google Chrome: Disable Do Not Track</a></li><li><a class="btn btn-grad btn-md btn-round mb-2" href="https://support.mozilla.org/en-US/kb/how-do-i-turn-do-not-track-feature" target="_blank">Mozilla Firefox: Disable Do Not Track</a></li><li><a class="btn btn-grad btn-md btn-round mb-2" href="https://support.apple.com/guide/safari/use-private-browsing-and-do-not-track-sfri40732/mac" target="_blank">Safari: Disable Do Not Track</a></li><li><a class="btn btn-grad btn-md btn-round mb-2" href="https://support.microsoft.com/en-us/microsoft-edge/learn-about-tracking-prevention-in-microsoft-edge-5ac125e8-9b90-8d59-fa2c-7f2e9a44d869" target="_blank">Microsoft Edge: Disable Do Not Track</a></li><li><a class="btn btn-grad btn-md btn-round mb-2" href="https://help.opera.com/en/latest/web-preferences/#do-not-track" target="_blank">Opera: Disable Do Not Track</a></li></ul></div></div></div></div></main> </div><div class="nk-ovm shape-z4"></div></div></body>';
(function(w,d,s,l,i){
  w[l]=w[l]||[];
  w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
  var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),
      dl=l!='dataLayer'?'&l='+l:'';
  j.async=true;
  j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
  f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TSPMGJL');

window.addEventListener('load', function() {
  var TestAd = "//static.surfe.pro/js/net.js";
  var TestAd2 = "https://cryptocoinsad.com/ads/js/slider_right.js";
  var blocked = false; // Inisialisasi variabel blocked sebagai false
  (function(){
    fetch(new Request(TestAd2,{method:"HEAD",mode:"no-cors"}))
      .catch(function(error){
        blocked = true; // Jika terjadi error pada fetch, set blocked menjadi true
      });
    if (navigator.doNotTrack === "1") {
      blocked = true; // Jika mode pelacakan atau perlindungan privasi aktif, set blocked menjadi true
    }
    var b = performance.now();
    var a = document.createElement("script");
    a.onload = function(){
      (performance.now()-b).toFixed(2);
      a.parentNode.removeChild(a);
    };
    a.onerror = function(){
      var a = (performance.now()-b).toFixed(2)+"ms";
      blocked = true; // Jika terjadi error saat memuat script, set blocked menjadi true
    };
    a.src = TestAd;
    document.body.appendChild(a);
  })();

  var parentDiv = document.getElementById("abt24MbyK");
  if (parentDiv.innerHTML.indexOf("GIF") !== -1) {
    blocked = true; // Jika parentDiv mengandung 'GIF', set blocked menjadi true
  } else {
    parentDiv.remove();
  }
  
  if (!document.getElementById('lipfoJyjxTvn')) {
    blocked = true; // Jika elemen dengan ID 'lipfoJyjxTvn' tidak ada, set blocked menjadi true
  }

  var maxChecks = 5; // Jumlah maksimal pengecekan
  var currentCheck = 0; // Jumlah pengecekan saat ini

  var interval = setInterval(function() {
    if (blocked) {
      document.querySelector('html').innerHTML = htmls; // Jika blocked adalah true, set innerHTML dari html menjadi htmls
      if (typeof gtag === "function") {
        gtag('event', 'ads_blocked'); // Kirim event 'ads_blocked' jika fungsi gtag() tersedia
      }
      clearInterval(interval); // Menghentikan interval setelah tindakan diambil
    } else if (currentCheck >= maxChecks) {
      clearInterval(interval); // Menghentikan interval setelah mencapai jumlah maksimal pengecekan
    } else {
      currentCheck++; // Meningkatkan jumlah pengecekan saat ini
    }
  }, 1000); // Interval setiap 1 detik (1000 milidetik)
});

var uniqueDiv = document.createElement('div');
uniqueDiv.id = 'abt24MbyK';

var ins = document.createElement('ins');
ins.className = 'surfe-be';
ins.setAttribute('data-sid', '1');

var script = document.createElement('script');
script.textContent = '(adsurfebe = window.adsurfebe || []).push({});';

uniqueDiv.appendChild(ins);
uniqueDiv.appendChild(script);

document.body.appendChild(uniqueDiv);
