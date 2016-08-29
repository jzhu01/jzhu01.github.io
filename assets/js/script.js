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
    var topOfOthDiv = $(".about-section").offset().top;
    $(window).scroll(function() {
        if($(window).scrollTop() > topOfOthDiv) { //scrolled past the other div?
            $(".header").removeClass(".hidden"); //reached the desired point -- show div
        }
    });
});
