#!/usr/bin/env python3
# Title: Chapter 05: Example 05.06: Simple DFT Example
# Chapter: 05
# Source: Ingle DSP MATLAB Programs

import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# Chapter 05: Example 05.06: Simple DFT Example

# x = [1,1,1,1]
plt.subplot(1, 1, 1)


# # a) DTFT

w = np.arange(0, 501)*2*np.pi/500
[H] = freqz(x,1,w)
magH = np.abs(H); phaH = np.angle(H); phaH(126)=-47.5841*np.pi/180
plt.subplot(2, 1, 1)
 plt.plt.plt.plot(w/np.pi,magH)
 plt.grid(True)
plt.xlabel('frequency in np.pi units')


plt.ylabel('|X|')
 plt.title('Magnitude of the DTFT')
plt.subplot(2, 1, 2)
 plt.plt.plt.plot(w/np.pi,phaH/np.pi*180)
 plt.grid(True)
plt.xlabel('frequency in np.pi units')


plt.ylabel('Degrees')
 plt.title('Angle of the DTFT')
# print -deps2 me0506a.eps

pause;plt.subplot(1, 1, 1)
# # b) 4-point DFT

N = 4; w1 = 2*np.pi/N; k = 0:N-1
X = dft(x,N)
magX = np.abs(X), phaX = np.angle(X)*180/np.pi

plt.subplot(2, 1, 1)
plt.plt.plt.plot(w*N/(2*np.pi)
,magH,'--')
plt.plt.axis([-0.1,4.1,-1,5]); # 
plt.plt.stem(k,magX)
plt.xlabel('k')


plt.ylabel('|X(k)|')
 plt.title('Magnitude of the DFT, N=4')

# 
plt.subplot(2, 1, 2)
plt.plt.plt.plot(w*N/(2*np.pi)
,phaH*180/np.pi,'--')
plt.plt.axis([-0.1,4.1,-200,200]); # 
plt.plt.stem(k,phaX)
plt.xlabel('k')


plt.ylabel('Degrees')
 plt.title('Angle of the DFT, N=4')

# print -deps2 me0506b.eps


# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
