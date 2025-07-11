function renderChart(id, code){
    console.log(id, code)
    Highcharts.chart(id, JSON.parse(code))
} 

Highcharts.setOptions({
  lang: {
    rangeSelectorZoom: "",
    locale: 'en'
  }
});