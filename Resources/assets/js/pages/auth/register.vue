<template>
  <div class="row login_page mx-0">
    <div class='col'>

    </div>
    <div class='col'>
    <div class='login_area d-flex flex-wrap align-items-center justify-content-center flex-column'>

        <div class='logo'></div>

        <h1 class='title'>
            Tavel Agency<br>
            DASHBOARD
        </h1>
        <p> Register your Account </p>

        <form @submit.prevent="register" @keydown="form.onKeydown($event)">
          <!-- Name -->
          <div class="form-group row">
            <label class="col-md-12 col-form-label text-md-right">{{ $t('name') }}</label>
            <div class="col-xs-12">
              <input v-model="form.name" :class="{ 'is-invalid': form.errors.has('name') }" class="form-control" type="text" name="name" placeholder="Username">
              <has-error :form="form" field="name"/>
            </div>
          </div>

          <!-- Email -->
          <div class="form-group row">
            <label class="col-md-12 col-form-label text-md-right">{{ $t('email') }}</label>
            <div class="col-xs-12">
              <input v-model="form.email" :class="{ 'is-invalid': form.errors.has('email') }" class="form-control" type="email" name="email" placeholder="Email">
              <has-error :form="form" field="email"/>
            </div>
          </div>

          <!-- Password -->
          <div class="form-group row">
            <label class="col-md-12 col-form-label text-md-right">{{ $t('password') }}</label>
            <div class="col-xs-12">
              <input v-model="form.password" :class="{ 'is-invalid': form.errors.has('password') }" class="form-control" type="password" name="password" placeholder="Password">
              <has-error :form="form" field="password"/>
            </div>
          </div>

          <!-- Password Confirmation -->
          <div class="form-group row">
            <label class="col-md-12 col-form-label text-md-right">{{ $t('confirm_password') }}</label>
            <div class="col-xs-12">
              <input v-model="form.password_confirmation" :class="{ 'is-invalid': form.errors.has('password_confirmation') }" class="form-control" type="password" name="password_confirmation" placeholder="Password confirm">
              <has-error :form="form" field="password_confirmation"/>
            </div>
          </div>

          <div class="form-group row">
            <div class="col-xs-12 d-flex">
              <!-- Submit Button -->
              <v-button :loading="form.busy">
                {{ $t('register') }}
              </v-button>

              <!-- GitHub Register Button -->
              <login-with-github/>
            </div>
          </div>
        </form>

    </div>
    </div>

    <div class='long_wave'></div>
  </div>
</template>


<script>
import Form from 'vform'

export default {
  middleware: 'guest',
  layout: 'none',

  components: {

  },

  metaInfo () {
    return { title: this.$t('register') }
  },

  data: () => ({
    form: new Form({
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    })
  }),

  methods: {
    async register () {
      // Register the user.
      const { data } = await this.form.post('/api/register')

      // Log in the user.
      const { data: { token } } = await this.form.post('/api/login')

      // Save the token.
      this.$store.dispatch('auth/saveToken', { token })

      // Update the user.
      await this.$store.dispatch('auth/updateUser', { user: data })

      // Redirect home.
      this.$router.push({ name: 'home' })
    }
  }
}
</script>
