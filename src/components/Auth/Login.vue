<template>
  <div class="login">
     <Cabecera />
     <Nav :changeForm="changeForm"/>
     <Form />
     <Footer />
  </div>
</template>

<script>
import Cabecera from '../Home/Cabecera.vue';
import Footer from '../Home/Footer.vue';
import Nav from '../Login/Nav.vue';
import Form from '../Login/Form.vue';

export default {
  name: 'Login',
  components:{
    Cabecera,
    Footer,
    Nav,
    Form
  },
  props:{
    changeForm: Function,
  }
}
</script>

<style>

</style>