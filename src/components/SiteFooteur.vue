<script setup lang="ts">
// Renommé en SiteFooter pour respecter la règle vue/multi-word-component-names
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3>Monnan Ferdinand</h3>
        <p>
          Développeur Web passionné par la création d'applications web innovantes et performantes.
        </p>
      </div>

      <div class="footer-section">
        <h3>Navigation</h3>
        <ul class="footer-links">
          <li><router-link to="/">Accueil</router-link></li>
          <li><router-link to="/about">À propos</router-link></li>
          <li><router-link to="/projects">Projets</router-link></li>
          <li><router-link to="/veille">Ma Veille</router-link></li>
        </ul>
      </div>

      <div class="footer-section">
        <h3>Contact</h3>
        <ul class="footer-links">
          <li><a href="mailto:ferdi3823@gmail.com">ferdi3823@gmail.com</a></li>
          <li><span>Toulouse, France</span></li>
        </ul>
      </div>

      <div class="footer-section">
        <h3>Compétences clés</h3>
        <ul class="footer-links">
          <li><span>Vue.js & TypeScript</span></li>
          <li><span>Node.js & Express</span></li>
          <li><span>Bases de données</span></li>
          <li><span>Développement web</span></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; {{ currentYear }} Monnan Ferdinand. Tous droits réservés.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: linear-gradient(135deg, rgba(52, 152, 219, 0.1) 0%, rgba(44, 62, 80, 0.1) 100%);
  padding: 3rem 2rem 1rem;
  margin-top: 4rem;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  width: 100%;
}

.footer-content {
  max-width: var(--max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.footer-section h3 {
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
}

.footer-section h3::after {
  content: '';
  position: absolute;
  width: 50%;
  height: 2px;
  background: var(--primary-color);
  bottom: -0.5rem;
  left: 0;
  border-radius: 2px;
}

.footer-section p {
  color: var(--text-color);
  line-height: 1.6;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.8rem;
}

.footer-links a,
.footer-links span {
  color: var(--text-color);
  text-decoration: none;
  transition: var(--transition);
  display: inline-block;
}

.footer-links a:hover {
  color: var(--primary-color);
  transform: translateX(5px);
}

.footer-bottom {
  max-width: var(--max-width);
  margin: 2rem auto 0;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  text-align: center;
  color: var(--text-color);
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
  }

  .footer {
    padding: 2rem 1rem 1rem;
  }
}
</style>
