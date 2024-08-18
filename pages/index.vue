<template>
    <section class="flex flex-col gap-y-10">
        <HeroSection />
        <Features />
        <TrendingEvents />
    </section>
</template>

<script setup>
import HeroSection from '~/components/sections/index/HeroSection.vue';
import Features from '~/components/sections/index/Features.vue';
import TrendingEvents from '~/components/sections/index/TrendingEvents.vue';
</script>