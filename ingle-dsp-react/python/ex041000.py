#!/usr/bin/env python3
# Title: Chapter 4: Example 4.10:
# Chapter: 04
# Source: Ingle DSP MATLAB Programs

import numpy as np
from scipy.signal import residuez

# Chapter 4: Example 4.10:
# Check of residue functions

b = np.array([1, 0.4*np.sqrt(2)])
a = np.array([1, -0.8*np.sqrt(2), 0.64])

R, p, C = residuez(b, a)
print(f"Residues R = {R}")
print(f"Poles p = {p}")
print(f"Direct terms C = {C}")

Mp = np.abs(p)  # pole magnitudes
Ap = np.angle(p) / np.pi  # pole angles in pi units

print(f"\
Pole magnitudes Mp = {Mp}")
print(f"Pole angles Ap (in pi units) = {Ap}")
