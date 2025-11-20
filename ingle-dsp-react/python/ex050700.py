#!/usr/bin/env python3
# Title: Chapter 05: Example 05.07: Zero-padding Example
# Chapter: 05
# Source: Ingle DSP MATLAB Programs

import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# Chapter 05: Example 05.07: Zero-padding Example

# plt.subplot(1, 1, 1)


x = [1,1,1,1]
# # a) DTFT

w = np.arange(0, 501)*2*np.pi/500
[H] = freqz(x,1,w)
magH = np.abs(H); phaH = np.angle(H); phaH(126)=-47.5841*np.pi/180
# # b) 8-point DFT

N = 8; w1 = 2*np.pi/N; k = 0:N-1
x = [x, np.zeros(1,4)]
X = dft(x,N)
magX = np.abs(X), phaX = np.angle(X)*180/np.pi

plt.subplot(2, 1, 1)
plt.plt.plt.plot(w*N/(2*np.pi)
,magH,'--')
plt.plt.axis([-0.1,8.1,-1,5]); # 
plt.plt.stem(k,magX)
plt.xlabel('k')


plt.ylabel('|X(k)|')
 plt.title('Magnitude of the DFT, N=8')

# 
plt.subplot(2, 1, 2)
plt.plt.plt.plot(w*N/(2*np.pi)
,phaH*180/np.pi,'--')
plt.plt.axis([-0.1,8.1,-200,200]); # 
plt.plt.stem(k,phaX)
plt.xlabel('k')


plt.ylabel('Degrees')
 plt.title('Angle of the DFT, N=8');pause

# print -deps2 me0507a.eps

# c) 16-point DFT

plt.subplot(1, 1, 1)
N = 16; w1 = 2*np.pi/N; k = 0:N-1
x = [x, np.zeros(1,8)]
X = dft(x,N)
magX = np.abs(X), phaX = np.angle(X)*180/np.pi

plt.subplot(2, 1, 1)
plt.plt.plt.plot(w*N/(2*np.pi)
,magH,'--')
plt.plt.axis([-0.1,16.1,-1,5]); # 
plt.plt.stem(k,magX)
plt.xlabel('k')


plt.ylabel('|X(k)|')
 plt.title('Magnitude of the DFT, N=16')

# 
plt.subplot(2, 1, 2)
plt.plt.plt.plot(w*N/(2*np.pi)
,phaH*180/np.pi,'--')
plt.plt.axis([-0.1,16.1,-200,200]); # 
plt.plt.stem(k,phaX)
plt.xlabel('k')


plt.ylabel('Degrees')
 plt.title('Angle of the DFT, N=16')

# print -deps2 me0507b.eps


# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
