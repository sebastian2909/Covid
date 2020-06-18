$(document).ready(function () {
  let pais = document.querySelector("#pais");
  const url = "https://covid-193.p.rapidapi.com/statistics";

  fetch(url, {
    headers: {
      "x-rapidapi-host": "covid-193.p.rapidapi.com",
      "x-rapidapi-key": "ddb46a8654msh314b1b395aef6bfp10d45djsn609d0153352e",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i <= 227; i++) {
        pais.innerHTML += `
           <option value="${i}">${data.response[i].country}</option>`;
      }
    })
    .catch((err) => console.log(err));

  $("#enviar").click(function () {
    let dato = document.querySelector("#pais").value;
    let datos = document.querySelector("#datos");
    fetch(url, {
      headers: {
        "x-rapidapi-host": "covid-193.p.rapidapi.com",
        "x-rapidapi-key": "ddb46a8654msh314b1b395aef6bfp10d45djsn609d0153352e",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        datos.innerHTML = "";
        datos.innerHTML += `
            <h1 class="display-8">${data.response[dato].country}</h1><br>
            <div class="row">
              <div class="col-sm-6">
                <div class="card border-info mb-3">
                  <div class="card-body text-info">
                    <h5 class="card-title">Casos Confirmados<span class="float-right">Nuevos: ${data.response[dato].cases.new}</span></h5>
                    <p class="card-text">${data.response[dato].cases.total}</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="card border-danger mb-3">
                  <div class="card-body text-danger">
                    <h5 class="card-title">Casos Criticos</h5>
                    <p class="card-text">${data.response[dato].cases.critical}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <div class="card border-success mb-3">
                  <div class="card-body text-success">
                    <h5 class="card-title">Personas Recuperadas</h5>
                    <p class="card-text">${data.response[dato].cases.recovered}</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="card border-dark mb-3">
                  <div class="card-body text-dark">
                    <h5 class="card-title">Personas Fallecidas<span class="float-right">Nuevos: ${data.response[dato].deaths.new}</span></h5>
                    <p class="card-text">${data.response[dato].deaths.total}</p>
                  </div>
                </div>
              </div>
            </div>`;
      });
  });
});
