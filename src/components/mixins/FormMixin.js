export default {
  methods: {
    submitForm(){}
  },
  created() {
    window.addEventListener('keydown', e => {
      if (e.key == 'Enter') {
      this.submitForm()
      }
    })
  }
}
