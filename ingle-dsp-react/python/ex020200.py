#!/usr/bin/env python3
# Title: Chapter 02: Example 02.02: Signal Synthesis
# Chapter: 02
# Source: Ingle DSP MATLAB Programs

import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# Helper functions
def sigshift(x, n, n0):
    """Shift signal x(n) by n0"""
    return x, n + n0

def sigadd(x1, n1, x2, n2):
    """Add two signals"""
    n_start = np.min(n1[0], n2[0])
    n_end = np.max(n1[-1], n2[-1])
    n = np.arange(n_start, n_end + 1)
    y = np.zeros(len(n))
    
    idx1 = np.where((n >= n1[0]) & (n <= n1[-1]))[0]
    idx1_orig = np.arange(len(x1))
    y[idx1] += x1[idx1_orig]
    
    idx2 = np.where((n >= n2[0]) & (n <= n2[-1]))[0]
    idx2_orig = np.arange(len(x2))
    y[idx2] += x2[idx2_orig]
    
    return y, n

def sigfold(x, n):
    """Fold signal x(n) to get x(-n)"""
    return np.flip(x), -np.flip(n)

def sigmult(x1, n1, x2, n2):
    """Multiply two signals"""
    n_start = np.max(n1[0], n2[0])
    n_end = np.min(n1[-1], n2[-1])
    n = np.arange(n_start, n_end + 1)
    
    idx1 = n - n1[0]
    idx2 = n - n2[0]
    y = x1[idx1] * x2[idx2]
    
    return y, n

# Chapter 02: Example 02.02: Signal Synthesis
fig = plt.figure(figsize=(10, 8))

n = np.arange(-2, 11)
x = np.concatenate([np.arange(1, 8), np.arange(6, 0, -1)])

# a) x1(n) = 2*x(n-5) - 3*x(n+4)
x11, n11 = sigshift(x, n, 5)
x12, n12 = sigshift(x, n, -4)
x1, n1 = sigadd(2*x11, n11, -3*x12, n12)

plt.subplot(2, 1, 1)
plt.plt.plt.stem(n1, x1)
plt.title('Sequence in Example 2.2a')
plt.xlabel('n')
plt.ylabel('x1(n)')
plt.plt.plt.axis([np.min(n1)-1, np.max(n1)+1, np.min(x1)-1, np.max(x1)+1])
ax = plt.gca()
ax.set_xticks([np.min(n1), 0, np.max(n1)])

# b) x2(n) = x(3-n) + x(n)*x(n-2)
x21, n21 = sigfold(x, n)
x21, n21 = sigshift(x21, n21, 3)
x22, n22 = sigshift(x, n, 2)
x22, n22 = sigmult(x, n, x22, n22)
x2, n2 = sigadd(x21, n21, x22, n22)

plt.subplot(2, 1, 2)
plt.plt.plt.stem(n2, x2)
plt.title('Sequence in Example 2.2b')
plt.xlabel('n')
plt.ylabel('x2(n)')
plt.plt.plt.axis([np.min(n2)-1, np.max(n2)+1, 0, 40])
ax = plt.gca()
ax.set_xticks([np.min(n2), 0, np.max(n2)])

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
