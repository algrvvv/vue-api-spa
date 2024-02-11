<script>
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();

export default {
  name: "CreatePerson",

  data() {
    return {
      title: null,
      body: null,
      uid: null,
    }
  },

  methods: {
    store() {
      axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: this.title, body: this.body, userId: this.uid
      })
          .then(res => {
            console.log(res.data);
            router.push({ name: 'Posts' })
          })
          .catch(error => {
            console.log(error);
          })
    }
  },

  computed: {
    isDisabled(){
      return this.uid && this.title && this.body;
    }
  }

}
</script>

<template>
  <div>
    Create Post
    <br>
    <input type="text" v-model="title" placeholder="title"> <br><br>
    <textarea v-model="body" placeholder="body"></textarea> <br><br>
    <input type="text" v-model="uid" placeholder="user id"> <br><br>
    <button @click.prevent="store" :disabled="!isDisabled">Добавить</button>
  </div>
</template>

<style scoped>

</style>