export default {
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
    }
  }
};
