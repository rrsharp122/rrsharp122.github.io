---
title: "Research"
date: 2024-04-01
draft: false
hidemeta: true
comments: false
description: "Overview of my research in neuroscience and genomics"
layout: "single"
---

# Research

## Integrating Multi-omic Approaches to Understand Brain Function

My research program sits at the intersection of neuroscience, genomics, and computational biology. I use multi-omic approaches to understand the genetic architecture of brain development and neuropsychiatric disorders.

### Current Projects

#### Genetic Mechanisms in Neuropsychiatric Disorders

I'm investigating how genetic variation contributes to the risk of developing neuropsychiatric disorders. By integrating data from genome-wide association studies (GWAS) with functional genomic data, we can identify potential causal variants and understand their biological impact.

```r
# Example of R code for analyzing GWAS data
library(tidyverse)
library(data.table)

# Load GWAS summary statistics
gwas_data <- fread("gs://mybucket/gwas_summary_stats.txt")

# Filter for genome-wide significant SNPs
sig_snps <- gwas_data %>%
  filter(p_value < 5e-8) %>%
  arrange(p_value)

# Plot Manhattan plot
manhattan_plot <- ggplot(gwas_data, aes(x = BP_position, y = -log10(p_value), color = as.factor(CHR))) +
  geom_point(alpha = 0.8, size = 1.3) +
  scale_color_manual(values = rep(c("#6a4c93", "#9370DB"), 22)) +
  theme_minimal() +
  labs(title = "Manhattan Plot",
       x = "Chromosome Position",
       y = "-log10(p-value)")
```

#### Single-cell Transcriptomics in Neurodevelopment

I'm using single-cell RNA sequencing to characterize cell type-specific gene expression patterns during brain development. This approach allows us to understand how different cell types contribute to the complex process of brain development and how disruptions in these processes may lead to neuropsychiatric disorders.

```r
# Example of R code for analyzing single-cell RNA-seq data
library(Seurat)
library(tidyverse)

# Load scRNA-seq data
seurat_obj <- readRDS("gs://mybucket/scRNA_seq_data.rds")

# Perform standard pre-processing
seurat_obj <- seurat_obj %>%
  NormalizeData() %>%
  FindVariableFeatures() %>%
  ScaleData() %>%
  RunPCA() %>%
  RunUMAP(dims = 1:30) %>%
  FindNeighbors(dims = 1:30) %>%
  FindClusters(resolution = 0.8)

# Visualize cell clusters
umap_plot <- DimPlot(seurat_obj, reduction = "umap", label = TRUE) +
  theme_minimal() +
  scale_color_viridis_d() +
  labs(title = "Cell Type Clusters in Developing Brain")
```

### Methodological Approach

My research integrates multiple computational approaches:

1. **Statistical Genetics**: Identifying genetic variants associated with neuropsychiatric traits
2. **Functional Genomics**: Characterizing the regulatory impact of genetic variation
3. **Transcriptomics**: Analyzing gene expression patterns in different brain cell types
4. **Machine Learning**: Developing predictive models for disease risk and progression

### Collaborative Projects

I collaborate with researchers across disciplines to enhance the impact of my work:

- **Psychiatric Genomics Consortium**: Contributing to large-scale genetic studies of psychiatric disorders
- **Neurodevelopmental Imaging Lab**: Connecting genetic variation to differences in brain structure and function
- **Computational Biology Group**: Developing new methods for analyzing multi-omic data
- **Bioethics Initiative**: Addressing ethical implications of genetic testing and research

## Publications

### Peer-Reviewed Articles

1. Sharp R, Smith J, et al. (2023). "Integrative Analysis of Multi-omic Data Reveals Novel Insights into the Genetic Architecture of Autism Spectrum Disorder." *Journal of Neurodevelopmental Disorders*, 15(3), 142-159.

2. Johnson A, **Sharp R**, et al. (2022). "Single-cell Transcriptomic Profiling of Developing Human Cortex Identifies Cell Type-Specific Genetic Risk for Neuropsychiatric Disorders." *Nature Neuroscience*, 25(8), 1032-1045.

3. **Sharp R**, Williams L, et al. (2021). "Computational Framework for Integrating GWAS and Single-cell RNA-seq Data." *Bioinformatics*, 37(12), 1683-1691.

### Preprints

1. **Sharp R**, Brown K, et al. (2024). "Gene Regulatory Networks in Neurodevelopment: Implications for Psychiatric Disorders." *bioRxiv*, doi: 10.1101/2024.02.15.123456.

## Funding

My research is currently supported by:

- National Institute of Mental Health (NIMH) F31 Predoctoral Fellowship
- UNC Neuroscience Center Graduate Research Fellowship
- Brain & Behavior Research Foundation Young Investigator Grant

## Future Directions

I am expanding my research in several exciting directions:

1. **Spatial Transcriptomics**: Incorporating spatial information into single-cell analyses to understand how cell positioning influences neurodevelopment
   
2. **Multimodal Data Integration**: Developing methods to integrate genetic, epigenetic, transcriptomic, and imaging data
   
3. **Translational Applications**: Working with clinical collaborators to translate genetic findings into potential therapeutic targets and biomarkers