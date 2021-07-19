<template>
  	<!-- Navegador	 -->
	<nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
	    <div class="container">
	    	<a class="navbar-brand" href="#" @click="changeForm">Health<span>coach<i class="fa fa-leaf"></i></span></a>
	      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span class="fa fa-bars"></span> Menu
	      </button>
	      <div class="collapse navbar-collapse p-1" id="ftco-nav">
	        <ul class="navbar-nav ml-auto">
	        	<!-- <li class="nav-item active"><a href="index.html" class="nav-link">Home</a></li>
	        	<li class="nav-item"><a href="#about" class="nav-link">Acerca de</a></li>
	        	<li class="nav-item"><a href="#coach" class="nav-link">Profesionales</a></li>
	        	<li class="nav-item"><a href="#pricing" class="nav-link">Planes</a></li>
	        	<li class="nav-item"><a href="#services" class="nav-link">Servicios</a></li>
	          <li class="nav-item"><a href="#contact" class="nav-link">Contacto</a></li> -->
	        </ul>
			<a @click="changeForm" class="ui inverted secondary button"><i class="fa fa-arrow-left"></i> Volver al Home</a>
	      </div>
	    </div>
	  </nav>
    <!-- END nav -->
</template>

<script>
export default {
   props:{
    changeForm: Function,
  }
}
</script>

<style>

</style>