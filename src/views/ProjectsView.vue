<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Project } from '@/types/project'

// Structure des projets par catégorie
interface ProjectCategory {
  id: string
  title: string
  description: string
  projects: Project[]
}

// État pour les filtres et la catégorie active
const activeCategory = ref('e5')
const searchQuery = ref('')
const projectInFocus = ref<Project | null>(null)
const projectCategories = ref<ProjectCategory[]>([
  {
    id: 'e5',
    title: 'Épreuve E5',
    description: "Projets réalisés dans le cadre de l'épreuve E5 du BTS SIO option SLAM.",
    projects: [
      {
        id: 1,
        title: 'NurseCare',
        description:
          'Une application de gestion des différents rôles dans un hôpital permettant de suivre les tâches, les patients et les équipes médicales.',
        pdfUrl: '/pdfs/NurseCare.pdf',
        technologies: ['Vue.js', 'Node.js', 'MySQL', 'Express'],
        date: '2025',
        imageUrl: '/src/assets/Nursecare.png',
        details: [
          "Système d'authentification avec gestion des rôles",
          'Interface utilisateur responsive et intuitive',
          'Planification des tâches et gestion des équipes',
          'Suivi des dossiers patients en temps réel',
        ],
      },
      {
        id: 2,
        title: 'Dashboard Analytics',
        description:
          'Tableau de bord interactif pour la visualisation de données offrant des insights sur les performances commerciales.',
        pdfUrl: '/pdfs/dashboard.pdf',
        technologies: ['React', 'TypeScript', 'D3.js', 'Firebase'],
        date: '2023',
        imageUrl: '/project2.jpg',
        details: [
          'Visualisations interactives avec D3.js',
          'Filtrage et analyse de données en temps réel',
          'Export de rapports au format PDF et Excel',
          'Interface adaptative selon les profils utilisateurs',
        ],
      },
    ],
  },
  {
    id: 'e4',
    title: 'Épreuve E4',
    description: "Projets développés pour l'épreuve E4 démontrant diverses compétences techniques.",
    projects: [
      {
        id: 3,
        title: 'Carist-SI',
        description: 'Application de gestion de colis dans un entrepôt.',
        pdfUrl: '/public/pdfs/CaristDesktop.pdf',
        technologies: ['Kotlin', 'MySQL2'],
        date: '2025',
        imageUrl: '/src/assets/CaristLogo.png',
        details: [
          "Système d'authentification",
          ' Création, suppression et organisation des colis',
          ' Vérificaction de la taille et du poids des colis ',
        ],
      },
      {
        id: 4,
        title: 'Application Mobile à venir',
        description: 'A venir',
        pdfUrl: '/pdfs/fitness.pdf',
        technologies: [],
        date: '2024',
        imageUrl: '/project4.jpg',
        details: [],
      },
      {
        id: 5,
        title: 'NurseCare',
        description:
          "Une application web de gestion des différents rôles dans un cabinet d'infirmiers permettant de suivre les tâches, les patients et les équipes médicales.",
        pdfUrl: '/pdfs/NurseCare.pdf',
        technologies: ['Vue.js', 'Node.js', 'MySQL2', 'Express'],
        date: '2025',
        imageUrl: '/src/assets/Nursecare.png',
        details: [
          "Système d'authentification avec gestion des rôles",
          'Interface utilisateur responsive et intuitive',
          'Planification des tâches et gestion des équipes',
          'Suivi des dossiers patients en temps réel',
        ],
      },
      {
        id: 6,
        title: 'CRM pour Petites Entreprises',
        description: 'Système de gestion de la relation client adapté aux besoins des TPE/PME.',
        pdfUrl: '/pdfs/crm.pdf',
        technologies: ['Vue.js', 'PostgreSQL', 'Express', 'Node.js'],
        date: '2023',
        imageUrl: '/project6.jpg',
        details: [
          'Gestion des contacts et opportunités commerciales',
          'Automatisation des emails et rappels',
          'Génération de devis et factures',
          "Rapports d'activité personnalisables",
        ],
      },
      {
        id: 7,
        title: 'Portfolio Dynamique',
        description:
          'Portfolio web personnalisable pour artistes et designers avec galerie interactive.',
        pdfUrl: '/pdfs/portfolio.pdf',
        technologies: ['Next.js', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
        date: '2022',
        imageUrl: '/project7.jpg',
        details: [
          "Galerie d'images avec effets de transition",
          "Interface d'administration intuitive",
          'Optimisation SEO automatique',
          'Intégration de réseaux sociaux et analytics',
        ],
      },
      {
        id: 8,
        title: 'Application de Budgétisation',
        description:
          'Outil de gestion financière pour aider les utilisateurs à suivre leurs dépenses et économiser.',
        pdfUrl: '/pdfs/budget.pdf',
        technologies: ['Flutter', 'Firebase', 'GraphQL', 'Node.js'],
        date: '2022',
        imageUrl: '/project8.jpg',
        details: [
          'Catégorisation automatique des transactions',
          "Visualisations de l'évolution des dépenses",
          "Objectifs d'épargne et notifications",
          'Synchronisation entre plusieurs appareils',
        ],
      },
    ],
  },
])

// Filtrage des projets
const filteredProjects = computed(() => {
  const currentCategoryProjects =
    projectCategories.value.find((cat) => cat.id === activeCategory.value)?.projects || []

  return currentCategoryProjects.filter((project) => {
    // Filtrage par recherche
    const searchLower = searchQuery.value.toLowerCase()
    const searchMatch =
      !searchQuery.value ||
      project.title.toLowerCase().includes(searchLower) ||
      project.description.toLowerCase().includes(searchLower)

    return searchMatch
  })
})

// Changement de catégorie
const changeCategory = (categoryId: string) => {
  activeCategory.value = categoryId
  // Reset des filtres lors du changement de catégorie
  searchQuery.value = ''
}

// Ouverture du modal de détails
const openProjectDetails = (project: Project) => {
  projectInFocus.value = project
}

// Fermeture du modal
const closeProjectDetails = () => {
  projectInFocus.value = null
}

// Ouverture du PDF
const openPdf = (url: string) => {
  window.open(url, '_blank')
}

// Réinitialisation des filtres
const resetFilters = () => {
  searchQuery.value = ''
}
</script>

<template>
  <div class="projects-page">
    <h2 class="page-title">Mes Projets</h2>

    <div class="category-tabs">
      <button
        v-for="category in projectCategories"
        :key="category.id"
        :class="['category-tab', { active: activeCategory === category.id }]"
        @click="changeCategory(category.id)"
      >
        {{ category.title }}
      </button>
    </div>

    <div class="category-info">
      <h3>{{ projectCategories.find((cat) => cat.id === activeCategory)?.title }}</h3>
      <p>{{ projectCategories.find((cat) => cat.id === activeCategory)?.description }}</p>
    </div>

    <!-- Filtres -->
    <div class="filters-container">
      <div class="search-box">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Rechercher un projet..."
          class="search-input"
        />
        <i class="fas fa-search search-icon"></i>
      </div>

      <button class="reset-button" @click="resetFilters" v-if="searchQuery">
        <i class="fas fa-times"></i> Réinitialiser la recherche
      </button>
    </div>

    <!-- Projets -->
    <div class="projects-grid">
      <div
        v-for="project in filteredProjects"
        :key="project.id"
        class="project-card"
        @click="openProjectDetails(project)"
      >
        <div class="project-image">
          <img :src="project.imageUrl" :alt="project.title" loading="lazy" />
          <div class="date-badge">{{ project.date }}</div>
          <div class="overlay">
            <span class="view-details">Voir les détails</span>
          </div>
        </div>

        <div class="project-info">
          <h3>{{ project.title }}</h3>
          <p class="project-description">{{ project.description }}</p>

          <div class="project-technologies">
            <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
              {{ tech }}
            </span>
          </div>
        </div>
      </div>

      <!-- Message si aucun projet -->
      <div v-if="filteredProjects.length === 0" class="no-projects">
        <i class="fas fa-search"></i>
        <p>Aucun projet ne correspond à votre recherche.</p>
        <button class="reset-button" @click="resetFilters">Réinitialiser la recherche</button>
      </div>
    </div>

    <!-- Modal de détails du projet -->
    <transition name="modal">
      <div v-if="projectInFocus" class="project-modal-overlay" @click="closeProjectDetails">
        <div class="project-modal" @click.stop>
          <button class="close-button" @click="closeProjectDetails">
            <i class="fas fa-times"></i>
          </button>

          <div class="modal-image">
            <img :src="projectInFocus.imageUrl" :alt="projectInFocus.title" loading="lazy" />
          </div>

          <div class="modal-content">
            <h2>{{ projectInFocus.title }}</h2>
            <div class="modal-date">{{ projectInFocus.date }}</div>

            <p class="modal-description">{{ projectInFocus.description }}</p>

            <div class="modal-section">
              <h3>Technologies utilisées</h3>
              <div class="tech-tags">
                <span v-for="tech in projectInFocus.technologies" :key="tech" class="tech-tag">
                  {{ tech }}
                </span>
              </div>
            </div>

            <div class="modal-section">
              <h3>Caractéristiques principales</h3>
              <ul class="features-list">
                <li v-for="(detail, index) in projectInFocus.details" :key="index">
                  {{ detail }}
                </li>
              </ul>
            </div>

            <button class="view-project-button" @click="openPdf(projectInFocus.pdfUrl)">
              <i class="fas fa-file-pdf"></i> Voir le projet complet
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.projects-page {
  width: 100%;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
}

.page-title {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

/* Onglets de catégories */
.category-tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.category-tab {
  padding: 0.8rem 2rem;
  background: rgba(52, 152, 219, 0.1);
  color: var(--text-color);
  border: none;
  border-radius: var(--border-radius);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.category-tab:hover {
  background: rgba(52, 152, 219, 0.2);
  transform: translateY(-2px);
}

.category-tab.active {
  background: var(--primary-color);
  color: white;
}

.category-info {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
}

.category-info h3 {
  font-size: 1.8rem;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.category-info p {
  color: var(--text-color);
  line-height: 1.6;
}

/* Filtres */
.filters-container {
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto 3rem;
  width: 100%;
}

.search-box {
  position: relative;
  max-width: 600px;
  margin: 0 auto;
  width: 100%;
}

.search-input {
  width: 100%;
  padding: 1rem 1.5rem;
  border-radius: 30px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 1rem;
  padding-right: 3rem;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-sm);
}

.search-input:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
}

.search-icon {
  position: absolute;
  right: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-color);
  opacity: 0.5;
}

.reset-button {
  background: none;
  border: none;
  color: var(--text-color);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  opacity: 0.7;
  transition: all 0.3s ease;
}

.reset-button:hover {
  opacity: 1;
  color: var(--primary-color);
}

/* Grille de projets */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
}

.project-card {
  background: white;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-lg);
}

.project-image {
  height: 200px;
  position: relative;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.1);
}

.date-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: var(--primary-color);
  color: white;
  padding: 0.3rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  z-index: 2;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(44, 62, 80, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .overlay {
  opacity: 1;
}

.view-details {
  color: white;
  background: var(--primary-color);
  padding: 0.7rem 1.5rem;
  border-radius: var(--border-radius);
  font-weight: 500;
  transform: translateY(20px);
  transition: transform 0.3s ease;
}

.project-card:hover .view-details {
  transform: translateY(0);
}

.project-info {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.project-info h3 {
  color: var(--primary-color);
  margin-bottom: 0.7rem;
  font-size: 1.3rem;
}

.project-description {
  color: var(--text-color);
  line-height: 1.6;
  margin-bottom: auto;
  display: -webkit-box;
  display: -moz-box;
  display: box;
  -webkit-line-clamp: 3;
  -moz-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;
  box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.project-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1.5rem;
}

.tech-tag {
  padding: 0.3rem 0.8rem;
  background: rgba(52, 152, 219, 0.1);
  color: var(--primary-color);
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
}

/* Message quand aucun projet */
.no-projects {
  grid-column: 1 / -1;
  text-align: center;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-sm);
}

.no-projects i {
  font-size: 3rem;
  color: var(--primary-color);
  opacity: 0.3;
  margin-bottom: 1rem;
}

.no-projects p {
  margin-bottom: 1.5rem;
  color: var(--text-color);
}

/* Modal de détails */
.project-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  overflow-y: auto;
}

.project-modal {
  background: white;
  border-radius: var(--border-radius);
  width: 100%;
  max-width: 1000px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  display: flex;
  flex-direction: column;
}

.close-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.8);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  box-shadow: var(--shadow-md);
  transition: background 0.3s ease;
}

.close-button:hover {
  background: white;
}

.modal-image {
  height: 300px;
  width: 100%;
}

.modal-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-content {
  padding: 2rem;
}

.modal-content h2 {
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.modal-date {
  font-size: 0.9rem;
  color: var(--text-color);
  opacity: 0.7;
  margin-bottom: 1.5rem;
}

.modal-description {
  line-height: 1.7;
  color: var(--text-color);
  margin-bottom: 2rem;
}

.modal-section {
  margin-bottom: 2rem;
}

.modal-section h3 {
  font-size: 1.3rem;
  color: var(--secondary-color);
  margin-bottom: 1rem;
  position: relative;
  padding-bottom: 0.5rem;
}

.modal-section h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 3px;
  background: var(--primary-color);
  border-radius: 3px;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.features-list {
  list-style-position: inside;
  padding-left: 1rem;
}

.features-list li {
  margin-bottom: 0.5rem;
  line-height: 1.6;
  position: relative;
  padding-left: 1.5rem;
}

.features-list li::before {
  content: '•';
  color: var(--primary-color);
  font-weight: bold;
  position: absolute;
  left: 0;
}

.view-project-button {
  width: 100%;
  padding: 1rem;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: var(--border-radius);
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
}

.view-project-button:hover {
  background: var(--secondary-color);
}

/* Animations */
.modal-enter-active,
.modal-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

/* Media Queries */
@media (max-width: 768px) {
  .projects-page {
    padding: 2rem 1rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .category-tabs {
    flex-direction: column;
    width: 100%;
    gap: 0.5rem;
  }

  .project-modal {
    width: 95%;
    max-height: 95vh;
  }

  .modal-image {
    height: 200px;
  }

  .modal-content {
    padding: 1.5rem;
  }

  .modal-content h2 {
    font-size: 1.5rem;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .project-modal {
    width: 90%;
  }
}
</style>
