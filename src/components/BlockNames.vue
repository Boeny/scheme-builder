<template>
    <div class="block-names">
        <button
            class="block"
            v-for="(blockName, i) of blockNames"
            :key="i"
            @click="$emit('click', blockName)"
        >
            {{ i + 1 }} - {{ blockName }}
        </button>
    </div>
</template>

<script>
export default {
    name: 'BlockNames',
    props: ['blockNames'],
    emits: ['click']
}
</script>

<style scoped>
.block-names {
    background: white;
    position: fixed;
    overflow-y: scroll;
    height: 100%;
    padding: 10px;
}
.block {
    display: block;
    min-width: 100px;
    min-height: 60px;
    margin-bottom: 7px;
}
</style>
