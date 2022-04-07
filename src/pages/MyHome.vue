<template>
    <div>
        <h2>
            Home组件内容
        </h2>
        <div>
            <ul class="nav nav-tabs">
                <li>
                    <router-link class="list-group-item" active-class="active" to="/MyHome/homenews">News</router-link>
                </li>
                <li>
                    <!-- to路径大小写不一致虽然不导致跳转bug 但是会出现点击子路由 父路由失去active样式 -->
                    <router-link class="list-group-item" active-class="active" to="/MyHome/homemessage">Message</router-link>
                </li>
            </ul>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name : 'MyHome',
    }
</script>

<style scoped>

</style>