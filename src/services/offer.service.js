import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class OfferService {
  ingresarOferta(consig, nro_animal, precio, productor) {
    console.log("Llego al OfferService");
    return axios
      .post(API_URL + "ingresarOferta", {
        consig,
        nro_animal,
        precio,
        productor,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  /* register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password
    });
  }*/

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new OfferService();
