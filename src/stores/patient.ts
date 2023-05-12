import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import FHIR from "fhirclient";

export const usePatientStore = defineStore('patient', () => {
    const client = FHIR.oauth2.ready()
    const patients = ref<any>([]);

    async function getPatients() {
        (await client).request("Patient")
            .then(data => {
                console.log(data.entry)
                patients.value = data.entry.map(entity => entity.resource)
            })
    }
    getPatients()

    return { patients }
})
