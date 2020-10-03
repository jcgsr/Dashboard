<template>
  <div class="hello">
    <h1 class="animate__animated animate__backInUp mt-4 display-1">{{ msg }}</h1>
    <img src="../assets/pen.jpg" alt="Foto de uma Caneta">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Parisienne&display=swap');

h1 {
  font-family: 'Parisienne', cursive;
  font-weight: bold;
  color:rgb(87, 81, 81);
  opacity: .8;
}

img {
  width: 80%;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
