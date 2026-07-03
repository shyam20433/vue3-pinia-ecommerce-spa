import axios from "axios";

const api=axios.create({
  baseURL:'http://localhost:8080'
}
)

const apicall={
  async  getproducts(){
    const data=await api.get('/products')
    return data.data
  },
  async getproduct(id){
    const data=await api.get(`/products/${id}`)
    return data.data
  },
  async delproduct(id){
    const data=await api.delete(`/products/${id}`)
    return data.data
  },
  async addproduct(product){
    const data=await api.post('/products',product)
    return data.data
  },
  async updateproduct(id,product){
    const data=await api.put(`/products/${id}`,product)
    return data.data
  }
}

export default apicall;
