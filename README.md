# DPDP Compliance Engine

**Documentation:** [https://abhinavsricharan.github.io/dpdp-compliance-engine/](https://abhinavsricharan.github.io/dpdp-compliance-engine/)

## Executive Summary

The DPDP Compliance Engine is an enterprise-grade, language-agnostic architecture designed to automate privacy audits against India's Digital Personal Data Protection (DPDP) Act, 2023. 

This repository houses the source code for the official marketing and demonstration frontend. It serves as a highly interactive, zero-dependency static website that visualizes the complex hybrid architecture, real-time evaluation capabilities, and shift-left security paradigms of the underlying backend engine.

## The DPDP Act Context

With the enactment of the DPDP Act in 2023, organizations operating in India face strict regulatory requirements regarding the collection, processing, and storage of personal data. Non-compliance carries severe financial penalties. The compliance engine specifically maps legal text into automatable engineering rules:

* **Section 6 (Consent):** Ensuring explicit, verifiable consent is obtained before tracking or processing user data.
* **Section 8 (Data Minimization & Security):** Enforcing cryptographic transformations (encryption, hashing) on all Personally Identifiable Information (PII) at rest and in transit. Failure to comply can result in penalties up to ₹250 Crores.
* **Section 9 (Children's Data):** Mandating strict age-verification barriers before processing data belonging to minors, carrying penalty risks up to ₹200 Crores.

## Hybrid AI Architecture

The website actively demonstrates the engine's core innovation: a two-pass Hybrid AI Evaluation system.

1. **High-Speed Static Analysis (Pass 1):** The engine utilizes Semgrep to parse the Abstract Syntax Tree (AST) of the target codebase. This acts as a lightning-fast filter, flagging potential DPDP violations across millions of lines of code in milliseconds.
2. **Semantic LLM Evaluation (Pass 2):** Flagged nodes are passed to a Bring-Your-Own-LLM (BYO-LLM) evaluator. By connecting to an air-gapped Local Ollama instance or an external API (like Azure OpenAI), the LLM reads the surrounding business logic to confidently eliminate false positives and provide actionable remediation strategies.

## Frontend Implementation & Modules

The landing page is engineered purely with HTML5, CSS3, and Vanilla JavaScript. By avoiding heavy frontend frameworks, the site achieves maximum performance and portability. The UI strictly adheres to a minimalist, enterprise-dark aesthetic utilizing standard typography and responsive CSS Grid layouts.

The website features several highly detailed interactive modules:

### 1. Language Support Marquee
An infinite scrolling module highlighting the engine's native support for over 30 enterprise programming languages, including C#, Java, Python, JavaScript, and SQL.

### 2. CI/CD Integration Mockup
A visual representation of how the engine integrates directly into enterprise GitHub Actions pipelines. It demonstrates how pull requests are automatically annotated and blocked when DPDP violations are detected in the commit history.

### 3. Interactive Codebase Viewer
A custom-built, tabbed code viewer showcasing real vulnerability patterns. Users can toggle between Java, Python, JavaScript, and SQL to see exactly how the engine identifies issues like missing database encryption wrappers or unverified tracking pixels.

### 4. Streamlit Dashboard Mockup
A meticulously crafted HTML/CSS replication of the backend engine's actual Streamlit interface. It features:
* Dynamic sidebar navigation.
* A semantic data table showcasing LLM Auto-Remediation suggestions.
* A hierarchical file tree highlighting flagged files and their associated DPDP Section violations.
* Configuration panels for toggling local and external LLM connections.
