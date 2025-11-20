#!/usr/bin/env python3
# Title: ex039900
# Chapter: 03
# Source: Ingle DSP MATLAB Programs

import matplotlib.pyplot as plt
import numpy as np
import io
import base64

w = np.arange(-100, 101) * np.pi/100  # frequency between -pi and +pi

N = 5
X1 = np.sin((w + np.finfo(float).eps) * N/2) / np.sin((w + np.finfo(float).eps)/2)

N = 15
X2 = np.sin((w + np.finfo(float).eps) * N/2) / np.sin((w + np.finfo(float).eps)/2)

N = 25
X3 = np.sin((w + np.finfo(float).eps) * N/2) / np.sin((w + np.finfo(float).eps)/2)

N = 100
X4 = np.sin((w + np.finfo(float).eps) * N/2) / np.sin((w + np.finfo(float).eps)/2)

plt.subplot(2, 2, 1)
plt.plt.plt.plot(w/np.pi, X1)
plt.grid(True)
plt.xlabel('frequency in pi units')
plt.title('N=5')

plt.subplot(2, 2, 2)
plt.plt.plt.plot(w/np.pi, X2)
plt.grid(True)
plt.xlabel('frequency in pi units')
plt.title('N=15')

plt.subplot(2, 2, 3)
plt.plt.plt.plot(w/np.pi, X3)
plt.grid(True)
plt.xlabel('frequency in pi units')
plt.title('N=25')

plt.subplot(2, 2, 4)
plt.plt.plt.plot(w/np.pi, X4)
plt.grid(True)
plt.xlabel('frequency in pi units')
plt.title('N=100')

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
