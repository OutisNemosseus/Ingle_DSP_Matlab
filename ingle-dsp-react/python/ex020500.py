#!/usr/bin/env python3
# Title: Example 2.5
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

# Example 2.5
# x(n)=[u(n)-u(n-10)]; h(n)=(0.9)^n*u(n)
# y(n)=10*(1-(0.9)^(n+1))*(u(n)-u(n-10))+(10*(1-(0.9)^10)*(0.9)^(n-9))*u(n-10)

n = np.arange(-5, 51)
u1 = stepseq(0, -5, 50)
u2 = stepseq(10, -5, 50)

# input x(n)
x = u1 - u2

# impulse response h(n)
h = (0.9 ** n) * u1

fig = plt.figure(figsize=(10, 10))

plt.subplot(3, 1, 1)
plt.plt.plt.stem(n, x)
plt.plt.plt.axis([-5, 50, 0, 2])
plt.title('Input Sequence')
plt.xlabel('n')
plt.ylabel('x(n)')

plt.subplot(3, 1, 2)
plt.plt.plt.stem(n, h)
plt.plt.plt.axis([-5, 50, 0, 2])
plt.title('Impulse Response')
plt.xlabel('n')
plt.ylabel('h(n)')

# output response
y = (10 * (1 - (0.9) ** (n + 1))) * (u1 - u2) + (10 * (1 - (0.9) ** 10) * (0.9) ** (n - 9)) * u2

plt.subplot(3, 1, 3)
plt.plt.plt.stem(n, y)
plt.plt.plt.axis([-5, 50, 0, 8])
plt.title('Output Sequence')
plt.xlabel('n')
plt.ylabel('y(n)')

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
