<template>
    <Card class="bg-slate-950 text-white flex justify-center shadow-lg mb-4 rounded-none">
        <div class="flex justify-between items-center h-fit w-full max-w-screen-2xl py-2 px-6 md:px-0">
            <NuxtLink to="/"
                class="text-xl font-bold tracking-wider uppercase inline-flex items-center cursor-pointer hover:bg-slate-600 px-1 -mx-1 rounded-md transition-colors">
                <Icon class="mr-2" name="fluent:calendar-20-filled" size="26px"></Icon>
                <p class="hidden md:block">
                    Sporta
                    <span class="text-primary-400 -ml-1.5">Calendar</span>
                </p>
            </NuxtLink>

            <Button>Login</Button>
        </div>
    </Card>
</template>