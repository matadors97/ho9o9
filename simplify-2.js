function loophalaman(a) {
    var b = "";
    nomerkiri = parseInt(numshowpage / 2), nomerkiri == numshowpage - nomerkiri && (numshowpage = 2 * nomerkiri + 1), 
    mulai = nomerhal - nomerkiri, mulai < 1 && (mulai = 1), maksimal = parseInt(a / postperpage) + 1, 
    maksimal - 1 == a / postperpage && (maksimal -= 1), akhir = mulai + numshowpage - 1, 
    akhir > maksimal && (akhir = maksimal), b += "<span class='showpageOf'>الصفحة " + nomerhal + " من " + maksimal + "</span>";
    var c = parseInt(nomerhal) - 1;
    nomerhal > 1 && (b += 2 == nomerhal ? "page" == jenis ? '<span class="showpage"><a href="' + home_page + '">' + upPageWord + "</a></span>" : '<span class="showpageNum"><a href="/search/label/' + lblname1 + "?&max-results=" + postperpage + '">' + upPageWord + "</a></span>" : "page" == jenis ? '<span class="showpageNum"><a href="#" onclick="redirectpage(' + c + ');return false">' + upPageWord + "</a></span>" : '<span class="showpageNum"><a href="#" onclick="redirectlabel(' + c + ');return false">' + upPageWord + "</a></span>"), 
    mulai > 1 && (b += "page" == jenis ? '<span class="showpageNum"><a href="' + home_page + '">1</a></span>' : '<span class="showpageNum"><a href="/search/label/' + lblname1 + "?&max-results=" + postperpage + '">1</a></span>'), 
    mulai > 2 && (b += "");
    for (var d = mulai; d <= akhir; d++) b += nomerhal == d ? '<span class="showpagePoint">' + d + "</span>" : 1 == d ? "page" == jenis ? '<span class="showpageNum"><a href="' + home_page + '">1</a></span>' : '<span class="showpageNum"><a href="/search/label/' + lblname1 + "?&max-results=" + postperpage + '">1</a></span>' : "page" == jenis ? '<span class="showpageNum"><a href="#" onclick="redirectpage(' + d + ');return false">' + d + "</a></span>" : '<span class="showpageNum"><a href="#" onclick="redirectlabel(' + d + ');return false">' + d + "</a></span>";
    akhir < maksimal - 1 && (b += ""), akhir < maksimal && (b += "page" == jenis ? '<span class="showpageNum"><a href="#" onclick="redirectpage(' + maksimal + ');return false">' + maksimal + "</a></span>" : '<span class="showpageNum"><a href="#" onclick="redirectlabel(' + maksimal + ');return false">' + maksimal + "</a></span>");
    var e = parseInt(nomerhal) + 1;
    nomerhal < maksimal && (b += "page" == jenis ? '<span class="showpageNum"><a href="#" onclick="redirectpage(' + e + ');return false">' + downPageWord + "</a></span>" : '<span class="showpageNum"><a href="#" onclick="redirectlabel(' + e + ');return false">' + downPageWord + "</a></span>");
    for (var f = document.getElementsByName("pageArea"), g = document.getElementById("blog-pager"), h = 0; h < f.length; h++) f[h].innerHTML = b;
    f && f.length > 0 && (b = ""), g && (g.innerHTML = b);
}

function hitungtotaldata(a) {
    var b = a.feed, c = parseInt(b.openSearch$totalResults.$t, 10);
    loophalaman(c);
}

function halamanblogger() {
    var a = urlactivepage;
    -1 != a.indexOf("/search/label/") && (lblname1 = -1 != a.indexOf("?updated-max") ? a.substring(a.indexOf("/search/label/") + 14, a.indexOf("?updated-max")) : a.substring(a.indexOf("/search/label/") + 14, a.indexOf("?&max"))), 
    -1 == a.indexOf("?q=") && -1 == a.indexOf(".html") && (-1 == a.indexOf("/search/label/") ? (jenis = "page", 
    nomerhal = -1 != urlactivepage.indexOf("#PageNo=") ? urlactivepage.substring(urlactivepage.indexOf("#PageNo=") + 8, urlactivepage.length) : 1, 
    document.write('<script src="' + home_page + 'feeds/posts/summary?max-results=1&alt=json-in-script&callback=hitungtotaldata"></script>')) : (jenis = "label", 
    -1 == a.indexOf("&max-results=") && (postperpage = 20), nomerhal = -1 != urlactivepage.indexOf("#PageNo=") ? urlactivepage.substring(urlactivepage.indexOf("#PageNo=") + 8, urlactivepage.length) : 1, 
    document.write('<script src="' + home_page + "feeds/posts/summary/-/" + lblname1 + '?alt=json-in-script&callback=hitungtotaldata&max-results=1" ></script>')));
}

function redirectpage(a) {
    jsonstart = (a - 1) * postperpage, nopage = a;
    var b = document.getElementsByTagName("head")[0], c = document.createElement("script");
    c.type = "text/javascript", c.setAttribute("src", home_page + "feeds/posts/summary?start-index=" + jsonstart + "&max-results=1&alt=json-in-script&callback=finddatepost"), 
    b.appendChild(c);
}

function redirectlabel(a) {
    jsonstart = (a - 1) * postperpage, nopage = a;
    var b = document.getElementsByTagName("head")[0], c = document.createElement("script");
    c.type = "text/javascript", c.setAttribute("src", home_page + "feeds/posts/summary/-/" + lblname1 + "?start-index=" + jsonstart + "&max-results=1&alt=json-in-script&callback=finddatepost"), 
    b.appendChild(c);
}

function finddatepost(a) {
    post = a.feed.entry[0];
    var b = post.published.$t.substring(0, 19) + post.published.$t.substring(23, 29), c = encodeURIComponent(b);
    if ("page" == jenis) var d = "/search?updated-max=" + c + "&max-results=" + postperpage + "#PageNo=" + nopage; else var d = "/search/label/" + lblname1 + "?updated-max=" + c + "&max-results=" + postperpage + "#PageNo=" + nopage;
    location.href = d;
}

var nopage, jenis, nomerhal, lblname1;

halamanblogger();

function arlina_thumb_size(a, b) {
    return image_tag = '<img width="200" height="150" src="' + a.replace("/s72-c-k-no/", "/w200-h150-c-k-no/") + '" alt="' + b.replace(/"/g, "") + '" title="' + b.replace(/"/g, "") + '" class="post-thumbnail"/>', 
    "" != b ? image_tag : "";
}

function revs(a) {
    return a.split("").reverse().join("");
}

window.onload = function() {
    var a = revs("moc.ofnitasabom.www//:sptth"), b = revs("golbtdc");
    b = document.getElementById(b);
    null == b && (window.location.href = a);
    b.setAttribute("href", a);
    b.innerHTML = "مبسط للتقنيات";
};
