<template>
  <div class="col-md-12 p-5">
      <div class="row mt-3 mb-5">
          <div class="col-md-7">
             <div class="hero-wrap mt-1">
                <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                    <!-- <ol class="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol> -->
                    <div class="carousel-inner  slider-text">
                    <div class="carousel-item active">
                        <img src="images/bg_1.jpg" class="d-block w-100" alt="">
                        <div class="carousel-caption d-none d-md-block text">
                        <h2 class="mb-4">First slide label</h2>
                        <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item  slider-text">
                        <img src="images/bg_2.jpg" class="d-block w-100" alt="">
                        <div class="carousel-caption d-none d-md-block">
                        <h2 class="mb-4">Second slide label</h2>
                        <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item  slider-text">
                        <img src="images/bg_3.jpg" class="d-block w-100" alt="">
                        <div class="carousel-caption d-none d-md-block">
                        <h2 class="mb-4">Third slide label</h2>
                        <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                    </a>
                </div>
	        </div>
          </div>
          <div class="col-md-5 mt-5">
          <div class="card">
              <div class="card-header">
                  <h3 class="text-center text-primary">Ingresar a HealthCoach</h3>
              </div>
              <div class="card-body">
                  <form @submit.prevent="onLogin" id="contactForm"  class="contactForm">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label class="label" for="name">Email</label>
                                <input type="email" class="form-control"  placeholder="Correo electrónico" v-model="formData.email" :class="{error: formError.email}">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label class="label" for="subject">Contraseña</label>
                                <input type="password" class="form-control"   placeholder="Contraseña" v-model="formData.password" :class="{error: formError.password}">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <button type="submit" class="ui button positive fluid" :class="{loading}">Ingresar</button>
                            </div>
                        </div>
                    </div>
                </form>
              </div>
          </div>
      </div>
      </div>
      
  </div>
</template>

<script>
import {ref} from 'vue';
import * as Yup from 'yup';
import {auth} from '../../utils/firebase';

export default {
    setup(){
        let formData = {};
        let formError = ref({});
        let loading = ref(false);

        const schemaForm = Yup.object().shape({
            email: Yup.string().email(true).required(true),
            password: Yup.string().required(true),
        })

        const onLogin = async () => {
            loading.value = true;
            formError.value = {};

            try {
                await schemaForm.validate(formData, {abortEarly: false});
               
               try {
                   const {email, password} = formData;
                   await auth.signInWithEmailAndPassword(email, password);
               } catch (error) {
                   console.log(error);
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
            onLogin,
            formError,
            loading
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