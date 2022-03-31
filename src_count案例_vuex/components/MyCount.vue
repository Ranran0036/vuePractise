<template>
    <div>
        <h1>当前的和为： {{$store.state.sum}}</h1>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add">+</button>
        <button @click="minus">-</button>
        <button @click="addOdd">当前是奇数再加</button>
        <button @click="addWait">等一等再加</button>
    </div>
</template>

<script>
    export default {
        name : "MyCount",
        data() {
            return {
                n : 1
            }
        },
        methods: {
            add() {
                this.$store.commit('JIA' , this.n);
            },
            minus(){
                this.$store.commit('JIAN' , this.n);
            },
            addOdd(){
                this.$store.dispatch('jiaOdd' , this.n);
            },
            addWait(){
                this.$store.dispatch('jiaWait' , this.n);
            }
        },
    }
</script>

<style scoped>
    button  {
        margin-left : 5px;
    }
</style>