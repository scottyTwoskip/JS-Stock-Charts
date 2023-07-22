let apiKey = "d35255dc012c4444a7a684326b052c9a"
async function main() {
    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');
    let response = await fetch("https://api.twelvedata.com/time_series?apikey=d35255dc012c4444a7a684326b052c9a&interval=1min&format=JSON&symbol=GME, MSFT, DIS, BNTX",
        {
            method: "GET",
            headers: { 'Content-Type': 'application/json' }
        })
    let financialData = await response.json()

    console.log(financialData)

    //symbol variables here 
    let GME = mockData.GME
    let MSFT = mockData.MSFT
    let DIS = mockData.DIS
    let BNTX = mockData.BTNX

    const stocks = [GME, MSFT, DIS, BNTX];
    //const stocks = mockData
    console.log(Chart)
    console.log(stocks[0].values)   
    stocks[0].values.map( value => value.datetime)
                                    


    let dataChart = new Chart(timeChartCanvas.getContext('2d'), {
        type: 'line',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: ['rgba(255, 99, 132, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)']
            }]
        },
    });

    // Bonus Note: 
    // Another way to write the above lines would to refactor it as:
    // const {GME, MSFT, DIS, BTNX} = result 
    // This is an example of "destructuring" an object
    // "Destructuring" creates new variables from an object or an array

}

main()