import { authHeader } from '../helpers';
import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL;
const BASE_PATH = process.env.REACT_APP_BASE_API_KEY;

const headers = {
    'Content-Type': 'application/json',
    'Authorization': authHeader()
}

const createProduct = (data) => {
    const configs = {
        method: 'post',
        url: BASE_URL + BASE_PATH + "product",
        headers: headers,
        data: data
    };

    return new Promise((resolve, reject) => {
        axios(configs).then(({ status, data }) => {
            resolve(status == 200 && data ? data : null)
        })
            .catch(reject)
    })
}

const getAllProducts = () => {
    const configs = {
        method: 'post',
        url: BASE_URL + BASE_PATH + "product",
        headers: headers
    };

    return new Promise((resolve, reject) => {
        axios(configs).then(({ status, data }) => {
            resolve(status == 200 && data ? data : null)
        })
            .catch(reject)
    })
}

const getMyAllProducts = () => {
    const configs = {
        method: 'GET',
        url: BASE_URL + BASE_PATH + "product",
        headers: headers
    };

    return new Promise((resolve, reject) => {
        axios(configs).then(({ status, data }) => {
            resolve(status == 200 && data ? data : null)
        })
            .catch(reject)
    })
}

const getProductById = (id) => {
    const configs = {
        method: 'GET',
        url: BASE_URL + BASE_PATH + `product/${id}`,
        headers: headers
    };

    return new Promise((resolve, reject) => {
        axios(configs).then(({ status, data }) => {
            resolve(status == 200 && data ? data : null)
        })
            .catch(reject)
    })
}

const updateProduct = (id, data) => {
    const configs = {
        method: 'PUT',
        url: BASE_URL + BASE_PATH + `product/${id}`,
        params: { id: id },
        headers: headers,
        data: data
    };

    return new Promise((resolve, reject) => {
        axios(configs).then(({ status, data }) => {
            resolve(status == 200 && data ? data : null)
        })
            .catch(reject)
    })
}

const deleteProduct = (id) => {
    const configs = {
        method: 'DELETE',
        url: BASE_URL + BASE_PATH + `product/${id}`,
        headers: headers
    };

    return new Promise((resolve, reject) => {
        axios(configs).then(({ status, data }) => {
            resolve(status == 200 && data ? data : null)
        })
            .catch(reject)
    })
}

const getSlot = () => {
    const configs = {
        method: 'GET',
        url: BASE_URL + BASE_PATH + "product/slot/",
        headers: headers
    };

    return new Promise((resolve, reject) => {
        axios(configs).then(({ status, data }) => {
            resolve(status == 200 && data ? data : null)
        })
            .catch(reject)
    })
}


export const productServices = {
    createProduct,
    getAllProducts,
    getMyAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    getSlot
}


// const products = [
//     {
//         id: 1,
//         name: "Product Name",
//         desc: "full product description",
//         image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSFHIKKZMvnXjX49V7dTOaOUgVsyHovcia0Bu4p6w6bIQ4X7dUzdMd8OWekFAHq-FAn03TdcPPCz5zeg5qArzc9QHcZ2UplHA&usqp=CAY"
//     },
//     {
//         id: 1,
//         name: "Product Name",
//         desc: "full product description",
//         image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSFHIKKZMvnXjX49V7dTOaOUgVsyHovcia0Bu4p6w6bIQ4X7dUzdMd8OWekFAHq-FAn03TdcPPCz5zeg5qArzc9QHcZ2UplHA&usqp=CAY"
//     },
//     {
//         id: 1,
//         name: "Product Name",
//         desc: "full product description",
//         image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSFHIKKZMvnXjX49V7dTOaOUgVsyHovcia0Bu4p6w6bIQ4X7dUzdMd8OWekFAHq-FAn03TdcPPCz5zeg5qArzc9QHcZ2UplHA&usqp=CAY"
//     },
//     {
//         id: 1,
//         name: "Product Name",
//         desc: "full product description",
//         image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSFHIKKZMvnXjX49V7dTOaOUgVsyHovcia0Bu4p6w6bIQ4X7dUzdMd8OWekFAHq-FAn03TdcPPCz5zeg5qArzc9QHcZ2UplHA&usqp=CAY"
//     }
// ];


// const product = {
//     "_id": "1",
//     "title": "Nike Shoes",
//     "location": "INDIA",
//     src: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSFHIKKZMvnXjX49V7dTOaOUgVsyHovcia0Bu4p6w6bIQ4X7dUzdMd8OWekFAHq-FAn03TdcPPCz5zeg5qArzc9QHcZ2UplHA&usqp=CAY"
//     ,
//     description: "Inspired by the design of the latest Air Jordan game shoe, the Jordan Jumpman 2021 helps up-and-coming players level up their game. The shoe features responsive Zoom Air cushioning in the forefoot. Curved Flightwire cables are stitched into the material for a close, secure fit for competitive play. This PF version is ideal for use on outdoor courts. ",
//     "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
//     "price": 23,
//     "colors": ["red", "black", "crimson", "teal"],
//     "count": 1
//   };

//   const bidhistory = [
//     { id: '0', bidername: 'topi', amount: '234' },
//     { id: '1', bidername: 'topi', amount: '234' },
//     { id: '2', bidername: 'topi', amount: '234' },
//     { id: '3', bidername: 'topi', amount: '234' },
//     { id: '4', bidername: 'topi', amount: '234' },
//     { id: '5', bidername: 'topi', amount: '234' },
//     { id: '6', bidername: 'topi', amount: '234' },
//     { id: '7', bidername: 'topi', amount: '234' },
//     { id: '8', bidername: 'topi', amount: '234' },
//     { id: '9', bidername: 'topi', amount: '234' },
//     { id: '10', bidername: 'topi', amount: '234' }
//   ]