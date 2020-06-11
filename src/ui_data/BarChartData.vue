<script>
    import {Bar} from "vue-chartjs";

    export default {
        extends: Bar,
        mounted() {
            this.renderChart(
                {
                    labels: [
                        "X Val 1",
                        "X Val 2",
                        "X Val 3",
                        "X Val 4",
                        "X Val 5",
                    ],
                    datasets: [
                        {
                            label: "Grades",
                            data: [80, 50, 60, 100, 69],
                        }
                    ]
                },
                {
                    responsive: true, maintainAspectRatio: false, scales: {
                        xAxes: [{
                            barThickness: 7,
                        }]
                    }
                }
            );
        }
    };
</script>
