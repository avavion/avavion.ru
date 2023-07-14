import HttpRequest from "../serivces/HttpRequest";

class ProjectRepository extends HttpRequest {
  async getFilteredProject(type = "all", page = 1, perPage = 25) {
    const params = `?type=${type}&page=${page}&per_page=${perPage}`;

    const urlWithParams = `/projects/get${params}`;

    return this.get(urlWithParams);
  }
}

export default ProjectRepository;
