#!/usr/bin/env python3
# Title: Chapter 4: Example 4.11:
# Chapter: 04
# Source: Ingle DSP MATLAB Programs

import matplotlib.pyplot as plt
import numpy as np
from scipy.signal import tf2zpk
import io
import base64

# Chapter 4: Example 4.11:
# zplane function - Pole-Zero plot

b = np.array([1, 0])
a = np.array([1, -0.9])

# Get zeros, poles, and gain
z, p, k = tf2zpk(b, a)

# Create pole-zero plot
fig, ax = plt.subplots(figsize=(6, 6))

# Plot unit circle
theta = np.linspace(0, 2*np.pi, 100)
ax.plt.plt.plot(np.cos(theta), np.sin(theta), 'k--', linewidth=0.5)

# Plot zeros (o) and poles (x)
if len(z) > 0:
    ax.plt.plt.plot(np.real(z), np.imag(z), 'go', markersize=10, label='Zeros')
if len(p) > 0:
    ax.plt.plt.plot(np.real(p), np.imag(p), 'rx', markersize=10, markeredgewidth=2, label='Poles')

# Add labels
ax.text(0.85, -0.1, '0.9')
ax.text(0.01, -0.1, '0')

ax.axhline(y=0, color='k', linewidth=0.5)
ax.axvline(x=0, color='k', linewidth=0.5)
ax.grid(True, alpha=0.3)
ax.set_xlabel('Real Part')
ax.set_ylabel('Imaginary Part')
ax.set_title('Pole-Zero Plot')
ax.legend()
ax.plt.plt.axis('equal')
ax.set_xlim([-1.5, 1.5])
ax.set_ylim([-1.5, 1.5])

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
