#!/usr/bin/env python3
# Chapter: 03
# Source: Ingle DSP MATLAB Programs

import matplotlib.pyplot as plt
import numpy as np
import io
import base64

n = np.arange(0, 101)  # 0 to 100
x = np.cos(np.pi*n/2)
k = np.arange(-100, 101)  # -100 to 100
w = (np.pi/100)*k  # frequency between -pi and +pi

X = x @ (np.exp(-1j*np.pi/100) ** np.outer(n, k))  # DTFT of x

y = np.exp(1j*np.pi*n/4) * x  # signal multiplied by np.exp(1j*pi*n/4)
Y = y @ (np.exp(-1j*np.pi/100) ** np.outer(n, k))  # DTFT of y

# Graphical verification
plt.subplot(2, 2, 1)
plt.plt.plt.plot(w/np.pi, np.abs(X))
plt.grid(True)
plt.plt.plt.axis([-1, 1, 0, 60])
plt.xlabel('frequency in pi units')
plt.ylabel('|X|')
plt.title('Magnitude of X')

plt.subplot(2, 2, 2)
plt.plt.plt.plot(w/np.pi, np.angle(X)/np.pi)
plt.grid(True)
plt.plt.plt.axis([-1, 1, -1, 1])
plt.xlabel('frequency in pi units')
plt.ylabel('radians/pi')
plt.title('Angle of X')

plt.subplot(2, 2, 3)
plt.plt.plt.plot(w/np.pi, np.abs(Y))
plt.grid(True)
plt.plt.plt.axis([-1, 1, 0, 60])
plt.xlabel('frequency in pi units')
plt.ylabel('|Y|')
plt.title('Magnitude of Y')

plt.subplot(2, 2, 4)
plt.plt.plt.plot(w/np.pi, np.angle(Y)/np.pi)
plt.grid(True)
plt.plt.plt.axis([-1, 1, -1, 1])
plt.xlabel('frequency in pi units')
plt.ylabel('radians/pi')
plt.title('Angle of Y')

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
