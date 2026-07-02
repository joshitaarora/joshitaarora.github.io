export const research = [
  {
    title: "A Linear Operator Approach to Noise Propagation in Neural Networks",
    tag: "Master's Thesis",
    description:
      'Developed and validated a linear operator framework to analytically characterize noise propagation in piecewise linear neural networks, deriving closed-form second moments under Gaussian perturbations via convex polytope partitions of input space. Extended the framework to attention mechanisms by characterizing attention regions as convex polyhedra in score space, enabling principled robustness analysis and uncertainty propagation for transformers.',
    links: [
      { label: 'Paper', url: 'https://drive.google.com/file/d/1Z9bf-G-zLZBbGRViG5qwyY14o3cWJ2Qg/view' },
      {
        label: 'Code',
        url: 'https://zenodo.org/records/18904962?token=eyJhbGciOiJIUzUxMiJ9.eyJpZCI6IjA3MTcyYzFmLTFhZDgtNGVlNy04OGE2LTI5ZWRhYzVlMTllMyIsImRhdGEiOnt9LCJyYW5kb20iOiI1NWRiYjk4NWMwZjBiZTgzOGNjNzA5MzkxYjI5OGQyOCJ9.6dAgAk5p_HEozhdnVHDW2GLVh1BBXhUGrSJOBj7W_XmXZ-WWNG7ntgDiEzzL_Y8w1mGZo0dvFi6RCYq5q0ZDFQ',
      },
    ],
  },
  {
    title: 'Reinforcement Learning Environment for Piecewise Linear Attention Analysis (PLUMax)',
    tag: 'Research',
    description:
      'Designed a custom RL-style research environment to study and optimize piecewise linear approximations of transformer attention. Frames model development as a multi-objective task balancing language modeling quality with analytically tractable uncertainty propagation — the reward couples perplexity preservation with covariance prediction accuracy between analytical affine estimates and Monte Carlo simulation.',
    links: [],
  },
  {
    title: 'The Thinker: Syntax-Aware Knowledge Bases for Semantic Code Search',
    tag: 'Research',
    description:
      'Proposed a syntax-aware rethinking of knowledge base construction for semantic code search using Abstract Syntax Trees to preserve structural coherence. Demonstrated measurable improvements over heuristic baselines — including doubling BLEU scores and reducing edit rates — applied to the CodeSearchNet dataset.',
    links: [{ label: 'GitHub', url: 'https://github.com/joshitaarora/The-Thinker' }],
  },
  {
    title: 'Revisiting Self-Organizing Maps: Flexible Topologies and Interpretability',
    tag: 'Research',
    description:
      'Re-examined Self-Organizing Maps through alternative lattice topologies, experimentally exploring how geometric structure influences convergence behavior and quantization error across benchmark and scientific datasets, including Dark Energy Survey (DES Y6) data. Released as an open-source PyPI package to support reproducible clustering research.',
    links: [{ label: 'PyPI: scikit-learn-som', url: 'https://pypi.org/project/scikit-learn-som/' }],
  },
  {
    title: 'Astrophysical Image Classification (Euclid Telescope)',
    tag: 'Research',
    description:
      'Designed and owned an end-to-end deep learning pipeline for classifying astronomical objects (galaxies, stars, clusters) from Euclid telescope imagery. Evaluated ConvNeXT, DenseNet, ResNet, DeiT, and EfficientNet architectures, achieving 96% accuracy through targeted data augmentation and error-driven analysis of misclassified samples. Presented the work to the Euclid technical team.',
    links: [],
  },
  {
    title: 'Intersubjectivity and Structural Models of AI',
    tag: 'Research',
    description:
      'Investigating structural models of intersubjectivity in artificial systems, formalizing socially embedded cognition and analyzing second-person interaction constraints in AI-mediated environments.',
    links: [{ label: 'Paper', url: 'https://drive.google.com/file/d/1CHalXHG6nP2GrFjGwqh06omZmRJqEgOr/view' }],
  },
];

export const publications = [
  {
    citation: 'Arora, J., Rangarajan, A., Banerjee, A. — "A Linear Operator Framework for Noise Propagation in Neural Networks." Based on Master\'s thesis.',
    url: 'https://drive.google.com/file/d/1Z9bf-G-zLZBbGRViG5qwyY14o3cWJ2Qg/view',
  },
  {
    citation: 'Arora, J., Abbasi, D., Rangarajan, A. — "Intersubjectivity and Structural Models of AI Interaction." Planned manuscript following thesis completion.',
    url: 'https://drive.google.com/file/d/1CHalXHG6nP2GrFjGwqh06omZmRJqEgOr/view',
  },
];
