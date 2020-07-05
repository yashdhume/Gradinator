<template>
    <div>
    <vs-row vs-align="center"
            vs-justify="space-around" vs-type="flex">
        <v-card width="750" >
            <CreateCourseForm/>
        </v-card>
    </vs-row>
    </div>
</template>

<script>
    import CreateCourseForm from "./CreateCourseForm";
    export default {
        name: "CreateCoursePage",
        components: {CreateCourseForm}
    }
</script>

<style scoped>

</style>
