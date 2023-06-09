var htmls ='<head> <meta charset="utf-8"> <meta name="author" content="MrqRama"> <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"> <meta name="description" content=""> <title>AdBlocker Detected</title> <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ourtecads/AntiAdblock@aa134c5d3bebffeaf60dfc37726916de1cb6675e/vendor.bundle.css"> <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ourtecads/AntiAdblock@aa134c5d3bebffeaf60dfc37726916de1cb6675e/style.css"> <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ourtecads/AntiAdblock@aa134c5d3bebffeaf60dfc37726916de1cb6675e/theme.css"></head><body class="nk-body body-wider theme-dark"> <div class="nk-wrap ov-h"> <div class="container-fluid"> <main class="nk-pages nk-pages-centered tc-light px-0 text-center"> <div class="my-auto py-5"> <div class="row justify-content-center"> <div class="col-xl-6 col-md-7 col-sm-9"> <div class="position-relative"> <h2 class="title-xl-grad">AdBlocker Detected</h2> <h5 class="pb-2">Opps! You might be using an ad blocker.</h5> <p class="">Please disable your adblocker to ensure uninterrupted browsing on our website. We assure you that we do not display any harmful advertisements that could jeopardize your security or privacy. Thank you for your understanding and support!</p></div></div></div></div></main> </div><div class="nk-ovm shape-z4"></div></div></body>';
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
