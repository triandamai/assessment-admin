<script setup lang="ts">
import UiParentCard from '~/components/shared/UiParentCard.vue';

import {Editor} from "novel-vue"
import "novel-vue/dist/style.css"
</script>
<template>
    <v-row>
        <v-col cols="12" md="12">
            <UiParentCard title="Sample Page"> 
                <div class="pa-7 pt-1">
                  <Editor/>
                </div>
            </UiParentCard>
        </v-col>
    </v-row>
</template>
