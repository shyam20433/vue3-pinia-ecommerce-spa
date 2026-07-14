<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import apicall from '@/services/server'
import { useToast } from 'vue-toastification'

const auth = useAuthStore()
const toast = useToast()

const formRef = ref(null)

const username = ref(auth.currentUser.username)
const phone = ref(auth.currentUser.phone || '')
const address = ref(auth.currentUser.address || '')

async function updateProfile() {
  const { valid } = await formRef.value.validate()

  if (!valid) return

  try {
    const data = {
      username: username.value,
      phone: phone.value,
      address: address.value,
    }

    const updatedUser = await apicall.updateUser(
      auth.currentUser.id,
      data
    )

    auth.currentUser = updatedUser

    localStorage.setItem(
      'currentUser',
      JSON.stringify(updatedUser)
    )

    toast.success('Profile updated successfully')
  } catch (error) {
    toast.error(
      error.response?.data?.message ||
      'Failed to update profile'
    )
  }
}

const rules = {
  userName: (value) =>
    (!!value && value.trim().length >= 3) ||
    'Username must be at least 3 characters',

  userPhone: (value) =>
    /^[0-9]{10}$/.test(value) ||
    'Phone number must contain exactly 10 digits',

  userAddress: (value) =>
    (!!value && value.trim().length >= 10) ||
    'Address must be at least 10 characters',
}
</script>


<template>
  <v-container max-width="600">

    <h1 class="mb-6">
      My Profile
    </h1>

    <v-card class="pa-6">
      <v-form ref="formRef">
         <v-text-field v-model="username" label="Username" :rules="[rules.userName]" />

      <v-text-field v-model="phone" label="Phone Number" :rules="[rules.userPhone]"  />

      <v-textarea v-model="address" label="Address"   :rules="[rules.userAddress]" />

      <v-btn color="primary" block @click="updateProfile">
        Update Profile
      </v-btn>
      </v-form>



    </v-card>

  </v-container>
</template>
