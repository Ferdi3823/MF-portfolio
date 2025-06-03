<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <nav class="navbar">
    <div class="nav-container">
      <router-link to="/" class="logo-container">
        <img src="/images/logo-portfolio.png" alt="Logo" class="logo" />
      </router-link>

      <button class="menu-button" @click="toggleMenu" aria-label="Menu">
        <span :class="['menu-icon', { open: isMenuOpen }]"></span>
      </button>

      <div :class="['nav-links', { open: isMenuOpen }]">
        <router-link to="/" class="nav-link" @click="isMenuOpen = false"> Accueil </router-link>
        <router-link to="/about" class="nav-link" @click="isMenuOpen = false">
          À propos
        </router-link>
        <router-link to="/projects" class="nav-link" @click="isMenuOpen = false">
          Projets
        </router-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.logo-container {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.logo {
  height: 60px;
  border-radius: 50%;
  transition: var(--transition);
  border: 2px solid transparent;
  box-shadow: var(--shadow-sm);
}

.logo:hover {
  transform: scale(1.05);
  border-color: var(--primary-color); /* Optionnel : effet de bordure au survol */
}

/* Pour le responsive */
@media (max-width: 768px) {
  .logo {
    height: 50px; /* Légèrement plus petit sur mobile */
  }
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--navbar-height);
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  box-shadow: var(--shadow-sm);
  z-index: 1000;
}

.nav-container {
  max-width: var(--max-width);
  height: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-links {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  color: var(--text-color);
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  transition: var(--transition);
}

.nav-link:hover,
.router-link-active {
  color: var(--primary-color);
  background: rgba(52, 152, 219, 0.1);
}

.menu-button {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.menu-icon {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text-color);
  position: relative;
  transition: var(--transition);
}

.menu-icon::before,
.menu-icon::after {
  content: '';
  position: absolute;
  width: 24px;
  height: 2px;
  background: var(--text-color);
  transition: var(--transition);
}

.menu-icon::before {
  top: -8px;
}
.menu-icon::after {
  bottom: -8px;
}

.menu-icon.open {
  background: transparent;
}

.menu-icon.open::before {
  transform: rotate(45deg);
  top: 0;
}

.menu-icon.open::after {
  transform: rotate(-45deg);
  bottom: 0;
}

@media (max-width: 768px) {
  .menu-button {
    display: block;
  }

  .nav-links {
    position: fixed;
    top: var(--navbar-height);
    left: 0;
    width: 100%;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    padding: 1rem;
    gap: 1rem;
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: var(--transition);
  }

  .nav-links.open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
    box-shadow: var(--shadow-md);
  }

  .nav-link {
    width: 100%;
    text-align: center;
    padding: 1rem;
  }
}
</style>
