#!/usr/bin/env python3
# Title: Chapter 8: Example 8.12
# Chapter: 08
# Source: Ingle DSP MATLAB Programs

import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# Chapter 8: Example 8.12

# Impulse Invariance Transformation

# Chebyshev-1 Lowpass Filter Design

# # Digital Filter Specifications:

wp = 0.2*np.pi;                         # digital Passband freq in Hz

ws = 0.3*np.pi;                         # digital Stopband freq in Hz

Rp = 1;                              # Passband ripple in dB

As = 15;                             # Stopband attenuation in dB



# Analog Prototype Specifications: Inverse mapping for frequencies

T = 1;                               # Set T=1

OmegaP = wp * T;                     # Prototype Passband freq

OmegaS = ws * T;                     # Prototype Stopband freq

ep = np.sqrt(10**(Rp/10)-1);             # Passband Ripple parameter

Ripple = np.sqrt(1/(1+ep*ep));          # Passband Ripple

Attn = 1/(10**(As/20));               # Stopband Attenuation



# Analog Chebyshev-1 Prototype Filter Calculation:

[cs,ds] = afd_chb1(OmegaP,OmegaS,Rp,As)
# # *** Chebyshev-1 Filter Order =  4 



# Impulse Invariance transformation:

[b,a] = imp_invr(cs,ds,T)
[C,B,A] = dir2par(b,a)

# # C =  []

# # B =-0.0833   -0.0246

# # 0.0833    0.0239

# # A = 1.0000   -1.4934    0.8392

# # 1.0000   -1.5658    0.6549





# Plotting

fig = plt.figure(1)
 plt.subplot(1, 1, 1)
[db,mag,pha,grd,w] = freqz_m(b,a)
plt.subplot(2, 2, 1)
 plt.plt.plt.plot(w/np.pi,mag)
 plt.title('Magnitude Response')
plt.xlabel('frequency in np.pi units')
 plt.ylabel('|H|')
 plt.plt.axis([0,1,0,1.1])

set(gca,'XTickMode','manual','XTick',[0,0.2,0.3,1])
set(gca,'YTickmode','manual','YTick',[0,Attn,Ripple,1]); plt.grid(True)
plt.subplot(2, 2, 3)
 plt.plt.plt.plot(w/np.pi,db)
 plt.title('Magnitude in dB')


plt.xlabel('frequency in np.pi units')
 plt.ylabel('decibels')
 plt.plt.axis([0,1,-40,5])
set(gca,'XTickMode','manual','XTick',[0,0.2,0.3,1])
set(gca,'YTickmode','manual','YTick',[-50,-15,-1,0]); plt.grid(True)
set(gca,'YTickLabelMode','manual','YTickLabels',['50';'15';' 1';' 0'])

plt.subplot(2, 2, 2)
 plt.plt.plt.plot(w/np.pi,pha/np.pi)
 plt.title('Phase Response')
plt.xlabel('frequency in np.pi units')
 plt.ylabel('np.pi units')
 plt.plt.axis([0,1,-1,1])
set(gca,'XTickMode','manual','XTick',[0,0.2,0.3,1])
set(gca,'YTickmode','manual','YTick',[-1,0,1]); plt.grid(True)
plt.subplot(2, 2, 4)
 plt.plt.plt.plot(w/np.pi,grd)
 plt.title('Group Delay')
plt.xlabel('frequency in np.pi units')
 plt.ylabel('Samples')
 plt.plt.axis([0,1,0,15])

set(gca,'XTickMode','manual','XTick',[0,0.2,0.3,1])
setnp.arange(gca,'YTickmode','manual','YTick',[0, 15] + 5, 5); plt.grid(True)
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
