$(function () {
  $(".chart").easyPieChart({
    barColor: "#F69E7B",
    trackColor: "#383e56",
    lineWidth: 8,
    rotate: 40,
    scaleLength: false,
  });

  let navbarModal = $(".navbar-modal");

  $(".btn-bars").click(function () {
    navbarModal.addClass("active");
    window.sc;
  });
  $(".btn-close").click(function () {
    navbarModal.removeClass("active");
  });

  /*noscrollingto start*/
  window.addEventListener("scroll", function () {
    if ($(".navbar-modal").hasClass("active")) {
      window.scrollTo(0, 0);
    }
  });
  /*noscrollingto end*/

  window.addEventListener("scroll", fontSizeFuc);
  fontSizeFuc();
  function fontSizeFuc() {
    let menterWidth = document
      .querySelector(".header-home__mentor")
      .getBoundingClientRect().width;
    let autoFontSize = Math.floor(menterWidth / 17);
    let autoFontWidth = Math.floor(menterWidth / 14);
    let autoPx = Math.floor(menterWidth / 30);
    let marginTopMenter = Math.round(menterWidth * 1.8);
    let marginTopProgress = Math.round(menterWidth * 1.04);
    let marginLeftProgress = Math.round(menterWidth / 13);
    let marginWidthProgress = Math.floor(menterWidth / 3.7);
    let marginHeightProgress = Math.floor(menterWidth / 3.7);
    let chartwidthtProgress = Math.floor(menterWidth / 4.9);
    let chartHeightProgress = Math.floor(menterWidth / 4.9);
    let mentorSpan = Math.floor(menterWidth / 20);

    document.querySelector(
      ".header-home__mentor p"
    ).style.fontSize = `${autoFontSize}px`;
    document.querySelector(
      ".header-home__mentor .img img"
    ).style.width = `${autoFontWidth}px`;
    document.querySelector(
      ".header-home__mentor .img"
    ).style.marginRight = `${autoPx}px`;
    document.querySelector(
      ".header-home__mentor"
    ).style.top = `${marginTopMenter}px`;

    let mentor = document.querySelector(".header-home__progress");
    let mentorChart = mentor.querySelector(".chart");
    mentor.style.top = `${marginTopProgress}px`;
    mentor.style.left = `${marginLeftProgress}px`;
    mentor.style.width = `${marginWidthProgress}px`;
    mentor.style.height = `${marginHeightProgress}px`;
    mentorChart.style.width = `${chartwidthtProgress}px`;
    mentorChart.style.height = `${chartHeightProgress}px`;

    mentor.querySelector(".chart span").style.fontSize = `${mentorSpan}px`;

    let bodyWidth = document.body.clientWidth;
    if (document.body.clientWidth < 768) {
      var autoBodyWidth = Math.floor(bodyWidth / 2.49);
      if (document.body.clientWidth >= 628) {
        autoBodyWidth -= 50;
      }
    } else {
      autoBodyWidth = 309;
    }
    document.querySelector(".about__video").style.height = `${autoBodyWidth}px`;
  }

  $(".owl-carousel").owlCarousel({
    loop: false,
    margin: 32,
    autoWidth: true,
    nav: false,
    dots: true,
  });

  const owlStage = document.querySelector(".owl-stage");
  let windowCssTransf =
    window
      .getComputedStyle(owlStage)
      .getPropertyValue("transform")
      .split(",")[4]
      .trim() + 274;
  setTimeout(() => {
    console.log(
      window
        .getComputedStyle(owlStage)
        .getPropertyValue("transform")
        .split(",")[4]
        .trim()
    );
  }, 6000);
});
