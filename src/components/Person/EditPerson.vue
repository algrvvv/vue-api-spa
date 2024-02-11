<script>
import axios from "axios";
import {useRouter} from "vue-router";

const router = useRouter();

export default {
  name: "EditPerson",

  data() {
    return {
      title: null,
      body: null,
      uid: null
    }
  },

  mounted() {
    this.getPostData();
  },

  methods: {
    getPostData() {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
          .then(res => {
            this.title = res.data.title;
            this.body = res.data.body;
            this.uid = res.data.userId;
          })
    },

    change() {
      axios.patch(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`, {
        title: this.title, body: this.body, userId: this.uid
      })
          .then(res => {
            console.log(res.data);
            router.push({
              name: 'Posts', params: {
                id: this.$route.params.id
              }
            })
          })
          .catch(e => {
            console.log(e);
          })
    }
  }
}
</script>

<template>
  <div>
    Edit Post <br> <br>
    <input type="text" v-model="title" placeholder="title" style="width: 350px;"> <br><br>
    <textarea v-model="body" placeholder="body" rows="10" cols="85"></textarea> <br><br>
    <input type="text" v-model="uid" placeholder="user id"> <br><br>
    <button @click.prevent="change">Изменить</button>
  </div>
</template>

<style scoped>

</style>