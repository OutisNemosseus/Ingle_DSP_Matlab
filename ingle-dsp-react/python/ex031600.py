#!/usr/bin/env python3
# Title: ex031600
# Chapter: 03
# Source: Ingle DSP MATLAB Programs

import matplotlib.pyplot as plt
import numpy as np
import io
import base64

b = np.array([0.0181, 0.0543, 0.0543, 0.0181])
a = np.array([1.0000, -1.7600, 1.1829, -0.2781])
m = np.arange(0, len(b))  # 0 to len(b)-1
l = np.arange(0, len(a))  # 0 to len(a)-1
K = 500
k = np.arange(1, K + 1)  # 1 to K
w = np.pi*k/K  # [0, pi] axis divided into 500 points.

num = b @ np.exp(-1j * np.outer(m, w))  # Numerator calculations
den = a @ np.exp(-1j * np.outer(l, w))  # Denominator calculations
H = num / den
magH = np.abs(H)
angH = np.angle(H)

plt.subplot(2, 1, 1)
plt.plt.plt.plot(w/np.pi, magH)
plt.grid(True)
plt.plt.plt.axis([0, 1, 0, 1])
plt.xlabel('frequency in pi units')
plt.ylabel('|H|')
plt.title('Magnitude Response')

plt.subplot(2, 1, 2)
plt.plt.plt.plot(w/np.pi, angH/np.pi)
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
