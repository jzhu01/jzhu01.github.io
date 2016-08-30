var ctx = document.getElementById("skills");
Chart.defaults.global.defaultFontColor = "#fff";
Chart.defaults.global.defaultFontSize = 20;
Chart.defaults.global.defaultFontFamily = 'Roboto Condensed', "sans-serif";

var data = {
    labels: ["Python", "Java", "ReactJS", "JavaScript", "Git", "JQuery", "HTML5", "CSS3", "PHP"],
    datasets: [
        {
            label: "Expertise",
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(208, 172, 247, 0.2)',
                'rgba(72, 182, 245, 0.2)',
                'rgba(90, 208, 70, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(208, 172, 247, 1)',
                'rgba(72, 182, 245, 1)',
                'rgba(90, 208, 70, 1)'
            ],
            borderWidth: 1,
            data: [80, 80, 50, 50, 40, 60, 90, 90, 20],
            unit: "%",
        }
    ]
};

var myBarChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: data,
    options: {
        scales: {
                xAxes: [{
                        stacked: true
                }],
                yAxes: [{
                        stacked: true
                }]
            }
        }
    });

/* Jquery to make the nav bar more intuitive */
$(document).ready( function() {
  /* Code to make nav bar appear after scrolling to a certain section */
  window.addEventListener("scroll",function() {
    var scrollPastPoint = $(".about-section").offset().top - 20;
    var header = document.getElementById("header");
     if(window.scrollY > scrollPastPoint) {
        header.style.visibility = "visible";
        $(".nav-btn").css('background-color', 'transparent');
        $("#nav-abt").css('background-color',  '#9c596a');
     }
     else {
        header.style.visibility = "hidden";
     }
   },false);
  /* Code to make each button highlight as a section is reached,
  brute force code at the moment */
  window.addEventListener("scroll", function() {
    var scrollPastPoint_experience = $(".experience").offset().top - 20;
    var scrollPastPoint_resume = $(".resume").offset().top - 20;
    var scrollPastPoint_contact = $("#contact-section").offset().top - 20;
    if (window.scrollY > scrollPastPoint_experience) {
      $(".nav-btn").css('background-color', 'transparent');
      $("#experience-btn").css('background-color', '#9c596a');
    }
    if (window.scrollY > scrollPastPoint_resume){
      $(".nav-btn").css('background-color', 'transparent');
      $("#resume-btn").css('background-color', '#9c596a');
    }
    if (window.scrollY > scrollPastPoint_contact) {
      $(".nav-btn").css('background-color', 'transparent');
      $("#nav-contact").css('background-color', '#9c596a');
    }
  }, false);
  
  /* Jquery to make the nav bar more intuitive */
  $(".abt-btn").click(function() {
      $('html, body').animate({
          scrollTop: $(".about-section").offset().top
      }, 1000);
  });
  $("#experience-btn").click(function() {
      $('html, body').animate({
          scrollTop: $(".experience").offset().top
      }, 1000);
  });
  $("#resume-btn").click(function() {
      $('html, body').animate({
          scrollTop: $(".resume").offset().top
      }, 1000);
  });
  $(".contact-btn").click(function() {
      $('html, body').animate({
          scrollTop: $("#contact-section").offset().top
      }, 1000);
  });
  $(".nav-btn").click(function() {
    $(".nav-btn").css('background-color', 'transparent');
    $(this).css('background-color', '#9c596a');
  });

});
