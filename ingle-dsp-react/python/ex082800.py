#!/usr/bin/env python3
# Title: Chapter 8: Example 8.28
# Chapter: 08
# Source: Ingle DSP MATLAB Programs

import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# Chapter 8: Example 8.28

# Chebyshev-1 Highpass Filter Design:

# Use of the CHEBY1 function

# # Digital Filter Specifications:        # Type: Chebyshev-I highpass

ws = 0.4586*np.pi;                         # Dig. stopband edge frequency

wp = 0.6*np.pi;                            # Dig. passband edge frequency

Rp = 1;                                 # Passband ripple in dB

As = 15;                                # Stopband attenuation in dB

Ripple = 10 ** (-Rp/20);                 # Passband ripple

Attn = 10 ** (-As/20);                   # Passband attenuation



# Calculations of Chebyshev-I Filter Parameters:

[N,wn] = cheb1ord(wp/np.pi,ws/np.pi,Rp,As)
# Digital Chebyshev-I Highpass Filter Design:

[b,a] = cheby1(N,Rp,wn,'high')
# Cascade Form Realization:

[b0,B,A] = dir2cas(b,a)

# # b0 = 0.0243

# # B = 1.0000   -1.9991    0.9991

# # 1.0000   -2.0009    1.0009

# # A = 1.0000    1.0416    0.4019

# # 1.0000    0.5561    0.7647



# Plotting:

fig = plt.figure(1)
 plt.subplot(1, 1, 1)
[db,mag,pha,grd,w] = freqz_m(b,a)
plt.subplot(2, 2, 1)
plt.plt.plt.plot(w/np.pi,mag)
grid;plt.title('Magnitude Response')
plt.xlabel('Digital frequency in np.pi units')
 plt.plt.axis([0,1,0,1])

set(gca,'XTickMode','manual','XTick',[0;ws/np.pi;wp/np.pi;1])

set(gca,'XTickLabelMode','manual','XTickLabels',['  0 ';'0.46';'0.6 ';'  1 '])

set(gca,'YTickMode','manual','YTick',[0;Attn;Ripple;1])

plt.subplot(2, 2, 3)
plt.plt.plt.plot(w/np.pi,db)
grid;plt.title('Magnitude in dB')
plt.xlabel('frequency in np.pi units')
 plt.plt.axis([0,1,-30, 0])
plt.ylabel('decibels')
set(gca,'XTickMode','manual','XTick',[0;ws/np.pi;wp/np.pi;1])

set(gca,'XTickLabelMode','manual','XTickLabels',['  0 ';'0.46';'0.6 ';'  1 '])

set(gca,'YTickMode','manual','YTick',[-30;-As;-Rp;0])

set(gca,'YTickLabelMode','manual','YTickLabels',['30';'15';' 1';' 0'])

plt.subplot(2, 2, 2)
plt.plt.plt.plot(w/np.pi,pha/np.pi)
grid;plt.title('Phase Response')
plt.xlabel('frequency in np.pi units')
plt.ylabel('phase in np.pi units')
 plt.plt.axis([0,1,-1,1])

set(gca,'XTickMode','manual','XTick',[0;ws/np.pi;wp/np.pi;1])

set(gca,'XTickLabelMode','manual','XTickLabels',['  0 ';'0.46';'0.6 ';'  1 '])

plt.subplot(2, 2, 4)
plt.plt.plt.plot(w/np.pi,grd)
grid;plt.title('Group Delay')
plt.xlabel('frequency in np.pi units')


plt.ylabel('delay in samples')
set(gca,'XTickMode','manual','XTick',[0;ws/np.pi;wp/np.pi;1])

set(gca,'XTickLabelMode','manual','XTickLabels',['  0 ';'0.46';'0.6 ';'  1 '])


# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
