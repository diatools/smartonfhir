import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import FHIR from "fhirclient";

export const usePatientStore = defineStore('patient', () => {
    FHIR.oauth2.ready().then(client => {
        console.log(client);
    })
})
