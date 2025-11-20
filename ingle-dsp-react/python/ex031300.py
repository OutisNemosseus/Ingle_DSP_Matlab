#!/usr/bin/env python3
# Title: ex031300
# Chapter: 03
# Source: Ingle DSP MATLAB Programs

import matplotlib.pyplot as plt
import numpy as np
import io
import base64

w = np.arange(0, 501) * np.pi/500  # [0, pi] axis divided into 501 points.
X = np.exp(1j*w) / (np.exp(1j*w) - 0.9*np.ones(501))
magX = np.abs(X)
angX = np.angle(X)

plt.subplot(2, 1, 1)
plt.plt.plt.plot(w/np.pi, magX)
plt.grid(True)
plt.plt.plt.axis([0, 1, 0, 10])
plt.xlabel('frequency in pi units')
plt.ylabel('|H|')
plt.title('Magnitude Response')

plt.subplot(2, 1, 2)
plt.plt.plt.plot(w/np.pi, angX/np.pi)
plt.grid(True)
plt.xlabel('frequency in pi units')
plt.ylabel('Phase in pi Radians')
plt.title('Phase Response')

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
