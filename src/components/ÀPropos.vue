<template>
    <Transition
        appear
        @enter="onEnter"
        @leave="onLeave"
        :css="false"
    >
        <div v-show="!Open" class="tab flex flex-col h-full justify-between">
            <p class="text-about">Je suis actuellement étudiant en BUT MMI à l’IUT Bordeaux Montaigne, passionné par le développement web, frontend et backend, ainsi que par le design. Mon parcours dans le domaine du web a commencé dès mon enfance, lorsque mon père m’a appris à utiliser son ordinateur. Cette fascination initiale m'a poussé à explorer davantage le “World Wide Web”, où j'ai trouvé un terrain de jeu et d'émerveillement.</p> 
            <p class="text-about">Aujourd'hui, je veux contribuer à cet univers en participant activement à la création de projets uniques. Cette passion se traduit par une volonté constante de me surpasser sur chaque projet.</p>
            <p class="text-about">En termes de compétences, j’ai de l'expérience avec une variété de langages et d'outils, notamment HTML, CSS (SCSS/SASS), JavaScript, et PHP. J'ai également de l’expérience avec le C#, ayant développé deux jeux sur Unity. Je m'efforce également d'explorer différents frameworks et bibliothèques, tels que Astro, Vue.js, Laravel, Node.js, GSAP et P5.js, afin de donner vie à mes idées.</p>
            <p class="text-about">À présent, je m'intéresse de plus en plus à la 3D avec Blender et la librairie Three.js. J’apprend à l’aide des tutoriels, documentations et, bientôt, la formation de Bruno Simon.</p>
            <p class="text-about">Mon objectif est de continuer à élargir constament mes compétences, pour ainsi pouvoir concrétiser toutes sortes d'idées à travers des expériences uniques et captivantes.</p>
        </div>
    </Transition>
</template>

<script>
import TextScramble from '../script/scrambleText.js'

export default{
    props: {
        Open: {
            type: Boolean,
            required: true
        }
    },

    methods: {
        onEnter(el, done) {

            
            // const el = parent.document.getElementsByTagName('P');
	
            // for (let i = 0; i < pTexts.length; ++i) {
            //     const fx = new TextScramble(el[i]);
            //     // el[i].innerText = h2Texts[i];
            //     fx.setText(pTexts[i]);
            //     console.log(pTexts[i]);
            // }
            // done();

            const pTexts = [
                "Je suis actuellement étudiant en BUT MMI à l’IUT Bordeaux Montaigne, passionné par le développement web, frontend et backend, ainsi que par le design. Mon parcours dans le domaine du web a commencé dès mon enfance, lorsque mon père m’a appris à utiliser son ordinateur. Cette fascination initiale m'a poussé à explorer davantage le “World Wide Web”, où j'ai trouvé un terrain de jeu et d'émerveillement.",
                "Aujourd'hui, je veux contribuer à cet univers en participant activement à la création de projets uniques. Cette passion se traduit par une volonté constante de me surpasser sur chaque projet.",
                "En termes de compétences, j’ai de l'expérience avec une variété de langages et d'outils, notamment HTML, CSS (SCSS/SASS), JavaScript, et PHP. J'ai également de l’expérience avec le C#, ayant développé deux jeux sur Unity. Je m'efforce également d'explorer différents frameworks et bibliothèques, tels que Astro, Vue.js, Laravel, Node.js, GSAP et P5.js, afin de donner vie à mes idées.",
                "À présent, je m'intéresse de plus en plus à la 3D avec Blender et la librairie Three.js. J’apprend à l’aide des tutoriels, documentations et, bientôt, la formation de Bruno Simon.",
                "Mon objectif est de continuer à élargir constament mes compétences, pour ainsi pouvoir concrétiser toutes sortes d'idées à travers des expériences uniques et captivantes."
            ];
            console.log("pTexts: " + pTexts);
            const pElements = el.getElementsByTagName('P');
            console.log("we on enter bro");

            for (const p of pElements) {
                // pTexts.push(p.innerText);
                p.innerText = ' ';
            }

            this.pTexts = pTexts

            const els = el.getElementsByTagName('P');
	
            for (let i = 0; i < pTexts.length; ++i) {
                const fx = new TextScramble(els[i]);
                // el[i].innerText = h2Texts[i];
                fx.setText(pTexts[i]);
                console.log(pTexts[i]);
            }
            done();
        },

        onLeave(el, done) {
            const pElements = el.getElementsByTagName('P');

            const els = el.getElementsByTagName('P');
	
            for (let i = 0; i < this.pTexts.length; ++i) {
                const fx = new TextScramble(els[i]);
                // el[i].innerText = h2Texts[i];
                fx.setText('');
            }
            // done();
        },
    },
}
</script>