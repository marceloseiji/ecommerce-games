export default class request {
  static async getAll() {
    const request = new Request(
      "https://raw.githubusercontent.com/ConsultaRemedios/frontend-challenge/master/products.json",
      { 
        method: "GET",
      }
    );
    const res = await fetch(request);
    const dataObj = await res.json();

    Object.assign({}, dataObj);

    // dataObj.forEach(function(element) {
    //   dataObj[element.id] = element;
    // });
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
