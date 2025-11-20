#!/usr/bin/env python3
# Title: Chapter 8: Example 8.4
# Chapter: 08
# Source: Ingle DSP MATLAB Programs

import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# Chapter 8: Example 8.4

# Butterworth Lowpass Analog filter design

# Wp = 0.2*np.pi; Ws = 0.3*np.pi; Rp = 7; As = 16
Ripple = 10 ** (-Rp/20); Attn = 10 ** (-As/20)
# Analog filter design:

[b,a] = afd_butt(Wp,Ws,Rp,As)
# # *** Butterworth Filter Order =  3 



# Calculation of second-order sections:

[C,B,A] = sdir2cas(b,a)

# # C = 0.1238

# # B = 0     0     1

# # A = 1.0000    0.4985    0.2485

# # 0    1.0000    0.4985



# Calculation of Frequency Response:

[db,mag,pha,w] = freqs_m(b,a,0.5*np.pi)
# Calculation of Impulse response:

[ha,x,t] = impulse(b,a)
# Plots

plt.subplot(2, 2, 1)
 plt.plt.plt.plot(w/np.pi,mag)
plt.title('Magnitude Response')
plt.xlabel('Analog frequency in np.pi units')
 plt.ylabel('|H|')
 plt.plt.axis([0,0.5,0,1.1])

set(gca,'XTickMode','manual','XTick',[0,0.2,0.3,0.5])
set(gca,'YTickmode','manual','YTick',[0,Attn,Ripple,1]); plt.grid(True)
plt.subplot(2, 2, 2)
 plt.plt.plt.plot(w/np.pi,db)
plt.title('Magnitude in dB')
plt.xlabel('Analog frequency in np.pi units')
 plt.ylabel('decibels')
 plt.plt.axis([0,0.5,-30,5])

set(gca,'XTickMode','manual','XTick',[0,0.2,0.3,0.5])
set(gca,'YTickmode','manual','YTick',[-30,-As,-Rp,0]); plt.grid(True)
set(gca,'YTickLabelMode','manual','YTickLabels',['30';'16';' 7';' 0'])

plt.subplot(2, 2, 3)
 plt.plt.plt.plot(w/np.pi,pha/np.pi)
 plt.title('Phase Response')
plt.xlabel('Analog frequency in np.pi units')
 plt.ylabel('radians')
 plt.plt.axis([0,0.5,-1,1])

set(gca,'XTickMode','manual','XTick',[0,0.2,0.3,0.5])
set(gca,'YTickmode','manual','YTick',[-1,-0.5,0,0.5,1]); plt.grid(True)
plt.subplot(2, 2, 4)
 plt.plt.plt.plot(t,ha,[0,np.max(t)
],[0,0]); plt.title('Impulse Response')
plt.xlabel('time in seconds')
 plt.ylabel('ha(t)')
 plt.plt.axis([0,np.max(t),np.min(ha),np.max(ha)])


# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
