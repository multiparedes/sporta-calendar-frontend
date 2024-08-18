<template>
    <div class="h-12 border-t border-t-slate-200 flex items-center justify-center px-6">
        <div class="max-w-screen-2xl flex w-full items-center justify-between content-center text-slate-600">
            <p class="text-sm">
                © 2024 SportaCalendar. All rights reserved.
            </p>

            <div class="md flex flex-col md:flex-row md:gap-8 gap-1">
                <Button class="override" variant="link">Terms of Service</Button>
                <Button class="override" variant="link">Privacy</Button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.override {
    @apply p-0 m-0 h-fit !important
}
</style>