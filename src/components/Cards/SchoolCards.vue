<template>
    <vs-row vs-align="center"
            vs-justify="space-around" vs-type="flex">
        <div v-for="i in schoolData" :key="i">
            <SchoolCard :school-data="i"/>
        </div>
    </vs-row>
</template>

<script>
    import SchoolCard from "../../component/Cards/SchoolCard";
    export default {
        name: "SchoolCards",
        components: {SchoolCard},
        data() {
            return {
                schoolData: [
                    {
                        name: "Ontario Tech University",
                        image: "https://media.glassdoor.com/sqll/440026/uoit-squarelogo-1556555819475.png"
                    },
                    {
                        name: "University of Toronto",
                        image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Utoronto_coa.svg/1200px-Utoronto_coa.svg.png"
                    }
                ]
            }
        },
    }
</script>

<style scoped>

</style>
