<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import {usePatientStore} from "@/stores/patient";

const patientStore = usePatientStore();
</script>

<template>
  <table>
    <tr>
      <td>Familiennamen</td>
      <td>Vorname</td>
      <td>Geschlecht</td>
      <td>Geburtstdtaum</td>
    </tr>
    <tr v-for="patient in patientStore.patients">
      <td>{{ patient.name[0].family }}</td>
    </tr>
  </table>
</template>
