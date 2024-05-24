import { IS_DEV_SERVER } from "@/appglobal/global-consts";
// import { ONLINE_API_KEY } from "@/secret/online-secret";
import { API_METHOD } from "@/types/entity-types";
import axios from "axios";


const py = axios.create({
    // baseURL: `https://april-online.ru/api`,
    baseURL: IS_DEV_SERVER
        ? `http://localhost:8000/api`
        : `https://april-online.ru/api`,

    withCredentials: true,
    headers: {
        'content-type': 'application/json',
        'accept': 'application/json',
        'accept': 'application/json',

        'X-Requested-With': 'XMLHttpRequest',
        // 'X-API-KEY': ONLINE_API_KEY

    },
})





export const pyAPI = {
    getCollection: async (url, method, collectionName, data) => {
        let result = null

        try {
            const response = !data
                ? await py[method](url)
                : await py[method](url, data)


            if (response) {


                if (response.data && response.data.resultCode === 0) {
                    if (response.data[collectionName]) {

                        if (response.data.isCollection) {

                            result = response.data[collectionName].data
                        } else {

                            result = response.data[collectionName]
                        }

                    }

                }


                return result

            }

        } catch (error) {




            return result
        }

    },
    setCollection: async (name, items) => {
        let result = null
        try {
            const data = {
                [name]: items
            }
            const response = await py.post(name, data)
            if (response) {
                if (response.data.resultCode === 0) {
                    result = response.data.data
                } else {

                }
            }
            return result
        } catch (error) {

            return result
        }

    },
    service: async (url, method, model, data) => {
        let result = null
        try {

            const response = await py[method](url, data)

            if (response && response.data) {

                if (response.data.resultCode === 0) {

                    if (response.data.data) {
                        result = response.data.data[model]
                    } else {
                        result = response.data[model]
                    }

                } else if (response.data.resultCode === 1) {

                    if (response.data.message) {
                        console.log(`${model} ${response.data.message}`)
                    } else {
                        console.log(response)
                    }

                }
            }

            return result
        } catch (error) {



            return result
        }
    }
}


