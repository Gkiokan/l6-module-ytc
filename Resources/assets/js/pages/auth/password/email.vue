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
        <p> I've forgot my Password. Reset your Password. </p>

        <form @submit.prevent="send" @keydown="form.onKeydown($event)">
          <alert-success :form="form" :message="status"/>

          <!-- Email -->
          <div class="form-group row">
            <label class="col-md-12 col-form-label text-md-right">{{ $t('email') }}</label>
            <div class="col-md-12">
              <input v-model="form.email" :class="{ 'is-invalid': form.errors.has('email') }" class="form-control" type="email" name="email" placeholder="Your E-Mail">
              <has-error :form="form" field="email"/>
            </div>
          </div>

          <!-- Submit Button -->
          <div class="form-group row">
            <div class="col-md-9 ml-md-auto">
              <v-button :loading="form.busy">
                {{ $t('send_password_reset_link') }}
              </v-button>
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
  layout: 'none',
  middleware: 'guest',

  metaInfo () {
    return { title: this.$t('reset_password') }
  },

  data: () => ({
    status: '',
    form: new Form({
      email: ''
    })
  }),

  methods: {
    async send () {
      const { data } = await this.form.post('/api/password/email')

      this.status = data.status

      this.form.reset()
    }
  }
}
</script>
