<template>

  <div>
     <h1>Estamos en la Home</h1>
     <button @click="logout" class="btn btn-primary btn-sm">Cerrar sesión</button>
  </div>
    
</template>

<script>
import {auth} from '../utils/firebase';

export default {
  name: 'Home',
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
