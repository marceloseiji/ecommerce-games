export default class controllers {
  static async getAll() {
    const request = new Request(
      "https://raw.githubusercontent.com/ConsultaRemedios/frontend-challenge/master/products.json",
      {
        method: "GET",
      }
    );
    const res = await fetch(request);
    const dataObj = await res.json();
    return dataObj;
  }
}
