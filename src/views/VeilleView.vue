<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface VeilleSource {
  name: string
  description: string
  type: 'documentation' | 'youtube' | 'aggregator' | 'community'
  url: string
  icon: string
  category: 'apprentissage' | 'personnelle'
  color: string
}

const veilleVisible = ref(false)

const veilleSources = ref<VeilleSource[]>([
  {
    name: 'Documentation Vue.js',
    description:
      'Documentation officielle de Vue.js pour rester à jour sur les dernières fonctionnalités',
    type: 'documentation',
    url: 'https://vuejs.org/guide/',
    icon: 'devicon-vuejs-plain colored',
    category: 'apprentissage',
    color: '#42b883',
  },
  {
    name: 'Documentation TypeScript',
    description: 'Guide officiel TypeScript pour maîtriser le typage statique',
    type: 'documentation',
    url: 'https://www.typescriptlang.org/docs/',
    icon: 'devicon-typescript-plain colored',
    category: 'apprentissage',
    color: '#3178c6',
  },
  {
    name: 'Faisons le point',
    description: 'Chaîne YouTube de vulgarisation tech et programmation',
    type: 'youtube',
    url: 'https://www.youtube.com/@FaisonsLePoint',
    icon: 'fab fa-youtube',
    category: 'apprentissage',
    color: '#ff0000',
  },
  {
    name: 'Feedly',
    description: 'Agrégateur centralisant articles tech et publications spécialisées',
    type: 'aggregator',
    url: 'https://feedly.com',
    icon: 'fas fa-newspaper',
    category: 'personnelle',
    color: '#2bb24c',
  },
  {
    name: 'Reddit Programming',
    description: 'Communautés Reddit pour discussions et actualités en programmation',
    type: 'community',
    url: 'https://www.reddit.com/r/programming/',
    icon: 'fab fa-reddit',
    category: 'personnelle',
    color: '#ff4500',
  },
])

const openSource = (url: string) => {
  window.open(url, '_blank')
}

onMounted(() => {
  setTimeout(() => {
    veilleVisible.value = true
  }, 300)
})
</script>

<template>
  <div class="veille-page">
    <!-- Section Hero -->
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="page-title">Ma Veille Informatique</h1>
        <p class="hero-description">
          Découvrez comment je me maintiens à jour dans le domaine du développement web et des
          nouvelles technologies
        </p>

        <div class="veille-stats">
          <div class="stat-card">
            <div class="stat-icon">📚</div>
            <div class="stat-content">
              <h3>Documentation</h3>
              <p>Sources officielles</p>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-icon">🎥</div>
            <div class="stat-content">
              <h3>Vidéos</h3>
              <p>Contenus éducatifs</p>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-icon">👥</div>
            <div class="stat-content">
              <h3>Communauté</h3>
              <p>Échanges et partages</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Méthode de veille -->
    <section class="method-section">
      <div class="method-container">
        <h2>Ma Méthode de Veille</h2>
        <div class="method-grid">
          <div class="method-card" :class="{ 'fade-in': veilleVisible }">
            <div class="method-icon">🎓</div>
            <h3>Veille d'Apprentissage</h3>
            <p>
              Je consulte régulièrement la documentation officielle des langages et frameworks que
              j'utilise. Cette approche me permet de rester informé des dernières fonctionnalités et
              bonnes pratiques.
            </p>
            <ul class="method-features">
              <li>Documentation officielle</li>
              <li>Guides et tutoriels</li>
              <li>Contenus vidéo éducatifs</li>
            </ul>
          </div>

          <div
            class="method-card"
            :class="{ 'fade-in': veilleVisible }"
            style="animation-delay: 0.2s"
          >
            <div class="method-icon">👤</div>
            <h3>Veille Personnelle</h3>
            <p>
              J'utilise des agrégateurs comme Feedly pour centraliser les articles et actualités
              tech. Les communautés Reddit complètent cette veille avec des discussions
              enrichissantes.
            </p>
            <ul class="method-features">
              <li>Agrégation d'articles</li>
              <li>Discussions communautaires</li>
              <li>Actualités technologiques</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Sources de veille -->
    <section class="sources-section">
      <div class="sources-container">
        <h2>Mes Sources de Veille</h2>

        <div class="sources-grid">
          <div
            v-for="(source, index) in veilleSources"
            :key="source.name"
            class="source-card"
            :style="{ animationDelay: `${index * 0.1}s` }"
            @click="openSource(source.url)"
          >
            <div class="source-header">
              <div
                class="source-icon"
                :style="{
                  background: `linear-gradient(135deg, ${source.color}, ${source.color}aa)`,
                }"
              >
                <i :class="source.icon"></i>
              </div>
              <div class="source-category">
                {{ source.category === 'apprentissage' ? 'Apprentissage' : 'Personnelle' }}
              </div>
            </div>

            <div class="source-content">
              <h3>{{ source.name }}</h3>
              <p>{{ source.description }}</p>
            </div>

            <div class="source-footer">
              <span class="source-type">{{ source.type }}</span>
              <div class="source-link">→</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Bénéfices -->
    <section class="benefits-section">
      <div class="benefits-container">
        <h2>Pourquoi cette Veille ?</h2>
        <div class="benefits-grid">
          <div class="benefit-card">
            <div class="benefit-icon">📈</div>
            <h3>Montée en Compétences</h3>
            <p>
              Rester à jour avec les dernières technologies et bonnes pratiques du développement web
            </p>
          </div>

          <div class="benefit-card">
            <div class="benefit-icon">💡</div>
            <h3>Innovation</h3>
            <p>Découvrir de nouveaux outils et approches pour améliorer mes projets</p>
          </div>

          <div class="benefit-card">
            <div class="benefit-icon">🌐</div>
            <h3>Réseau</h3>
            <p>
              Participer aux discussions de la communauté et échanger avec d'autres développeurs
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.veille-page {
  width: 100%;
  display: flex;
  flex-direction: column;
}

/* Hero Section */
.hero-section {
  width: 100%;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, rgba(52, 152, 219, 0.1) 0%, rgba(44, 62, 80, 0.1) 100%);
  text-align: center;
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
}

.page-title {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero-description {
  font-size: 1.2rem;
  color: var(--text-color);
  margin-bottom: 3rem;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.veille-stats {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.stat-card {
  background: white;
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-sm);
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s ease;
  min-width: 200px;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.stat-icon {
  width: 60px;
  height: 60px;
  background: var(--primary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  flex-shrink: 0;
}

.stat-content h3 {
  color: var(--primary-color);
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.stat-content p {
  color: var(--text-color);
  font-size: 0.9rem;
  margin: 0;
}

/* Method Section */
.method-section {
  padding: 4rem 2rem;
  width: 100%;
}

.method-container {
  max-width: 1200px;
  margin: 0 auto;
}

.method-container h2 {
  text-align: center;
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 3rem;
}

.method-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 3rem;
}

.method-card {
  background: white;
  padding: 2.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(30px);
}

.method-card.fade-in {
  animation: fadeInUp 0.6s ease forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.method-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-lg);
}

.method-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.method-card h3 {
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.method-card p {
  color: var(--text-color);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.method-features {
  list-style: none;
  padding: 0;
}

.method-features li {
  color: var(--text-color);
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  position: relative;
  padding-left: 2rem;
}

.method-features li:before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--primary-color);
  font-weight: bold;
}

/* Sources Section */
.sources-section {
  padding: 4rem 2rem;
  background: linear-gradient(135deg, rgba(52, 152, 219, 0.05) 0%, rgba(44, 62, 80, 0.05) 100%);
  width: 100%;
}

.sources-container {
  max-width: 1400px;
  margin: 0 auto;
}

.sources-container h2 {
  text-align: center;
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 3rem;
}

.category-filters {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.8rem 1.5rem;
  background: white;
  border: 2px solid rgba(52, 152, 219, 0.2);
  border-radius: var(--border-radius);
  color: var(--text-color);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.filter-btn:hover {
  border-color: var(--primary-color);
  background: rgba(52, 152, 219, 0.1);
}

.filter-btn.active {
  background: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}

.sources-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.source-card {
  background: white;
  border-radius: var(--border-radius);
  padding: 2rem;
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
  cursor: pointer;
  border: 2px solid transparent;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.5s ease forwards;
}

.source-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
  border-color: var(--primary-color);
}

.source-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.source-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  box-shadow: var(--shadow-sm);
}

.source-category {
  background: rgba(52, 152, 219, 0.1);
  color: var(--primary-color);
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
}

.source-content h3 {
  color: var(--primary-color);
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
}

.source-content p {
  color: var(--text-color);
  line-height: 1.6;
  font-size: 0.95rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.source-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.source-type {
  color: var(--text-color);
  font-size: 0.8rem;
  text-transform: capitalize;
  opacity: 0.7;
}

.source-link {
  color: var(--primary-color);
  transition: transform 0.3s ease;
}

.source-card:hover .source-link {
  transform: scale(1.2);
}

/* Benefits Section */
.benefits-section {
  padding: 4rem 2rem;
  width: 100%;
}

.benefits-container {
  max-width: 1200px;
  margin: 0 auto;
}

.benefits-container h2 {
  text-align: center;
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 3rem;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.benefit-card {
  text-align: center;
  padding: 2rem;
  background: linear-gradient(145deg, white, rgba(52, 152, 219, 0.05));
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
}

.benefit-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.benefit-icon {
  width: 70px;
  height: 70px;
  background: var(--primary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.8rem;
  margin: 0 auto 1.5rem;
  transition: transform 0.3s ease;
}

.benefit-card:hover .benefit-icon {
  transform: scale(1.1);
}

.benefit-card h3 {
  color: var(--primary-color);
  font-size: 1.3rem;
  margin-bottom: 1rem;
}

.benefit-card p {
  color: var(--text-color);
  line-height: 1.6;
}

/* Media Queries */
@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .veille-stats {
    flex-direction: column;
    align-items: center;
  }

  .stat-card {
    min-width: auto;
    width: 100%;
    max-width: 300px;
  }

  .method-grid {
    grid-template-columns: 1fr;
  }

  .sources-grid {
    grid-template-columns: 1fr;
  }

  .benefits-grid {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .sources-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .benefits-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
