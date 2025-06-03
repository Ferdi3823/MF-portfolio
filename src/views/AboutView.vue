<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

interface TimelineItem {
  type: 'experience' | 'education'
  title: string
  organization: string
  period: string
  description: string
  location: string
  logo?: string
  startYear: number
  endYear: number
}

interface SoftSkill {
  name: string
  description: string
  icon: string
}

const personalInfo = {
  name: 'Monnan Ferdinand',
  title: 'Développeur Web',
  shortBio: "Passionné par la création d'applications web et de base de données.",
  longBio:
    "Je suis encore un développeur en apprentissage, fort de mes expériences professionnelles passées j'ai décidé de renouer avec l'informatique en repartant de zéro. Après l'obtention de mon BTS SIO j'aimerais poursuivre mes études pour pouvoir approfondir mes connaissances dans le domaine des bases de données et de l'Intelligence Artificielle.",
  softSkills: [
    {
      name: 'Communication',
      description:
        'Excellente capacité à communiquer des concepts techniques à des publics non techniques. Présentation claire des idées et écoute active des besoins des clients.',
      icon: 'fas fa-comments',
    },
    {
      name: "Travail d'équipe",
      description:
        "Capacité à collaborer et partager des connaissances lors d'un projet de groupe ",
      icon: 'fas fa-handshake',
    },
    {
      name: 'Résolution de problèmes',
      description:
        'Approche méthodique pour identifier et résoudre des problèmes donnés. Persévérance face aux défis techniques.',
      icon: 'fas fa-lightbulb', // Celle-ci fonctionne déjà
    },
    {
      name: 'Adaptabilité',
      description:
        "Facilité à s'adapter à de nouvelles technologies. Mes solides connaissances en algorithmie me permettent de comprendre rapidement un langage informatique même si je ne l'ai jamais appris/utilisé avant.",
      icon: 'fas fa-user', // Icône simple et universelle
    },
  ] as SoftSkill[],
  interests: [
    'Base de données',
    'Développement web',
    'Intelligence artificielle',
    'Sport',
    'Lecture',
    'Voyages',
  ],
}

// Animation de la bio
const bioVisible = ref(false)
const isExpanded = ref(false)
const activeTab = ref('about')

// Animation pour les compétences
const skillsVisible = ref(false)

// Pour simuler l'effet de frappe
const typedText = ref('')
const fullText = personalInfo.longBio
const typeSpeed = 5
let typeIndex = 0

const typeEffect = () => {
  if (typeIndex < fullText.length) {
    typedText.value += fullText.charAt(typeIndex)
    typeIndex++
    setTimeout(typeEffect, typeSpeed)
  }
}

const toggleBio = () => {
  if (!isExpanded.value) {
    typeIndex = 0
    typedText.value = ''
    setTimeout(typeEffect, 100)
  }
  isExpanded.value = !isExpanded.value
}

onMounted(() => {
  // Activer les animations après chargement
  setTimeout(() => {
    bioVisible.value = true
  }, 300)

  setTimeout(() => {
    skillsVisible.value = true
  }, 700)
})

// Fusionner les expériences et formations en une seule timeline
const timelineItems = ref<TimelineItem[]>([
  // Expériences professionnelles
  {
    type: 'experience',
    title: 'Appui expert acheminement gaz',
    organization: 'GRDF (en alternance)',
    period: '2023 - 2025',
    description:
      "Refonte d'outils informatique locaux avec base de donées ACCESS, mise en place de tableaux de reportings, participation à l'animation de réseaux, création et maintien de vigies.",
    location: 'Toulouse, France',
    logo: 'src/assets/grdf-logo.png',
    startYear: 2023,
    endYear: 2025,
  },
  {
    type: 'experience',
    title: 'Assistant vente',
    organization: 'Carrefour',
    period: '2021 - 2023',
    description:
      "Présentation et vente de produits de qualité, maintien de la propreté d'un rayon, suivi de stock, tisser et maintenir une bonne relation client",
    location: 'Meylan, France',
    logo: 'src/assets/logoCarrefour.gif',
    startYear: 2021,
    endYear: 2023,
  },
  {
    type: 'experience',
    title: 'Equipier polyvalent',
    organization: 'Quick',
    period: '2019 - 2021',
    description:
      "Travail au sein d'un collectif dans le but de satisfaire des clients en restauration rapide",
    location: 'Echirolles, France',
    logo: 'src/assets/logoQuick.gif',
    startYear: 2019,
    endYear: 2021,
  },
  {
    type: 'experience',
    title: 'Animateur périscolaire',
    organization: 'École Ampère',
    period: '2018 - 2019',
    description:
      "Animation d'activités éducatives et ludiques pour les enfants en dehors des heures de classe. Encadrement de groupes, organisation d'ateliers créatifs et sportifs.",
    location: 'Echirolles, France',
    logo: 'src/assets/ecole-ampere.png',
    startYear: 2018,
    endYear: 2019,
  },

  // Formations
  {
    type: 'education',
    title: 'BTS SIO option SLAM',
    organization: 'Ecole ESICAD (en alternance)',
    period: '2023 - 2025',
    description:
      'Développement et sécurisation sites/applications web, client lourd et mobile backend et frontend.',
    location: 'Toulouse, France',
    logo: 'src/assets/esicad-logo.png',
    startYear: 2023,
    endYear: 2025,
  },
  {
    type: 'education',
    title: 'Licence Informatique et mathématiques',
    organization: 'Université Grenoble Alpes',
    period: '2015 - 2018',
    description:
      'Approfondissement des connaisances en alogorithmie, initiation aux bases de données et à la logique informatique et mathématiques',
    location: 'Echirolles, France',
    logo: 'src/assets/UGA.png',
    startYear: 2015,
    endYear: 2018,
  },
  {
    type: 'education',
    title: 'Baccalauréat S',
    organization: 'Lycée Marie Curie',
    period: '2014 - 2015',
    description:
      'Spécialité Informatique et Sciences du Numérique (ISN). Projet de fin détudes : Développement du jeu "Bataille navale"',
    location: 'Echirolles, France',
    logo: 'src/assets/lycee.png',
    startYear: 2014,
    endYear: 2015,
  },
])

// Trier les éléments de la timeline par ordre chronologique (de plus récent au plus ancien)
const sortedTimelineItems = computed(() => {
  return [...timelineItems.value].sort((a, b) => b.endYear - a.endYear)
})
</script>

<template>
  <div class="about-page">
    <!-- Section Hero Dynamique -->
    <section class="hero-section">
      <div class="hero-content">
        <div class="profile-image-container" :class="{ 'animate-image': bioVisible }">
          <div class="profile-image"></div>
          <div class="profile-backdrop"></div>

          <!-- Points forts qui apparaissent au survol -->
          <div class="strengths-container">
            <div class="strength-tag" style="top: 20%; left: -20%">Vue.js</div>
            <div class="strength-tag" style="top: 70%; left: -15%">Node.js</div>
            <div class="strength-tag" style="top: 10%; right: -20%">TypeScript</div>
            <div class="strength-tag" style="top: 60%; right: -15%">Express</div>
            <div class="strength-tag" style="top: 90%; left: 20%">CSS</div>
          </div>
        </div>

        <div class="hero-text" :class="{ 'fade-in': bioVisible }">
          <h1>{{ personalInfo.name }}</h1>
          <p class="title">{{ personalInfo.title }}</p>

          <!-- Tabs pour différentes sections -->
          <div class="info-tabs">
            <button
              class="tab-button"
              :class="{ active: activeTab === 'about' }"
              @click="activeTab = 'about'"
            >
              <i class="fas fa-user"></i> À propos
            </button>
            <button
              class="tab-button"
              :class="{ active: activeTab === 'skills' }"
              @click="activeTab = 'skills'"
            >
              <i class="fa-regular fa-comment"></i> Soft Skills
            </button>
            <button
              class="tab-button"
              :class="{ active: activeTab === 'interests' }"
              @click="activeTab = 'interests'"
            >
              <i class="fas fa-heart"></i> Intérêts
            </button>
          </div>

          <div class="tab-content">
            <!-- Tab About -->
            <div v-if="activeTab === 'about'" class="tab-pane">
              <p class="bio">{{ personalInfo.shortBio }}</p>

              <div class="expandable-bio">
                <div v-if="isExpanded" class="long-bio">
                  <p class="typed-text">{{ typedText }}</p>
                </div>
                <button class="bio-toggle" @click="toggleBio">
                  {{ isExpanded ? 'Voir moins ↑' : 'En savoir plus ↓' }}
                </button>
              </div>
            </div>

            <!-- Tab Soft Skills -->
            <div v-if="activeTab === 'skills'" class="tab-pane">
              <div class="soft-skills-container">
                <div
                  v-for="(skill, index) in personalInfo.softSkills"
                  :key="skill.name"
                  class="soft-skill-card"
                  :style="{ animationDelay: `${index * 0.15}s` }"
                >
                  <div class="skill-icon-container">
                    <i :class="skill.icon"></i>
                  </div>
                  <div class="skill-content">
                    <h3>{{ skill.name }}</h3>
                    <p>{{ skill.description }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Tab Interests -->
            <div v-if="activeTab === 'interests'" class="tab-pane">
              <div class="interests-container">
                <div
                  v-for="(interest, index) in personalInfo.interests"
                  :key="interest"
                  class="interest-tag"
                  :style="{ animationDelay: `${index * 0.15}s` }"
                >
                  {{ interest }}
                </div>
              </div>
            </div>
          </div>

          <div class="scroll-indicator">
            <p>Découvrez mon parcours</p>
            <div class="scroll-line">
              <div class="scroll-dot"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Parcours chronologique -->
    <section class="timeline-section">
      <h2>Mon Parcours</h2>
      <div class="timeline-container">
        <div class="timeline-line"></div>

        <!-- Items chronologiques (expériences et formations mélangées) -->
        <div
          v-for="(item, index) in sortedTimelineItems"
          :key="`item-${index}`"
          :class="['timeline-item', index % 2 === 0 ? 'left' : 'right']"
        >
          <div class="timeline-content">
            <div class="timeline-date">{{ item.period }}</div>
            <div
              class="timeline-badge"
              :class="{
                education: item.type === 'education',
                experience: item.type === 'experience',
              }"
            >
              {{ item.type === 'education' ? '🎓' : '💼' }}
            </div>
            <div class="timeline-logo">
              <img :src="item.logo" :alt="`${item.organization} Logo`" />
            </div>
            <h3>{{ item.type === 'education' ? 'Formation' : 'Expérience Professionnelle' }}</h3>
            <div class="timeline-details">
              <h4>{{ item.title }}</h4>
              <span class="organization">{{ item.organization }}</span>
              <span class="location">{{ item.location }}</span>
              <p class="description">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-page {
  width: 100%;
  display: flex;
  flex-direction: column;
}

/* Hero Section */
.hero-section {
  width: 100%;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, rgba(52, 152, 219, 0.1) 0%, rgba(44, 62, 80, 0.1) 100%);
}

.hero-content {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  gap: 4rem;
  align-items: center;
}

/* Animation d'entrée */
.fade-in {
  animation: fadeIn 0.8s ease-in-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.profile-image-container {
  position: relative;
  flex-shrink: 0;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
}

.animate-image {
  animation: popIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

@keyframes popIn {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  40% {
    opacity: 1;
    transform: scale(1.05);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.profile-image {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  position: relative;
  z-index: 2;
  background-image: url('@/assets/Avatar.webp');
  background-size: cover;
  background-position: center;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.profile-backdrop {
  position: absolute;
  width: 100%;
  height: 100%;
  background: var(--primary-color);
  border-radius: 50%;
  top: 20px;
  left: 20px;
  opacity: 0.2;
  z-index: 1;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Animation au survol */
.profile-image-container:hover .profile-image {
  transform: scale(1.05);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.profile-image-container:hover .profile-backdrop {
  transform: scale(1.1);
  opacity: 0.3;
  top: 25px;
  left: 25px;
}

/* Points forts autour de l'image */
.strengths-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  pointer-events: none;
}

.strength-tag {
  position: absolute;
  padding: 0.4rem 0.8rem;
  background: var(--primary-color);
  color: white;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  opacity: 0;
  transform: scale(0.8);
  transition:
    opacity 0.4s ease,
    transform 0.4s ease;
  box-shadow: var(--shadow-sm);
}

.profile-image-container:hover .strength-tag {
  opacity: 1;
  transform: scale(1);
  animation: pulseStrength 2s infinite;
}

@keyframes pulseStrength {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

.strength-tag:nth-child(2) {
  transition-delay: 0.1s;
}
.strength-tag:nth-child(3) {
  transition-delay: 0.2s;
}
.strength-tag:nth-child(4) {
  transition-delay: 0.3s;
}
.strength-tag:nth-child(5) {
  transition-delay: 0.4s;
}

.hero-text {
  flex-grow: 1;
  opacity: 0;
}

.hero-text h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.title {
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
}

/* Tabs de navigation */
.info-tabs {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 0.5rem;
}

.tab-button {
  padding: 0.8rem 1.2rem;
  background: transparent;
  border: none;
  border-radius: var(--border-radius);
  color: var(--text-color);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tab-button i {
  margin-right: 0.5rem;
}

.tab-button:hover {
  background: rgba(52, 152, 219, 0.1);
  color: var(--primary-color);
}

.tab-button.active {
  background: var(--primary-color);
  color: white;
}

.tab-content {
  min-height: 200px;
}

.tab-pane {
  animation: fadeTab 0.5s ease-in-out;
}

@keyframes fadeTab {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.bio {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-color);
  margin-bottom: 1rem;
}

/* Bio extensible */
.expandable-bio {
  margin: 1rem 0 2rem;
}

.long-bio {
  padding: 1rem;
  border-left: 3px solid var(--primary-color);
  background: rgba(52, 152, 219, 0.05);
  border-radius: 0 var(--border-radius) var(--border-radius) 0;
  margin-bottom: 1rem;
}

.typed-text {
  line-height: 1.8;
}

.bio-toggle {
  background: transparent;
  border: none;
  color: var(--primary-color);
  font-weight: 600;
  cursor: pointer;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
}

.bio-toggle:hover {
  transform: translateY(-2px);
}

/* Soft Skills - Nouvelle Section */
.soft-skills-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.soft-skill-card {
  background: white;
  border-radius: var(--border-radius);
  padding: 1.5rem;
  box-shadow: var(--shadow-md);
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  transition: all 0.3s ease;
  opacity: 0;
  animation: fadeInUp 0.5s ease forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.soft-skill-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
  background: linear-gradient(145deg, white, rgba(52, 152, 219, 0.05));
}

.skill-icon-container {
  width: 50px;
  height: 50px;
  min-width: 50px;
  border-radius: 50%;
  background: var(--primary-color);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
}

.soft-skill-card:hover .skill-icon-container {
  transform: scale(1.1) rotate(10deg);
}

.skill-content {
  flex: 1;
}

.skill-content h3 {
  font-size: 1.2rem;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.skill-content p {
  color: var(--text-color);
  font-size: 0.95rem;
  line-height: 1.6;
}

/* Intérêts */
.interests-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.interest-tag {
  padding: 0.8rem 1.5rem;
  background: rgba(52, 152, 219, 0.1);
  color: var(--primary-color);
  border-radius: 30px;
  font-weight: 500;
  animation: popUp 0.5s ease forwards;
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.3s ease;
}

.interest-tag:hover {
  background: var(--primary-color);
  color: white;
  transform: translateY(-3px);
}

@keyframes popUp {
  to {
    opacity: 1;
    transform: scale(1);
  }
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

/* Timeline Section */
.timeline-section {
  width: 100%;
  padding: 6rem 2rem;
  position: relative;
  background: linear-gradient(135deg, rgba(52, 152, 219, 0.05) 0%, rgba(44, 62, 80, 0.05) 100%);
}

.timeline-container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  padding: 2rem 0;
}

.timeline-line {
  position: absolute;
  width: 4px;
  background: var(--primary-color);
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.3;
}

.timeline-item {
  width: 50%;
  margin: 2rem 0;
  position: relative;
  opacity: 0;
  transform: translateX(-50px);
  animation: slideIn 0.6s ease forwards;
}

.timeline-item.right {
  margin-left: 50%;
  transform: translateX(50px);
}

.timeline-content {
  background: white;
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-md);
  position: relative;
  margin: 0 2rem;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.timeline-content::before {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  background: var(--primary-color);
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
}

.timeline-item.left .timeline-content::before {
  right: -40px;
}

.timeline-item.right .timeline-content::before {
  left: -40px;
}

.timeline-date {
  position: absolute;
  top: -30px;
  background: var(--primary-color);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
}

.timeline-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.9rem;
}

.timeline-badge.education {
  background: #4caf50; /* Vert pour l'éducation */
}

.timeline-badge.experience {
  background: #ff9800; /* Orange pour l'expérience */
}

.timeline-logo {
  width: 80px;
  height: 80px;
  margin-bottom: 1rem;
  background: white;
  border-radius: var(--border-radius);
  padding: 0.5rem;
  box-shadow: var(--shadow-sm);
}

.timeline-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.timeline-details {
  margin-top: 1rem;
}

.organization {
  display: block;
  font-weight: 600;
  color: var(--secondary-color);
}

.timeline-content:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

@keyframes slideIn {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Animation des entrées chronologiques */
.timeline-item:nth-child(1) {
  animation-delay: 0.1s;
}
.timeline-item:nth-child(2) {
  animation-delay: 0.2s;
}
.timeline-item:nth-child(3) {
  animation-delay: 0.3s;
}
.timeline-item:nth-child(4) {
  animation-delay: 0.4s;
}
.timeline-item:nth-child(5) {
  animation-delay: 0.5s;
}
.timeline-item:nth-child(6) {
  animation-delay: 0.6s;
}

/* Media Queries */
@media (max-width: 768px) {
  .timeline-line {
    left: 0;
  }

  .timeline-item {
    width: 100%;
    margin: 3rem 0;
  }

  .timeline-item.right {
    margin-left: 0;
  }

  .timeline-content {
    margin-left: 2rem;
  }

  .timeline-content::before {
    left: -40px !important;
  }

  .timeline-date {
    left: 0;
  }

  .hero-content {
    flex-direction: column;
    gap: 2rem;
  }

  .info-tabs {
    flex-direction: column;
    gap: 0.5rem;
  }

  .tab-button {
    width: 100%;
    text-align: left;
  }

  .strengths-container {
    display: none;
  }

  .soft-skills-container {
    grid-template-columns: 1fr;
  }
}
</style>
