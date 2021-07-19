<template>
  <div class="register">
      <Cabecera />
      <Nav :changeForm="changeForm" />
      <Carousel />
      <Servicios />
      <About />
      <Consulta />
      <Otros />
      <Ejercicios />
      <Coaches />
      <Terapias />
      <Planes />
      <Contacto />
      <Footer />
  </div>
</template>

<script>
import Cabecera from '../Home/Cabecera.vue';
import Nav from '../Home/Nav.vue';
import Carousel from '../Home/Carousel.vue';
import Servicios from '../Home/Servicios.vue'
import About from '../Home/About.vue';
import Consulta from '../Home/Consulta.vue';
import Otros from '../Home/Otro-servicios.vue';
import Ejercicios from '../Home/Ejercicio-presencial.vue';
import Coaches from '../Home/Coaches.vue';
import Terapias from '../Home/Terapia-presencial.vue';
import Planes from '../Home/Planes.vue';
import Contacto from '../Home/Contacto.vue';
import Footer from '../Home/Footer.vue';

export default {
 name: 'Register',
 components:{
   Cabecera,
   Nav,
   Carousel,
   Servicios,
   About,
   Consulta,
   Otros,
   Ejercicios,
   Coaches,
   Terapias,
   Planes,
   Contacto,
   Footer
 },
 props:{
  changeForm: Function,
}
}
</script>

<style>

</style>