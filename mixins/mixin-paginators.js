export default {
  data() {
    return {
      currentPage: 1
    };
  },
  methods: {
    async paginateMinorExpenses(page) {
      try {
        this.loader = this.$loading.show({});

        await this.$store.dispatch('reports/paginateMinorExpenses', page);

        const minor_expense = await this.$store.getters[
          'reports/getMinorExpenses'
        ];

        this.minor_expense = minor_expense;

        this.fetchMinorExpenses();

        await this.hideLoading(this.loader);
      } catch (error) {
        this.fireErrorAlert();
      }
    }
  },
  async paginateReimbursables(page) {
    try {
      this.loader = this.$loading.show({});

      await this.$store.dispatch('reports/paginateReimbursables', page);

      const reimbursables = await this.$store.getters[
        'reports/getReimbursables'
      ];

      this.reimbursables = reimbursables;

      await this.hideLoading(this.loader);
    } catch (error) {
      this.fireErrorAlert();
    }
  }
};
