<template>
    <div class="card">
        <ul>
            <li v-for="(item, idx) in 5" :key="idx"><slot :iter="item" :id="idx"></slot></li>
        </ul>
    </div>
</template>

<script>

export default {

}
</script>

<style>
</style>
