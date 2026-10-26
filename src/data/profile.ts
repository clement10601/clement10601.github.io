// Everything personal on the site comes from here.

type L = { zh: string; en: string };

export const profile = {
  name: 'Clement Wang',
  github: 'https://github.com/clement10601',
  email: 'clement10601@gmail.com', // leave empty to hide
  links: [
    { label: 'GitHub', href: 'https://github.com/clement10601' },
    { label: 'FEZone', href: 'https://fezone.tw' },
  ],
  zh: {
    tagline: '生成式 AI 工程師 · Edge AI · 電腦視覺',
    about: [
      '我是 AI 工程師，有 8 年軟體與人工智慧的實務經驗，涵蓋模型開發、訓練與推論部署、嵌入式系統整合、雲端與微服務架構、多媒體串流，以及生成式 AI。能獨立把 AI 產品從概念一路做到上線。',
      '過去幾年主要在做邊緣運算上的電腦視覺：車牌辨識、人臉辨識、多路影像推論引擎，跑過 Ambarella、MediaTek、Rockchip、Qualcomm、Realtek、SigmaStar 等平台。現在在投信做生成式 AI，打造內部資料平台、影音轉文字與摘要、以及 AI 應用的 API／MCP 中介層。',
      '使用 Linux 超過 10 年。最近感興趣的方向是自動化影片剪輯與摘要、自架多媒體生成，以及 AI 輔助的視覺特效。',
    ],
  },
  en: {
    tagline: 'Generative AI Engineer · Edge AI · Computer Vision',
    about: [
      'I am an AI engineer with 8 years of hands-on experience in software and artificial intelligence: model development, training and inference deployment, embedded system integration, cloud and microservice architecture, multimedia streaming, and generative AI. I can take an AI product from concept to deployment on my own.',
      'For several years I focused on computer vision at the edge — license plate recognition, face recognition and multi-stream inference engines on Ambarella, MediaTek, Rockchip, Qualcomm, Realtek and SigmaStar hardware. Today I work on generative AI at an asset management firm, building internal data platforms, audio/video transcription and summarization, and an API/MCP middleware layer for AI applications.',
      'I have used Linux for more than 10 years. Lately I am interested in automated video editing and summarization, self-hosted media generation, and AI-assisted visual effects.',
    ],
  },
};

export const highlights: { value: string; label: L }[] = [
  { value: '8+', label: { zh: '年 AI／軟體經驗', en: 'years in AI & software' } },
  { value: '20+', label: { zh: '路即時影像推論引擎', en: 'channel real-time inference engine' } },
  { value: '6', label: { zh: '種邊緣 AI 晶片平台', en: 'edge AI chip platforms' } },
  { value: '128 MB', label: { zh: 'RAM 上同時跑 3 個模型', en: 'RAM running 3 models at once' } },
];

export type Job = {
  company: L;
  role: L;
  period: string;
  points: L[];
};

export const experience: Job[] = [
  {
    company: { zh: '復華投信', en: 'Fuhwa Securities Investment Trust' },
    role: { zh: '生成式 AI 工程師', en: 'Generative AI Engineer' },
    period: '2025.10 – ',
    points: [
      { zh: '開發內部資料平台與資訊整合方案。', en: 'Build internal data platforms and information-integration solutions.' },
      { zh: '開發影音轉文字、摘要與分析平台。', en: 'Build audio/video-to-text, summarization and analysis platforms.' },
      { zh: '開發涵蓋市場報價與情報資料的第三方資訊分析平台。', en: 'Build third-party information analysis platforms for market quotations and intelligence data.' },
      { zh: '開發 AI 輔助業務應用，以及整合 AI 應用的 API／MCP 中介平台。', en: 'Build AI-assisted business applications and an API/MCP middleware platform for AI integration.' },
    ],
  },
  {
    company: { zh: 'Aiyang Technology', en: 'Aiyang Technology Co., Ltd.' },
    role: { zh: 'AI 工程師／團隊主管', en: 'AI Engineer / Team Lead' },
    period: '2021.01 – 2025.10',
    points: [
      { zh: '帶領電腦視覺、邊緣 AI、推論系統與 AI 產品整合的開發專案，並負責團隊管理。', en: 'Led AI projects and managed the team across computer vision, edge AI, inference systems and product integration.' },
      { zh: '開發車牌辨識系統（含專利方案與多路串流處理），並交付智慧執法、智慧停車解決方案。', en: 'Developed license plate recognition systems, including a patented solution and multi-stream processing; delivered smart law-enforcement and smart parking solutions.' },
      { zh: '打造第一代 16 路多模型辨識引擎（兩處場域上線）與第二代 20+ 路即時渲染輸出引擎。', en: 'Built a first-generation 16-channel multi-model recognition engine (deployed at two sites) and a second-generation 20+ channel engine with real-time rendering and output.' },
      { zh: '參與 NIST FRVT 1:1 與 1:N 人臉辨識評測，大幅提升 1:1 排名。', en: 'Ran NIST FRVT 1:1 and 1:N face-recognition evaluations and significantly improved the 1:1 ranking.' },
      { zh: '在 Realtek 0.8T、128 MB RAM 平台上優化超輕量人臉偵測／辨識、追蹤與手勢辨識，三個模型同時運行達 10–15 FPS。', en: 'Optimized ultra-lightweight face detection/recognition, tracking and gesture recognition on a Realtek 0.8T platform with 128 MB RAM — three models at once at 10–15 FPS.' },
      { zh: '跨六家晶片平台開發邊緣 AI 方案，於 CES、ISC West、Embedded World 展出。', en: 'Delivered edge AI solutions across six chip vendors, demonstrated at CES, ISC West and Embedded World.' },
    ],
  },
  {
    company: { zh: '中華電信', en: 'Chunghwa Telecom Co., Ltd.' },
    role: { zh: 'AI 工程師', en: 'AI Engineer' },
    period: '2018.01 – 2020.11',
    points: [
      { zh: '為雲端儲存開發文件／影像理解、OCR、影像分類與智慧搜尋功能。', en: 'Built document/image understanding, OCR, image classification and intelligent search for cloud storage.' },
      { zh: '以物件偵測開發名片偵測與文字區域偵測模組。', en: 'Developed business-card and text-region detection modules using object detection.' },
      { zh: '以 NER（NLTK／CKIP）與自訂語言規則做文件關鍵字擷取。', en: 'Built document keyword extraction with NER (NLTK/CKIP) and custom linguistic rules.' },
      { zh: '實作以 TF-IDF 為基礎的檔案索引與搜尋。', en: 'Researched and implemented TF-IDF-based file indexing and search.' },
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
    zh: '從第一代 16 路多模型到第二代 20+ 路、即時視覺化輸出的辨識引擎，設計與維護。',
    en: 'Designed and maintained recognition engines, from a 16-channel multi-model first generation to a 20+ channel second generation with real-time visualization.',
    tags: ['GStreamer', 'DeepStream', 'TensorRT'],
  },
  {
    name: { zh: '車牌辨識（LPR）', en: 'License plate recognition' },
    zh: '多路車牌辨識系統，含專利方案與無柵欄車道進出辨識，應用於智慧執法與智慧停車。',
    en: 'Multi-stream LPR with a patented solution and barrier-free lane entry/exit recognition, used for smart law enforcement and smart parking.',
    tags: ['Computer Vision', 'OCR'],
  },
  {
    name: { zh: '人臉辨識與超輕量邊緣部署', en: 'Face recognition at the edge' },
    zh: 'FaceMatch 開發與 NIST FRVT 評測；在 128 MB RAM 裝置上同時跑偵測、辨識、追蹤三模型達 10–15 FPS。',
    en: 'FaceMatch development and NIST FRVT evaluation; detection, recognition and tracking running together at 10–15 FPS on a 128 MB RAM device.',
    tags: ['Edge AI', 'NPU'],
  },
  {
    name: { zh: '企業內部生成式 AI 平台', en: 'In-house generative AI platform' },
    zh: '自架 LLM 與多模態模型（Llama、GPT-OSS、Phi-4 Multimodal、Florence-2），用於影音轉錄、摘要、資訊分析與業務流程。',
    en: 'Self-hosted LLMs and multimodal models (Llama, GPT-OSS, Phi-4 Multimodal, Florence-2) for transcription, summarization, analysis and business workflows.',
    tags: ['LLM', 'RAG', 'MCP'],
  },
  {
    name: { zh: 'FEZone', en: 'FEZone' },
    href: 'https://fezone.tw',
    zh: '軟體開發、遊戲與財經部落格的品牌網站。',
    en: 'Brand site for software development, games and a finance blog.',
  },
];

export const education: { school: L; degree: L; period: string }[] = [
  {
    school: { zh: '國立交通大學', en: 'National Chiao Tung University' },
    degree: { zh: '資訊科學與工程研究所 碩士', en: 'M.S., Computer Science and Engineering' },
    period: '2015 – 2017',
  },
  {
    school: { zh: '國立中央大學', en: 'National Central University' },
    degree: { zh: '資訊管理學系 學士', en: 'B.S., Information Management' },
    period: '2010 – 2015',
  },
];

export const languages: L[] = [
  { zh: '英文：TOEIC 785、全民英檢中級', en: 'English: TOEIC 785, GEPT Intermediate' },
  { zh: '日文：JLPT N5', en: 'Japanese: JLPT N5' },
  { zh: 'ISO 9001 導入、ISO 27001 實務經驗', en: 'ISO 9001 implementation, ISO 27001 practice' },
];
