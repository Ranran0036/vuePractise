<template>
    <div>
        <ul>
            <li v-for="m in messageList" :key="m.id">
                <!-- <router-link :to="`/myhome/homemessage/messageDetial?id=${m.id}&title=${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->
                <router-link 
                    :to="{
                        name : 'MessageDetial',
                        query : {
                            id : m.id,
                            title : m.title
                        }
                    }"
                >
                    {{m.title}}
                </router-link>&nbsp;&nbsp;
            </li>
        </ul>
        <hr />
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name : 'HomeMessage',
        data() {
            return {
                messageList: [
                    {id : "001" , title : '消息001'},
                    {id : "002" , title : '消息002'},
                    {id : "003" , title : '消息003'},
                ]
            }
        },
    }
</script>

<style scoped>

</style>