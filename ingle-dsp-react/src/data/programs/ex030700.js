// verification
// verification

const ex030700 = {
  "id": "ex030700",
  "title": "ex030700",
  "displayName": "verification",
  "description": "verification",
  "category": "DSP - Chapter 03",
  "chapter": "03",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: verification\n# Chapter: 03\n# Source: Ingle DSP MATLAB Programs\n\nimport numpy as np\n\nx1 = np.random.rand(11)\nx2 = np.random.rand(11)\nn = np.arange(0, 11)  # 0 to 10\nalpha = 2\nbeta = 3\nk = np.arange(0, 501)  # 0 to 500\nw = (np.pi/500)*k\n\nX1 = x1 @ (np.exp(-1j*np.pi/500) ** np.outer(n, k))  # DTFT of x1\nX2 = x2 @ (np.exp(-1j*np.pi/500) ** np.outer(n, k))  # DTFT of x2\n\nx = alpha*x1 + beta*x2  # Linear combination of x1 & x2\nX = x @ (np.exp(-1j*np.pi/500) ** np.outer(n, k))  # DTFT of x\n\n# verification\nX_check = alpha*X1 + beta*X2  # Linear Combination of X1 & X2\nerror = np.max(np.abs(X - X_check))  # Difference\n\nprint(f\"Error: {error}\")\n",
  "matlabCode": "x1 = rand(1,11); x2 = rand(1,11); n = 0:10;\r\n\r\nalpha = 2; beta = 3;\r\n\r\nk = 0:500; w = (pi/500)*k;\r\n\r\nX1 = x1 * (exp(-j*pi/500)).^(n'*k);  % DTFT of x1\r\n\r\nX2 = x2 * (exp(-j*pi/500)).^(n'*k);  % DTFT of x2\r\n\r\nx = alpha*x1 + beta*x2;              % Linear combination of x1 & x2\r\n\r\nX = x * (exp(-j*pi/500)).^(n'*k);    % DTFT of x\r\n\r\n% verification\r\n\r\nX_check = alpha*X1 + beta*X2;        % Linear Combination of X1 & X2\r\n\r\nerror = max(abs(X-X_check))          % Difference\r\n\r\n",
  "defaultParams": {},
  "params": [],
  "tags": [
    "chapter03",
    "dsp",
    "ex030700"
  ],
  "wikipediaLinks": [
    {
      "title": "Digital signal processing",
      "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
    }
  ]
};

export default ex030700;
