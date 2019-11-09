<template>
  <div class='page welcome login'>

      <div class='background'>
      </div>

      <div class='inner'>
          <v-container>

          </v-container>

          <v-container fill-height wrap flex-column class='login_box'>

              <div class='logo d-flex justify-end align-content-end'>

              </div>

              <v-card>
              <v-card-text py5>
                  <form>
                      <v-text-field v-model="username" :error-messages="username_errors" label="Username" required />

                      <v-text-field v-model="password" :error-messages="password_errors" :counter="10" label="Password" required  />

                      <v-select v-model="select" :items="items" :error-messages="selectErrors" label="Item" required v-if="false" />
                      <v-checkbox v-model="remember_me" :error-messages="checkboxErrors" label="Remember me?" required v-if="false" />

                      <v-btn class='btn' rounded elevation="0" minHeight="50 "@click.native="$router.push({ name: 'home' })"> Login </v-btn>

                      <p>
                          Username: admin <br>
                          Password: demo <br>
                      </P>
                  </form>
              </v-card-text>
              </v-card>

          </v-container>

          <v-container>
              <ul class='links'>
                  <li>Copyright &copy; 2020 Gkiokan.NET</li>
                  <li>Impressum</li>
                  <li>Kontakt</li>
                  <li>Datenschutz</li>
              </ul>
          </v-container>
      </div>

  </div>
</template>


<script>
import Form from 'vform'
import { get, sync, call } from 'vuex-pathify'
import swal from 'sweetalert2'

export default {
  middleware: 'guest',
  layout: 'none',

  components: {

  },

  metaInfo () {
    return { title: 'Login' }
  },

  data: () => ({
    disable_login_with_github: true,
    callback: false,
    enable_remember_me: false,
    enable_forgot_password: false,
    enable_register: false,

    username: '',
    password: '',
    select: '',

    username_errors: '',
    password_errors: '',

    selectErrors: '',
    checkboxErrors: '',

    placeid: "",
    form: new Form({
      email: '',
      password: ''
    }),
    remember: false
  }),

  mounted(){

      if(this.$route.name == 'login.withCB'){
          this.callback = true
          this.placeid  = this.$route.params.id
      }

  },

  computed: {
      selectedPlace : get('place/selected')
  },

  methods: {
      async login () {
        try {
            const { data } = await this.form.post('/api/login')

            this.$store.dispatch('auth/saveToken', {
              token: data.token,
              remember: this.remember
            })

            await this.$store.dispatch('auth/fetchUser')

            if(this.callback == false)
              this.$router.push({ name: 'home' })
            else
              this.$router.push({ name: 'home '})

        } catch (e) {
            console.log(e.response)
            swal('Login Fehler', 'Benutzername oder Password falsch', 'error')
            return;
        }

      },

      anotherMethod(){

      }
  }
}
</script>
