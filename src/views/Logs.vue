<template>
    <div>
        <div v-for="i in socketData.slice().reverse()" :key="i">
            <LogCard :log="i"/>
        </div>
    </div>
</template>
<script>

    import LogCard from "../components/log_components/LogCard";
    export default {
        name: "Logs",
        components: {LogCard},
        created: function () {
            this.socket = new WebSocket("wss://gradinator.herokuapp.com/logs");
            this.socket.onopen = function (e) {
                console.log(e)
            }
            var self = this;
            this.socket.addEventListener('message', function (e) {
                console.log(e)
                self.socketData.push(JSON.parse(e.data))
            })
        },
        data: ()=>{
            return{
                socketData: []
            }
        },



    }
</script>

<style scoped>

</style>
