// Grabbing Form Data From a Submit event
const form = document.querySelector('#testDataForm')
// console.log(form)

// Add event listener for submit event
form.addEventListener('submit', ( event ) => {
    event.preventDefault();
    let query_season = document.querySelector('#_season')
    let query_round = document.querySelector('#_round');
    let season = event.path[0][0].value;
    let round = event.path[0][1].value;
    
    console.log(event)
    console.log(season, round)
    console.log(`This came from the query selector: ${query_season.value}, ${query_round.value}`)
    racer_data(season, round)
} )


const racer_data = async (season, round) => {
    let response = await axios.get(`https://ergast.com/api/f1/2020/1/driverStandings.json`)
    console.log(response)

    let url = `https://ergast.com/api/f1/${season}/${round}/driverStandings`
    console.log(`This is the given name from f1 racer ${response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.givenName}`)
    window.location.href = url;
}
