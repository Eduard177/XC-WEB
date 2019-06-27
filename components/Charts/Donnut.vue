<script>
import { Doughnut } from "vue-chartjs";

export default {
  name: "donnut-chart",
  extends: Doughnut,
  props: ["data", "options"],
  mounted() {
    this.renderChart(this.data, this.options);
  },
  methods: {
    update() {
      this.$data._chart.update();
    }
  }
};
</script>

