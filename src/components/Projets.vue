<template>
    <div class="tab flex flex-col w-full h-full gap-4 sm:h-auto">
      <TransitionGroup 
        appear
        @before-enter="onBeforeEnter"
        @enter="onEnter"
        @before-leave="onBeforeLeave"
        @leave="onLeave"
        :css="false"
      >
        <li v-for="(project, index) in projects" :key="index" :data-index="index" v-if="Open" class="flex h-full sm:min-h-24">
          <button @click="openModal(project)" class="flex flex-row w-full min-h-[20%] border-2 border-black border-solid p-2 gap-2 sm:flex-col">
              <div class="h-full basis-1/3 p-1 sm:p-0 border-2 border-black border-solid">
                  <img :src="project.thumbnailPath" alt="" class="w-full h-full">
              </div>
              <div class="flex flex-col gap-1 w-full h-full justify-center items-start">
                  <p>{{ project.title }}</p>
                  <p>{{ project.category }}</p>
              </div>
          </button>
        </li>
      </TransitionGroup>
    </div>

    <Modal :projectData="selectedProject" v-if="isModalOpen" @close="closeModal" />
</template>

<script>
import projectData from '../data/projects.json';
import Modal from './Projet.vue';
import gsap from 'gsap'

export default {
  data() {
    return {
      projects: projectData,
      isModalOpen: false,
      // Open: true,
      selectedProject: null
    };
  },

  props: {
        Open: {
            type: Boolean,
            required: true
        }
  },

  components: {
    Modal
  },
  methods: {
    openModal(project) {
      this.selectedProject = project;
      this.isModalOpen = true;
    },
    closeModal() {
      this.selectedProject = null;
      this.isModalOpen = false;
    },

    onBeforeEnter(el, done) {
      gsap.set(el, {
        marginTop: "100%",
        onComplete: done
        
      })
    },
      
    onEnter(el, done) {
      gsap.to(el, {
        marginTop: "0",
        delay: el.dataset.index * 0.3,
        duration: 1,
        ease: 'power3.out',
        onComplete: done
      })
    },

    onBeforeLeave(el, done) {
      gsap.to(el, {
        marginTop: "100%",
        duration: 1.2,
        ease: 'power3.in',
        onComplete: done
      })
    },

    onLeave(el, done) {
      gsap.to(el, {
        opacity: 0,
        duration: 1,
        ease: 'power3.in',
        onComplete: done
      })
    }
  },
};

</script>
