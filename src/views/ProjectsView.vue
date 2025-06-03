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
const activeCategory = ref('e6')
const projectInFocus = ref<Project | null>(null)
const projectCategories = ref<ProjectCategory[]>([
  {
    id: 'e6',
    title: 'Épreuve E6',
    description: "Projets réalisés dans le cadre de l'épreuve E6 du BTS SIO option SLAM.",
    projects: [
      {
        id: 1,
        title: 'NurseCare',
        description:
          'Une application de gestion des différents rôles dans un hôpital permettant de suivre les tâches, les patients et les équipes médicales.',
        pdfUrl: '/pdfs/NurseCare.pdf',
        technologies: ['Vue.js', 'Node.js', 'MySQL', 'Express'],
        date: '2025',
        imageUrl: '/images/Nursecare.png',
        details: [
          "Système d'authentification avec gestion des rôles",
          'Interface utilisateur responsive et intuitive',
          'Planification des tâches et gestion des équipes',
          'Suivi des dossiers patients en temps réel',
        ],
      },
      {
        id: 2,
        title: 'Carist-SI',
        description:
          'Application de gestion de colis dans un entrepôt avec interface moderne et fonctionnalités avancées.',
        pdfUrl: '/pdfs/CaristDesktop.pdf',
        technologies: ['Kotlin', 'MySQL2'],
        date: '2025',
        imageUrl: '/images/CaristLogo.png',
        details: [
          "Système d'authentification sécurisé",
          'Création, suppression et organisation des colis',
          'Vérification de la taille et du poids des colis',
          'Interface utilisateur intuitive et moderne',
        ],
      },
    ],
  },
  {
    id: 'e5',
    title: 'Épreuve E5',
    description: "Projets développés pour l'épreuve E5 démontrant diverses compétences techniques.",
    projects: [
      {
        id: 3,
        title: 'Carist-SI',
        description: 'Application en client lourd de gestion de colis dans un entrepôt.',
        pdfUrl: '/pdfs/CaristDesktop.pdf',
        technologies: ['Kotlin', 'MySQL2'],
        date: '2025',
        imageUrl: '/images/CaristLogo.png',
        details: [
          "Système d'authentification",
          ' Création, suppression et organisation des colis',
          ' Vérificaction de la taille et du poids des colis ',
        ],
      },
      {
        id: 4,
        title: 'EZcontact',
        description: 'Application mobile de gestion de contacts professionels',
        pdfUrl: '/pdfs/Livrable_EZcontact.pdf',
        technologies: ['Kotlin', 'MySQL2', 'Android'],
        date: '2025',
        imageUrl: '/images/EZcontact.png',
        details: ["Maitrise de l'interface Android", "Recherche d'éléments en temps réel"],
      },
      {
        id: 5,
        title: 'NurseCare',
        description:
          "Une application web de gestion des différents rôles dans un cabinet d'infirmiers permettant de suivre les tâches, les patients et les équipes médicales.",
        pdfUrl: '/pdfs/NurseCareF_merged.pdf',
        technologies: ['Vue.js', 'Node.js', 'MySQL2', 'Express'],
        date: '2025',
        imageUrl: '/images/Nursecare.png',
        details: [
          "Système d'authentification avec gestion des rôles",
          'Interface utilisateur responsive et intuitive',
          'Planification des tâches et gestion des équipes',
          'Suivi des dossiers patients en temps réel',
        ],
      },
      {
        id: 6,
        title: 'TEMAO',
        description: "Refonte d'un outil informatique d'aide à la saisie utilisateur sur ACCESS",
        pdfUrl: '/pdfs/Refonte_TEMAO.pdf',
        technologies: ['VBA', 'SQL', 'Macros ACCESS'],
        date: '2024',
        imageUrl: '/images/TEMAOLogo.png',
        details: [
          'Manipulation de formulaires',
          'Contrôle de la saisie utilisateur',
          'Production de fichiers intègre',
        ],
      },
      {
        id: 7,
        title: "Organiz'heure",
        description: 'Application web de gestion de tâches ',
        pdfUrl: '/pdfs/Livrable_Organiz.pdf',
        technologies: ['Vue.js', 'Tailwind CSS', 'Express', 'MySQL2'],
        date: '2024',
        imageUrl: '/images/ogz.png',
        details: [
          "Page d'authentification",
          'Restriction des droits pour les profils non administrateurs',
          'Mots de passe Hashés en base de données',
          'gestion complète des taches',
        ],
      },
      {
        id: 8,
        title: 'Installation GLPI 10',
        description: 'Installation de GLPI 10 sur une VM Debain 12',
        pdfUrl: '/pdfs/Installation_GLPI_10.pdf',
        technologies: ['Virtualbox', 'bash'],
        date: '2023',
        imageUrl: '/images/GLPI.gif',
        details: ['Mise en place environnement web complet', "Compréhension d'un serveur Linux"],
      },
    ],
  },
])

// Projets filtrés (plus de recherche)
const filteredProjects = computed(() => {
  const currentCategoryProjects =
    projectCategories.value.find((cat) => cat.id === activeCategory.value)?.projects || []
  return currentCategoryProjects
})

// Changement de catégorie
const changeCategory = (categoryId: string) => {
  activeCategory.value = categoryId
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

// Fonction pour télécharger le tableau de compétences E5
const downloadE5Summary = () => {
  // Remplacez ce chemin par le bon chemin vers votre fichier PDF
  const pdfUrl = '/pdfs/E5_tableauSynthèse.pdf'
  window.open(pdfUrl, '_blank')
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

    <!-- Projets E6 - Mise en avant spéciale -->
    <div v-if="activeCategory === 'e6'" class="featured-projects">
      <div class="featured-grid">
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="featured-project-card"
          @click="openProjectDetails(project)"
        >
          <div class="featured-image">
            <img :src="project.imageUrl" :alt="project.title" loading="lazy" />
            <div class="featured-badge">Projet E6</div>
            <div class="featured-overlay">
              <span class="view-details">
                <i class="fas fa-eye"></i>
                Découvrir le projet
              </span>
            </div>
          </div>

          <div class="featured-content">
            <div class="featured-header">
              <h3>{{ project.title }}</h3>
              <span class="featured-date">{{ project.date }}</span>
            </div>
            <p class="featured-description">{{ project.description }}</p>

            <div class="featured-technologies">
              <span v-for="tech in project.technologies" :key="tech" class="featured-tech-tag">
                {{ tech }}
              </span>
            </div>

            <button class="featured-cta" @click.stop="openPdf(project.pdfUrl)">
              <i class="fas fa-file-pdf"></i>
              Voir le projet complet
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Projets E5 - Grille normale -->
    <div v-else class="projects-grid">
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
    </div>

    <!-- Bouton de téléchargement pour E5 -->
    <div v-if="activeCategory === 'e5'" class="download-section">
      <div class="download-card">
        <div class="download-content">
          <div class="download-icon">
            <i class="fas fa-file-pdf"></i>
          </div>
          <div class="download-info">
            <h3>Tableau de Compétences E5</h3>
            <p>
              Consultez le tableau récapitulatif complet de tous les projets réalisés pour l'épreuve
              E5 et plus...
            </p>
          </div>
          <button class="download-btn" @click="downloadE5Summary">
            <i class="fas fa-eye"></i>
            Consulter
          </button>
        </div>
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

/* Projets E5 mis en avant */
.featured-projects {
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
}

.featured-grid {
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
}

.featured-project-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease;
  cursor: pointer;
  width: 450px;
  max-width: 100%;
  position: relative;
}

.featured-project-card:hover {
  transform: translateY(-15px);
  box-shadow: 0 20px 50px rgba(52, 152, 219, 0.2);
}

.featured-image {
  height: 280px;
  position: relative;
  overflow: hidden;
}

.featured-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.featured-project-card:hover .featured-image img {
  transform: scale(1.1);
}

.featured-badge {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  padding: 0.5rem 1.2rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  z-index: 2;
  box-shadow: 0 4px 15px rgba(52, 152, 219, 0.3);
}

.featured-overlay {
  position: absolute;
  inset: 0;
  background: rgba(44, 62, 80, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.featured-project-card:hover .featured-overlay {
  opacity: 1;
}

.view-details {
  color: white;
  background: var(--primary-color);
  padding: 1rem 2rem;
  border-radius: var(--border-radius);
  font-weight: 600;
  transform: translateY(20px);
  transition: transform 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.featured-project-card:hover .view-details {
  transform: translateY(0);
}

.featured-content {
  padding: 2.5rem;
}

.featured-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}

.featured-content h3 {
  color: var(--primary-color);
  font-size: 1.8rem;
  margin: 0;
}

.featured-date {
  color: var(--text-color);
  opacity: 0.7;
  font-weight: 500;
  background: rgba(52, 152, 219, 0.1);
  padding: 0.3rem 1rem;
  border-radius: 15px;
  font-size: 0.9rem;
}

.featured-description {
  color: var(--text-color);
  line-height: 1.7;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.featured-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 2.5rem;
}

.featured-tech-tag {
  padding: 0.5rem 1.2rem;
  background: rgba(52, 152, 219, 0.1);
  color: var(--primary-color);
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.featured-tech-tag:hover {
  background: var(--primary-color);
  color: white;
  transform: translateY(-2px);
}

.featured-cta {
  width: 100%;
  padding: 1.2rem;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  border: none;
  border-radius: var(--border-radius);
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
}

.featured-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(52, 152, 219, 0.3);
}

/* Grille de projets normale pour E4 */
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
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
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

/* Section de téléchargement E4 */
.download-section {
  margin-top: 3rem;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}

.download-card {
  background: linear-gradient(135deg, rgba(52, 152, 219, 0.1) 0%, rgba(44, 62, 80, 0.1) 100%);
  border-radius: 15px;
  padding: 2rem;
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
}

.download-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.download-content {
  display: flex;
  align-items: center;
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.download-icon {
  width: 80px;
  height: 80px;
  background: #dc3545;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  flex-shrink: 0;
}

.download-info {
  flex: 1;
}

.download-info h3 {
  color: var(--primary-color);
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.download-info p {
  color: var(--text-color);
  line-height: 1.6;
}

.download-btn {
  padding: 1rem 2rem;
  background: #dc3545;
  color: white;
  border: none;
  border-radius: var(--border-radius);
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  flex-shrink: 0;
}

.download-btn:hover {
  background: #c82333;
  transform: translateY(-2px);
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

  .featured-grid {
    flex-direction: column;
    align-items: center;
  }

  .featured-project-card {
    width: 100%;
    max-width: 500px;
  }

  .category-tabs {
    flex-direction: column;
    width: 100%;
    gap: 0.5rem;
  }

  .download-content {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
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

  .featured-grid {
    justify-content: center;
  }

  .featured-project-card {
    width: 400px;
  }

  .project-modal {
    width: 90%;
  }
}
</style>
