// Everything personal on the site comes from here.

type L = { zh: string; en: string };

export const profile = {
  name: 'Clement Wang',
  github: 'https://github.com/clement10601',
  email: '', // leave empty to hide
  links: [
    { label: 'GitHub', href: 'https://github.com/clement10601' },
    { label: 'FEZone', href: 'https://fezone.tw' },
  ],
  zh: {
    tagline: '生成式 AI 工程師｜邊緣 AI 與電腦視覺',
    about: [
      '8 年 AI 與軟體工程經驗，專注於把模型做成能在真實環境中穩定運作的產品——從資料、訓練、推論優化，到嵌入式部署、串流管線與雲端服務。',
      '過去幾年在邊緣 AI 公司帶領團隊開發電腦視覺產品，包含車牌辨識、人臉辨識與 20 路以上的即時影像推論引擎，橫跨六家 AI 晶片平台，並於國際展會展出。現在在金融業擔任生成式 AI 工程師，以自架 LLM 與多模態模型建置內部資料平台、影音轉錄摘要系統，以及串接 AI 應用的 API／MCP 中介層。',
      '目前關注的方向：自動化影片剪輯與摘要、自架多媒體生成，以及 AI 輔助視覺特效。',
    ],
  },
  en: {
    tagline: 'Generative AI Engineer | Edge AI & Computer Vision',
    about: [
      'AI engineer with 8 years of experience turning models into products that hold up in production — from data and training through inference optimization, embedded deployment, streaming pipelines and cloud services.',
      'At an edge AI company I led the team building computer vision products: license plate recognition, face recognition, and a real-time inference engine handling 20+ video streams, across six AI chip platforms and shown at international trade fairs. I now work as a Generative AI Engineer in financial services, building internal data platforms, transcription and summarization systems, and an API/MCP middleware layer on self-hosted LLMs and multimodal models.',
      'Current interests: automated video editing and summarization, self-hosted media generation, and AI-assisted visual effects.',
    ],
  },
};

export const highlights: { value: string; label: L }[] = [
  { value: '8+', label: { zh: '年 AI 與軟體工程經驗', en: 'years in AI & software engineering' } },
  { value: '20+', label: { zh: '路即時影像推論', en: 'real-time video streams per engine' } },
  { value: '6', label: { zh: '家 AI 晶片平台部署經驗', en: 'AI chip platforms shipped on' } },
  { value: '10–15 FPS', label: { zh: '128 MB RAM 上三模型並行', en: '3 models in parallel on 128 MB RAM' } },
];

export type Job = {
  company: L;
  role: L;
  period: string;
  points: L[];
};

export const experience: Job[] = [
  {
    company: { zh: '資產管理業', en: 'Asset management firm' },
    role: { zh: '生成式 AI 工程師', en: 'Generative AI Engineer' },
    period: '2025.10 – ',
    points: [
      { zh: '建置內部資料平台，整合分散的內外部資訊來源，作為 AI 應用的資料基礎。', en: 'Build internal data platforms that consolidate internal and external sources as the data foundation for AI applications.' },
      { zh: '開發影音轉文字、摘要與分析平台，將影音內容轉為可搜尋、可再利用的資訊。', en: 'Develop audio/video transcription, summarization and analysis platforms that turn audio and video into searchable, reusable information.' },
      { zh: '開發市場報價與情報資料的分析平台。', en: 'Develop analysis platforms for market quotations and intelligence data.' },
      { zh: '設計 API／MCP 中介平台，讓 AI 應用以統一介面存取內部系統，並開發 AI 輔助業務應用。', en: 'Design an API/MCP middleware platform giving AI applications a single interface to internal systems, and build AI-assisted business tools on top of it.' },
    ],
  },
  {
    company: { zh: '邊緣 AI 公司', en: 'Edge AI company' },
    role: { zh: 'AI 工程師／團隊主管', en: 'AI Engineer / Team Lead' },
    period: '2021.01 – 2025.10',
    points: [
      { zh: '帶領 AI 團隊，負責電腦視覺、邊緣 AI 與推論系統的技術方向、專案交付與人員管理。', en: 'Led the AI team, owning technical direction, delivery and people management across computer vision, edge AI and inference systems.' },
      { zh: '主導多路車牌辨識系統開發，落地於智慧執法與智慧停車場域。', en: 'Led development of a multi-stream license plate recognition system deployed for smart law enforcement and smart parking.' },
      { zh: '設計兩代多路推論引擎：第一代支援 16 路、多模型並行並於兩處場域上線；第二代擴展至 20+ 路並提供即時結果渲染與輸出。', en: 'Architected two generations of multi-stream inference engine: 16 channels with concurrent models in production at two sites, then 20+ channels with real-time rendering and output.' },
      { zh: '負責人臉辨識模型的國際標準評測與準確率改善。', en: 'Owned face recognition benchmarking against international evaluations and the resulting accuracy work.' },
      { zh: '在僅 128 MB RAM 的低功耗 NPU 平台上，讓人臉偵測、辨識與追蹤三模型並行達 10–15 FPS。', en: 'Ran face detection, recognition and tracking concurrently at 10–15 FPS on a low-power NPU platform with only 128 MB RAM.' },
      { zh: '在六家晶片廠的平台上完成邊緣 AI 移植與優化，並於國際展會展出。', en: 'Ported and optimized edge AI across six chip vendors’ platforms, with demos at international trade fairs.' },
    ],
  },
  {
    company: { zh: '電信業', en: 'Telecom operator' },
    role: { zh: 'AI 工程師', en: 'AI Engineer' },
    period: '2018.01 – 2020.11',
    points: [
      { zh: '為雲端儲存服務開發文件與影像理解功能，包含 OCR、影像分類與智慧搜尋。', en: 'Built document and image understanding for a cloud storage service, including OCR, image classification and intelligent search.' },
      { zh: '以物件偵測開發名片與文字區域偵測，並以輕量分類模型判斷影像是否需要 OCR 處理。', en: 'Developed business-card and text-region detection, plus a lightweight classifier that decides which images need OCR.' },
      { zh: '結合 NER（NLTK／CKIP）與自訂語言規則擷取文件關鍵字，並以 TF-IDF 建立檔案索引與搜尋。', en: 'Extracted document keywords with NER (NLTK/CKIP) and custom linguistic rules, and built TF-IDF-based file indexing and search.' },
    ],
  },
];

export const skills: { group: L; items: string }[] = [
  { group: { zh: '程式語言', en: 'Languages' }, items: 'C/C++, Python, Git' },
  { group: { zh: '作業系統／嵌入式', en: 'OS / Embedded' }, items: 'Linux, Ubuntu, Yocto, RTOS, FreeBSD' },
  { group: { zh: 'AI 框架', en: 'AI frameworks' }, items: 'PyTorch, TensorFlow, ONNX' },
  { group: { zh: '推論', en: 'Inference' }, items: 'TensorFlow Lite, NCNN, ONNX Runtime, OpenCV DNN' },
  { group: { zh: 'GPU', en: 'GPU' }, items: 'NVIDIA CUDA, TensorRT, Triton Inference Server' },
  { group: { zh: 'NPU', en: 'NPU' }, items: 'MediaTek NeuroPilot, Ambarella CVflow, Qualcomm SNPE/QNN, Realtek Acuity, Rockchip RKNN' },
  { group: { zh: '多媒體', en: 'Multimedia' }, items: 'GStreamer, DeepStream, FFmpeg, libav' },
  { group: { zh: '基礎設施', en: 'Infrastructure' }, items: 'Kubernetes, Docker, AMQP, GCP, AWS' },
  { group: { zh: 'Web／生成式 AI', en: 'Web / GenAI' }, items: 'Vue.js, FastAPI, LLMs, multimodal models, RAG, vector DB, MCP' },
];

export type Project = {
  name: L;
  href?: string;
  zh: string;
  en: string;
  tags?: string[];
};

export const projects: Project[] = [
  {
    name: { zh: '多路影像推論引擎', en: 'Multi-stream inference engine' },
    zh: '可同時處理 20 路以上影像、多模型並行的即時辨識引擎，歷經兩代架構設計，已於實際場域上線。',
    en: 'Real-time recognition engine running multiple models across 20+ concurrent video streams; two generations of architecture, deployed in the field.',
    tags: ['GStreamer', 'DeepStream', 'TensorRT'],
  },
  {
    name: { zh: '車牌辨識（LPR）', en: 'License plate recognition' },
    zh: '多路車牌辨識系統，含無柵欄車道進出辨識，落地於智慧執法與智慧停車。',
    en: 'Multi-stream LPR with barrier-free lane entry/exit recognition, used for smart law enforcement and smart parking.',
    tags: ['Computer Vision', 'OCR'],
  },
  {
    name: { zh: '人臉辨識與超輕量邊緣部署', en: 'Face recognition at the edge' },
    zh: '人臉辨識模型開發與評測；在 128 MB RAM 裝置上讓偵測、辨識、追蹤三模型並行達 10–15 FPS。',
    en: 'Face recognition model development and evaluation; detection, recognition and tracking running concurrently at 10–15 FPS on a 128 MB RAM device.',
    tags: ['Edge AI', 'NPU'],
  },
  {
    name: { zh: '企業內部生成式 AI 平台', en: 'In-house generative AI platform' },
    zh: '以自架 LLM 與多模態模型（Llama、GPT-OSS、Phi-4 Multimodal、Florence-2）支撐影音轉錄、摘要、資訊分析與 AI 輔助業務流程，並透過 MCP 中介層串接內部系統。',
    en: 'Transcription, summarization, analysis and AI-assisted workflows on self-hosted LLMs and multimodal models (Llama, GPT-OSS, Phi-4 Multimodal, Florence-2), connected to internal systems through an MCP middleware layer.',
    tags: ['LLM', 'RAG', 'MCP'],
  },
  {
    name: { zh: 'FEZone', en: 'FEZone' },
    href: 'https://fezone.tw',
    zh: '個人品牌網站，內容涵蓋軟體開發、遊戲與財經。',
    en: 'Personal brand site covering software development, games and finance.',
  },
];

export const education: { school: L; degree: L; period?: string }[] = [
  {
    school: { zh: '國立交通大學', en: 'National Chiao Tung University' },
    degree: { zh: '資訊科學與工程研究所 碩士', en: 'M.S., Computer Science and Engineering' },
  },
  {
    school: { zh: '國立中央大學', en: 'National Central University' },
    degree: { zh: '資訊管理學系 學士', en: 'B.S., Information Management' },
  },
];

export const languages: L[] = [
  { zh: '英文：工作溝通、技術文件閱讀與撰寫', en: 'English: working proficiency, technical reading and writing' },
  { zh: '日文：基礎', en: 'Japanese: basic' },
  { zh: 'ISO 9001 導入、ISO 27001 實務經驗', en: 'ISO 9001 implementation, ISO 27001 practice' },
];
