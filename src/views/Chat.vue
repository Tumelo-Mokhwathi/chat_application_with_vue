<template>
  <div class="container chat">
    <h2 class="text-secondary text-center">Real-Time Chat</h2>
    <div class="card">
      <div class="card-body">
        <p class="text-secondary nomessages" v-if="messages.length == 0">
          [No messages!]
        </p>
        <div class="messages" v-chat-scroll="{ always: false, smooth: true }">
          <div v-for="message in messages" :key="message.id">
            <span class="text-info">[{{ message.name }}]</span>
            <span>{{ message.message }}</span>
            <span class="text-secondary time">[{{ message.timestamp }}]</span>
          </div>
        </div>
      </div>
      <div class="card-action">
        <CreateMessage :name="name" />
      </div>
    </div>
    <h5 class="text-secondary text-center" style="margin-top: 10px">
      Created By Tumelo using Vue.js & Firebase
    </h5>
  </div>
</template>
<script>
import CreateMessage from "../components/CreateMessage.vue";
import fb from "../firebase/init";
import moment from "moment";
export default {
  components: {
    CreateMessage
  },
  created() {
    let ref = fb.collection("messages").orderBy("timestamp");
    ref.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        // eslint-disable-next-line no-constant-condition
        if ((change.type = "added")) {
          let doc = change.doc;
          this.messages.push({
            id: doc.id,
            name: doc.data().name,
            message: doc.data().message,
            timestamp: moment(doc.data().timestamp).format("LTS")
          });
        }
      });
    });
  },
  data() {
    return {
      messages: []
    };
  },
  name: "chat",
  props: ["name"]
};
</script>
<style scoped>
.chat h2 {
  font-size: 2.6em;
  margin-bottom: 0px;
}
.chat h5 {
  font-size: 0.9em;
  margin-top: 0px;
  margin-bottom: 40px;
}
.chat span {
  font-size: 1.2em;
}
.chat .time {
  display: block;
  font-size: 0.7em;
}
.messages {
  max-height: 300px;
  overflow: auto;
}
.chat {
  margin-top: 200px;
  max-width: 700px;
}
</style>
