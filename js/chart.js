const ctx = document.getElementById("myRadarChart").getContext("2d");
const myRadarChart = new Chart(ctx, {
  type: "radar",
  data: {
    labels: ["Instagram", "TikTok", "YouTube", "Threads"],
    datasets: [
      {
        label: "Social Media Reach",
        data: [75, 90, 45, 30],
        fill: true,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgb(54, 162, 235)",
        pointBackgroundColor: "rgb(54, 162, 235)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(54, 162, 235)",
      },
    ],
  },
  options: {
    elements: {
      line: {
        borderWidth: 3,
      },
    },
    scales: {
      r: {
        angleLines: {
          display: true,
        },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
  },
});
