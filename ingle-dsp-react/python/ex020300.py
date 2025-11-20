#!/usr/bin/env python3
# Title: Chapter 02: Example 02.03: Signal Synthesis of complex sequence
# Chapter: 02
# Source: Ingle DSP MATLAB Programs

import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# Chapter 02: Example 02.03: Signal Synthesis of complex sequence
fig = plt.figure(figsize=(12, 10))

# a) x(n) = np.exp((-0.1+j0.3)n), -10 <= n <= 10
n = np.arange(-10, 11)
alpha = -0.1 + 0.3j
x = np.exp(alpha * n)

plt.subplot(2, 2, 1)
plt.plt.plt.stem(n, np.real(x))
plt.title('real part')
plt.xlabel('n')

plt.subplot(2, 2, 2)
plt.plt.plt.stem(n, np.imag(x))
plt.title('imaginary part')
plt.xlabel('n')

plt.subplot(2, 2, 3)
plt.plt.plt.stem(n, np.abs(x))
plt.title('magnitude part')
plt.xlabel('n')

plt.subplot(2, 2, 4)
plt.plt.plt.stem(n, (180/np.pi) * np.angle(x))
plt.title('phase part')
plt.xlabel('n')

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
