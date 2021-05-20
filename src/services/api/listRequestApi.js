import axiosClient from "./axiosClient";

const listRequestApi = {
  getAll: (params) => {
    const url = "/requests";
    return axiosClient.get(url, { params: params });
  },

  get: (id) => {
    const url = `/requests/${id}`
    return axiosClient.get(url)
  }
}
export default listRequestApi;
