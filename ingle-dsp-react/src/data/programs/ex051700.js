// Chapter 05: Example-5.17: Overlap and save
// Chapter 05: Example-5.17: Overlap and save

const ex051700 = {
  "id": "ex051700",
  "title": "ex051700",
  "displayName": "Chapter 05: Example-5.17: Overlap and save",
  "description": "Chapter 05: Example-5.17: Overlap and save",
  "category": "DSP - Chapter 05",
  "chapter": "05",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: Chapter 05: Example-5.17: Overlap and save\n# Chapter: 05\n# Source: Ingle DSP MATLAB Programs\n\nimport numpy as np\n# Chapter 05: Example-5.17: Overlap and save\r\n\r\n# n = 0:9\nx = n+1; Lenx = len(x)\nh = [1,0,-1]; M = 3; M1 = M-1; L = N-M1\nN = 6; h = [h np.zeros(1,N-M)]\n# x = [np.zeros(1,M1), x, np.zeros(1,N-1)]\nK = np.floor((Lenx+M1-1)/(L))\nY = np.zeros(K+1,N)\nfor k in range(0, K + 1):\n\n\txk = xnp.arange(k*L+1, k*L+N + 1)\n\tY(k+1,:) = circonvf(xk,h,N)\nY = Y(:,M:N)'\ny = (Y(:))'",
  "matlabCode": "% Chapter 05: Example-5.17: Overlap and save\r\n\r\n%\r\n\r\nn = 0:9;\r\n\r\nx = n+1; Lenx = length(x);\r\n\r\nh = [1,0,-1]; M = 3; M1 = M-1; L = N-M1;\r\n\r\nN = 6; h = [h zeros(1,N-M)];\r\n\r\n%\r\n\r\nx = [zeros(1,M1), x, zeros(1,N-1)];\r\n\r\nK = floor((Lenx+M1-1)/(L));\r\n\r\nY = zeros(K+1,N);\r\n\r\nfor k=0:K\r\n\r\n\txk = x(k*L+1:k*L+N);\r\n\r\n\tY(k+1,:) = circonvf(xk,h,N);\r\n\r\nend\r\n\r\nY = Y(:,M:N)';\r\n\r\ny = (Y(:))';\r\n\r\n",
  "defaultParams": {},
  "params": [],
  "tags": [
    "chapter05",
    "dsp",
    "ex051700"
  ],
  "wikipediaLinks": [
    {
      "title": "Digital signal processing",
      "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
    }
  ]
};

export default ex051700;
