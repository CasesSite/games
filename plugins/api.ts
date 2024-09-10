import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {

    const config = useRuntimeConfig()

    const main = axios.create({
        baseURL: config.public.BASE_URL
    })
    const acf = axios.create({
        baseURL: config.public.ACF_URL
    })
    const domain = axios.create({
        baseURL: config.public.DOMAIN
    })

    const wooco = axios.create({
        baseURL: config.public.COMMERCE_URL,
        params: {
            consumer_key: config.public.CONSUMER_KEY,   
            consumer_secret: config.public.CONSUMER_SECRET  
        }
    })

    return {
        provide: {
            main: main,
            wooco: wooco,
            acf: acf,
            domain: domain
        }
    }

})
