#!/usr/bin/env python3
# Title: Chapter 7: Example 7.15
# Chapter: 07
# Source: Ingle DSP MATLAB Programs

import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# Chapter 7: Example 7.15

# Freq. Samp. Tech.: Lowpass,Optimum method

# # (a) T1 = 0.5

M = 40; alpha = (M-1)/2; l = 0:M-1; wl = (2*np.pi/M)*l
Hrs = [np.ones(1,5),0.5,np.zeros(1,29),0.5,np.ones(1,4)]
Hdr = [1,1,0,0]; wdl = [0,0.25,0.25,1]
k1 = 0:np.floor((M-1)/2); k2 = np.floor((M-1)/2)+1:M-1
angH = [-alpha*(2*np.pi)/M*k1, alpha*(2*np.pi)/M*(M-k2)]
H = Hrs*np.exp(1j*angH)
h = np.real(ifft(H,M))
[db,mag,pha,grd,w] = freqz_m(h,1)
[Hr,ww,a,L] = Hr_Type2(h)
plt.subplot(1, 1, 1)
plt.subplot(2, 2, 1)
plt.plt.plt.plot(wlnp.arange(1, 21 + 1)np.pi,Hrsnp.arange(1, 21 + 1),'o',wdl,Hdr)
plt.plt.axis([0,1,-0.1,1.1]); plt.title('Frequency Samples, M=40,T1=0.5')

plt.xlabel('frequency in np.pi units')
 plt.ylabel('Hr(k)')
set(gca,'XTickMode','manual','XTick',[0,0.2,0.3,1])

set(gca,'YTickMode','manual','YTick',[0,0.5,1]); plt.grid(True)
plt.subplot(2, 2, 2)
 plt.plt.stem(l,h); plt.plt.axis([-1,M,-0.1,0.3])

plt.title('Impulse Response')
 plt.xlabel('n')
 plt.ylabel('h(n)')


plt.subplot(2, 2, 3)
 plt.plt.plt.plot(ww/np.pi,Hr,wlnp.arange(1, 21 + 1)np.pi,Hrsnp.arange(1, 21 + 1),'o')
plt.plt.axis([0,1,-0.1,1.1]); plt.title('Amplitude Response')
plt.xlabel('frequency in np.pi units')
 plt.ylabel('Hr(w)')
set(gca,'XTickMode','manual','XTick',[0,0.2,0.3,1])

set(gca,'YTickMode','manual','YTick',[0,0.5,1]); plt.grid(True)
plt.subplot(2, 2, 4)
plt.plt.plt.plot(w/np.pi,db)
 plt.plt.axis([0,1,-100,10]); plt.grid(True)
plt.title('Magnitude Response')
 plt.xlabel('frequency in np.pi units')


plt.ylabel('Decibels')


set(gca,'XTickMode','Manual','XTick',[0;0.2;0.3;1])
set(gca,'YTickMode','Manual','YTick',[-30;0])
set(gca,'YTickLabelMode','manual','YTickLabels',['30';' 0'])

# 
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
