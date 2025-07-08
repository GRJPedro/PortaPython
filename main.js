const polar = document.getElementById('polar')
const names = ['lectura', 'escrita', 'oral']
const porcentaje = [90, 70, 60]


const miPola = new Chart(polar, {
  type: 'polarArea',
  data: {
    labels: names,
    datasets: [{
      label: 'Inglés',
      data: porcentaje,
      backgroundColor: [
      'rgba(255, 245, 204, 0.7)',
      'rgba(171, 171, 171, 0.7)',
      'rgba(255, 255, 255, 0.7)'
      ],
      borderWidth:[0.5,0.5,0.5
      ],
      borderColor:[
      'rgba(255, 245, 204)',
      'rgb(171, 171, 171)',
      'rgb(255, 255, 255)'
      ]
    }]
  },
  options: {
      legend: {
        display: true,
        labels: {
          fontColor: 'rgb(217,217,217)',
          fontFamily: 'Times'
        }
    },
    scales: {
      r: {
        ticks: {
          labels: {
          }
        }
      }
    }
  }
})