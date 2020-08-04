<template>
    <v-row>
    <v-slider
            :step="0.01"
            v-model="number"
            thumb-label
            style="padding-top: 4px; padding-left: 1rem"
            @input="handleInput"
    >
        <template v-slot:thumb-label="{ value }">
            {{  parseNumber(value)}}
        </template>

    </v-slider>
        <div style="padding-left: 2rem">
        <v-text-field v-model="number" flat dense style="max-width: 100px" solo @input="handleInput"/>
        </div>
    </v-row>
</template>

<script>
    export default {
        name: "SliderTextBoxCombo",
        props: {
            number: Number
        },

        model: {
            prop: 'number',
            event: 'input'
        },
        methods:{
            handleInput (value) {
                this.$emit('input', value)
            },
            parseNumber:(number)=> {
                if(number<0.1){
                    return (number).toPrecision(2);
                }
                else if(number===1){
                    return 100;
                }
                else{
                    return (number).toPrecision(4);
                }
            }
        }
    }
</script>

<style scoped>

</style>
