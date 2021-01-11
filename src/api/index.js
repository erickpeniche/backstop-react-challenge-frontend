class DigimonService {
  constructor() {
    this.baseURL = "https://localhost:3000/api/v1/digimon";
    this.getRequestHeaders = new Headers({
      "Content-Type": "application/json"
    });

    this.getRequestConfig = {
      method: "GET",
      headers: this.getRequestHeaders
    };
  }

  getDigimon(digimonId) {
    return fetch(`${this.baseURL}/${digimonId}`, this.getRequestConfig).then((data) => data.json());
  }

  getRandomDigimon() {
    return fetch(`${this.baseURL}/random`, this.getRequestConfig).then((data) => data.json());
  }
}

export default new DigimonService();
