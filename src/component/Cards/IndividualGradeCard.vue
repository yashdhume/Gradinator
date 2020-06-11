<template>
    <vs-card actionable>
        <div slot="header">
            <h4 class="mb-1">{{headerText}}</h4>
        </div>
        <span>{{bodyText}}</span>
        <vs-progress
                :color="color"
                :height="8"
                :percent="percent"
        />
    </vs-card>
</template>

<script>
    export default {
        name: "IndividualGradeCard",
        props: {
            percent: Number,
            headerText: String,
            bodyText: String,
            color: String,
        }
    }
</script>
