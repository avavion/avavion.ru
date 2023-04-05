const HOST = import.meta.env.VITE_HOST || "";

class HttpRequest {
  makeUrl(url) {
    if (HOST) {
      return `${HOST}${url}`;
    }

    return url;
  }

  request(url, method, params = {}) {
    return fetch(this.makeUrl(url), {
      method: method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      ...params,
    });
  }

  async get(url, params = {}) {
    const response = await this.request(url, "GET", params);

    const data = await response.json();

    return {
      response: response,
      data: data,
    };
  }

  async post(url, body, params = {}) {
    const response = await this.request(url, "POST", {
      body: body,
      ...params,
    });

    const data = await response.json();

    return {
      response: response,
      data: data,
    };
  }
}

export default HttpRequest;
