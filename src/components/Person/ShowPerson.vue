<script>
import axios from "axios";

export default {
  name: "ShowPerson",

  data() {
    return {
      id: null,
      uid: null,
      title: null,
      body: null,
    }
  },

  mounted() {
    this.getPost();
  },

  methods: {
    getPost() {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
          .then(res => {
            this.id = res.data.id;
            this.uid = res.data.userId;
            this.title = res.data.title;
            this.body = res.data.body;
          })
    }
  }
}
</script>

<template>
  <div v-if="this.title">
    Show Post <br> <br>
    ID: {{ this.id }} <br> <br>
    UID: {{ this.uid }} <br> <br>
    Title: {{ this.title }} <br> <br>
    Body: {{ this.body }} <br> <br>
  </div>
</template>

<style scoped>

</style>