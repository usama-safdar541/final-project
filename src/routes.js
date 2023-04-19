import Home from './components/Home.vue';
import Portfolio from '../src/components/myportfolio/portfolio.vue';
import Stocks from './components/mystocks/stocks.vue';
export const routes = [
    
        {path: '/', component: Home },
        {path :'/portfolio' , component:Portfolio },
        {path: '/stocks' , component: Stocks}

    
];