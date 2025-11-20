// Chapter 8: Example 8.27
// Chapter 8: Example 8.27

const ex082700 = {
  "id": "ex082700",
  "title": "ex082700",
  "displayName": "Chapter 8: Example 8.27",
  "description": "Chapter 8: Example 8.27",
  "category": "DSP - Chapter 08",
  "chapter": "08",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: Chapter 8: Example 8.27\n# Chapter: 08\n# Source: Ingle DSP MATLAB Programs\n\nimport numpy as np\n# Chapter 8: Example 8.27\r\n\r\n# Chebyshev-1 Highpass Filter Design:\r\n\r\n# Use of the CHEBY1HPF function\r\n\r\n# # Digital Highpass Filter Specifications:\r\n\r\nwp = 0.6*np.pi;                         # digital Passband freq in Hz\r\n\r\nws = 0.4586*np.pi;                      # digital Stopband freq in Hz\r\n\r\nRp = 1;                              # Passband ripple in dB\r\n\r\nAs = 15;                             # Stopband attenuation in dB\r\n\r\n\r\n\r\n[b,a] = cheb1hpf(wp,ws,Rp,As)\n[C,B,A] = dir2cas(b,a)\r\n\r\n# # C = 0.0243\r\n\r\n# # B = 1.0000   -2.0000    1.0000\r\n\r\n# # 1.0000   -2.0000    1.0000\r\n\r\n# # A = 1.0000    1.0416    0.4019\r\n\r\n# # 1.0000    0.5561    0.7647\r\n\r\n",
  "matlabCode": "% Chapter 8: Example 8.27\r\n\r\n%            Chebyshev-1 Highpass Filter Design:\r\n\r\n%                Use of the CHEBY1HPF function\r\n\r\n%\r\n\r\n% Digital Highpass Filter Specifications:\r\n\r\nwp = 0.6*pi;                         % digital Passband freq in Hz\r\n\r\nws = 0.4586*pi;                      % digital Stopband freq in Hz\r\n\r\nRp = 1;                              % Passband ripple in dB\r\n\r\nAs = 15;                             % Stopband attenuation in dB\r\n\r\n\r\n\r\n[b,a] = cheb1hpf(wp,ws,Rp,As);\r\n\r\n[C,B,A] = dir2cas(b,a)\r\n\r\n%%C = 0.0243\r\n\r\n%%B = 1.0000   -2.0000    1.0000\r\n\r\n%%    1.0000   -2.0000    1.0000\r\n\r\n%%A = 1.0000    1.0416    0.4019\r\n\r\n%%    1.0000    0.5561    0.7647\r\n\r\n",
  "defaultParams": {},
  "params": [],
  "tags": [
    "chapter08",
    "dsp",
    "ex082700"
  ],
  "wikipediaLinks": [
    {
      "title": "Digital signal processing",
      "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
    }
  ]
};

export default ex082700;
