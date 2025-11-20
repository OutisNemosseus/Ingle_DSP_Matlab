// folding property
// folding property

const ex031100 = {
  "id": "ex031100",
  "title": "ex031100",
  "displayName": "folding property",
  "description": "folding property",
  "category": "DSP - Chapter 03",
  "chapter": "03",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: folding property\n# Chapter: 03\n# Source: Ingle DSP MATLAB Programs\n\nimport numpy as np\n\nn = np.arange(-5, 11)  # -5 to 10\nx = np.random.rand(len(n))\nk = np.arange(-100, 101)  # -100 to 100\nw = (np.pi/100)*k  # frequency between -pi and +pi\n\nX = x @ (np.exp(-1j*np.pi/100) ** np.outer(n, k))  # DTFT of x\n\n# folding property\ny = np.flip(x)\nm = -np.flip(n)  # signal folding\nY = y @ (np.exp(-1j*np.pi/100) ** np.outer(m, k))  # DTFT of y\n\n# verification\nY_check = np.flip(X)  # X(-w)\nerror = np.max(np.abs(Y - Y_check))  # Difference\n\nprint(f\"Error: {error}\")\n",
  "matlabCode": "n = -5:10; x = rand(1,length(n));\r\n\r\nk = -100:100; w = (pi/100)*k;        % frequency between -pi and +pi\r\n\r\nX = x * (exp(-j*pi/100)).^(n'*k);    % DTFT of x\r\n\r\n% folding property\r\n\r\ny = fliplr(x); m = -fliplr(n);       % signal folding\r\n\r\nY = y * (exp(-j*pi/100)).^(m'*k);    % DTFT of y\r\n\r\n% verification\r\n\r\nY_check = fliplr(X);                 % X(-w)\r\n\r\nerror = max(abs(Y-Y_check))          % Difference\r\n\r\n",
  "defaultParams": {},
  "params": [],
  "tags": [
    "chapter03",
    "dsp",
    "ex031100"
  ],
  "wikipediaLinks": [
    {
      "title": "Digital signal processing",
      "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
    }
  ]
};

export default ex031100;
