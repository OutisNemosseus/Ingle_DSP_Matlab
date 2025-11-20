#!/usr/bin/env python3
# Title: Chapter 05: Example 5.23 High speed convolution
# Chapter: 05
# Source: Ingle DSP MATLAB Programs

import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# Chapter 05: Example 5.23 High speed convolution

# part b) Plotting of saved data

# run after part a)

load times.txt -ascii
conv_time=times(1,:)
hsconv_time=times(2,:)
n = 1:150; plt.subplot(1, 1, 1)
 # set(gca,'LineWidth',10)
plt.plt.plt.plot(nnp.arange(25, 150 + 1)
,conv_timenp.arange(25, 150 + 1),nnp.arange(25, 150 + 1),hsconv_timenp.arange(25, 150 + 1))

plt.plt.axis([0,180,0,0.4])
set(gca,'XTickMode','manual','XTick',[25;50;75;100;125;150])
setnp.arange(gca,'YTickMode','manual','YTick',[0.05, 0.35] + 0.05, 0.05); # plt.grid(True)
text(150,0.17,'highspeed')

text(150,0.155,'convolution')

text(150,0.34,'convolution')

plt.xlabel('sequence length N')
 plt.ylabel('time in seconds')


plt.title('Comparison of convolution times')

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
