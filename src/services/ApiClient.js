import React from "react";
import axios from "axios";

class ApiClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async request({ method = 'get', url, params = {}, data = {} }) {
    const config = {
      method,
      url: this.baseURL + url,
      params,
      data,
    };

    try {
      const response = await axios(config);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async get(url, params = {}) {
    return this.request({ url, params });
  }

  async post(url, data = {}) {
    return this.request({ method: 'post', url, data });
  }

  async put(url, data = {}) {
    return this.request({ method: 'put', url, data });
  }

  async delete(url, params = {}) {
    return this.request({ method: 'delete', url, params });
  }
}
export default ApiClient;
