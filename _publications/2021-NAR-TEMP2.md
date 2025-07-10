---
title: "A benchmark and an algorithm for detecting germline transposon insertions and measuring de novo transposon insertion frequencies"
collection: publications
category: manuscripts
permalink: /publication/2021-NAR-TEMP2
excerpt: 'Transposon activity is closely related to diseases and can drive evolution. This paper presents a bioinformatics tool TEMP2 for the detection of germline and de novo transposon insertions using short-read whole genome sequencing data.'
date: 2021-02-01
venue: 'Nucleic Acid Research'
slidesurl: '/files/Paper-Sildes-2021-NAR.gif'
paperurl: 'https://academic.oup.com/nar/article/49/8/e44/6123378?login=false#246385974'
citation: 'Yu et al. "A benchmark and an algorithm for detecting germline transposon insertions and measuring de novo transposon insertion frequencies." Nucleic acids research 49.8 (2021): e44-e44.'
---
Transposons are genomic parasites, and their new insertions can cause instability and spur the evolution of their host genomes. Rapid accumulation of short-read whole-genome sequencing data provides a great opportunity for studying new transposon insertions and their impacts on the host genome. Although many algorithms are available for detecting transposon insertions, the task remains challenging and existing tools are not designed for identifying de novo insertions. Here, we present a new benchmark fly dataset based on PacBio long-read sequencing and a new method TEMP2 for detecting germline insertions and measuring de novo ‘singleton’ insertion frequencies in eukaryotic genomes. TEMP2 achieves high sensitivity and precision for detecting germline insertions when compared with existing tools using both simulated data in fly and experimental data in fly and human. Furthermore, TEMP2 can accurately assess the frequencies of de novo transposon insertions even with high levels of chimeric reads in simulated datasets; such chimeric reads often occur during the construction of short-read sequencing libraries. By applying TEMP2 to published data on hybrid dysgenic flies inflicted by de-repressed P-elements, we confirmed the continuous new insertions of P-elements in dysgenic offspring before they regain piRNAs for P-element repression. TEMP2 is freely available at Github: https://github.com/weng-lab/TEMP2.

<img src="/images/Paper-Cover-2021-NAR.png" alt="Graphic Abstract" width="480" height="600"/>