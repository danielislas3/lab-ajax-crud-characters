class APIHandler {
    constructor (baseUrl) {
      this.BASE_URL = baseUrl;
    }
  
    getFullList () {
      return axios.get(this.BASE_URL);
    }
  
    getOneRegister (id) {
      return axios.get(`${this.BASE_URL}/${id}`);
    }
  
    createOneRegister (nuevo) {
      return axios.post(`${this.BASE_URL}`, nuevo);
    }
  
    updateOneRegister (id, actualizado) {
      return axios.patch(`${this.BASE_URL}/${id}`, actualizado);
    }
  
    deleteOneRegister (id) {
      return axios.delete(`${this.BASE_URL}/${id}`);
    }
  }
  