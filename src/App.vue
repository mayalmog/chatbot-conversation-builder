<template>
  <div id="app">
    <h1>Chatbot Conversation builder</h1>
  </div>
</template>

<script>
import { conversationService } from "@/services/conversation.service";

export default {
  name: "App",

  mounted() {
    conversationService.conversationByChatId("334PS89");
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
}
</style>
