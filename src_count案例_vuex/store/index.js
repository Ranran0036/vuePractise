import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

const mutations = {
    "JIA"(state , value){
        state.sum += value;
    },
    "JIAN"(state , value){
        state.sum -= value;
    }
}

const actions = {
    'jiaOdd'(context , value){
        if(this.state.sum % 2){
            context.commit("JIA",value)
        }
    },
    'jiaWait'(context , value){
        setTimeout(() => {
            context.commit("JIA",value)
        }, 500);
    }
}

const state = {
    sum : 0
}

export default new Vuex.Store({
    mutations,
    actions,
    state
})
