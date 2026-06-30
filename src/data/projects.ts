export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  image: string;
  date: string;
  desc: string;
  tech?: string[];
  featured?: boolean;
}

const data: Project[] = [
  {
    title: 'UOS Assistant',
    subtitle: 'AI Inbound Calling Agent',
    image: '/images/projects/uos-assistant.png',
    date: '2025-01-01',
    desc: 'Architected and led a four-person team delivering a voice-driven inbound calling agent. Processes calls through Google STT → FastAPI → RAG pipeline (OpenAI embeddings + pgvector) → GPT-4o Mini → Google TTS, with natural Urdu-language intent classification at production scale.',
    tech: ['Python', 'FastAPI', 'OpenAI', 'pgvector', 'PostgreSQL', 'Google STT/TTS'],
    featured: true,
  },
  {
    title: 'Wavr',
    subtitle: 'Real-Time Chat Application',
    image: '/images/projects/wavr.png',
    date: '2024-06-01',
    desc: 'Deployed a production real-time messaging app on a MERN stack with Firebase Authentication for JWT-based identity and Socket.io for sub-second message delivery, achieving zero-polling live presence tracking across concurrent users.',
    tech: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Firebase'],
    featured: true,
  },
  {
    title: 'DeepFake Detection System',
    subtitle: 'Computer Vision · 95%+ Accuracy',
    image: '/images/projects/deepfake.png',
    date: '2024-03-01',
    desc: 'Achieved 95%+ face classification accuracy on a binary real/fake dataset by fine-tuning XceptionNet (CNN) on augmented training data. Transfer learning reduced training time by 60% versus training from scratch.',
    tech: ['Python', 'TensorFlow', 'XceptionNet', 'CNN', 'Transfer Learning'],
    featured: true,
  },
  {
    title: 'Uber Data Analytics Pipeline',
    subtitle: 'End-to-End Data Engineering on GCP',
    image: '/images/projects/uber-pipeline.png',
    date: '2025-07-01',
    desc: 'Processed and modelled an Uber-scale trip dataset end-to-end — raw ingestion → dimensional schema design → orchestrated ETL via Mage → analytical dashboard deployed on GCP — reducing query time on aggregated data by 40% over flat-file analysis.',
    tech: ['Python', 'GCP', 'BigQuery', 'Mage', 'Tableau', 'Pandas'],
  },
];

export default data;
