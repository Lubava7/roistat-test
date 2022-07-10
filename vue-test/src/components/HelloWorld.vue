<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <TableForm/>
  </div>
</template>

<script>
import TableForm from './TableForm.vue'
export default {
  components:{
    TableForm,
  },
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Hello world comp'
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
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
