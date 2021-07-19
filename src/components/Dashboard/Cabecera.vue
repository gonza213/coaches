<template>
  <div class="col-md-12 mb-5">
         	<!-- Navegador	 -->
	 <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
	    <div class="container p-3">
	    	<a class="navbar-brand" href="#">Health<span>coach<i class="fa fa-leaf"></i></span></a>
	      <!-- <a @click="logout" class="ui inverted secondary button">Cerrar Sesión</a> -->
              <div class="dropdown">
                    <button class="ui inverted secondary button dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Gonzalo Vidal
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button class="dropdown-item" type="button">Mi perfil</button>
                        <button class="dropdown-item" type="button">Cambiar de plan</button>
                        <button  @click="logout"  class="dropdown-item" type="button">Salir</button>
                    </div>
                </div>
	    </div>
	  </nav>
    <!-- END nav -->
    </div>

</template>

<script>
import {auth} from '../../utils/firebase';

export default {
 setup(){

    const logout = () => {
      auth.signOut();

    }

    return {
      logout,
    }
  }
}
</script>

<style>

</style>