import getEconomicIndicators from './indicadores-api.js';

const ImacecPerDay = ( await getEconomicIndicators() ).serie

const indicatorsCanvasNode = document.getElementById( 'indicators' )

const labels = ImacecPerDay.map( imacec => new Date( imacec.fecha ).toLocaleDateString() ).reverse()
const data = {
  labels: labels,
  datasets: [ {
    label: 'Imacec por Mes',
    data: ImacecPerDay.map( imacec => imacec.valor ).reverse(),
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1,
    backgroundColor: 'rgb(255, 0, 0)'
  } ]
};

const config = {
  type: 'line',
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: false
      }
    }
  }
}

const graph = new Chart( indicatorsCanvasNode, config )