<template>
    <div tabindex="0" id="container" @keypress="addBlockByKey($event.keyCode)">
        <div class="warn" v-if="!allBlocksAreSet()">{{ warning }}</div>
        <BlockNames :blockNames="blockNames" @click="addBlock" />
        <div id="blocks-container">
            <Block v-for="(block, i) of blocks" :key="i" :type="block.type" @onTitleSet="title => onBlockTitleSet(block, title)" />
        </div>
    </div>
</template>

<script>
import {getNew} from './constants';
import BlockNames from './components/BlockNames.vue';
import Block from './components/Block.vue';

const BLOCKS = Object.keys(getNew);

export default {
    name: 'App',
    components: {
        BlockNames,
        Block,
    },
    data() {
        return {
            warning: 'Please, set the name of the block',
            blockNames: BLOCKS,
            blocks: [],
        }
    },
    methods: {
        allBlocksAreSet() {
            return this.blocks.every(b => !b.canHaveTitle || b.title !== '');
        },
        addBlock(type) {
            this.blocks.push(getNew[type]());
        },
        addBlockByKey(keyCode) {
            if (!this.allBlocksAreSet()) {
                return;
            }
            const number = parseInt(keyCode, 10) - 48;
            const type = this.blockNames[number - 1];
            type && this.addBlock(type);
        },
        onBlockTitleSet(block, title) {
            block.title = title;
            console.log(this.blocks.find(b => b.title === block.title));
        }
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
#container {
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    background: #d6e7ea;
}
#blocks-container {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
}
.warn {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    color: black;
    background: red;
}
</style>
