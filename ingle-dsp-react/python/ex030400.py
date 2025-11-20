#!/usr/bin/env python3
# Title: Chapter 3: Example 3.4:
# Chapter: 03
# Source: Ingle DSP MATLAB Programs

import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# Chapter 3: Example 3.4:
# DTFT of finite duration seq using mat-vec operation

n = np.arange(-1, 4)  # -1 to 3
x = np.arange(1, 6)  # 1 to 5, sequence x(n)
k = np.arange(0, 501)  # 0 to 500
w = (np.pi/500) * k  # [0, np.pi] axis divided into 501 points.

X = x @ (np.exp(-1j*np.pi/500) ** np.outer(n, k))  # DTFT using matrix-vector product

magX = np.abs(X)
angX = np.angle(X)
realX = np.real(X)
imagX = np.imag(X)

plt.subplot(2, 2, 1)
plt.plt.plt.plot(w/np.pi, magX)
plt.grid(True)
plt.xlabel('frequency in pi units')
plt.title('Magnitude Part')
plt.ylabel('Magnitude')

plt.subplot(2, 2, 3)
plt.plt.plt.plot(w/np.pi, angX)
plt.grid(True)
plt.xlabel('frequency in pi units')
plt.title('Angle Part')
plt.ylabel('Radians')

plt.subplot(2, 2, 2)
plt.plt.plt.plot(w/np.pi, realX)
plt.grid(True)
plt.xlabel('frequency in pi units')
plt.title('Real Part')
plt.ylabel('Real')

plt.subplot(2, 2, 4)
plt.plt.plt.plot(w/np.pi, imagX)
plt.grid(True)
plt.xlabel('frequency in pi units')
plt.title('Imaginary Part')
plt.ylabel('Imaginary')

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
