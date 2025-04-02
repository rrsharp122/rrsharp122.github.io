---
title: "Science Communication"
date: 2024-04-01
draft: false
hidemeta: true
comments: false
description: "Examples of my science communication and writing"
layout: "single"
---

# Science Communication

I'm passionate about making complex scientific concepts accessible to diverse audiences. My science communication work spans several formats and audiences, from lay explanations of recent research to technical explainers for scientific peers.

## Featured Writing

### Understanding the Brain's Genetic Blueprint

**Published in: _Neuroscience Today_ | February 2024**

This article explains how genes shape brain development and function in language accessible to a general audience. I break down complex genomic concepts using everyday analogies and visual explanations.

> "Sharp has a remarkable ability to translate dense scientific concepts into engaging narratives that anyone can understand." — _Neuroscience Today_ Editor

[Read the full article →](/writing/genetic-blueprint)

### The Epigenetic Revolution: Beyond the DNA Sequence

**Published in: _Science Explained_ | November 2023**

This piece explores how epigenetic mechanisms influence gene expression without changing the underlying DNA sequence, with a focus on implications for neuropsychiatric disorders.

[Read the full article →](/writing/epigenetic-revolution)

### Decoding Single-Cell RNA Sequencing for Neuroscientists

**Published in: _Methods in Neuroscience_ | August 2023**

A technical explainer aimed at neuroscientists interested in incorporating single-cell approaches into their research but lacking specialized genomics training.

[Read the full article →](/writing/single-cell-explainer)

## Science Communication Workshops

I regularly lead workshops on science communication for fellow researchers:

### From Data to Story: Communicating Your Research to Diverse Audiences

A hands-on workshop that helps scientists transform their technical findings into compelling narratives for different audiences, from grant reviewers to the general public.

### Visualization Strategies for Complex Data

This workshop focuses on creating clear, accurate, and engaging visualizations of complex scientific data using R and ggplot2.

```r
# Example code from the visualization workshop
library(tidyverse)
library(patchwork)

# Create a custom theme for consistent, clean visualizations
theme_scicomm <- function() {
  theme_minimal() +
    theme(
      text = element_text(family = "Helvetica", color = "#333333"),
      plot.title = element_text(size = 16, face = "bold"),
      plot.subtitle = element_text(size = 12, color = "#666666"),
      axis.title = element_text(size = 12, face = "bold"),
      axis.text = element_text(size = 10),
      legend.position = "bottom",
      panel.grid.major = element_line(color = "#e5e5e5"),
      panel.grid.minor = element_blank()
    )
}

# Example visualization of brain gene expression data
ggplot(brain_expression_data, aes(x = brain_region, y = expression_level, fill = gene)) +
  geom_boxplot(alpha = 0.8) +
  scale_fill_brewer(palette = "Purples") +
  theme_scicomm() +
  labs(
    title = "Gene Expression Across Brain Regions",
    subtitle = "Data from Human Brain Atlas Project",
    x = "Brain Region",
    y = "Expression Level (TPM)",
    fill = "Gene"
  )
```

## Public Engagement

### Brain Awareness Week Activities

I organize and lead interactive activities for K-12 students during Brain Awareness Week, introducing concepts in neuroscience and genetics through hands-on experiments and demonstrations.

### Science Podcast Appearances

I've been a guest on several science podcasts discussing topics in neuroscience and genomics:

- **Brains and Genes** - Episode 42: "The Genetic Architecture of Mental Health"
- **Science Explained** - Episode 87: "Decoding the Brain's Development"
- **Research Frontiers** - Episode 15: "Emerging Tools in Genomics Research"

## Media Resources

I maintain a collection of resources for journalists and science communicators covering neuroscience and genomics:

- [Glossary of Neuroscience and Genomics Terms](/resources/glossary)
- [Visualization Library for Common Neuroscience Concepts](/resources/visualizations)
- [Interview Availability and Contact Information](/contact)

## Blog Posts

I regularly write blog posts about recent advances in neuroscience and genomics, as well as reflections on academic life and science communication:

- [Navigating the Interdisciplinary Nature of Modern Neuroscience](/blog/interdisciplinary-neuroscience)
- [The Art and Science of Explaining Complex Research to Non-Specialists](/blog/art-of-explanation)
- [Why R is My Programming Language of Choice for Genomic Analysis](/blog/r-for-genomics)
- [A Week in the Life of a Computational Neuroscience PhD Student](/blog/week-in-the-life)