<template>
    <div class="container">
        <div class="block type-block" v-if="typeIsBlock" @keypress.stop="checkIfEnter($event.code)">
            <input type="text" class="set-title" v-if="!titleIsSet" v-model="title"/>
            <div v-if="titleIsSet">{{ title }}</div>
            <div>{{ type }}</div>
        </div>
        <div class="block type-if" v-if="typeIsIf">
            <div>{{ type }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Block',
    props: ['type'],
    emits: ['onTitleSet'],
    data() {
        return {
            title: '',
            typeIsBlock: this.type === 'block',
            typeIsIf: this.type === 'if',
            titleIsSet: false
        }
    },
    methods: {
        checkIfEnter(code) {
            if (code === 'Enter') {
                this.titleIsSet = true;
                this.$emit('onTitleSet', this.title);
            }
        }
    }
}
</script>

<style scoped>
.container {
    margin: 12px 146px;
}
.block {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 7px 9px;
    text-align: left;
    display: inline-block;
}
.type-block {
    min-width: 500px;
}
.type-if {
    min-width: 45px;
    min-height: 45px;
    margin: 10px 14px;
    transform: rotate(45deg);
    background: #78d787;
}
.type-if > div {
    transform: rotate(-45deg);
    display: inline-block;
}
.set-title {

}
</style>
