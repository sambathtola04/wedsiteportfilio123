(function () {
  var tabs = document.querySelectorAll(".tab");
  var cards = document.querySelectorAll("#cards article");
  tabs.forEach(function (t) {
    t.addEventListener("click", function () {
      tabs.forEach(function (x) {
        x.classList.toggle("on", x === t);
      });
      cards.forEach(function (c) {
        c.hidden = t.dataset.f !== "all" && c.dataset.c !== t.dataset.f;
      });
    });
  });

  var links = document.querySelectorAll("nav a");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (es) {
        es.forEach(function (e) {
          if (e.isIntersecting)
            links.forEach(function (a) {
              a.classList.toggle(
                "active",
                a.getAttribute("href") === "#" + e.target.id,
              );
            });
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    document.querySelectorAll("main section[id]").forEach(function (s) {
      io.observe(s);
    });
  }

  var copy = document.getElementById("copy");
  copy.addEventListener("click", function () {
    var email = "Sambathtola04@gmail.com";
    var done = function () {
      copy.textContent = "Copied";
      setTimeout(function () {
        copy.textContent = "email Copy";
      }, 1800);
    };
    if (navigator.clipboard)
      navigator.clipboard.writeText(email).then(done, function () {
        copy.textContent = email;
      });
    else copy.textContent = email;
  });
  document.getElementById("year").textContent = new Date().getFullYear();
})();
