// conjugation property
// conjugation property

const ex031000 = {
  "id": "ex031000",
  "title": "ex031000",
  "displayName": "conjugation property",
  "description": "conjugation property",
  "category": "DSP - Chapter 03",
  "chapter": "03",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: conjugation property\n# Chapter: 03\n# Source: Ingle DSP MATLAB Programs\n\nimport numpy as np\n\nn = np.arange(-5, 11)  # -5 to 10\nx = np.random.rand(len(n)) + 1j*np.random.rand(len(n))\nk = np.arange(-100, 101)  # -100 to 100\nw = (np.pi/100)*k  # frequency between -pi and +pi\n\nX = x @ (np.exp(-1j*np.pi/100) ** np.outer(n, k))  # DTFT of x\n\n# conjugation property\ny = np.conj(x)  # signal conjugation\nY = y @ (np.exp(-1j*np.pi/100) ** np.outer(n, k))  # DTFT of y\n\n# verification\nY_check = np.conj(np.flip(X))  # np.conj(X(-w))\nerror = np.max(np.abs(Y - Y_check))  # Difference\n\nprint(f\"Error: {error}\")\n",
  "matlabCode": "n = -5:10; x = rand(1,length(n)) + j*rand(1,length(n));\r\n\r\nk = -100:100; w = (pi/100)*k;        % frequency between -pi and +pi\r\n\r\nX = x * (exp(-j*pi/100)).^(n'*k);    % DTFT of x\r\n\r\n% conjugation property\r\n\r\ny = conj(x);                         % signal conjugation\r\n\r\nY = y * (exp(-j*pi/100)).^(n'*k);    % DTFT of y\r\n\r\n% verification\r\n\r\nY_check = conj(fliplr(X));           % conj(X(-w))\r\n\r\nerror = max(abs(Y-Y_check))          % Difference\r\n\r\n",
  "defaultParams": {},
  "params": [],
  "tags": [
    "chapter03",
    "dsp",
    "ex031000"
  ],
  "wikipediaLinks": [
    {
      "title": "Digital signal processing",
      "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
    }
  ]
};

export default ex031000;
