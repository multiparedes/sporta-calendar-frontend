<template>
    <div class="flex flex-col text-center gap-4">
        <div class="my-4">
            <h1 class="text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold">Trending Events</h1>
            <p class="text-lg">Check out the latest and most popular sports events happening near you.</p>
        </div>

        <div class="h-[75vh] overflow-y-scroll flex flex-col gap-4 md:grid lg:grid-cols-3 md:grid-cols-2 ">
            <Card v-for="card in cards" class="p-4 h-full text-left flex flex-col justify-between">
                <div class="flex justify-between">
                    <div>
                        <h2 class="text-lg font-semibold">{{ card.title }}</h2>
                        <p>{{ card.date }}</p>
                    </div>
                    <Badge class="w-fit h-fit" :variant="'secondary'">Trending</Badge>
                </div>

                <p>{{ card.description }}</p>

                <Button class="w-fit -mb-2 -ml-4" variant="link" icon="fluent:arrow-right-12-regular">Learn
                    more</Button>
            </Card>
        </div>

    </div>
</template>

<script setup lang="ts">
interface trendingCards {
    title: string,
    date?: string,
    description: string,
}

const cards: Array<trendingCards> = [
    {
        title: 'Marathon',
        date: 'October 15, 2024',
        description: 'Join the annual city marathon and test your endurance.'
    },
    {
        title: 'City Soccer Tournament',
        date: 'November 10, 2024',
        description: 'Participate in a thrilling soccer tournament with teams from around the city.'
    },
    {
        title: 'Triathlon Challenge',
        date: 'December 5, 2024',
        description: 'Compete in a challenging triathlon event including swimming, cycling, and running.'
    },
    {
        title: 'Charity 5K Run',
        date: 'November 25, 2024',
        description: 'Run for a cause in this charity 5K race supporting local health initiatives.'
    },
    {
        title: 'Winter Sports Festival',
        date: 'January 20, 2025',
        description: 'Enjoy a festival of winter sports including skiing, snowboarding, and ice skating.'
    },
    {
        title: 'Beach Volleyball Tournament',
        date: 'February 15, 2025',
        description: 'Join the exciting beach volleyball tournament with teams competing for the championship.'
    },
    {
        title: 'Cycling Grand Prix',
        date: 'March 10, 2025',
        description: 'Test your cycling skills in this grand prix event featuring different race categories.'
    },
    {
        title: 'Basketball Summer League',
        date: 'June 5, 2025',
        description: 'Participate in the summer league with competitive basketball games and local teams.'
    },
    {
        title: 'Tennis Open',
        date: 'July 25, 2025',
        description: 'Compete in a prestigious tennis open with players from across the region.'
    },
    {
        title: 'Swimming Championships',
        date: 'August 15, 2025',
        description: 'Showcase your swimming skills in this annual championship event.'
    }
];


</script>