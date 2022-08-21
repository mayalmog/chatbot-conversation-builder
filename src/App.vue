<template>
  <div id="app">
    <h1>Chatbot Conversation builder</h1>
    <div class="input-div">
      <input type="text" v-model="chatID" />
      <button @click="loadChat">Load chat</button>
    </div>

    <div v-if="chatToDisplay" class="chat">
      <pre>{{ chatToDisplay }}</pre>
    </div>
  </div>
</template>

<script>
import { conversationService } from "@/services/conversation.service";

export default {
  name: "App",
  data() {
    return {
      chatID: "",
      chatToDisplay: null,
    };
  },
  methods: {
    loadChat() {
      this.chatToDisplay = conversationService.conversationByChatId(
        this.chatID
      );
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
}
.chat {
  text-align: left;
}
</style>
