<template>
    <main class="bg-content dark:bg-content-dark flex flex-col relative min-h-screen overflow-hidden">
        <Navbar />
        <div class="flex-grow flex justify-center px-2">
            <div class="flex flex-col gap-4 py-4 mx-4 w-full max-w-screen-2xl">
                <slot></slot>
            </div>
        </div>
        <Footer />
    </main>
</template>
