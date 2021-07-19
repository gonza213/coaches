<template>
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="exampleModalLabel">Crea una cuenta y empieza a cambiar tu vida</h3>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
     <form @submit.prevent="onRegister">
      <div class="modal-body">
        <div class="row">
            <div class="col-md-6 mx-auto">
                    <div class="row">
                       <div class="col-md-12">
                            <div class="form-group">
                                <label class="label">Nombre completo</label>
                                <input type="text" class="form-control"  placeholder="Ingrese su nombre completo" v-model="formData.name" :class="{error: formError.name}">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label class="label" >Email</label>
                                <input type="email" class="form-control"  placeholder="Ingrese su correo electrónico" v-model="formData.email" :class="{error: formError.email}">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label class="label" >Contraseña</label>
                                <input type="password" class="form-control"   placeholder="Ingrese contraseña" v-model="formData.password" :class="{error: formError.password}">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label class="label" >Repetir contraseña</label>
                                <input type="password" class="form-control"   placeholder="Repetir contraseña" v-model="formData.repeatPassword" :class="{error: formError.repeatPassword}">
                            </div>
                        </div>
                       
                    </div>
              
            </div>
            <!-- <div class="col-md-6">
                <div class="row">
                  <div class="col-md-12">
                        <div class="form-group">
                            <label class="label" >Selecciona el Plan</label>
                          <select class="form-control" id="plan" v-model="selected" :class="{error: formError.selected}">
                            <option disabled>Elija un plan:</option>
                            <option value="plan1">Plan 1</option>
                            <option value="plan2">Plan 2</option>
                          </select>
                        </div>
                  </div>
                  <div class="col-md-12" v-if="selected == 'plan1'">
                    <h2 class="text-center">Total a pagar: <span class="text-right text-primary" id="precioTotal">$2000</span></h2>
                  </div>
                  <div class="col-md-12" v-else-if="selected == 'plan2'">
                    <h2 class="text-center">Total a pagar: <b class="text-right text-primary" id="precioTotal">$2500</b></h2>
                  </div>
                   <div class="col-md-12" v-else>
                    <h2 class="text-center">Total a pagar: <b class="text-right text-primary" id="precioTotal">$0</b></h2>
                  </div>

                </div>
            </div> -->
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="ui button secondary" data-dismiss="modal">Cancelar</button>
        <button type="submit" class="ui button primary" @click="probar" :class="{loading}">Crear cuenta</button>
      </div>
      </form>
    </div>
  </div>
</div>
</template>

<script>
import {ref} from 'vue';
import $ from 'jquery';
import * as Yup from 'yup';
import {auth} from '../../utils/firebase';

export default {
  name: 'Modal',
  methods:{
    probar(){
     var plan = $('#precioTotal').html();
     if(plan === '$0'){
       console.log('elige un plan');
     }
    }
  },
  setup(){

    let formData = {};
    let formError = ref({});
    let loading = ref(false);
    // let selected = ref();
    
    const schemaForm = Yup.object().shape({
      name: Yup.string().required(true),
      email: Yup.string().email(true).required(true),
      password: Yup.string().required(true),
      repeatPassword: Yup.string().required(true).oneOf([Yup.ref('password')], true)
    })

    // const schemaPlan = Yup.object().shape({
    //   value: Yup.string().required(true)
    // })

    const onRegister = async () => {
       loading.value = true;
       formError.value = {};

      try {
        await schemaForm.validate(formData, {abortEarly: false});
        // await schemaPlan.validate(selected, {abortEarly: false});
        
        try {
          const {email, password} = formData;
          await auth.createUserWithEmailAndPassword(email, password);
        } catch (err) {
          console.log(err);
        }
      } catch (err) {
        err.inner.forEach(error => {
           formError.value[error.path] = error.message;
        });
      }
      loading.value = false;
    }

  

    return{
      formData,
      onRegister,
      formError,
      loading,
      // selected,
    }
  }
}
</script>

<style scoped>
 input.error{
   border-color: #faa;
   background-color: #f0b4b4;
 }
</style>