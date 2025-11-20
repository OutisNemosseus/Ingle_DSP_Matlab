#!/usr/bin/env python3
# Title: Analog Signal
# Chapter: 03
# Source: Ingle DSP MATLAB Programs

import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# Analog Signal
Dt = 0.00005
t = np.arange(-0.005, 0.005 + Dt, Dt)
xa = np.exp(-1000*np.abs(t))

# Continuous-time Fourier Transform
Wmax = 2*np.pi*2000
K = 500
k = np.arange(0, K + 1)  # 0 to K
W = k*Wmax/K
Xa = xa @ np.exp(-1j * np.outer(t, W)) * Dt
Xa = np.real(Xa)
W = np.concatenate([-np.flip(W), W[1:]])  # Omega from -Wmax to Wmax
Xa = np.concatenate([np.flip(Xa), Xa[1:]])

plt.subplot(2, 1, 1)
plt.plt.plt.plot(t*1000, xa)
plt.xlabel('t in msec.')
plt.ylabel('xa(t)')
plt.title('Analog Signal')

plt.subplot(2, 1, 2)
plt.plt.plt.plot(W/(2*np.pi*1000), Xa*1000)
plt.xlabel('Frequency in KHz')
plt.ylabel('Xa(jW)*1000')
plt.title('Continuous-time Fourier Transform')

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
