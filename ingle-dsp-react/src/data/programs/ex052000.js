// Chapter 05: Example 05.20: Eigenvalues and eigenvectors
// Chapter 05: Example 05.20: Eigenvalues and eigenvectors

const ex052000 = {
  "id": "ex052000",
  "title": "ex052000",
  "displayName": "Chapter 05: Example 05.20: Eigenvalues and eigenvectors",
  "description": "Chapter 05: Example 05.20: Eigenvalues and eigenvectors",
  "category": "DSP - Chapter 05",
  "chapter": "05",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: Chapter 05: Example 05.20: Eigenvalues and eigenvectors\n# Chapter: 05\n# Source: Ingle DSP MATLAB Programs\n\n# Chapter 05: Example 05.20: Eigenvalues and eigenvectors\r\n\r\n# H = [1,4,3,2;2,1,4,3;3,2,1,4;4,3,2,1]\n[V,D] = eig(H)\r\n\r\n# verification\r\n\r\nh = H(:,1)'\nHk = dft(h,4)\r\n\r\n",
  "matlabCode": "% Chapter 05: Example 05.20: Eigenvalues and eigenvectors\r\n\r\n%\r\n\r\nH = [1,4,3,2;2,1,4,3;3,2,1,4;4,3,2,1];\r\n\r\n[V,D] = eig(H)\r\n\r\n% verification\r\n\r\nh = H(:,1)';\r\n\r\nHk = dft(h,4)\r\n\r\n",
  "defaultParams": {},
  "params": [],
  "tags": [
    "chapter05",
    "dsp",
    "ex052000"
  ],
  "wikipediaLinks": [
    {
      "title": "Digital signal processing",
      "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
    }
  ]
};

export default ex052000;
