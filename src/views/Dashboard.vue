<template>
   <BasicLayout>
     <div class="col-md-12 p-3">
        <div class="card">
        <div class="card-body">
            <h2 class="ui header">
              <div class="content">
                 Bienvenido/a a HealthCoach
                <div class="sub header">Una plataforma dedicada en tu bienestar</div>
              </div>
            </h2>
          <img class="ui medium rounded image" style="width: 100%; height: 300px" src="images/bg_1.jpg">  
        </div>
      </div>
     </div>
      
   </BasicLayout>
</template>

<script>
import BasicLayout from '../layouts/BasicLayout.vue';

export default {
  name: ' Dashboard',
  components:{
    BasicLayout,
  },
  methods:{
  },
  
}
</script>

<style>

</style>