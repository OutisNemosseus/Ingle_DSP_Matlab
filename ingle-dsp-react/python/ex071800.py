#!/usr/bin/env python3
# Title: Chapter 7: Example 7.18
# Chapter: 07
# Source: Ingle DSP MATLAB Programs

import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# Chapter 7: Example 7.18

# Freq. Samp. Tech.: Highpass, Optimum method T1

# ws=0.6pi, wp=0.8pi, Rp=1dB, As=50dB

# M=33, T1 = 0.1095; T2 = 0.598
M = 33; alpha = (M-1)/2; l = 0:M-1; wl = (2*np.pi/M)*l
T1 = 0.1095; T2 = 0.598
Hrs = [np.zeros(1,11),T1,T2,np.ones(1,8),T2,T1,np.zeros(1,10)]
Hdr = [0,0,1,1]; wdl = [0,0.6,0.8,1]
k1 = 0:np.floor((M-1)/2); k2 = np.floor((M-1)/2)+1:M-1
angH = [-alpha*(2*np.pi)/M*k1, alpha*(2*np.pi)/M*(M-k2)]
H = Hrs*np.exp(1j*angH)
h = np.real(ifft(H,M))
[db,mag,pha,grd,w] = freqz_m(h,1)
[Hr,ww,a,L] = Hr_Type1(h)
plt.subplot(1, 1, 1)
plt.subplot(2, 2, 1)
plt.plt.plt.plot(wlnp.arange(1, 17 + 1)np.pi,Hrsnp.arange(1, 17 + 1),'o',wdl,Hdr)
plt.plt.axis([0,1,-0.1,1.1]); plt.title('Highpass, M=33,T1=0.1095,T2=0.598')

plt.xlabel('frequency in np.pi units')
 plt.ylabel('Hr(k)')
set(gca,'XTickMode','manual','XTick',[0;.6;.8;1])

set(gca,'XTickLabelMode','manual','XTickLabels',[' 0';'.6';'.8';' 1'])

set(gca,'YTickMode','manual','YTick',[0,0.109,0.59,1]); plt.grid(True)
plt.subplot(2, 2, 2)
 plt.plt.stem(l,h); plt.plt.axis([-1,M,-0.4,0.4])

plt.title('Impulse Response')
 plt.xlabel('n')
 plt.ylabel('h(n)')


plt.subplot(2, 2, 3)
 plt.plt.plt.plot(ww/np.pi,Hr,wlnp.arange(1, 17 + 1)np.pi,Hrsnp.arange(1, 17 + 1),'o')
plt.plt.axis([0,1,-0.1,1.1]); plt.title('Amplitude Response')
plt.xlabel('frequency in np.pi units')
 plt.ylabel('Hr(w)')
set(gca,'XTickMode','manual','XTick',[0;.6;.8;1])

set(gca,'XTickLabelMode','manual','XTickLabels',[' 0';'.6';'.8';' 1'])

set(gca,'YTickMode','manual','YTick',[0,0.109,0.59,1]); plt.grid(True)
plt.subplot(2, 2, 4)
plt.plt.plt.plot(w/np.pi,db)
 plt.plt.axis([0,1,-100,10]); plt.grid(True)
plt.title('Magnitude Response')
 plt.xlabel('frequency in np.pi units')


plt.ylabel('Decibels')


set(gca,'XTickMode','manual','XTick',[0;.6;.8;1])

set(gca,'XTickLabelMode','manual','XTickLabels',[' 0';'.6';'.8';' 1'])

set(gca,'YTickMode','Manual','YTick',[-50;0])
set(gca,'YTickLabelMode','manual','YTickLabels',['50';' 0'])

# 
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
