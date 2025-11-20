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

# Discrete-time Signal
Ts = 0.001
n = np.arange(-5, 6)  # -5 to 5
x = np.exp(-1000*np.abs(n*Ts))

# Discrete-time Fourier transform
K = 500
k = np.arange(0, K + 1)  # 0 to K
w = np.pi*k/K
X = x @ np.exp(-1j * np.outer(n, w))
X = np.real(X)
w = np.concatenate([-np.flip(w), w[1:]])
X = np.concatenate([np.flip(X), X[1:]])

plt.subplot(2, 1, 1)
plt.plt.plt.plot(t*1000, xa)
plt.xlabel('t in msec.')
plt.ylabel('x2(n)')
plt.title('Discrete Signal (Ts=1 msec)')
plt.plt.plt.stem(n*Ts*1000, x)

plt.subplot(2, 1, 2)
plt.plt.plt.plot(w/np.pi, X)
plt.xlabel('Frequency in pi units')
plt.ylabel('X2(w)')
plt.title('Discrete-time Fourier Transform')

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
