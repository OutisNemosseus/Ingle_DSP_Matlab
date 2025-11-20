#!/usr/bin/env python3
# Title: Chapter 7 Example 7.26
# Chapter: 07
# Source: Ingle DSP MATLAB Programs

import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# Chapter 7 Example 7.26

# Staircase filter design using PM algorithm

# w1 = 0; w2 = 0.3*np.pi; delta1 = 0.01
w3 = 0.4*np.pi; w4 = 0.7*np.pi; delta2 = 0.005
w5 = 0.8*np.pi; w6 = np.pi; delta3 = 0.001
deltaH = np.max([delta1,delta2,delta3]); deltaL = np.min([delta1,delta2,delta3])
weights = [delta3/delta1 delta3/delta2 1]

delta_f = np.min((w3-w2)/(2*np.pi), (w5-w3)/(2*np.pi))

M = np.ceil((-20*np.log10(np.sqrt(delta1*delta2))-13)/(14.6*delta_f)+1)

f = [0 w2/np.pi w3/np.pi w4/np.pi w5/np.pi 1]

m = [1 1 0.5 0.5 0 0]
h = remez(M-1,f,m,weights)
[db,mag,pha,grd,w] = freqz_m(h,[1])
delta_w = 2*np.pi/1000
w1i=np.floor(w1/delta_w)+1; w2i = np.floor(w2/delta_w)+1
w3i=np.floor(w3/delta_w)+1; w4i = np.floor(w4/delta_w)+1
w5i=np.floor(w5/delta_w)+1; w6i = np.floor(w6/delta_w)+1
Asd = -np.max(dbnp.arange(w5i, w6i + 1))

# optimum value was found at M=49

M = 49
h = remez(M-1,f,m,weights)
[db,mag,pha,grd,w] = freqz_m(h,[1])
Asd = -np.max(dbnp.arange(w5i, w6i + 1))

[Hr,omega,P,L] = ampl_res(h)
# # Plots

fig = plt.figure(1)
 plt.subplot(1, 1, 1)
plt.subplot(2, 2, 1)
 stemnp.arange([0, M-1],h + 1, 1); plt.title('Actual Impulse Response')
plt.plt.axis([0,M-1,-0.1,0.6]); plt.xlabel('n')
 plt.ylabel('h(n)')
set(gca,'XTickMode','manual','XTick',[0,M-1])

setnp.arange(gca,'YTickMode','manual','YTick',[-0.1, 0.6] + 0.1, 0.1)

plt.subplot(2, 2, 2)
plt.plt.plt.plot(w/np.pi,db)
plt.title('Magnitude Response in dB')


plt.plt.axis([0,1,-80,10]); plt.xlabel('frequency in np.pi units')
 plt.ylabel('DECIBELS')
set(gca,'XTickMode','manual','XTick',f)

set(gca,'YTickMode','manual','YTick',[-60,0])
set(gca,'YTickLabelMode','manual','YTickLabels',['60';' 0']);plt.grid(True)
plt.subplot(2, 2, 3)
plt.plt.plt.plot(omega/np.pi,Hr)
plt.title('Amplitude Response')


plt.plt.axis([0 1 -0.1 1.1]); plt.xlabel('frequency in np.pi units')
 plt.ylabel('Hr(w)')
set(gca,'XTickMode','manual','XTick',f)

set(gca,'YTickMode','manual','YTick',[0,0.5,1]);plt.grid(True)
delta_w = 2*np.pi/1000; sp_edge = w5/delta_w+1
plt.subplot(2, 2, 4)
 

b1w = omeganp.arange(w1i, w2i + 1)/np.pi; b1e = (Hrnp.arange(w1i, w2i + 1)-m(1))*weights(1)
b2w = omeganp.arange(w3i, w4i + 1)/np.pi; b2e = (Hrnp.arange(w3i, w4i + 1)-m(3))*weights(2)
b3w = omeganp.arange(w5i, w6i + 1)/np.pi; b3e = (Hrnp.arange(w5i, w6i + 1)-m(5))*weights(3)
plt.plt.plt.plot(b1w,b1e,b2w,b2e,b3w,b3e)


plt.title('Weighted Error')


plt.plt.axis([0,1,-delta3,delta3])
plt.xlabel('frequency in np.pi units')
 plt.ylabel('Hr(w)')
set(gca,'XTickMode','manual','XTick',f)

set(gca,'YTickMode','manual','YTick',[-delta3,0,delta3])
plt.grid(True)
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
