// signal shifted by two samples
// signal shifted by two samples

const ex030800 = {
  "id": "ex030800",
  "title": "ex030800",
  "displayName": "signal shifted by two samples",
  "description": "signal shifted by two samples",
  "category": "DSP - Chapter 03",
  "chapter": "03",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: signal shifted by two samples\n# Chapter: 03\n# Source: Ingle DSP MATLAB Programs\n\nimport numpy as np\n\nx = np.random.rand(11)\nn = np.arange(0, 11)  # 0 to 10\nk = np.arange(0, 501)  # 0 to 500\nw = (np.pi/500)*k\n\nX = x @ (np.exp(-1j*np.pi/500) ** np.outer(n, k))  # DTFT of x\n\n# signal shifted by two samples\ny = x\nm = n + 2\nY = y @ (np.exp(-1j*np.pi/500) ** np.outer(m, k))  # DTFT of y\n\n# verification\nY_check = (np.exp(-1j*2*w)) * X  # multiplication by np.exp(-j2w)\nerror = np.max(np.abs(Y - Y_check))  # Difference\n\nprint(f\"Error: {error}\")\n",
  "matlabCode": "x = rand(1,11); n = 0:10;\r\n\r\nk = 0:500; w = (pi/500)*k;\r\n\r\nX = x * (exp(-j*pi/500)).^(n'*k);    % DTFT of x\r\n\r\n% signal shifted by two samples\r\n\r\ny = x; m = n+2;\r\n\r\nY = y * (exp(-j*pi/500)).^(m'*k);    % DTFT of y\r\n\r\n% verification\r\n\r\nY_check = (exp(-j*2).^w).*X;         % multiplication by exp(-j2w)\r\n\r\nerror = max(abs(Y-Y_check))          % Difference\r\n\r\n",
  "defaultParams": {},
  "params": [],
  "tags": [
    "chapter03",
    "dsp",
    "ex030800"
  ],
  "wikipediaLinks": [
    {
      "title": "Digital signal processing",
      "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
    }
  ]
};

export default ex030800;
