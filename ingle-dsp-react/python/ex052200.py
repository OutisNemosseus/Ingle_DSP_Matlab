#!/usr/bin/env python3
# Title: Computational Complexity of FFT using MATLAB
# Chapter: 05
# Source: Ingle DSP MATLAB Programs

import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# Computational Complexity of FFT using MATLAB

# Nmax = 2048
fft_time=np.zeros(1,Nmax)
for n in range(1, Nmax + 1, 1):

   disp(n)
   x=np.ones(1,n)
   t=clock;fft(x);fft_time(n)=etime(clock,t)
n=[1:1:Nmax]
plt.plt.plt.plot(n,fft_time,'.')


save fft_time.mat fft_time n
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
