#!/usr/bin/env python3
# Title: Chapter 7: Example 7.19
# Chapter: 07
# Source: Ingle DSP MATLAB Programs

import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# Chapter 7: Example 7.19

# Freq. Samp. Tech.: Differentiator

# M = 33; alpha = (M-1)/2; Dw = 2*np.pi/M
l = 0:M-1; wl = Dw*l
k1 = 0:np.floor((M-1)/2); k2 = np.floor((M-1)/2)+1:M-1
Hrs = [1j*Dw*k1,-1j*Dw*(M-k2)]
angH = [-alpha*Dw*k1, alpha*Dw*(M-k2)]
H = Hrs*np.exp(1j*angH)
h = np.real(ifft(H,M))
[Hr,ww,a,P]=Hr_Type3(h)
# # plots

plt.subplot(1, 1, 1)
plt.subplot(2, 1, 1)
 k = 1:(M+1)/2
plt.plt.plt.plot(ww/np.pi,+Hr/np.pi,wl(k)np.pi,np.abs(Hrs(k))/np.pi,'o',wl(k)/np.pi,wl(k)/np.pi)
plt.title('Differentiator, frequency sampling design, M = 33')
plt.xlabel('frequency in np.pi units')
 plt.ylabel('Hr in np.pi units')


plt.subplot(2, 1, 2)
 plt.plt.stem(l,h); plt.plt.axis([-1,M,-1.1,1.1])
plt.title('Impulse response')
 plt.xlabel('n')
 plt.ylabel('h(n)')


set(gca,'XTickMode','manual','XTick',[0;alpha;M-1])


# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
