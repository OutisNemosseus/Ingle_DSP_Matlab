#!/usr/bin/env python3
# Title: Chapter 02: Example 02.04: Even-Odd Synthesis
# Chapter: 02
# Source: Ingle DSP MATLAB Programs

import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# Helper functions
def stepseq(n0, n1, n2):
    """Generate step sequence"""
    n = np.arange(n1, n2 + 1)
    return (n >= n0).astype(float)

def evenodd(x, n):
    """Decompose signal into even and odd parts"""
    # Extend n to be symmetric around 0
    if n[0] > -n[-1]:
        m = np.arange(-n[-1], n[-1] + 1)
    else:
        m = np.arange(n[0], -n[0] + 1)
    
    # Create extended signal with zeros
    x_ext = np.zeros(len(m))
    idx = np.where((m >= n[0]) & (m <= n[-1]))[0]
    x_ext[idx] = x
    
    # Even part: (x(n) + x(-n)) / 2
    xe = 0.5 * (x_ext + np.flip(x_ext))
    
    # Odd part: (x(n) - x(-n)) / 2
    xo = 0.5 * (x_ext - np.flip(x_ext))
    
    return xe, xo, m

# Chapter 02: Example 02.04: Even-Odd Synthesis
fig = plt.figure(figsize=(12, 10))

# x(n) = u(n)-u(n-10)
n = np.arange(0, 11)
x = stepseq(0, 0, 10) - stepseq(10, 0, 10)
xe, xo, m = evenodd(x, n)

plt.subplot(2, 2, 1)
plt.plt.plt.stem(n, x)
plt.title('Rectangular pulse')
plt.xlabel('n')
plt.ylabel('x(n)')
plt.plt.plt.axis([-10, 10, 0, 1.2])

plt.subplot(2, 2, 2)
plt.plt.plt.stem(m, xe)
plt.title('Even Part')
plt.xlabel('n')
plt.ylabel('xe(n)')
plt.plt.plt.axis([-10, 10, 0, 1.2])

plt.subplot(2, 2, 4)
plt.plt.plt.stem(m, xo)
plt.title('Odd Part')
plt.xlabel('n')
plt.ylabel('xo(n)')
plt.plt.plt.axis([-10, 10, -0.6, 0.6])

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
