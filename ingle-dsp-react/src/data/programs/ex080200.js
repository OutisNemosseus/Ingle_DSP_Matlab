// Chapter 8: Example 8.2
// Chapter 8: Example 8.2

const ex080200 = {
  "id": "ex080200",
  "title": "ex080200",
  "displayName": "Chapter 8: Example 8.2",
  "description": "Chapter 8: Example 8.2",
  "category": "DSP - Chapter 08",
  "chapter": "08",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: Chapter 8: Example 8.2\n# Chapter: 08\n# Source: Ingle DSP MATLAB Programs\n\n# Chapter 8: Example 8.2\r\n\r\n# Calculation of Butterworth Ha(s) given |Ha(jW)|\r\n\r\n# N = 3; OmegaC = 0.5\n[b,a] = u_buttap(N,OmegaC)\n[C,B,A] = sdir2cas(b,a)\r\n\r\n# # C = 0.1250\r\n\r\n# # B = 0     0     1\r\n\r\n# # A = 1.0000    0.5000    0.2500\r\n\r\n# # 0    1.0000    0.5000",
  "matlabCode": "% Chapter 8: Example 8.2\r\n\r\n%            Calculation of Butterworth Ha(s) given |Ha(jW)|\r\n\r\n%\r\n\r\nN = 3; OmegaC = 0.5;\r\n\r\n[b,a] = u_buttap(N,OmegaC);\r\n\r\n[C,B,A] = sdir2cas(b,a)\r\n\r\n%%C = 0.1250\r\n\r\n%%B = 0     0     1\r\n\r\n%%A = 1.0000    0.5000    0.2500\r\n\r\n%%         0    1.0000    0.5000",
  "defaultParams": {},
  "params": [],
  "tags": [
    "chapter08",
    "dsp",
    "ex080200"
  ],
  "wikipediaLinks": [
    {
      "title": "Digital signal processing",
      "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
    }
  ]
};

export default ex080200;
