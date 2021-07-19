<template>
<div class="dashboard p-3">
  <div class="row">
      <Cabecera />
      <Menu />
      <div class="col-md-9">
        <div class="row p-3">
           <slot />
        </div>
      </div>
      <Footer />
  </div>
</div>
</template>

<script>
import Cabecera from '../components/Dashboard/Cabecera.vue';
import Menu from '../components/Dashboard/Menu.vue';
import Footer from '../components/Dashboard/Footer.vue';

export default {
  name: 'BasicLayout',
  components:{
    Cabecera,
    Menu,
    Footer
  }
   
}
</script>

