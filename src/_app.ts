import type { App } from "vue";
import Carousel from 'primevue/carousel';
import PrimeVue from "primevue/config"

const components =  {
  Carousel
}

export default (app: App) => { 
    

    app.use(PrimeVue)   

   
    
    for (const [key, value] of Object.entries(components)) {


        app.component(key, value)
    }
    
    
}