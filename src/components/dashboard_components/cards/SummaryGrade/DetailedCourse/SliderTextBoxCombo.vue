<template>
    <v-row>
    <v-slider
            min="0.0"
            max="1.0"
            :step="0.0001"
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
                    return (number*100).toPrecision(2);
                }
                else if(number===1){
                    return 100;
                }
                else{
                    return (number*100).toPrecision(4);
                }
            }
        }
    }
</script>

<style scoped>

</style>
