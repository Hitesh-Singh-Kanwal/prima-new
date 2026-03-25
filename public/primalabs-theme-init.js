(function () {
  try {
    var t = localStorage.getItem("primalabs-theme");
    document.documentElement.setAttribute(
      "data-theme",
      t === "light" ? "light" : "dark",
    );
  } catch (e) {
    document.documentElement.setAttribute("data-theme", "dark");
  }
})();
