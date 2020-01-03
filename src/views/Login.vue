<template>
  <div class="container">
    <div class="card login">
      <div class="card-body">
        <h2 class="card-title text-center text-secondary">
          Real Time Chat Login
        </h2>
        <form @submit.prevent="login" class="text center">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="Please enter your name..."
              v-model="name"
            />
            <p v-if="errorText" class="text-danger">{{ errorText }}</p>
          </div>
          <button class="btn btn-secondary">Join Chat</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      name: "",
      errorText: null
    };
  },
  methods: {
    login() {
      if (this.name) {
        this.$router.push({ name: "chat", params: { name: this.name } });
      } else {
        this.errorText = "Please enter your name first!";
      }
    }
  }
};
</script>
<style scoped>
.login {
  max-width: 355px;
  margin-top: 250px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
