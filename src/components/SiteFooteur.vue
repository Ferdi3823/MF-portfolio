<script setup lang="ts">
// Renommé en SiteFooter pour respecter la règle vue/multi-word-component-names
const currentYear = new Date().getFullYear()

// Vous pouvez personnaliser ces liens selon vos besoins
const socialLinks = [
  { name: 'GitHub', icon: 'fa-brands fa-github', url: 'https://github.com/votre-username' },
  { name: 'LinkedIn', icon: 'fa-brands fa-linkedin', url: 'https://linkedin.com/in/votre-profil' },
  { name: 'Twitter', icon: 'fa-brands fa-twitter', url: 'https://twitter.com/votre-username' },
]
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
        </ul>
      </div>

      <div class="footer-section">
        <h3>Contact</h3>
        <ul class="footer-links">
          <li><a href="mailto:votre-email@example.com">ferdi3823@gmail.com</a></li>
          <li><span>Toulouse, France</span></li>
        </ul>
      </div>

      <div class="footer-section">
        <h3>Réseaux sociaux</h3>
        <div class="social-links">
          <a
            v-for="link in socialLinks"
            :key="link.name"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            :title="link.name"
          >
            <i :class="link.icon"></i>
          </a>
        </div>
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
  width: 100%; /* Assure que le footer prend toute la largeur */
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

.social-links {
  display: flex;
  gap: 1rem;
}

.social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  color: var(--primary-color);
  font-size: 1.2rem;
  transition: var(--transition);
  box-shadow: var(--shadow-sm);
}

.social-links a:hover {
  transform: translateY(-5px);
  background: var(--primary-color);
  color: white;
  box-shadow: var(--shadow-md);
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
