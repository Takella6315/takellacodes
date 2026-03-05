// Research projects — add entries here. Use slug for clickable detail pages.

export const researchItems = [
  {
    slug: "architectural-backdoors-dl",
    title: "Forensic Detection and Mitigation of Architectural Backdoors in Deep Learning Models",
    excerpt:
      "Framework for detecting and removing architectural backdoors (ABs) in deep learning models—malicious logic in model code rather than weights—without requiring source code. Official publication coming soon.",
    content: `Deep learning models are increasingly used in safety-critical applications, but developers often deploy open-source or marketplace-shared models without vetting beyond weight files, trusting thousands of lines of accompanying code. This has created an emerging attack vector: **architectural backdoors (ABs)**—malicious computation implemented with standard DL operator primitives in the model implementation code, not in the weights. Existing defenses focus on weights (retraining, pruning, weight inspection) and are ineffective against ABs, which are rooted in executable code and logic.

ABs hide in plain sight as additional computation within the model, camouflaging among normal operator or layer definitions. They can be injected in pre-processing, inference, or post-processing, and often resemble legitimate framework-defined routines (e.g., stateless operators, parameter-less layers). In real-world forensics, investigators frequently lack source code—only compiled binaries or framework bytecode—and ABs can even be injected at runtime after deployment, circumventing pre-deployment vetting.

We address this by analyzing the model at the level of its **computational DAG** (directed acyclic graph of tensor operations) instead of low-level instructions. This gives a higher, semantic view of the model and makes it easier to spot malicious logic. **CherryPAI** is a DL model forensics framework that reconstructs this computational DAG from compiled bytecode and systematically identifies paths and operators that deviate from the expected architecture, enabling detection and removal of ABs without source code.

*Official publication coming soon.*`,
  },
  {
    slug: "unet-brain-tumor-detection",
    title: "Using Lightweight CNNs (U-Net Arch) for Brain Tumor Detection",
    excerpt:
      "Lightweight CNN-based system using U-Net-inspired architecture for plug-and-play brain tumor detection from MRI scans, designed for hospital deployment.",
    content: `We developed **lightweight CNNs using a U-Net-inspired architecture** for brain tumor detection from MRI scans, designed as a **plug-and-play tool** for hospitals to automate and standardize screening.

**Context.** Brain tumor incidence has risen, and MRI is the primary non-invasive imaging tool. Manual analysis is time-consuming and variable. We aimed to build an efficient, deployable model that could classify tumor presence and type from brain MRI (sagittal/x-z plane) with minimal misclassification—especially avoiding false negatives (missing a tumor).

**Data & preprocessing.** We used a Kaggle brain tumor dataset (~1,311 MRI images) with roughly balanced classes (Meningioma, Glioma, Pituitary, No Tumor). Data was split 70% train / 30% test. Preprocessing included grayscale conversion, Gaussian filtering to reduce noise, and edge detection (Sobel/Canny) to highlight tumor boundaries; images were resized via bilinear interpolation for efficient training.

**Model.** The pipeline uses convolutional layers with ReLU and max pooling, followed by dense layers and softmax for classification. The design prioritizes **lightweight**, interpretable blocks so hospitals can run it on typical hardware without heavy GPU infrastructure. The approach is aligned with U-Net-style thinking: focus on clear, hierarchical feature extraction and efficient use of spatial information.

**Results.** After training (e.g., ~10 epochs), we achieved high accuracy (~98.6% overall), with 100% recall on the no-tumor category and strong performance across tumor types (e.g., 99%+ for meningioma, glioma, pituitary). Weighted balanced accuracy was ~94.6%. Confusion matrices showed very few misclassifications, and errors were mostly between tumor subtypes rather than missing tumors entirely—critical for clinical safety.

**Deployment.** The goal is **plug-and-play** use in hospitals: ingest MRI scans, run the lightweight model, and get fast, consistent tumor detection to support (not replace) radiologist workflow. Future work includes full U-Net segmentation for precise tumor boundaries and support for multiple MRI planes (sagittal, coronal, axial) to improve robustness.`,
  },
];

export function getResearchItem(slug) {
  return researchItems.find((r) => r.slug === slug) ?? null;
}

export function getAllResearchSlugs() {
  return researchItems.map((r) => r.slug);
}
