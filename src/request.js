export default class request {
  static async getAll() {

    const request = new Request(
      "https://api.pexels.com/v1/curated?per_page=11&page=1",
      {
        method: "GET",
      }
    );
    const res = await fetch(request);
    const { dataObj } = await res.json();

    data.forEach(function(element) {
      dataObj[element.id] = element;
    });
    console.log(dataObj);
    return dataObj;
  }
  
}

// const url = "https://raw.githubusercontent.com/ConsultaRemedios/frontend-challenge/master/products.json";
// return fetch(url).then((response) => {
//   return response.json();
// });

// $.ajax({
//   url:
//     "https://raw.githubusercontent.com/ConsultaRemedios/frontend-challenge/master/products.json",
//   type: "GET",
//   success: function (result) {
//     let data = JSON.parse(result);
//     

    
//   },
// });
