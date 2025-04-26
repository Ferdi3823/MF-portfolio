export interface Project {
  id: number
  title: string
  description: string
  pdfUrl: string
  technologies?: string[]
  date?: string
  imageUrl?: string // Ajout de la propriété imageUrl comme optionnelle
  details: string[]
}

export interface Experience {
  title: string
  company: string
  period: string
  description: string
  location: string
}

export interface Education {
  degree: string
  school: string
  year: string
  details: string
  location: string
}

export interface Skill {
  name: string
  level: 'Débutant' | 'Intermédiaire' | 'Avancé' | 'Expert'
  icon: string
  category: 'Frontend' | 'Backend' | 'Base de données' | 'Outils'
  description: string
}
