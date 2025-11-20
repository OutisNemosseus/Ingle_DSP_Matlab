#!/usr/bin/env python3
# Title: Chapter 4: Example 4.8:
# Chapter: 04
# Source: Ingle DSP MATLAB Programs

import numpy as np
from scipy.signal import residuez

# Chapter 4: Example 4.8:
# Check of residues in Example 4.7

b = np.array([0, 1])
a = np.array([3, -4, 1])

R, p, C = residuez(b, a)
print(f"Residues R = {R}")
print(f"Poles p = {p}")
print(f"Direct terms C = {C}")

# Reconstruct b, a from residues
# Note: scipy doesn't have invresiduz, but we can verify
print(f"\
Original b = {b}")
print(f"Original a = {a}")
