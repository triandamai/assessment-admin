<script setup lang="ts">
import {Editor,EditorContent} from "@tiptap/vue-3"
import {StarterKit} from "@tiptap/starter-kit";

const props = defineProps<{modelValue:string}>()
const emit = defineEmits(['update:modelValue'])

const editor = new  Editor({
  content:props.modelValue,
  extensions:[
      StarterKit
  ],
  onUpdate({editor}){
    emit('update:modelValue',editor.getHTML().toString())
  }
})

onBeforeUnmount(()=>{
  editor.destroy()
})
</script>

<template>
 <v-row>
   <v-col cols="12" border="1">
     <v-sheet :height="200" border="sm" class="outline-editor" rounded elevation="0">
       <v-btn-toggle
           variant="outlined"
           divided
           multiple
       >
         <v-btn @click="editor.chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold', { level: 1 }) }">
         <v-icon icon="mdi-format-italic"></v-icon>
         </v-btn>

         <v-btn>
           <v-icon icon="mdi-format-bold"></v-icon>
         </v-btn>

         <v-btn>
           <v-icon icon="mdi-format-underline"></v-icon>
         </v-btn>

         <v-btn>
           <div class="d-flex align-center flex-column justify-center">
             <v-icon icon="mdi-format-color-text"></v-icon>

             <v-sheet
                 color="purple"
                 height="4"
                 width="26"
                 tile
             ></v-sheet>
           </div>
         </v-btn>
       </v-btn-toggle>
       <v-btn-toggle
           variant="outlined"
           divided
       >
         <v-btn>
           <v-icon icon="mdi-format-align-center"></v-icon>
         </v-btn>

         <v-btn>
           <v-icon icon="mdi-format-align-left"></v-icon>
         </v-btn>

         <v-btn>
           <v-icon icon="mdi-format-align-right"></v-icon>
         </v-btn>
       </v-btn-toggle>
       <v-sheet :height="130">
         <editor-content :editor="editor"/>
       </v-sheet>
     </v-sheet>
   </v-col>
 </v-row>
</template>

<style lang="scss">
.tiptap{
  height: 130px;
  padding-left: 10px;
  padding-right: 10px;
}
.tiptap:focus{
  outline: none;
}



.outline-editor{
  border-color: #cecece !important;
}
</style>