<script setup lang="ts">
/*Call Components*/
 import SalesOverview from '@/components/dashboard/SalesOverview.vue';
import YearlyBreakup from '@/components/dashboard/YearlyBreakup.vue';
import MonthlyEarning from '@/components/dashboard/MonthlyEarnings.vue';

import ProductCards from '@/components/dashboard/ProductCards.vue';

definePageMeta({
  middleware:['auth']
})

</script>
<template>
    <v-row>
        <v-col cols="12">
            <v-row>


            </v-row>
        </v-col>
        <v-col class="text-center mt-2">
            <p class="text-muted">Design and Developed by <a flat variant="text" href="https://adminmart.com/" target="_blank" class="pl-1 text-primary">AdminMart.com</a></p>
        </v-col>
    </v-row>
</template>