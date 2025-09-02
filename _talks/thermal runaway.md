---
title: "Vision-Based Early Detection of Thermal Runaway in Battery Packs Using Physics-Guided Deep Learning - [Work in Progress]"
date: 2025 August
location: New York, US
---

### 1. Motivation

- Lithium-ion batteries are used in EVs, grid-scale storage, consumer electronics, and aerospace. Across all domains, thermal runaway (TR) is a leading safety concern, capable of causing fires and explosions.

**Problem**: Existing warning systems rely on embedded sensors (temperature, voltage, pressure) that are slow to respond or provide signals only after failure is underway.

**Gap**: There is little to no research demonstrating a vision-based, physics-informed approach to detect TR earlier and more reliably.

### 2. Objective

- Develop a computer-vision + physics hybrid method using infrared (IR) thermal imagery to:

- Detect incipient hotspots across battery modules.

- Forecast heat propagation using a heat-equation–constrained predictor.

- Issue alarms 30–50% earlier than simple threshold or sensor-based methods.
