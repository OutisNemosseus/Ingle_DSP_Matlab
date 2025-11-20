#!/usr/bin/env python3
# Title: Chapter 5: Example 5.02
# Chapter: 05
# Source: Ingle DSP MATLAB Programs

import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# Chapter 5: Example 5.02

# L = 5; N = 20
x = [np.ones(1,L), np.zeros(1,N-L)]
xn = x' * np.ones(1,3)
xn = (xn(:))'
n = -N:1:2*N-1
plt.subplot(1, 1, 1)
plt.subplot(2, 1, 2)


plt.plt.stem(n,xn); plt.xlabel('n')
 plt.ylabel('xtilde(n)')
plt.title('Three periods of xtilde(n)')
plt.plt.axis([-N,2*N-1,-0.5,1.5])

# print -deps2 fg0502.eps

# plt.subplot(1, 1, 1)
# Part (b)1

L = 5; N = 20
xn = [np.ones(1,L), np.zeros(1,N-L)]
Xk = dfs(xn,N)
magXk = np.abs([Xknp.arange(N/2+1, N + 1) Xknp.arange(1, N/2+1 + 1)])
k = [-N/2:N/2]
plt.subplot(2, 2, 1)
 plt.plt.stem(k,magXk); plt.plt.axis([-N/2,N/2,-0.5,5.5])

plt.xlabel('k')
 plt.ylabel('Xtilde(k)')
plt.title('DFS of SQ. wave, L=5, N=20')

# Part (b)2

L = 5; N = 40
xn = [np.ones(1,L), np.zeros(1,N-L)]
Xk = dfs(xn,N)
magXk = np.abs([Xknp.arange(N/2+1, N + 1) Xknp.arange(1, N/2+1 + 1)])
k = [-N/2:N/2]
plt.subplot(2, 2, 2)
 plt.plt.stem(k,magXk); plt.plt.axis([-N/2,N/2,-0.5,5.5])

plt.xlabel('k')
 plt.ylabel('Xtilde(k)')
plt.title('DFS of SQ. wave, L=5, N=40')

# Part (b)3

L = 5; N = 60
xn = [np.ones(1,L), np.zeros(1,N-L)]
Xk = dfs(xn,N)
magXk = np.abs([Xknp.arange(N/2+1, N + 1) Xknp.arange(1, N/2+1 + 1)])
k = [-N/2:N/2]
plt.subplot(2, 2, 3)
 plt.plt.stem(k,magXk); plt.plt.axis([-N/2,N/2,-0.5,5.5])

plt.xlabel('k')
 plt.ylabel('Xtilde(k)')
plt.title('DFS of SQ. wave, L=5, N=60')

# Part (b)4

L = 7; N = 60
xn = [np.ones(1,L), np.zeros(1,N-L)]
Xk = dfs(xn,N)
magXk = np.abs([Xknp.arange(N/2+1, N + 1) Xknp.arange(1, N/2+1 + 1)])
k = [-N/2:N/2]
plt.subplot(2, 2, 4)
 plt.plt.stem(k,magXk); plt.plt.axis([-N/2,N/2,-0.5,7.5])

plt.xlabel('k')
 plt.ylabel('Xtilde(k)')
plt.title('DFS of SQ. wave, L=7, N=60')

# print -deps2 fg0502b.eps
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
