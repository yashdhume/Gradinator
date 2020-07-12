<script>
    import {Line} from "vue-chartjs";

    export default {
        extends: Line,
        data() {
            return {
                gradient: null,
                gradient2: null
            };
        },
        mounted() {
            this.gradient = this.$refs.canvas
                .getContext("2d")
                .createLinearGradient(0, 0, 0, 450);

            this.gradient.addColorStop(0, "rgba(41, 98, 255, 0.5)");
            this.gradient.addColorStop(0.5, "rgba(41, 98, 255, 0.25)");
            this.gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

            this.gradient2 = this.$refs.canvas
                .getContext("2d")
                .createLinearGradient(0, 0, 0, 450);

            this.gradient2.addColorStop(0, "rgba(0, 231, 255, 0.9)");
            this.gradient2.addColorStop(0.5, "rgba(0, 231, 255, 0.25)");
            this.gradient2.addColorStop(1, "rgba(0, 231, 255, 0)");

            this.renderChart(
                {
                    labels: [
                        "X Val 1",
                        "X Val 2",
                        "X Val 3",
                        "X Val 4",
                        "X Val 5",
                        "X Val 6",
                        "X Val 7"
                    ],
                    datasets: [
                        {
                            label: "Class 1",
                            borderColor: "#2962ff",
                            pointBackgroundColor: "white",
                            borderWidth: 2,
                            backgroundColor: this.gradient,
                            data: [0, 21, 2, 15, 23, 1]
                        },
                        {
                            label: "Class2",
                            borderColor: "#05CBE1",
                            pointBackgroundColor: "white",
                            borderWidth: 2,
                            backgroundColor: this.gradient2,
                            data: [51, 13, 74, 24, 11, 123, 35]
                        }
                    ]
                },
                {responsive: true, maintainAspectRatio: false}
            );
        }
    };
</script>
