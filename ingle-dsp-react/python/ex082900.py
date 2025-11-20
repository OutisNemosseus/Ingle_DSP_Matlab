#!/usr/bin/env python3
# Title: Chapter 8: Example 8.29
# Chapter: 08
# Source: Ingle DSP MATLAB Programs

import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# Chapter 8: Example 8.29

# Elliptic Bandpass Filter Design:

# Use of the ELLIP function

# # Digital Filter Specifications:        # Type: Elliptic Bandpass

ws = [0.3*np.pi 0.75*np.pi];                  # Dig. stopband edge frequency

wp = [0.4*np.pi 0.6*np.pi];                   # Dig. passband edge frequency

Rp = 1;	                                # Passband ripple in dB

As = 40;                                # Stopband attenuation in dB

Ripple = 10 ** (-Rp/20);                 # Passband ripple

Attn = 10 ** (-As/20);                   # Passband attenuation



# Calculations of Elliptic Filter Parameters:

[N,wn] = ellipord(wp/np.pi,ws/np.pi,Rp,As)
# Digital Elliptic Bandpass Filter Design:

[b,a] = ellip(N,Rp,As,wn)
# Cascade Form Realization:

[b0,B,A] = dir2cas(b,a)

# # b0 = 0.0197

# # B = 1.0000    1.5066    1.0000

# # 1.0000    0.9268    1.0000

# # 1.0000   -0.9268    1.0000

# # 1.0000   -1.5066    1.0000

# # A = 1.0000    0.5963    0.9399

# # 1.0000    0.2774    0.7929

# # 1.0000   -0.2774    0.7929

# # 1.0000   -0.5963    0.9399



# Plotting:

fig = plt.figure(1)
 plt.subplot(1, 1, 1)
[db,mag,pha,grd,w] = freqz_m(b,a)
plt.subplot(2, 2, 1)
plt.plt.plt.plot(w/np.pi,mag)
grid;plt.title('Magnitude Response')
plt.xlabel('frequency in np.pi units')
 plt.xlim(0,, 1,)
plt.ylim(0,, 1)
set(gca,'XTickMode','manual','XTick',[0;0.3;0.4;0.6;0.75;1])

set(gca,'YTickMode','manual','YTick',[0,Ripple,1])
plt.subplot(2, 2, 3)
plt.plt.plt.plot(w/np.pi,db)
grid;plt.title('Magnitude in dB')
plt.xlabel('frequency in np.pi units')
 plt.xlim(0, 1)
plt.ylim(-50, 0)
set(gca,'XTickMode','manual','XTick',[0;0.3;0.4;0.6;0.75;1])

set(gca,'YTickMode','manual','YTick',[-40;0])

set(gca,'YTickLabelMode','manual','YTickLabels',['40';' 0'])

plt.subplot(2, 2, 2)
plt.plt.plt.plot(w/np.pi,pha/np.pi)
grid;plt.title('Phase Response')
plt.xlabel('frequency in np.pi units')
plt.ylabel('phase in np.pi units')
set(gca,'XTickMode','manual','XTick',[0;0.3;0.4;0.6;0.75;1])

plt.subplot(2, 2, 4)
plt.plt.plt.plot(w/np.pi,grd)
grid;plt.title('Group Delay')
plt.xlabel('frequency in np.pi units')
 plt.ylabel('samples')
set(gca,'XTickMode','manual','XTick',[0;0.3;0.4;0.6;0.75;1])


# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
