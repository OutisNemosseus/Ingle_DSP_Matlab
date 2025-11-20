#!/usr/bin/env python3
# Title: Chapter 6 : Example 6.2
# Chapter: 06
# Source: Ingle DSP MATLAB Programs

import numpy as np
from scipy import signal

# Chapter 6 : Example 6.2
# Parallel form conversion

# Note: This example requires custom MATLAB functions (dir2par, parfiltr, par2dir)
# Python equivalent uses residuez for partial fraction expansion

b = np.array([1, -3, 11, -27, 18])
a = np.array([16, 12, 2, -4, -1])

# Impulse sequence
def impseq(n0, n1, n2):
    n = np.arange(n1, n2 + 1)
    return (n == n0).astype(float)

delta = impseq(0, 0, 7)
print(f"Impulse delta = {delta}")

# Direct form filter
hdir = signal.lfilter(b, a, delta)
print(f"\
Direct form output hdir = {hdir}")

# Parallel form using partial fraction expansion
R, p, C = signal.residuez(b, a)
print(f"\
Residues R = {R}")
print(f"Poles p = {p}")
print(f"Direct terms C = {C}")

# For parallel form implementation, we sum contributions from each pole
# hpar[n] = np.sum(R[i] * p[i]^n) + C[n] * delta[n]
n = np.arange(len(delta))
hpar = np.zeros(len(delta))
for i in range(len(R)):
    hpar += R[i] * (p[i] ** n)
if len(C) > 0:
    hpar[:len(C)] += C

print(f"\
Parallel form output hpar = {hpar}")

# Verify they're the same
error = np.max(np.abs(hdir - hpar))
print(f"\
Max error between direct and parallel forms: {error}")
