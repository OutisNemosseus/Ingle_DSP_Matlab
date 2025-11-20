#!/usr/bin/env python3
# Title: Chapter 05: Example 5.23 High speed convolution
# Chapter: 05
# Source: Ingle DSP MATLAB Programs

import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# Chapter 05: Example 5.23 High speed convolution

# conv_time = np.zeros(1,150); fft_time = np.zeros(1,150)
# for N in range(1, 150 + 1):

    tc = 0; tf=0
    L = 2*N-1; nu = np.round((np.log10(L)/np.log10(2))+0.45); L = 2**nu
    for I in range(1, 100 + 1):

       h = randn(1,N)
       x = rand(1,N)
      t0 = clock; y1 = conv(h,x); t1=etime(clock,t0)
      tc = tc+t1
      t0 = clock; y2 = ifft(fft(h,L)*fft(x,L)); t2=etime(clock,t0)
      tf = tf+t2
# conv_time(N)=tc/100
    fft_time(N)=tf/100
# n = 1:150; plt.subplot(1, 1, 1)


plt.plt.plt.plot(nnp.arange(25, 150 + 1)
,conv_timenp.arange(25, 150 + 1),nnp.arange(25, 150 + 1),fft_timenp.arange(25, 150 + 1))

save times.txt conv_time fft_time -ascii -tabs


# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
