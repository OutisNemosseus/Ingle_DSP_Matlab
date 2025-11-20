#!/usr/bin/env python3
# Title: Chapter 4: Example 4.8:
# Chapter: 04
# Source: Ingle DSP MATLAB Programs

import numpy as np
from scipy.signal import residuez

# Chapter 4: Example 4.9:
# Check of residue functions

b = np.array([1])
a = np.poly([0.9, 0.9, -0.9])
print(f"a = {a}")

R, p, c = residuez(b, a)
print(f"\
Residues R = {R}")
print(f"Poles p = {p}")
print(f"Direct terms c = {c}")
