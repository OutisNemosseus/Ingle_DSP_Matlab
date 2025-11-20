#!/usr/bin/env python3
# Title: Chapter 6 : Example 6.1
# Chapter: 06
# Source: Ingle DSP MATLAB Programs

import numpy as np
from scipy import signal

# Chapter 6 : Example 6.1
# Cascade form conversion

# Note: This example requires custom MATLAB functions (dir2cas, casfiltr, impseq)
# which are not standard in Python. Here's a simplified version:

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

# For cascade form, we would need to factor the polynomials
# into second-order sections (SOS)
z, p, k = signal.tf2zpk(b, a)
print(f"\
Zeros z = {z}")
print(f"Poles p = {p}")
print(f"Gain k = {k}")

sos = signal.tf2sos(b, a)
print(f"\
Second-order sections (SOS):\
{sos}")

# Apply cascade (SOS) filter
hpar = signal.sosfilt(sos, delta)
print(f"\
Cascade form output hpar = {hpar}")

# Verify they're the same
error = np.max(np.abs(hdir - hpar))
print(f"\
Max error between direct and cascade forms: {error}")
