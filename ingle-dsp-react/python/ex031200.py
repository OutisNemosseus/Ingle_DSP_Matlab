#!/usr/bin/env python3
# Title: signal decomposition
# Chapter: 03
# Source: Ingle DSP MATLAB Programs

import matplotlib.pyplot as plt
import numpy as np
import io
import base64

def evenodd(x, n):
    """Decompose signal into even and odd components"""
    if np.any(n != -np.flip(n)):
        m = np.arange(-max(abs(n)), max(abs(n)) + 1)
        m1 = np.where(np.isin(m, n))[0]
        m2 = np.where(np.isin(m, -n))[0]
        x1 = np.zeros(len(m))
        x1[m1] = x
        x2 = np.zeros(len(m))
        x2[m2] = x
    else:
        m = n
        x1 = x
        x2 = x
    xe = 0.5 * (x1 + np.flip(x2))
    xo = 0.5 * (x1 - np.flip(x2))
    return xe, xo, m

n = np.arange(-5, 11)  # -5 to 10
x = np.sin(np.pi*n/2)
k = np.arange(-100, 101)  # -100 to 100
w = (np.pi/100)*k  # frequency between -pi and +pi

X = x @ (np.exp(-1j*np.pi/100) ** np.outer(n, k))  # DTFT of x

# signal decomposition
xe, xo, m = evenodd(x, n)  # even and odd parts
XE = xe @ (np.exp(-1j*np.pi/100) ** np.outer(m, k))  # DTFT of xe
XO = xo @ (np.exp(-1j*np.pi/100) ** np.outer(m, k))  # DTFT of xo

# verification
XR = np.real(X)  # real part of X
error1 = np.max(np.abs(XE - XR))  # Difference
print(f"Error1: {error1}")

XI = np.imag(X)  # imag part of X
error2 = np.max(np.abs(XO - 1j*XI))  # Difference
print(f"Error2: {error2}")

# graphical verification
plt.subplot(2, 2, 1)
plt.plot(w/np.pi, XR)
plt.grid(True)
plt.axis([-1, 1, -2, 2])
plt.xlabel('frequency in pi units')
plt.ylabel('Re(X)')
plt.title('Real part of X')

plt.subplot(2, 2, 2)
plt.plot(w/np.pi, XI)
plt.grid(True)
plt.axis([-1, 1, -10, 10])
plt.xlabel('frequency in pi units')
plt.ylabel('Im(X)')
plt.title('Imaginary part of X')

plt.subplot(2, 2, 3)
plt.plot(w/np.pi, np.real(XE))
plt.grid(True)
plt.axis([-1, 1, -2, 2])
plt.xlabel('frequency in pi units')
plt.ylabel('XE')
plt.title('Transform of even part')

plt.subplot(2, 2, 4)
plt.plot(w/np.pi, np.imag(XO))
plt.grid(True)
plt.axis([-1, 1, -10, 10])
plt.xlabel('frequency in pi units')
plt.ylabel('XO')
plt.title('Transform of odd part')

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
