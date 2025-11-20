#!/usr/bin/env python3
# Title: Example 2.11
# Chapter: 02
# Source: Ingle DSP MATLAB Programs

import matplotlib.pyplot as plt
import numpy as np
from scipy.signal import lfilter
import io
import base64

# Helper function
def stepseq(n0, n1, n2):
    """Generate step sequence"""
    n = np.arange(n1, n2 + 1)
    return (n >= n0).astype(float)

# Example 2.11
# x(n) = u(n)-u(n-10)
# h(n) = (0.9)^n * u(n)
# diff eqn: y(n) - 0.9y(n-1) = x(n)

b = np.array([1])
a = np.array([1, -0.9])

n = np.arange(-5, 51)
x = stepseq(0, -5, 50) - stepseq(10, -5, 50)
y = lfilter(b, a, x)

fig = plt.figure(figsize=(10, 6))

plt.subplot(2, 1, 1)
plt.plt.plt.stem(n, x)
plt.title('Input sequence')
plt.xlabel('n')
plt.ylabel('x(n)')
plt.plt.plt.axis([-5, 50, -0.5, 1.5])

plt.subplot(2, 1, 2)
plt.plt.plt.stem(n, y)
plt.title('Output sequence')
plt.xlabel('n')
plt.ylabel('y(n)')
plt.plt.plt.axis([-5, 50, -0.5, 8])

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
