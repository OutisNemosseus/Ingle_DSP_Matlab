#!/usr/bin/env python3
# Title: Chapter 05: Example 05.05: Frequency-domain sampling
# Chapter: 05
# Source: Ingle DSP MATLAB Programs

import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# Chapter 05: Example 05.05: Frequency-domain sampling

# # x(n)=(0.7)**n * u(n)

# X(z)=z/(z-0.7); |z|>0.7

plt.subplot(1, 1, 1)
# N = 5
k = 0:1:N-1
wk = 2*np.pi*k/N
zk = np.exp(1j*wk)
Xk = (zk)/(zk-0.7)
xn = np.real(idfs(Xk,N))
xtilde = xn'* np.ones(1,8); xtilde = (xtilde(:))'
plt.subplot(2, 2, 1)
 stemnp.arange(0, 39,xtilde + 1);plt.plt.axis([0,40,-0.1,1.5])

plt.xlabel('n')
 plt.ylabel('xtilde(n)')
 plt.title('N=5')
# N = 10
k = 0:1:N-1
wk = 2*np.pi*k/N
zk = np.exp(1j*wk)
Xk = (zk)/(zk-0.7)
xn = np.real(idfs(Xk,N))
xtilde = xn'* np.ones(1,4); xtilde = (xtilde(:))'
plt.subplot(2, 2, 2)
 stemnp.arange(0, 39,xtilde + 1);plt.plt.axis([0,40,-0.1,1.5])

plt.xlabel('n')
 plt.ylabel('xtilde(n)')
 plt.title('N=10')
# N = 20
k = 0:1:N-1
wk = 2*np.pi*k/N
zk = np.exp(1j*wk)
Xk = (zk)/(zk-0.7)
xn = np.real(idfs(Xk,N))
xtilde = xn'* np.ones(1,2); xtilde = (xtilde(:))'
plt.subplot(2, 2, 3)
 stemnp.arange(0, 39,xtilde + 1);plt.plt.axis([0,40,-0.1,1.5])

plt.xlabel('n')
 plt.ylabel('xtilde(n)')
 plt.title('N=20')
# N = 40
k = 0:1:N-1
wk = 2*np.pi*k/N
zk = np.exp(1j*wk)
Xk = (zk)/(zk-0.7)
xn = np.real(idfs(Xk,N))
plt.subplot(2, 2, 4)
 stemnp.arange(0, 39,xn + 1);plt.plt.axis([0,40,-0.1,1.5])

plt.xlabel('n')
 plt.ylabel('xtilde(n)')
 plt.title('N=40')

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
