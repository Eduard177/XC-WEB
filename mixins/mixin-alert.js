export default {
  data() {
    return {
      loader: {}
    };
  },
  methods: {
    fireAlert(type, message, position = 'top-end') {
      const Toast = this.$swal.mixin({
        toast: true,
        position: position,
        showConfirmButton: false,
        timer: 3000
      });

      Toast.fire({
        type: type,
        title: message
      });
    },

    fireErrorAlert(message = 'Ha ocurrido un error.') {
      this.fireAlert('error', message, 'top');
    },

    fireConfirmAlert(
      title = '¿Estas Seguro?',
      text = 'Se eliminará permanentemente!',
      type = 'warning'
    ) {
      return this.$swal({
        title: title,
        text: text,
        type: type,
        showCancelButton: true,
        confirmButtonColor: '#4CA48D',
        cancelButtonColor: '#E59820',
        confirmButtonText: 'Yes, delete it!'
      });
    },
    hideLoading(loader) {
      setTimeout(() => {
        loader.hide();
      }, 500);
    },
    alert400Error(error) {
      let message = '';
      for (const key in error.response.data) {
        if (error.response.data.hasOwnProperty(key)) {
          const element = error.response.data[key];
          message = element[0];
        }
      }
      this.fireAlert('error', message, 'top');
    }
  }
};
