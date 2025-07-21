document.addEventListener('DOMContentLoaded', function() {
  const ctx = document.getElementById('analyticsChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Total Views', 'Accounts Reached', 'Followers'],
      datasets: [
        {
          label: 'Instagram Performance (May 1–31)',
          data: [922, 182, 32],
          backgroundColor: [
            'rgba(108,99,255,0.5)',
            'rgba(255,159,64,0.5)',
            'rgba(75,192,192,0.5)'
          ],
          borderColor: [
            'rgba(108,99,255,1)',
            'rgba(255,159,64,1)',
            'rgba(75,192,192,1)'
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        title: {
          display: true,
          text: 'Instagram Performance (May 1–31)'
        }
      },
      scales: {
        y: { beginAtZero: true }
      }
    }
  });
}); 