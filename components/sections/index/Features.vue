<template>
    <div
        class="flex flex-col md:flex-row text-center justify-around w-full bg-zinc-100 px-6 rounded-md md:h-[40vh] md:items-center">
        <div v-for="(section, idx) in sections" :key="idx" class="w-[16em] p-4 flex flex-col gap-3 items-center">
            <Icon :name="section.icon" size="3em"></Icon>
            <h2 class="text-xl font-bold">{{ section.title }}</h2>
            <p class="text-zinc-600">{{ section.subtitle }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
interface FeatureSection {
    icon: string;
    title: string;
    subtitle?: string;
}

const sections: Array<FeatureSection> = [
    {
        icon: "fluent:search-32-regular",
        title: "Explore Events",
        subtitle: "Browse through a wide range of sports events and find the perfect competition for you.",
    },
    {
        icon: "fluent:calendar-edit-32-regular",
        title: "Build Your Calendar",
        subtitle: "Create your personalized sports calendar and never miss an event.",
    },
    {
        icon: "fluent:people-community-32-regular",
        title: "Join the Community",
        subtitle: "Connect with like-minded athletes, share experiences, and support each other.",
    },
];

</script>