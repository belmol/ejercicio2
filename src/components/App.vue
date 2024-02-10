<template>
  <div>
    <h1>{{ msj }}</h1>
    <button @click="changeMessage">Click me!</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msj: "Hello world (from changed state)!",
    };
  },
  methods: {
    changeMessage() {
      this.msj = "Hello my friend (from changed state)!";
    },
  },
};
</script>

<style scoped>
/* Aquí puedes agregar estilos si es necesario */
</style>
