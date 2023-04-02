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

// indicators.forEach( indicator => {
//   const value = data[ indicator ].valor
//   const msg = `${ indicator }: ${ value }`
//   const p = document.createElement( 'p' )
//   p.setAttribute( 'style', "color: red;" )
//   p.textContent = msg
//   indicatorsNode.appendChild( p )
//   console.log( `${ indicator }: ${ value }` )
// } )
// console.log( data )

// let text = ""
// indicators.forEach( indicator => {
//   const value = data[ indicator ].valor
//   const msg = `${ indicator }: ${ value }`
//   text += `<p style="color: red;">${ msg }</p>`
//   console.log( `${ indicator }: ${ value }` )
// } )
// console.log( data )
// indicatorsNode.innerHTML = text