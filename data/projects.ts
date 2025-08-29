export type Project = {
  slug: string
  title: string
  description: string
  tags: string[]
  image?: string
  repo?: string
  demo?: string
}

const projects: Project[] = [
  {
    slug: 'ewallet',
    title: 'EWallet (Java Swing)',
    description: 'Login GUI, constructors, currency conversion. Team project with GitFlow + Trello.',
    tags: ['Java', 'Swing', 'GitHub'],
    repo: 'https://github.com/cheesecheeseCHEEESE/Ewallet-SENG210',
    image: 'https://images.unsplash.com/photo-1554224155-3a589877462f?w=1200&q=60'
  },
  {
    slug: 'smartmeal',
    title: 'SmartMeal AI',
    description: 'Java Swing app that generates recipes using OpenAI; UI polish + accessibility.',
    tags: ['Java', 'UI', 'AI'],
    repo: 'https://github.com/',
    image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=1200&q=60'
  },
  {
    slug: 'fraud-detection',
    title: 'Fraud Detection (Python)',
    description: 'Preprocessing + Decision Tree vs Linear Regression; CLI + plan for GUI.',
    tags: ['Python', 'ML', 'Scikit-Learn'],
    repo: 'https://github.com/',
    image: 'https://images.unsplash.com/photo-1551281044-8b59a0b3a88f?w=1200&q=60'
  },
]

export default projects
