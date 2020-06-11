<template>
    <vs-card>
        <section>
            <h3 class="card-title d-flex">
                Content List
                <vs-button
                        @click="isPopupActive=true"
                        :color="isGet ? 'success' : 'primary'"
                        type="flat"
                        class="ml-auto p-0"
                >
                    {{isGet ? 'Get' : 'Post'}}
                </vs-button>
            </h3>
            <p class="card-subtitle">
                You can add custom content to the item. It will be pushed to the right side.
            </p>
        </section>
        <vs-popup
                style="color:rgb(255,255,255)"
                background-color="rgba(255,255,255,.6)"
                :background-color-popup="this.isGet ?'rgb(23, 201, 100)' :'#5b3cc4'" :title="this.isGet ? 'Get' : 'Post'" :active.sync="isPopupActive">
            <p>
                {{isGet ? 'Some Details for Get' : 'Some Details for Post'}}

            </p>
        </vs-popup>
        <vs-col vs-align="center"
                vs-justify="space-around" vs-type="flex">
            <v-container>
                    <vs-list>
                        <vs-list-header title="Inputs"></vs-list-header>
                        <vs-list-item title="Snickerdoodle" subtitle="An excellent companion"></vs-list-item>

                    </vs-list>
                </v-container>
                <v-container>
                    <vs-list>
                        <vs-list-header title="Outputs"></vs-list-header>
                        <vs-list-item
                                title="Enid's"
                                subtitle="At night a bar, during the day a delicious brunch spot."
                        >
                            </vs-list-item>
                        <vs-list-item title="Veronika Ossi" subtitle="Has not watched anything recently">
                            </vs-list-item>
                    </vs-list>
                </v-container>
        </vs-col>

    </vs-card>
</template>

<script>
    export default {
        name: "DocumentCard",
        data:()=>({
            isPopupActive: false,
            isGet: false,

        }),
    }
</script>

<style scoped>

</style>
