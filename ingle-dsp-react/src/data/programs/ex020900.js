// Example 2.9
// Example 2.9

const ex020900 = {
  "id": "ex020900",
  "title": "ex020900",
  "displayName": "Example 2.9",
  "description": "Example 2.9",
  "category": "DSP - Chapter 02",
  "chapter": "02",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: Example 2.9\n# Chapter: 02\n# Source: Ingle DSP MATLAB Programs\n\nimport matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Helper functions\ndef sigshift(x, n, n0):\n    \"\"\"Shift signal x(n) by n0\"\"\"\n    return x, n + n0\n\ndef sigadd(x1, n1, x2, n2):\n    \"\"\"Add two signals\"\"\"\n    n_start = np.min(n1[0], n2[0])\n    n_end = np.max(n1[-1], n2[-1])\n    n = np.arange(n_start, n_end + 1)\n    y = np.zeros(len(n))\n    \n    idx1 = np.where((n >= n1[0]) & (n <= n1[-1]))[0]\n    idx1_orig = np.arange(len(x1))\n    y[idx1] += x1[idx1_orig]\n    \n    idx2 = np.where((n >= n2[0]) & (n <= n2[-1]))[0]\n    idx2_orig = np.arange(len(x2))\n    y[idx2] += x2[idx2_orig]\n    \n    return y, n\n\ndef sigfold(x, n):\n    \"\"\"Fold signal x(n) to get x(-n)\"\"\"\n    return np.flip(x), -np.flip(n)\n\ndef conv_m(x, nx, h, nh):\n    \"\"\"Linear convolution with index tracking\"\"\"\n    ny_start = nx[0] + nh[0]\n    ny_end = nx[-1] + nh[-1]\n    ny = np.arange(ny_start, ny_end + 1)\n    y = np.convolve(x, h)\n    return y, ny\n\n# Example 2.9\n# x(n)=[3,11,7,0,-1,4,2]; nx = np.arange(-3, 4)\n# y(n)=x(n-2)+w(n)\n# ryx = cross(y,x)\n\nfig = plt.figure(figsize=(10, 10))\n\n# noise sequence 1\nx = np.array([3, 11, 7, 0, -1, 4, 2])\nnx = np.arange(-3, 4)  # given signal x(n)\n\ny, ny = sigshift(x, nx, 2)  # obtain x(n-2)\n\nw = np.random.randn(len(y))\nnw = ny  # generate w(n)\n\ny, ny = sigadd(y, ny, w, nw)  # obtain y(n) = x(n-2) + w(n)\n\nx_temp, nx_temp = sigfold(x, nx)  # obtain x(-n)\n\nrxy, nrxy = conv_m(y, ny, x_temp, nx_temp)  # cross-correlation\n\nplt.subplot(2, 1, 1)\nplt.plt.plt.stem(nrxy, rxy)\nplt.plt.plt.axis([-4, 8, -50, 250])\nplt.xlabel('lag variable l')\nplt.ylabel('rxy')\nplt.title('Crosscorrelation: noise sequence 1')\nmax_idx = np.argmax(rxy)\nplt.text(nrxy[max_idx], rxy[max_idx], 'Maximum', ha='center', va='bottom')\n\n# noise sequence 2\nx = np.array([3, 11, 7, 0, -1, 4, 2])\nnx = np.arange(-3, 4)  # given signal x(n)\n\ny, ny = sigshift(x, nx, 2)  # obtain x(n-2)\n\nw = np.random.randn(len(y))\nnw = ny  # generate w(n)\n\ny, ny = sigadd(y, ny, w, nw)  # obtain y(n) = x(n-2) + w(n)\n\nx_temp, nx_temp = sigfold(x, nx)  # obtain x(-n)\n\nrxy, nrxy = conv_m(y, ny, x_temp, nx_temp)  # cross-correlation\n\nplt.subplot(2, 1, 2)\nplt.plt.plt.stem(nrxy, rxy)\nplt.plt.plt.axis([-4, 8, -50, 250])\nplt.xlabel('lag variable l')\nplt.ylabel('rxy')\nplt.title('Crosscorrelation: noise sequence 2')\nmax_idx = np.argmax(rxy)\nplt.text(nrxy[max_idx], rxy[max_idx], 'Maximum', ha='center', va='bottom')\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
  "matlabCode": "% Example 2.9\r\n\r\n%\r\n\r\n% x(n)=[3,11,7,0,-1,4,2]; nx = [-3:3]\r\n\r\n% y(n)=x(n-2)+w(n)\r\n\r\n% ryx = cross(y,x)\r\n\r\n%\r\n\r\n% noise sequence 1\r\n\r\nx = [3, 11, 7, 0, -1, 4, 2]; nx=[-3:3]; % given signal x(n)\r\n\r\n[y,ny] = sigshift(x,nx,2);              % obtain x(n-2)\r\n\r\nw = randn(1,length(y)); nw = ny;        % generate w(n)\r\n\r\n[y,ny] = sigadd(y,ny,w,nw);             % obtain y(n) = x(n-2) + w(n)\r\n\r\n[x,nx] = sigfold(x,nx);                 % obtain x(-n)\r\n\r\n[rxy,nrxy] = conv_m(y,ny,x,nx);         % cross-corrlation\r\n\r\nsubplot(1,1,1)\r\n\r\nsubplot(2,1,1);stem(nrxy,rxy)\r\n\r\naxis([-4,8,-50,250]);xlabel('lag variable l')\r\n\r\nylabel('rxy');title('Crosscorrelation: noise sequence 1')\r\n\r\ngtext('Maximum')\r\n\r\n%\r\n\r\n% noise sequence 2\r\n\r\nx = [3, 11, 7, 0, -1, 4, 2]; nx=[-3:3]; % given signal x(n)\r\n\r\n[y,ny] = sigshift(x,nx,2);              % obtain x(n-2)\r\n\r\nw = randn(1,length(y)); nw = ny;        % generate w(n)\r\n\r\n[y,ny] = sigadd(y,ny,w,nw);             % obtain y(n) = x(n-2) + w(n)\r\n\r\n[x,nx] = sigfold(x,nx);                 % obtain x(-n)\r\n\r\n[rxy,nrxy] = conv_m(y,ny,x,nx);         % cross-corrlation\r\n\r\nsubplot(2,1,2);stem(nrxy,rxy)\r\n\r\ngtext('Maximum')\r\n\r\naxis([-4,8,-50,250]);xlabel('lag variable l')\r\n\r\nylabel('rxy');title('Crosscorrelation: noise sequence 2')",
  "defaultParams": {},
  "params": [],
  "tags": [
    "chapter02",
    "dsp",
    "ex020900"
  ],
  "wikipediaLinks": [
    {
      "title": "Digital signal processing",
      "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
    }
  ]
};

export default ex020900;
