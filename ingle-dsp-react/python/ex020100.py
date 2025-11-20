#!/usr/bin/env python3
# Title: Chapter 02: Example 02.01: Signal Synthesis
# Chapter: 02
# Source: Ingle DSP MATLAB Programs

import matplotlib.pyplot as plt
import numpy as np
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

# Chapter 02: Example 02.01: Signal Synthesis
fig = plt.figure(figsize=(12, 10))

# a) x(n) = 2*delta(n+2) - delta(n-4), -5<=n<=5
n = np.arange(-5, 6)
x = 2*impseq(-2, -5, 5) - impseq(4, -5, 5)
plt.subplot(2, 2, 1)
plt.stem(n, x)
plt.title('Sequence in Example 2.1a')
plt.xlabel('n')
plt.ylabel('x(n)')
plt.axis([-5, 5, -2, 3])

# b) x(n) = n[u(n)-u(n-10)]+10*exp(-0.3(n-10))(u(n-10)-u(n-20)); 0<=n<=20
n = np.arange(0, 21)
x1 = n * (stepseq(0, 0, 20) - stepseq(10, 0, 20))
x2 = 10 * np.exp(-0.3 * (n - 10)) * (stepseq(10, 0, 20) - stepseq(20, 0, 20))
x = x1 + x2
plt.subplot(2, 2, 2)
plt.stem(n, x)
plt.title('Sequence in Example 2.1b')
plt.xlabel('n')
plt.ylabel('x(n)')
plt.axis([0, 20, -1, 11])

# c) x(n) = cos(0.04*pi*n) + 0.2*w(n); 0<=n<=50, w(n): Gaussian (0,1)
n = np.arange(0, 51)
x = np.cos(0.04 * np.pi * n) + 0.2 * np.random.randn(len(n))
plt.subplot(2, 2, 3)
plt.stem(n, x)
plt.title('Sequence in Example 2.1c')
plt.xlabel('n')
plt.ylabel('x(n)')
plt.axis([0, 50, -1.4, 1.4])

# d) x(n) = {...,5,4,3,2,1,5,4,3,2,1,...}; -10<=n<=9
n = np.arange(-10, 10)
x = np.array([5, 4, 3, 2, 1])
xtilde = np.tile(x, 4)
plt.subplot(2, 2, 4)
plt.stem(n, xtilde)
plt.title('Sequence in Example 2.1d')
plt.xlabel('n')
plt.ylabel('xtilde(n)')
plt.axis([-10, 9, -1, 6])

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
