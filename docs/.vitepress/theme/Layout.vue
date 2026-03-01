<script setup lang="ts">
import DefaultTheme from 'vitepress/theme';
const { Layout } = DefaultTheme;
debugger;
</script>

<template>
    <Layout>
        <template #home-features-before>
            <section class="mid-section">
                <div class="container">
                    <h2>Why Stereo Reading?</h2>
                    <p>
                        Stereo mode presents parallel columns to train
                        binocular focus and visual coordination.
                    </p>
                </div>
            </section>
        </template>
    </Layout>
</template>

<style scoped>
.mid-section {
    padding: 80px 0;
}

.container {
    max-width: 1152px;
    margin: 0 auto;
    padding: 0 24px;
}
</style>