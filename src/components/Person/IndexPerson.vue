<script>
import axios from "axios";

export default {
  name: "IndexPerson",

  data() {
    return {
      posts: null
    }
  },

  mounted() {
    this.index();
  },

  methods: {
    index() {
      axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(res => {
            this.posts = res.data;
          })
          .catch(e => {
            console.log(e)
          })
    }
  }

}
</script>

<template>
  <div>
    Index Posts <br>
    <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full text-left text-sm font-light">
              <thead class="border-b font-medium dark:border-neutral-500">
              <tr>
                <th scope="col" class="px-6 py-4">#</th>
                <th scope="col" class="px-6 py-4">UID</th>
                <th scope="col" class="px-6 py-4">Title</th>
                <th scope="col" class="px-6 py-4">Body</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="post in posts" :key="post.id" class="border-b dark:border-neutral-500">
                <td class="whitespace-nowrap px-6 py-4 font-medium">{{ post.id }}</td>
                <td class="whitespace-nowrap px-6 py-4">{{ post.userId }}</td>
                <td class="whitespace-nowrap px-6 py-4">
                  <router-link :to="{ name: 'Post', params: {id: post.id} }">{{ post.title }}</router-link>
                </td>
                <td class="whitespace-nowrap px-6 py-4">{{ post.body }}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>