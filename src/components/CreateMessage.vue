<template>
  <div class="container" style="margin-bottom: 30px; max-width: 500px;">
    <form @submit.prevent="createMessage">
      <div class="div form-group">
        <input
          type="text"
          class="form-control"
          name="message"
          placeholder="Enter your message..."
          v-model="newMessage"
        />
        <p class="text-danger" v-if="errorText">{{ errorText }}</p>
      </div>
      <button class="btn btn-secondary" type="submit" name="action">
        Submit
      </button>
    </form>
  </div>
</template>
<script>
import fb from "../firebase/init";
export default {
  data() {
    return {
      newMessage: null,
      errorText: null
    };
  },
  methods: {
    createMessage() {
      if (this.newMessage) {
        fb.collection("messages")
          .add({
            message: this.newMessage,
            name: this.name,
            timestamp: Date.now()
          })
          .catch(err => {
            // eslint-disable-next-line no-console
            console.log(err);
          });
        this.newMessage = null;
        this.errorText = null;
      } else {
        this.errorText = "Enter your message first!";
      }
    }
  },
  name: "createMessage",
  props: ["name"]
};
</script>
