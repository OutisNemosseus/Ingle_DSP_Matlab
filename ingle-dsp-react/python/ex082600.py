#!/usr/bin/env python3
# Title: Chapter 8: Example 8.26
# Chapter: 08
# Source: Ingle DSP MATLAB Programs

import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# Chapter 8: Example 8.26

# Chebyshev-1 Highpass Filter Design:

# Use of the ZMAPPING function

# # Digital Lowpass Filter Specifications:

wplp = 0.2*np.pi;                         # digital Passband freq in Hz

wslp = 0.3*np.pi;                         # digital Stopband freq in Hz

  Rp = 1;                              # Passband ripple in dB

  As = 15;                             # Stopband attenuation in dB



# Analog Prototype Specifications: Inverse mapping for frequencies

T = 1; Fs = 1/T;                       # Set T=1

OmegaP = (2/T)*np.tan(wplp/2);            # Prewarp Prototype Passband freq

OmegaS = (2/T)*np.tan(wslp/2);            # Prewarp Prototype Stopband freq

ep = np.sqrt(10**(Rp/10)-1);               # Passband Ripple parameter

Ripple = np.sqrt(1/(1+ep*ep));            # Passband Ripple

Attn = 1/(10**(As/20));                 # Stopband Attenuation



# Analog Chebyshev Prototype Filter Calculation:

[cs,ds] = afd_chb1(OmegaP,OmegaS,Rp,As)
# # *** Chebyshev-1 Filter Order =  4 



# Bilinear transformation:

[blp,alp] = bilinear(cs,ds,T)
# Digital Highpass Filter Cutoff frequency:

wphp = 0.6*np.pi;                            # Passband edge frequency



# LP-to-HP frequency-band transformation:

alpha = -(np.cos((wplp+wphp)/2))/(np.cos((wplp-wphp)/2))

# # alpha = -0.3820



Nz = -[alpha,1]; Dz = [1,alpha]
[bhp,ahp] = zmapping(blp,alp,Nz,Dz)
[C,B,A] = dir2cas(bhp,ahp)

# # C = 0.0243

# # B = 1.0000   -2.0000    1.0000

# # 1.0000   -2.0000    1.0000

# # A = 1.0000    1.0416    0.4019

# # 1.0000    0.5561    0.7647



# Plotting

fig = plt.figure(1)
 plt.subplot(1, 1, 1)
[dbl,magl,phal,grdl,w] = freqz_m(blp,alp)
plt.subplot(2, 2, 1)
 plt.plt.plt.plot(w/np.pi,magl)
 plt.title('Lowpass Filter Magnitude Response')
plt.xlabel('frequency in np.pi units')
 plt.ylabel('|H|')
 plt.plt.axis([0,1,0,1])
set(gca,'XTickMode','manual','XTick',[0,0.2,1])
set(gca,'YTickMode','manual','YTick',[0,Ripple,1]);plt.grid(True)
plt.subplot(2, 2, 2)
 plt.plt.plt.plot(w/np.pi,dbl)
 plt.title('Lowpass Filter Magnitude in dB')


plt.xlabel('frequency in np.pi units')
 plt.ylabel('decibels')
 plt.xlim(0, 1)
plt.ylim(-30, 0)
set(gca,'XTickMode','manual','XTick',[0,0.2,1])

set(gca,'YTickMode','manual','YTick',[-30,-Rp,0]);plt.grid(True)
set(gca,'YTickLabelMode','manual','YTickLabels',['30';' 1';' 0'])
[dbh,magh,phah,grdh,w] = freqz_m(bhp,ahp)
plt.subplot(2, 2, 3)
 plt.plt.plt.plot(w/np.pi,magh)
 plt.title('Highpass Filter Magnitude Response')
plt.xlabel('frequency in np.pi units')
 plt.ylabel('|H|')
 plt.plt.axis([0,1,0,1])

set(gca,'XTickMode','manual','XTick',[0,0.6,1])
set(gca,'YTickMode','manual','YTick',[0,Ripple,1]);plt.grid(True)
plt.subplot(2, 2, 4)
 plt.plt.plt.plot(w/np.pi,dbh)
 plt.title('Highpass Filter Magnitude in dB')


plt.xlabel('frequency in np.pi units')
 plt.ylabel('decibels')
 plt.xlim(0, 1)
plt.ylim(-30, 0)
set(gca,'XTickMode','manual','XTick',[0,0.6,1])

set(gca,'YTickMode','manual','YTick',[-30,-Rp,0]);plt.grid(True)
set(gca,'YTickLabelMode','manual','YTickLabels',['30';' 1';' 0'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
