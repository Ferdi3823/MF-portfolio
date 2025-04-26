<script setup lang="ts">
import type { Project } from '@/types/project'

defineProps<{
  project: Project
}>()

const emit = defineEmits<{
  (e: 'view-project', url: string): void
}>()

const handleViewProject = (url: string) => {
  emit('view-project', url)
}
</script>

<template>
  <div class="project-card">
    <div class="project-image">
      <img :src="project.imageUrl" :alt="project.title" />
      <div v-if="project.date" class="date-badge">{{ project.date }}</div>
    </div>
    <div class="project-content">
      <h3>{{ project.title }}</h3>
      <div class="project-details">
        <p class="description">{{ project.description }}</p>
        <div v-if="project.technologies && project.technologies.length" class="technologies">
          <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
            {{ tech }}
          </span>
        </div>
        <button @click="handleViewProject(project.pdfUrl)" class="pdf-button">
          Voir le projet
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  background: linear-gradient(145deg, #f8f9fa, #e9ecef);
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow:
    rgba(17, 12, 46, 0.05) 0px 48px 100px 0px,
    rgba(0, 0, 0, 0.1) 0px 10px 20px -10px;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.8);
}

.project-card:hover {
  transform: translateY(-10px);
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7));
  backdrop-filter: blur(10px);
  box-shadow:
    rgba(17, 12, 46, 0.1) 0px 48px 100px 0px,
    rgba(0, 0, 0, 0.15) 0px 10px 20px -10px;
}

.project-image {
  position: relative;
  width: 100%;
  height: 250px;
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
  background: rgba(52, 152, 219, 0.9);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  backdrop-filter: blur(5px);
  z-index: 1;
}

.project-content {
  padding: 2rem;
  position: relative;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(5px);
}

h3 {
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.project-details {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s ease;
}

.project-card:hover .project-details {
  opacity: 1;
  transform: translateY(0);
}

.description {
  color: var(--text-color);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-tag {
  background: rgba(52, 152, 219, 0.1);
  color: var(--primary-color);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  transition: all 0.3s ease;
}

.tech-tag:hover {
  background: var(--primary-color);
  color: white;
  transform: translateY(-2px);
}

.pdf-button {
  width: 100%;
  padding: 1rem;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: var(--border-radius);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.pdf-button:hover {
  background: var(--secondary-color);
  transform: translateY(-2px);
}

.project-image::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 50%;
  height: 100%;
  background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.3), transparent);
  transform: skewX(-25deg);
  transition: 0.5s;
}

.project-card:hover .project-image::after {
  left: 150%;
}

@media (max-width: 768px) {
  .project-card {
    max-width: 100%;
  }
}
</style>
