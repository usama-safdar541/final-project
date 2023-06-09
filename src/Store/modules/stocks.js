import stocks  from '../../data/stocks';
const state ={
    stocks :[]
};

const mutations ={
    //IT IS A METHOD
    'SET_STOCKS'(state, stocks){
state.stocks =stocks;
    },
    'RND_STOCKS' (state){

    }

};
const actions ={
    buyStocks: ({commit}, order)=>{
    commit('BUY_STOCK' , order );
    },
    initStocks: ({commit})=>{
        commit('SET_STOCKS', stocks)
    },
    randomizeStocks:({commit})=>{
        commit('RND_STOCKS')
    }
};

const getters ={
    stocks: (state)=>{
        return state.stocks;
    },
};

export default{
    state, 
    mutations,
    actions,
    getters
}