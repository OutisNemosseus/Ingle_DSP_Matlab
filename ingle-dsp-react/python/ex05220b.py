#!/usr/bin/env python3
# Title: Chapter 05: Example 5.22 Ploting of FFT execution times
# Chapter: 05
# Source: Ingle DSP MATLAB Programs

import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# Chapter 05: Example 5.22 Ploting of FFT execution times

# load fft_time.mat
top = np.ceil(np.max(fft_time))
# n = 1:2048
subplot

clg

plt.plt.plt.plot(n,fft_time,'.')
plt.plt.axis([0,2500,0,50])

plt.xlabel('N')
plt.ylabel('Time in Sec.')
plt.title('FFT execution times')
text(2100,top,'o(N*N)')

text(2100,top/2,'o(N*N/2)')

text(2100,top/3,'o(N*N/3)')

text(2100,top/4,'o(N*N/4)')

text(2100,1,'o(N*logN)')


# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
