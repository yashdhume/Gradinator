<template>
    <vs-card actionable class="cardx">
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" style="flex-direction: column">
            <vs-row vs-justify="space-between" vs-align="center" style="padding-top: 10px">
                <vs-chip color="primary">Computer Science</vs-chip>
                <vs-chip color="success">Winter 2020</vs-chip>
                <h6>🔥 72</h6>
            </vs-row>
            <div style="padding: 10px"/>
            <h4>Computer Graphics</h4>
            <p>Mark Green</p>
            <vs-divider/>
            <vs-row vs-justify="space-between" vs-align="center">
                <DataWithTitleOnBottom topData="736832" title="CRN"/>
                <DataWithTitleOnBottom topData="CSCI 3090U" title="Course Code"/>
                <GroupedAvatars :images="images"></GroupedAvatars>
            </vs-row>
        </vs-col>
        <div slot="footer">
            <vs-row></vs-row>
        </div>
    </vs-card>

</template>

<script>
    import DataWithTitleOnBottom from "../miscellaneous/DataWithTitleOnBottom";
    import GroupedAvatars from "../miscellaneous/GroupedAvatars";
    export default {
        name: "CourseCard",
        components: {GroupedAvatars, DataWithTitleOnBottom},
        data: () => ({
            images: ['https://cdn.dribbble.com/users/1709884/screenshots/5070649/scribl_avatar-11.png',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSKbRH4Jh9B0D6CXyNByqqfuoKXwcbYsSkHoFwp6fsHabi1cygm&usqp=CAU',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSS1_an2x9kdsUqcWy2kGMNUMlYXbyf0Sr9896Tx5uXZbNvIc2L&usqp=CAU',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQb_sJKWw_q9tobdfkHLUCvYj3pNVd4EOV8XTxGRhSDpnagZZIs&usqp=CAU',
                'https://cdn.imgbin.com/21/5/0/imgbin-computer-icons-avatar-social-media-blog-font-awesome-avatar-JdPkyt0m7ykS2bDNq99AHNXKV.jpg'
            ]
        }),
    }
</script>

<style lang="scss" scoped>
</style>
