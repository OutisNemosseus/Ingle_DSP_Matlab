#!/usr/bin/env python3
# Title: ex030500
# Chapter: 03
# Source: Ingle DSP MATLAB Programs

import matplotlib.pyplot as plt
import numpy as np
import io
import base64

n = np.arange(0, 11)  # 0 to 10
x = (0.9*np.exp(1j*np.pi/3))**n
k = np.arange(-200, 201)  # -200 to 200
w = (np.pi/100)*k
X = x @ (np.exp(-1j*np.pi/100) ** np.outer(n, k))
magX = np.abs(X)
angX = np.angle(X)

plt.subplot(2, 1, 1)
plt.plt.plt.plot(w/np.pi, magX)
plt.grid(True)
plt.plt.plt.axis([-2, 2, 0, 8])
plt.xlabel('frequency in units of pi')
plt.ylabel('|X|')
plt.title('Magnitude Part')

plt.subplot(2, 1, 2)
plt.plt.plt.plot(w/np.pi, angX/np.pi)
plt.grid(True)
plt.plt.plt.axis([-2, 2, -1, 1])
plt.xlabel('frequency in units of pi')
plt.ylabel('radians/pi')
plt.title('Angle Part')

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
