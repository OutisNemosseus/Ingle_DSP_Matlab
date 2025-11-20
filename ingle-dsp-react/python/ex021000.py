#!/usr/bin/env python3
# Title: Matlab Example 2.10; Chapter 2
# Chapter: 02
# Source: Ingle DSP MATLAB Programs

import matplotlib.pyplot as plt
import numpy as np
from scipy.signal import lfilter
import io
import base64

# Helper functions
def impseq(n0, n1, n2):
    """Generate impulse sequence"""
    n = np.arange(n1, n2 + 1)
    return (n == n0).astype(float)

def stepseq(n0, n1, n2):
    """Generate step sequence"""
    n = np.arange(n1, n2 + 1)
    return (n >= n0).astype(float)

# Matlab Example 2.10; Chapter 2
a = np.array([1, -1, 0.9])
b = np.array([1])

fig = plt.figure(figsize=(10, 10))

# Part a) Impulse Response
x = impseq(0, -20, 120)
n = np.arange(-20, 121)
h = lfilter(b, a, x)

plt.subplot(2, 1, 1)
plt.plt.plt.stem(n, h)
plt.plt.plt.axis([-20, 120, -1.1, 1.1])
plt.title('Impulse Response')
plt.xlabel('n')
plt.ylabel('h(n)')

# Part b) Step Response
x = stepseq(0, -20, 120)
s = lfilter(b, a, x)

plt.subplot(2, 1, 2)
plt.plt.plt.stem(n, s)
plt.plt.plt.axis([-20, 120, -0.5, 2.5])
plt.title('Step Response')
plt.xlabel('n')
plt.ylabel('s(n)')

# Part c) Stability analysis
sum_abs_h = np.sum(np.abs(h))
z = np.roots(a)
magz = np.abs(z)

print(f"Sum of |h(n)| = {sum_abs_h}")
print(f"Roots of denominator: {z}")
print(f"Magnitude of roots: {magz}")

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
