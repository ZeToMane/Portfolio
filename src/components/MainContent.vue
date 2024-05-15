<template>
    <!-- Wrapper container -->
    <div class="flex w-full h-full bg-white border-t-2 border-l-2 border-r-4 border-b-4 border-solid border-black flex-col"> 
        <!-- Head  -->
        <div class="flex w-full p-2 items-center border-b-2 border-solid border-black gap-2">
            <button v-for="(_, tab) in tabs" :key="tab" :class="['tab-button', { active: currentTab === tab }]" @click="tabChange(tab)" class="flex p-[2px] justify-center items-center self-center border-t-2 border-l-2 border-r-[3px] border-b-[3px] border-solid border-black bg-white group">
                <div class="flex py-[2px] px-2 justify-center items-center self-center gap-1 border-[1.5px] border-solid border-black bg-white">
                    <!-- border-[1.5px] -->
                    <h2 class="text-black font-normal leading-normal text-stroke">
                        >
                    </h2>
                    <h2 class="text-black font-normal leading-normal">
                        {{ tab === 'ÀPropos' ? 'À Propos' : tab }}
                    </h2>
                </div>
            </button>
        </div>
        <!-- Main content  -->
        <div class="flex p-2 items-center gap-2 w-full h-full flex-col aspect-[12]">
            <div class="flex w-full h-full p-4 items-start gap-4 self-stretch border-t-2 border-l-2 border-r-4 border-b-4 border-black border-solid overflow-y-auto aspect-[12]">
                    <component :Open="isOpen" :is="tabs[currentTab]" class="tab"></component>

            </div>
        </div>
        <!-- <button @click="isComponentOpen = false" class="flex p-[2px] justify-center items-center self-center border-t-2 border-l-2 border-r-[3px] border-b-[3px] border-solid border-black bg-white group">
                <div class="flex py-[2px] px-2 justify-center items-center self-center gap-1 border-[1.5px] border-solid border-black bg-white">

                    <h2 class="text-black font-normal leading-normal text-stroke">
                        >
                    </h2>
                    <h2 class="text-black font-normal leading-normal">
                        Set false
                    </h2>
                </div>
        </button> -->
    </div>
</template>

<script>
import { ref } from 'vue';
import ÀPropos from './ÀPropos.vue';
import Projets from './Projets.vue';

let currentTab = ref('ÀPropos');
let tabs = {
    ÀPropos,
    Projets
};

export default {
    data() {
        return {
            isOpen: false
        };
    },
    components: {
        ÀPropos,
        Projets
    },
    setup() {
        return {
            currentTab,
            tabs,
        };
    },
    methods: {
        tabChange(tab){
            
            // currentTab = tab
                if(currentTab.value != tab){
                    this.isOpen = !this.isOpen
                    setTimeout(() => {
                        currentTab.value = tab;
                    }, 1300);
                }
            console.log(currentTab.value+" - "+tab);
        }
    },
};
</script>

<style scoped>
    .tab-button.active{
        div{
            background: black;

            h2{
                color: white;
            }

            .text-stroke{
                -webkit-text-stroke: 1px white;
            }
        }
    }
</style>