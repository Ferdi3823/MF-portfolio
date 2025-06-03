<script setup lang="ts">
import { ref } from 'vue'

interface Skill {
  name: string
  icon: string
  category: string
  description: string
  relatedSkills: string[]
  color: string
  iconUrl?: string
}

const flippedCards = ref<Set<string>>(new Set())

const toggleCard = (skillName: string) => {
  if (flippedCards.value.has(skillName)) {
    flippedCards.value.delete(skillName)
  } else {
    flippedCards.value.add(skillName)
  }
}

const languageSkills = [
  {
    name: 'Vue.js',
    icon: 'devicon-vuejs-plain colored',
    category: 'Frontend',
    description: "Création d'applications web réactives et performantes",
    relatedSkills: ['Vuex', 'Vue Router', 'Composition API'],
    color: '#42b883',
  },
  {
    name: 'TypeScript',
    icon: 'devicon-typescript-plain colored',
    category: 'Frontend',
    description: 'Développement typé et orienté objet',
    relatedSkills: ['POO', 'Types', 'Interfaces'],
    color: '#3178c6',
  },
  {
    name: 'Node.js',
    icon: 'devicon-nodejs-plain colored',
    category: 'Backend',
    description: 'Développement serveur JavaScript',
    relatedSkills: ['Express', 'API REST'],
    color: '#68a063',
  },
  {
    name: 'CSS',
    icon: 'devicon-css3-plain colored',
    category: 'Frontend',
    description: 'Styles modernes et responsifs',
    relatedSkills: ['Flexbox', 'Grid', 'Animations'],
    color: '#ff69b4',
  },
  {
    name: 'Express.js',
    icon: 'devicon-express-original colored',
    category: 'Backend',
    description: 'Framework Node.js pour applications web',
    relatedSkills: ['Middleware', 'Routing', 'API REST'],
    color: '#000000',
  },
  {
    name: 'Kotlin',
    icon: 'devicon-kotlin-plain colored',
    category: 'Backend',
    description: 'Développement mobile et backend moderne',
    relatedSkills: ['Android', 'Spring Boot', 'Coroutines'],
    color: '#7F52FF',
  },
  {
    name: 'Python',
    icon: 'devicon-python-plain colored',
    category: 'Programming',
    description: 'Langage polyvalent pour développement et data science',
    relatedSkills: ['Algorithmie', 'Fonctions', 'NumPy'],
    color: '#3776ab',
  },
  {
    name: 'C',
    icon: 'devicon-c-plain colored',
    category: 'Programming',
    description: 'Programmation système et algorithmique de base',
    relatedSkills: ['Pointeurs', 'Gestion mémoire', 'Algorithmie'],
    color: '#00599C',
  },
  {
    name: 'OCaml',
    icon: 'devicon-ocaml-plain colored',
    category: 'Programming',
    description: 'Programmation fonctionnelle et orientée objet',
    relatedSkills: ['Programmation fonctionnelle', 'Récursivité'],
    color: '#EC6813',
  },
  {
    name: 'VBA',
    icon: 'vba-custom-icon',
    iconUrl: '/images/vba.jpg',
    category: 'Automation',
    description: 'Automatisation de tâches dans Microsoft Office',
    relatedSkills: ['Macros Excel', 'Access VBA'],
    color: '#217346',
  },
  {
    name: 'SQL',
    icon: 'devicon-mysql-plain colored',
    category: 'Database',
    description: 'Gestion et manipulation de bases de données relationnelles',
    relatedSkills: ['MySQL', 'Requêtes complexes', 'Jointures'],
    color: '#00758F',
  },
] as Skill[]

const toolSkills = [
  {
    name: 'Git',
    icon: 'devicon-git-plain colored',
    category: 'Outils',
    description: 'Gestion de version et collaboration',
    relatedSkills: ['GitHub', 'CI/CD'],
    color: '#f05032',
  },
  {
    name: 'IntelliJ IDEA',
    icon: 'devicon-intellij-plain colored',
    category: 'IDE',
    description: 'IDE pour développement Android avec Java/Kotlin',
    relatedSkills: ['Android Studio', 'Kotlin', 'Java', 'Gradle'],
    color: '#000000',
  },
  {
    name: 'VS Code',
    icon: 'devicon-vscode-plain colored',
    category: 'IDE',
    description: 'Éditeur de code polyvalent et extensible',
    relatedSkills: ['Extensions', 'Debugging', 'Intégration Git'],
    color: '#007ACC',
  },
  {
    name: 'Excel',
    icon: 'excel-custom-icon',
    iconUrl: '/images/excel.png',
    category: 'Bureautique',
    description: 'Analyse de données et tableaux complexes',
    relatedSkills: ['Macros', 'Tableaux croisés', 'Formules'],
    color: '#217346',
  },
  {
    name: 'Access',
    icon: 'access-custom-icon',
    iconUrl: '/images/access.png',
    category: 'Base de données',
    description: 'Gestion de bases de données relationnelles',
    relatedSkills: ['SQL', 'Formulaires', 'Requêtes'],
    color: '#A4373A',
  },
  {
    name: 'Word',
    icon: 'word-custom-icon',
    iconUrl: '/images/word.png',
    description: 'Traitement de texte et documentation professionnelle',
    relatedSkills: ['Styles', 'Mise en page'],
    color: '#2B579A',
  },
  {
    name: 'Postman',
    icon: 'postman-custom-icon',
    iconUrl: '/images/postman.png',
    category: 'API Testing',
    description: "Test et développement d'APIs",
    relatedSkills: ['API REST', 'Tests automatisés'],
    color: '#FF6C37',
  },
] as Skill[]
</script>

<template>
  <div class="home">
    <!-- Section Hero -->
    <section class="hero">
      <div class="hero-content">
        <h1 class="title">
          <span class="greeting">Bonjour, je suis</span>
          <span class="name">Monnan Ferdinand</span>
          <span class="role">Développeur WEB (Junior)</span>
        </h1>
        <p class="description">
          Passionné par le développement web et la création d'expériences numériques innovantes
        </p>
        <div class="cta-buttons">
          <router-link to="/projects" class="btn primary">Voir mes projets</router-link>
          <router-link to="/about" class="btn secondary">A propos de moi</router-link>
        </div>
        <div class="scroll-indicator">
          <p>Découvrez mes compétences</p>
          <div class="scroll-line">
            <div class="scroll-dot"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Compétences -->
    <section class="skills-section">
      <h2>Compétences</h2>

      <!-- Langages -->
      <div class="skills-category">
        <h3>Langages & Frameworks</h3>
        <div class="hexagon-container">
          <div
            v-for="skill in languageSkills"
            :key="skill.name"
            class="hexagon-wrapper"
            @click="toggleCard(skill.name)"
          >
            <div class="hexagon" :class="{ 'is-flipped': flippedCards.has(skill.name) }">
              <!-- Face avant -->
              <div class="hexagon-front">
                <!-- Utiliser une image si iconUrl existe, sinon utiliser l'icône classique -->
                <img
                  v-if="skill.iconUrl"
                  :src="skill.iconUrl"
                  :alt="skill.name"
                  class="skill-icon-img"
                />
                <i v-else :class="[skill.icon]" class="skill-icon"></i>
                <h3>{{ skill.name }}</h3>
              </div>
              <!-- Face arrière -->
              <div class="hexagon-back">
                <p>{{ skill.description }}</p>
                <div class="related-skills">
                  <span v-for="related in skill.relatedSkills" :key="related" class="related-skill">
                    {{ related }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Outils -->
      <div class="skills-category">
        <h3>Outils Informatiques</h3>
        <div class="hexagon-container">
          <div
            v-for="skill in toolSkills"
            :key="skill.name"
            class="hexagon-wrapper"
            @click="toggleCard(skill.name)"
          >
            <div class="hexagon" :class="{ 'is-flipped': flippedCards.has(skill.name) }">
              <div class="hexagon-front">
                <!-- Même logique pour les outils -->
                <img
                  v-if="skill.iconUrl"
                  :src="skill.iconUrl"
                  :alt="skill.name"
                  class="skill-icon-img"
                />
                <i v-else :class="[skill.icon]" class="skill-icon"></i>
                <h3>{{ skill.name }}</h3>
              </div>
              <div class="hexagon-back">
                <p>{{ skill.description }}</p>
                <div class="related-skills">
                  <span v-for="related in skill.relatedSkills" :key="related" class="related-skill">
                    {{ related }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  width: 100%;
}

/* Hero Section */
.hero {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, rgba(52, 152, 219, 0.1) 0%, rgba(44, 62, 80, 0.1) 100%);
  border-radius: var(--border-radius);
  width: 100%;
}

.hero-content {
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
}

.title {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.greeting {
  font-size: 1.5rem;
  color: var(--primary-color);
}

.name {
  font-size: 3.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.role {
  font-size: 2rem;
  color: var(--text-color);
}

.description {
  font-size: 1.2rem;
  color: var(--text-color);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 3rem;
}

.btn {
  padding: 1rem 2rem;
  border-radius: var(--border-radius);
  font-weight: 600;
  text-decoration: none;
  transition: var(--transition);
}

.btn.primary {
  background: var(--primary-color);
  color: white;
}

.btn.primary:hover {
  background: var(--secondary-color);
  transform: translateY(-2px);
}

.btn.secondary {
  background: transparent;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
}

.btn.secondary:hover {
  background: var(--primary-color);
  color: white;
  transform: translateY(-2px);
}

.scroll-indicator {
  margin-top: 2rem;
  text-align: center;
}

.scroll-indicator p {
  font-size: 1rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.scroll-line {
  width: 2px;
  height: 60px;
  background: rgba(52, 152, 219, 0.2);
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}

.scroll-dot {
  width: 100%;
  height: 30%;
  background: var(--primary-color);
  position: absolute;
  top: 0;
  animation: scrollDown 1.5s ease-in-out infinite;
}

@keyframes scrollDown {
  0% {
    top: -30%;
  }
  100% {
    top: 100%;
  }
}

/* Skills Section */
.skills-section {
  padding: 4rem 2rem;
  background: linear-gradient(135deg, rgba(52, 152, 219, 0.05) 0%, rgba(44, 62, 80, 0.05) 100%);
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 100%;
}

.skills-section h2 {
  text-align: center;
  font-size: 2.5rem;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 2rem;
}

.skills-category {
  margin-bottom: 2rem;
  width: 100%;
}

.skills-category h3 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 3rem;
  color: var(--primary-color);
}

.hexagon-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 2rem;
  width: 100%;
}

.hexagon-wrapper {
  width: 100%;
  padding-top: 115%;
  position: relative;
  cursor: pointer;
}

.hexagon {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.6s ease;
  transform-style: preserve-3d;
  cursor: pointer;
}

.hexagon-front,
.hexagon-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: white;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  transition: all 0.3s ease;
}

.hexagon-back {
  background: var(--primary-color);
  color: white;
  transform: rotateY(180deg);
}

/* Effet de survol */
.hexagon:hover {
  transform: scale(1.05);
}

.hexagon:hover .hexagon-front {
  background: var(--primary-color);
  color: white;
}

/* Effet de retournement */
.hexagon.is-flipped {
  transform: rotateY(180deg);
}

.skill-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
}

/* Style pour les images d'icônes */
.skill-icon-img {
  width: 2.5rem;
  height: 2.5rem;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  object-fit: contain;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.hexagon-front h3 {
  font-size: 1.2rem;
  margin: 0;
  color: var(--secondary-color);
  transition: all 0.3s ease;
}

.hexagon:hover .hexagon-front h3 {
  color: white;
}

.related-skills {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
}

.related-skill {
  font-size: 0.8rem;
  background: rgba(255, 255, 255, 0.2);
  padding: 0.2rem 0.8rem;
  border-radius: 12px;
}

@media (max-width: 768px) {
  .name {
    font-size: 2.5rem;
  }

  .role {
    font-size: 1.5rem;
  }

  .description {
    font-size: 1rem;
  }

  .cta-buttons {
    flex-direction: column;
  }

  .skills-category h3 {
    font-size: 1.5rem;
  }

  .hexagon-container {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    padding: 1rem;
  }

  .skill-icon {
    font-size: 2rem;
  }

  .skill-icon-img {
    width: 2rem;
    height: 2rem;
  }

  .hexagon-back p {
    font-size: 0.9rem;
  }

  .related-skill {
    font-size: 0.75rem;
    padding: 0.15rem 0.6rem;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .hexagon-container {
    grid-template-columns: repeat(2, 1fr);
  }

  .hero-content {
    max-width: 700px;
  }
}

/* Animations hexagones */
.hexagon-front,
.hexagon-back {
  box-shadow: var(--shadow-md);
}

.hexagon:hover .hexagon-front,
.hexagon:hover .hexagon-back {
  box-shadow: var(--shadow-lg);
}

.hexagon-back p {
  margin-bottom: 1rem;
  line-height: 1.5;
}
</style>
