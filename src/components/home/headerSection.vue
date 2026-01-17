<template>
    <header class="py-20 bg-primary-900 text-white text-center">
        <div class="container mx-auto px-4">
            <h1 class="text-5xl md:text-6xl font-heading font-bold mb-4">{{ props.title }}</h1>
            <p class="text-xl text-primary-300 max-w-2xl mx-auto">{{ props.desc }}</p>
        </div>
    </header>

</template>

<script setup>
const props = defineProps({
    title: String,
    desc: String,
    imglink: String | ""
}

)
</script>