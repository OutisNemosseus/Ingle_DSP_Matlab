// Chapter 05: Example 5.23 High speed convolution
// Chapter 05: Example 5.23 High speed convolution

const ex052300 = {
  "id": "ex052300",
  "title": "ex052300",
  "displayName": "Chapter 05: Example 5.23 High speed convolution",
  "description": "Chapter 05: Example 5.23 High speed convolution",
  "category": "DSP - Chapter 05",
  "chapter": "05",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: Chapter 05: Example 5.23 High speed convolution\n# Chapter: 05\n# Source: Ingle DSP MATLAB Programs\n\nimport matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 05: Example 5.23 High speed convolution\r\n\r\n# conv_time = np.zeros(1,150); fft_time = np.zeros(1,150)\n# for N in range(1, 150 + 1):\n\n    tc = 0; tf=0\n    L = 2*N-1; nu = np.round((np.log10(L)/np.log10(2))+0.45); L = 2**nu\n    for I in range(1, 100 + 1):\n\n       h = randn(1,N)\n       x = rand(1,N)\n      t0 = clock; y1 = conv(h,x); t1=etime(clock,t0)\n      tc = tc+t1\n      t0 = clock; y2 = ifft(fft(h,L)*fft(x,L)); t2=etime(clock,t0)\n      tf = tf+t2\n# conv_time(N)=tc/100\n    fft_time(N)=tf/100\n# n = 1:150; plt.subplot(1, 1, 1)\n\r\n\r\nplt.plt.plt.plot(nnp.arange(25, 150 + 1)\n,conv_timenp.arange(25, 150 + 1),nnp.arange(25, 150 + 1),fft_timenp.arange(25, 150 + 1))\r\n\r\nsave times.txt conv_time fft_time -ascii -tabs\r\n\r\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
  "matlabCode": "% Chapter 05: Example 5.23 High speed convolution\r\n\r\n%\r\n\r\nconv_time = zeros(1,150); fft_time = zeros(1,150);\r\n\r\n%\r\n\r\nfor N = 1:150\r\n\r\n    tc = 0; tf=0;\r\n\r\n    L = 2*N-1; nu = round((log10(L)/log10(2))+0.45); L = 2^nu;\r\n\r\n    for I=1:100\r\n\r\n       h = randn(1,N);\r\n\r\n       x = rand(1,N);\r\n\r\n      t0 = clock; y1 = conv(h,x); t1=etime(clock,t0);\r\n\r\n      tc = tc+t1;\r\n\r\n      t0 = clock; y2 = ifft(fft(h,L).*fft(x,L)); t2=etime(clock,t0);\r\n\r\n      tf = tf+t2;\r\n\r\n    end\r\n\r\n%\r\n\r\n    conv_time(N)=tc/100;\r\n\r\n    fft_time(N)=tf/100;\r\n\r\nend\r\n\r\n%\r\n\r\nn = 1:150; subplot(1,1,1);\r\n\r\nplot(n(25:150),conv_time(25:150),n(25:150),fft_time(25:150))\r\n\r\nsave times.txt conv_time fft_time -ascii -tabs\r\n\r\n",
  "defaultParams": {},
  "params": [],
  "tags": [
    "chapter05",
    "dsp",
    "ex052300"
  ],
  "wikipediaLinks": [
    {
      "title": "Digital signal processing",
      "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
    }
  ]
};

export default ex052300;
