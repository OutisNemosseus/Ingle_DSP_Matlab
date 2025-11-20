#!/usr/bin/env python3
# Title: Chapter 07: Example 7.10 Bandpass filter design - Blackman window
# Chapter: 07
# Source: Ingle DSP MATLAB Programs

import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# Chapter 07: Example 7.10 Bandpass filter design - Blackman window

# ws1 = 0.2*np.pi; wp1 = 0.35*np.pi
wp2 = 0.65*np.pi; ws2 = 0.8*np.pi
As = 60
tr_width = np.min((wp1-ws1),(ws2-wp2))

M = np.ceil(11*np.pi/tr_width) + 1 # ;M=68

n=[0:1:M-1]
wc1 = (ws1+wp1)/2; wc2 = (wp2+ws2)/2
hd = ideal_lp(wc2,M) - ideal_lp(wc1,M)
w_bla = (blackman(M))'
h = hd * w_bla
[db,mag,pha,grd,w] = freqz_m(h,[1])
delta_w = 2*np.pi/1000
Rp = -np.min(dbnp.arange(wp1/delta_w+1, wp2/delta_w + 1, 1)) # Actua; Passband Ripple

As = -np.round(np.max(dbnp.arange(ws2/delta_w+1, 501 + 1, 1))) # Min Stopband Attenuation

# plots

plt.subplot(1, 1, 1)


plt.subplot(2, 2, 1)
 plt.plt.stem(n,hd); plt.title('Ideal Impulse Response')
plt.plt.axis([0 M-1 -0.4 0.5]); plt.xlabel('n')
 plt.ylabel('hd(n)')
plt.subplot(2, 2, 2)
 plt.plt.stem(n,w_bla);plt.title('Blackman Window')
plt.plt.axis([0 M-1 0 1.1]); plt.xlabel('n')
 plt.ylabel('w(n)')
plt.subplot(2, 2, 3)
 plt.plt.stem(n,h);plt.title('Actual Impulse Response')
plt.plt.axis([0 M-1 -0.4 0.5]); plt.xlabel('n')
 plt.ylabel('h(n)')
plt.subplot(2, 2, 4)
plt.plt.plt.plot(w/np.pi,db)
%set(gca,'FontName','cmr12')
plt.title('Magnitude Response in dB')
plt.grid(True)
plt.xlabel('frequency in np.pi units')
 plt.ylabel('Decibels')
plt.xlim(0, 1)
plt.ylim(-150, 10)
set(gca,'XTickMode','manual','XTick',[0,0.2,0.35,0.65,0.8,1])

set(gca,'YTickMode','manual','YTick',[-60,0])

set(gca,'YTickLabelMode','manual','YTickLabels',['60';' 0'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
