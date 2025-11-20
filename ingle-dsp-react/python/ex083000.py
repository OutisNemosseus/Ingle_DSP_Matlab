#!/usr/bin/env python3
# Title: Chapter 8: Example 8.30
# Chapter: 08
# Source: Ingle DSP MATLAB Programs

import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# Chapter 8: Example 8.30

# Chebyshev-2 Bandstop Filter Design:

# Use of the CHEBY2 function

# # Digital Filter Specifications:        # Type: Chebyshev-II Bandstop

ws = [0.4*np.pi 0.7*np.pi];                   # Dig. stopband edge frequency

wp = [0.25*np.pi 0.8*np.pi];                  # Dig. passband edge frequency

Rp = 1;	                                # Passband ripple in dB

As = 40;                                # Stopband attenuation in dB

Ripple = 10 ** (-Rp/20);                 # Passband ripple

Attn = 10 ** (-As/20);                   # Passband attenuation



# Calculations of Chebyshev-II Filter Parameters:

[N,wn] = cheb2ord(wp/np.pi,ws/np.pi,Rp,As)
# Digital Chebyshev-II Bandstop Filter Design:

[b,a] = cheby2(N,As,ws/np.pi,'stop')
# Cascade Form Realization:

[b0,B,A] = dir2cas(b,a)

# # b0 = 0.1558

# # B = 1.0000    1.1456    1.0000

# # 1.0000    0.8879    1.0000

# # 1.0000    0.3511    1.0000

# # 1.0000   -0.2434    1.0000

# # 1.0000   -0.5768    1.0000

# # A = 1.0000    1.3041    0.8031

# # 1.0000    0.8901    0.4614

# # 1.0000    0.2132    0.2145

# # 1.0000   -0.4713    0.3916

# # 1.0000   -0.8936    0.7602



# Plotting:

[db,mag,pha,grd,w] = freqz_m(b,a)
plt.subplot(2, 2, 1)
plt.plt.plt.plot(w/np.pi,mag)
grid;plt.title('Magnitude Response')
plt.xlabel('Digital frequency in np.pi units')
 plt.xlim(0, 1)
plt.ylim(0, 1)
set(gca,'XTickMode','manual','XTick',[0;0.25;0.4;0.7;0.8;1])

set(gca,'YTickMode','manual','YTick',[0;Ripple;1])

plt.subplot(2, 2, 3)
plt.plt.plt.plot(w/np.pi,db)
grid;plt.title('Magnitude in dB')
plt.xlabel('Digital frequency in np.pi units')
 plt.xlim(0, 1)
plt.ylim(-50, 0)
set(gca,'XTickMode','manual','XTick',[0;0.25;0.4;0.7;0.8;1])

set(gca,'YTickMode','manual','YTick',[-40;0])

plt.subplot(2, 2, 2)
plt.plt.plt.plot(w/np.pi,pha/np.pi)
grid;plt.title('Phase Response')
plt.xlabel('Digital frequency in np.pi units')
plt.ylabel('phase in np.pi units')
set(gca,'XTickMode','manual','XTick',[0;0.25;0.4;0.7;0.8;1])

plt.subplot(2, 2, 4)
plt.plt.plt.plot(w/np.pi,grd)
grid;plt.title('Group Delay')
plt.xlabel('Digital frequency in np.pi units')
 

set(gca,'XTickMode','manual','XTick',[0;0.25;0.4;0.7;0.8;1])

subplot
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
