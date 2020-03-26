export class Fetch {

    fetchLatest(usrInput) {
        fetch('https://api.dryg.net/dagar/v2.1/2020/' + usrInput)
        .then(response => response.json())
        .then(json => createDays(json))
        function createDays(dryg) {
            console.log(dryg);
            document.getElementById("calendar").innerHTML = "";

            //Create the cards
            for (var i = 0; i < dryg.dagar.length; i++)
            {
                let color = "black";
                if (dryg.dagar[i]["röd dag"] === "Ja") {
                    color = "red";
                }
                console.log(color);
                document.getElementById("calendar").innerHTML += 
                `
                <div class="card" style="width:300px">
                    <div class="card-body">
                        <h4 style="color: ${color}" class="card-title">${dryg.dagar[i].veckodag}</h4>
                        <h6>${dryg.dagar[i].datum}</h6>
                        <p>Arbetsfri dag: ${dryg.dagar[i]["arbetsfri dag"]}</p>
                        <p>Namnsdag: ${dryg.dagar[i].namnsdag}</p>

                </div>
                `
            }


        }
    }
}

