// Chapter 6: Example 6.7
// Chapter 6: Example 6.7

const ex060700 = {
  "id": "ex060700",
  "title": "ex060700",
  "displayName": "Chapter 6: Example 6.7",
  "description": "Chapter 6: Example 6.7",
  "category": "DSP - Chapter 06",
  "chapter": "06",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: Chapter 6: Example 6.7\n# Chapter: 06\n# Source: Ingle DSP MATLAB Programs\n\nimport numpy as np\n# Chapter 6: Example 6.7\r\n\r\n# Freq. Samp. Form: given frequency samples\r\n\r\n# M = 32; alpha = (M-1)/2; k = 0:M-1; wk = (2*np.pi/M)*k\nmagHk = [1,1,1,0.5,np.zeros(1,25),0.5,1,1]\nk1 = 0:15; k2 = 16:M-1\nangHk = [-alpha*(2*np.pi)/M*k1, alpha*(2*np.pi)/M*(M-k2)]\nH = magHk*np.exp(1j*angHk)\nh = np.real(ifft(H,M))\n[C,B,A] = dir2fs(h)",
  "matlabCode": "% Chapter 6: Example 6.7\r\n\r\n%            Freq. Samp. Form: given frequency samples\r\n\r\n%\r\n\r\nM = 32; alpha = (M-1)/2; k = 0:M-1; wk = (2*pi/M)*k;\r\n\r\nmagHk = [1,1,1,0.5,zeros(1,25),0.5,1,1];\r\n\r\nk1 = 0:15; k2 = 16:M-1;\r\n\r\nangHk = [-alpha*(2*pi)/M*k1, alpha*(2*pi)/M*(M-k2)];\r\n\r\nH = magHk.*exp(j*angHk);\r\n\r\nh = real(ifft(H,M));\r\n\r\n[C,B,A] = dir2fs(h)",
  "defaultParams": {},
  "params": [],
  "tags": [
    "chapter06",
    "dsp",
    "ex060700"
  ],
  "wikipediaLinks": [
    {
      "title": "Digital signal processing",
      "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
    }
  ]
};

export default ex060700;
