<template>
    <!-- <div class="modal-overlay">
        <div class="modal">
            <div class="modal-header">
                <h2>{{ projectData.title }}</h2>
                <button @click="closeModal">Close</button>
            </div>
            <div class="modal-body">
                <p><strong>Category:</strong> {{ projectData.category }}</p>
            </div>
        </div>
    </div> -->

    <!-- Wrapper container -->
    <div class="absolute z-10 top-0 left-0 w-full h-full">
        <Transition 
        appear
        @enter="onEnter"
        @leave="onLeave"
        :css="false"
        >
            <div v-if="projectOpen" class="flex w-full h-full bg-white border-t-2 border-l-2 border-r-4 border-b-4 border-solid border-black flex-col"> 
                <!-- Head  -->
                <div class="flex w-full px-2 py-1 items-center justify-between border-b-2 border-solid border-black gap-2">
                    <div class="flex w-full justify-start items-center gap-1">
                        <h2 class="text-black font-normal leading-normal text-stroke">
                            >
                        </h2>
                        <h2 class="text-black font-normal leading-normal">
                            {{ projectData.title }}
                        </h2>
                    </div>
                    <button @click="closeProjet" class="flex p-[2px] justify-center items-center self-center border-t-2 border-l-2 border-r-[3px] border-b-[3px] border-solid border-black bg-white group">
                        <div class="flex py-[2px] px-2 justify-center items-center self-center gap-1 border-[1.5px] border-solid border-black bg-white">
                            <!-- border-[1.5px] -->
                            <h2 class="text-black font-normal leading-normal text-stroke">
                                >
                            </h2>
                            <h2 class="text-black font-normal leading-normal">
                                Fermer
                            </h2>
                        </div>
                    </button>
                </div>
                <!-- Main content  -->
                <div class="flex p-2 items-center gap-2 w-full h-full flex-col aspect-[12]">
                    <div class="flex w-full h-full flex-col p-4 items-start gap-4 self-stretch border-t-2 border-l-2 border-r-4 border-b-4 border-black border-solid overflow-y-auto aspect-[12]">
                        <!-- Carousell -->
                        <div class="flex w-full justify-center">
                            <div v-if="projectData.iframes" class="basis-4/5 border-2 border-solid border-black p-4 min-h-80 mb-2 sm:mb-4 sm:basis-full">
                                <iframe width="100%" height="100%" :src="projectData.iframes" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <a v-if="projectData.liveLink" :href="projectData.liveLink" target="_blank" class="flex p-[2px] mb-1 justify-center items-center self-center border-[3px] border-solid border-black bg-white no-underline">
                                    <div class="flex py-[2px] px-2 justify-center items-center self-center gap-1 bg-white">
                                        <h2 class="text-black font-normal leading-normal text-stroke">
                                            >
                                        </h2>
                                        <h2 class="text-black font-normal leading-normal">
                                            {{projectData.textLink}}
                                        </h2>
                                    </div>
                                </a>
                            </div>
                            <div v-if="!projectData.iframes" class="splide basis-4/5 border-2 border-solid border-black p-4 sm:basis-full">
                                <div class="splide__track">
                                    <ul class="splide__list">
                                        <li v-for="(imagePath, index) in projectData.imagePaths" :key="index" class="splide__slide">
                                            <img :src="imagePath" alt="" class=" max-h-96 w-full h-full object-cover 2xl:max-h-80">
                                        </li>
                                    </ul>
                                </div>
                                <div class="splide__arrows flex flex-row justify-between gap-8 mt-4 z-10 border-[3px] border-solid border-black">
                                    <div class="flex items-center gap-6 ml-2 py-2">
                                        <button class="splide__arrow splide__arrow--prev">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="20" height="20" focusable="false"
                                                ><path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path></svg
                                            >
                                        </button>
                                        <button class="splide__arrow splide__arrow--next">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="20" height="20" focusable="false"
                                                ><path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path></svg
                                            >
                                        </button>
                                    </div>
                                    <a v-if="projectData.liveLink" :href="projectData.liveLink" target="_blank" class="flex p-[2px] justify-center items-center self-center border-[3px] border-solid border-black bg-white no-underline">
                                        <div class="flex py-[2px] px-2 justify-center items-center self-center gap-1 border-[1.5px] border-solid border-black bg-white">
                                            <h2 class="text-black font-normal leading-normal text-stroke">
                                                >
                                            </h2>
                                            <h2 class="text-black font-normal leading-normal">
                                                {{projectData.textLink}}
                                            </h2>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <!-- Project description -->
                        <div class="flex w-full justify-center">
                            <p id="para" class=" basis-11/12 md:text-sm sm:text-xs">{{projectData.description}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script type="module">
import { onMounted } from 'vue';
import {gsap} from 'gsap';
import '/node_modules/@splidejs/splide/dist/js/splide.min.js'

import Splide from '@splidejs/splide/dist/js/splide.esm'



export default {
    data() {
        return {
            projectOpen: true
        };
    },
    props: {
        projectData: {
            type: Object,
            required: true
        }
    },
    methods: {
        closeProjet() {
            this.projectOpen = false;
            console.log(this.projectOpen);
            setTimeout(()=>{
                this.$emit('close');
                console.log("Close emitted")
            }, 700);
        },
        
        onEnter(el) {
            console.log("Entering the dom")
            gsap.fromTo(el, 
                { 
                    height: "0%",
                    overflow: "hidden"
                },

                {
                    height: "100%",
                    duration: 1,
                    ease: 'power3.out',
                }
            );
        },

        onLeave(el, done) {
            console.log("Leaving the dom")
            gsap.to(el, 
                {
                    height: "0%",
                    duration: 1,
                    ease: 'power3.out',
                }
            );
        },
    },
    setup(){
        onMounted(() => {
            let splide = new Splide('.splide', {
                type: 'loop',
                perPage: 1,
                focus: 'center',
                pagination: false,
                gap: 32,
                live: false,
                classes: {
                    prev: 'splide__arrow--prev btn-prev'
                }
            });
            splide.mount()
        })
    }
}


</script>

<style lang="scss">
@import '../../node_modules/primevue/resources/primevue.min.css';
@import '/node_modules/@splidejs/splide/dist/css/splide-core.min.css';

.splide__slide{
    display: flex;
    justify-content: center;
}
.splide__arrow--prev{
    transform: rotate(180deg);
}
#para{
    white-space: break-spaces;
}
</style>