import api from "./axios";

const useProductApi = () => {
  const getAllProducts = () => api.get("/products");
  const getSingleProducts = (id) => api.get(`/products/${id}`);

  const deleteProduct = (id) => api.delete(`/products/${id}`);
  const saveProduct = (id, data) => api.put(`/products/${id}`, data);

  return { getAllProducts, getSingleProducts, deleteProduct, saveProduct };
};

export default useProductApi;
