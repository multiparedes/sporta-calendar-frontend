<!-- CustomElement.vue -->

<script>
import { defineElement } from '@vueform/vueform'

export default defineElement({
  name: 'InputFieldElement',
  props: {
    icon: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      required: false,
    },
  },
})
</script>

<template>
  <ElementLayout>
    <template #element>
      <div>
        <Label :for="name" :required="rules?.includes('required')" :has-errors="invalid">
          {{ name }}
        </Label>
        <Input
          v-model="value" v-bind="{
            id: name,
            placeholder: placeholder ?? name,
            hasErrors: invalid,
            disabled,
            type,
            icon,
            errors,
          }" class="w-full"
        />
      </div>
    </template>
  </ElementLayout>
</template>
