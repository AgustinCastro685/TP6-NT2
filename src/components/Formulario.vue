<template>

  <section class="src-components-formulario">
    <div class="jumbotron">
      <h2>Formulario </h2>
      <hr />

      <form novalidate autocomplete="off" @submit.prevent="enviar()">
          <!-- ------------ -->
          <!-- CAMPO NOMBRE -->
          <!-- ------------ -->
          <div class="form-group">
                <label for="nombre">Nombre</label>
                <input 
                    type="text"
                    id="nombre"
                    class="form-control"
                    v-model="$v.f.nombre.$model"
                >
                <!-- CARTELES DE VALIDACIÓN -->
                <div v-if="$v.f.nombre.$error && $v.f.nombre.$dirty" class="alert alert-danger mt-1">
                   <div v-if="$v.f.nombre.required.$invalid">Este campo es requerido</div>
                   <div v-if="$v.f.nombre.minLength.$invalid">Se requieren minimo 5 letras</div>
                   <div v-if="$v.f.nombre.maxLength.$invalid">Se requieren maximo 15 letras</div>

                </div>
          </div>
          <!-- ------------ -->
          <!--  CAMPO EDAD  -->
          <!-- ------------ -->
          <div class="form-group">
                <label for="edad">Edad</label>
                <input 
                    type="number"
                    id="edad"
                    class="form-control"
                    v-model="$v.f.edad.$model"
                >
                <!-- CARTELES DE VALIDACIÓN -->
                <div v-if="$v.f.edad.$error && $v.f.edad.$dirty" class="alert alert-danger mt-1">
                    <div v-if="$v.f.edad.required.$invalid">Este campo es requerido</div>
                   <div v-if="$v.f.edad.between.$invalid">Edad validad de 18 a 120 años</div>
                </div>
          </div>
          <!-- ------------ -->
          <!--  CAMPO EMAIL  -->
          <!-- ------------ -->
          <div class="form-group">
                <label for="email">Email</label>
                <input 
                    type="text"
                    id="email"
                    class="form-control"
                    v-model="$v.f.email.$model"
                >
                <!-- CARTELES DE VALIDACIÓN -->
                <div v-if="$v.f.email.$error && $v.f.email.$dirty" class="alert alert-danger mt-1">
                    <div v-if="$v.f.email.required.$invalid">Este campo es requerido</div>
                    <div v-if="$v.f.email.email.$invalid">Ingrese un Email valido</div>

                </div>
          </div>


          <!-- ------------ -->
          <!-- BOTÓN ENVÍO  -->
          <!-- ------------ -->
          <div class="form-group">
                <input 
                    type="submit"
                    :disabled="false"
                    class="btn btn-success mt-4"
                    value="Enviar"
                >
          </div>
      </form>

    <!--<pre>{{$v}}</pre>-->
    
    </div>

  </section>


</template>

<script>

  import { required, minLength, maxLength, between, email } from '@vuelidate/validators'

  export default  {
    name: 'src-components-formulario',
    props: [],
    mounted () {
    },
    data () {
      return {
        f: this.resetForm(),
        url : 'https://5f94845f9ecf720016bfc764.mockapi.io/api/appvue/DatosTP6'
    }
    },
    validations: {
    f: {
      nombre: { 
            required,
            minLength: minLength(5),
            maxLength: maxLength(15)
      },
      edad: { 
            required,
            between: between(18,120)
            },
      email:{
            required,
            email
      }      
    }
    },
    methods: {
     sendDatosFormAxios(datos) {
            this.axios.post(this.url, datos , {'content-type': 'application/json'}
            )
            .then(res => console.log(res.data))
            .catch(error => console.log('HTTP POST ERROR', error))
        },
      enviar() {
            let form = {
                nombre: this.$v.f.nombre.$model,
                edad: this.$v.f.edad.$model,
                email: this.$v.f.email.$model
            }
            console.log(form)
            //this.sendDatosFormFetch(form)
            this.sendDatosFormAxios(form)
            this.f = this.resetForm()
            this.$v.$reset()
        },
      resetForm() {
            return {
               nombre: '',
               edad : '',
               email: ''
            }
        }       
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-formulario {

  }

.jumbotron {
    background-color: rgb(153, 153, 194);
    color: white;
  }

hr {
    background-color: #ddd;
  }    
</style>
