// Research projects — add entries here. Use slug for clickable detail pages.

export const researchItems = [
  {
    comingSoon: true,
    title: "Dynamic Autonomy Stacks for Safer Self-Driving",
    excerpt:
      "Exploring a dynamic autonomous driving stack that adapts its perception and decision-making pipeline in real time to driving conditions, with the goal of making autonomous vehicles measurably safer. Coming soon...",
  },
  {
    slug: "superfedguard-federated-learning",
    title: "SuperFedGuard: A New Axis of Defense Against Backdoors in Federated Learning",
    excerpt:
      "Weight-shared (SuperNet) federated learning quietly breaks every classical poisoning defense. SuperFedGuard turns that same weight-sharing into a defense of its own, cutting backdoor attack success by ~70% with no loss in benign accuracy.",
    content: `**Super-Federated Learning (SuperFL)** trains a single weight-shared SuperNet across many clients, where each client receives a different subnetwork slice every round. It was designed to make federated learning cheaper and more accurate — but we found it also quietly changes the security picture, in both directions.

**The bad news: poisoning hits harder, and defenses stop working.** Counterintuitively, a data-poisoning backdoor that plateaus and decays in traditional federated learning converges to nearly **100% attack success** in SuperFL. The poison isn't trapped in whatever subnetwork the attacker held in a given round — it accumulates into the larger subnetworks that contain it. Worse, classical FL defenses (FLAME, FoolsGold, Auror) assume every client's update lives in the same parameter space. Under subnetwork rotation, two honest clients that trained disjoint slices look dissimilar while two sybils that shared a large subnetwork look alike — so clustering and similarity signals are dominated by *which subnetwork a client happened to draw*, not *what it tried to learn*. Even after rebuilding each defense specifically for the SuperFL setting, the best one removed under a quarter of the attack.

**The key insight: the server holds a lever it never had before.** In traditional FL, the server's only post-round control is how it aggregates updates. In SuperFL, the server also chooses *which subnetwork each client trains next*. **SuperFedGuard (SFG)** turns that scheduling freedom into a defense, built from five composable mechanisms:

- **Overlap-exclusive cosine similarity** — compare two clients only on the parameters they *both* actually trained, recovering the trust signal that subnetwork rotation destroys.
- **Quarantine to the core** — rank clients by trust and route the least-trusted onto the MinNet, the small shared core contained in every subnetwork, so any poison they produce is confined and never written into the wider model.
- **Sticky suspicion** — remember recent flags so an attacker can't launder its way back to trust by briefly lying low.
- **Rank-proportional down-weighting** — dampen suspect contributions smoothly instead of making brittle binary bans that silence honest clients.
- **Adaptive core clipping** — a detection-free backstop that clips every client's core update to a robust median norm, bounding the damage even when the trust signal fades.

**Results.** On CIFAR-10, SFG cuts the deployed model's backdoor attack success rate from **0.96 to 0.30**, and on MNIST from **1.00 to 0.30** — a ~70% relative reduction, roughly 3× better than the strongest classical defense adapted to the setting — with benign accuracy statistically unchanged and without being told how many clients are compromised. The methodology applies to any weight-shared collaborative training system with nested subnetworks, not just the SuperNets we evaluated.

*Paper currently under review — official publication coming soon.*`,
  },
  {
    slug: "fault-architectural-backdoors",
    title: "Finding FAULTs in Architectural Backdoors: Why Trigger Detection Fails Under Real-World Conditions",
    excerpt:
      "Architectural backdoors hide malicious logic in a model's code rather than its weights — but do they actually survive deployment? FAULT shows the attacker's real-world ceiling is far lower than reported: roughly 10–20% attack success, paid for with visible accuracy damage.",
    content: `**Architectural backdoors (ABs)** embed trigger-detection logic directly in a deep learning model's inference code instead of its weights, letting them survive retraining and fine-tuning and evade every weight-vetting defense. They've been positioned as a serious emerging supply-chain threat — but their viability under *real-world deployment conditions* had never been characterized. That's the question this work answers.

**One formalism for every AB.** Our key insight is that all five existing AB detector families (convolution, pooling, slicing, concatenation, masking) reduce to the same operation: an inner-product similarity between an input region and a fixed reference pattern derived from the trigger, thresholded by a sensitivity parameter. That unification means the entire AB design space is governed by just two distributions — the trigger response and the benign-input response — and lets us formalize three fundamental limitations that no implementation choice can escape:

1. **Transformations corrupt triggers.** Ordinary preprocessing that real pipelines already apply — contrast adjustment, cropping, noise, blurring, denoising — shifts the trigger response below the detection threshold. On CIFAR-10, a simple contrast adjustment alone drops attack success from 1.0 to 0.01.
2. **Sensitivity tuning is self-defeating.** The natural attacker response is to relax the detection threshold — but the same relaxation that recovers attack success also admits benign inputs as false positives, producing observable accuracy degradation that destroys the stealth the attack depends on.
3. **Complex triggers collide with benign inputs.** As trigger patterns grow more intricate, the space of benign inputs that falsely activate the detector expands. On the most complex triggers we tested, benign accuracy collapses from ~90% to as low as 9.9%, with thousands of clean inputs firing the detector.

**FAULT** (Framework for Assessing Unreliability and Limitations of AB Trigger-detection) operationalizes this analysis: it takes any AB construction and any set of preprocessing transformations, sweeps the sensitivity parameter, and traces the full attack-success / accuracy / false-positive operating curve — exposing exactly the region an optimally-tuned attacker can actually reach.

**Findings.** Across GTSRB, CIFAR-10, and Mapillary with ResNet18, MobileNetV2, and YoloV11 — 30 configuration–transformation combinations in total — no choice of sensitivity achieves both meaningful attack success and baseline accuracy. Where transformations meaningfully impede the trigger, the attacker's reachable ceiling sits between roughly **10% and 20% attack success**, and reaching even that costs measurable benign accuracy (~2.2% on average, up to 9.4%). The practical takeaway for defenders is cheap and concrete: apply one preprocessing transformation from each of three orthogonal families (geometric, photometric, stochastic) before inference, and watch validation accuracy for unexplained single-percent drops. ABs, as currently constructed, cannot be both effective and stealthy in realistic deployments.

*Paper currently under review — official publication coming soon.*`,
  },
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
  return researchItems.filter((r) => r.slug).map((r) => r.slug);
}
