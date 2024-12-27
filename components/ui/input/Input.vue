<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { useVModel } from '@vueuse/core'

const props = defineProps<{
  defaultValue?: string | number
  modelValue?: string | number
  class?: HTMLAttributes['class']
  help?: string
  hasErrors?: boolean
  icon?: string
  disabled?: boolean
  placeholder: string
  type: HTMLInputElement['type']
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
})

const showPassword = ref(false)
const iconStyles = computed(() => (
  cn('size-6 text-muted-foreground text-slate-400', { 'text-red-400': props.hasErrors })
))
</script>

<template>
  <div class="relative w-full items-center">
    <input
      v-model="modelValue" :disabled="props.disabled" :placeholder="`${props.placeholder}...`"
      :type="showPassword ? 'text' : props.type" :class="cn(
        'transition-colors duration-200 flex h-10 w-full rounded-md border overflow-ellipsis border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300',
        { 'cursor-not-allowed opacity-50 bg-slate-50': props.disabled },
        { 'pl-10': props.icon },
        { 'border-red-500 focus-visible:ring-red-200': props.hasErrors },
        { 'pr-10': showPassword }, props.class)"
    >
    <span v-if="props.icon" class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
      <Icon :name="props.icon" :class="iconStyles" />
    </span>

    <button
      v-if="props.type === 'password'" type="button"
      class="absolute end-0 inset-y-0 flex items-center justify-center px-2" @click="showPassword = !showPassword"
    >
      <Icon
        v-tooltip="{
          content: showPassword ? 'Hide password' : 'Show password',
          placement: 'bottom',
        }" :name="showPassword ? 'fluent:eye-24-regular' : 'fluent:eye-off-24-regular'" :class="iconStyles"
      />
    </button>

    <p v-if="props.help" class="text-sm text-slate-500 dark:text-slate-400 mt-0.5" v-html="props.help" />
  </div>
</template>
