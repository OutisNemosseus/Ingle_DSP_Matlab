// Chapter 05: Example 05.05: Frequency-domain sampling
// Chapter 05: Example 05.05: Frequency-domain sampling

const ex050500 = {
  "id": "ex050500",
  "title": "ex050500",
  "displayName": "Chapter 05: Example 05.05: Frequency-domain sampling",
  "description": "Chapter 05: Example 05.05: Frequency-domain sampling",
  "category": "DSP - Chapter 05",
  "chapter": "05",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: Chapter 05: Example 05.05: Frequency-domain sampling\n# Chapter: 05\n# Source: Ingle DSP MATLAB Programs\n\nimport matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 05: Example 05.05: Frequency-domain sampling\r\n\r\n# # x(n)=(0.7)**n * u(n)\r\n\r\n# X(z)=z/(z-0.7); |z|>0.7\r\n\r\nplt.subplot(1, 1, 1)\n# N = 5\nk = 0:1:N-1\nwk = 2*np.pi*k/N\nzk = np.exp(1j*wk)\nXk = (zk)/(zk-0.7)\nxn = np.real(idfs(Xk,N))\nxtilde = xn'* np.ones(1,8); xtilde = (xtilde(:))'\nplt.subplot(2, 2, 1)\n stemnp.arange(0, 39,xtilde + 1);plt.plt.axis([0,40,-0.1,1.5])\r\n\r\nplt.xlabel('n')\n plt.ylabel('xtilde(n)')\n plt.title('N=5')\n# N = 10\nk = 0:1:N-1\nwk = 2*np.pi*k/N\nzk = np.exp(1j*wk)\nXk = (zk)/(zk-0.7)\nxn = np.real(idfs(Xk,N))\nxtilde = xn'* np.ones(1,4); xtilde = (xtilde(:))'\nplt.subplot(2, 2, 2)\n stemnp.arange(0, 39,xtilde + 1);plt.plt.axis([0,40,-0.1,1.5])\r\n\r\nplt.xlabel('n')\n plt.ylabel('xtilde(n)')\n plt.title('N=10')\n# N = 20\nk = 0:1:N-1\nwk = 2*np.pi*k/N\nzk = np.exp(1j*wk)\nXk = (zk)/(zk-0.7)\nxn = np.real(idfs(Xk,N))\nxtilde = xn'* np.ones(1,2); xtilde = (xtilde(:))'\nplt.subplot(2, 2, 3)\n stemnp.arange(0, 39,xtilde + 1);plt.plt.axis([0,40,-0.1,1.5])\r\n\r\nplt.xlabel('n')\n plt.ylabel('xtilde(n)')\n plt.title('N=20')\n# N = 40\nk = 0:1:N-1\nwk = 2*np.pi*k/N\nzk = np.exp(1j*wk)\nXk = (zk)/(zk-0.7)\nxn = np.real(idfs(Xk,N))\nplt.subplot(2, 2, 4)\n stemnp.arange(0, 39,xn + 1);plt.plt.axis([0,40,-0.1,1.5])\r\n\r\nplt.xlabel('n')\n plt.ylabel('xtilde(n)')\n plt.title('N=40')\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
  "matlabCode": "% Chapter 05: Example 05.05: Frequency-domain sampling\r\n\r\n%\r\n\r\n% x(n)=(0.7)^n * u(n)\r\n\r\n% X(z)=z/(z-0.7); |z|>0.7\r\n\r\nsubplot(1,1,1)\r\n\r\n%\r\n\r\nN = 5;\r\n\r\nk = 0:1:N-1;\r\n\r\nwk = 2*pi*k/N;\r\n\r\nzk = exp(j*wk);\r\n\r\nXk = (zk)./(zk-0.7);\r\n\r\nxn = real(idfs(Xk,N));\r\n\r\nxtilde = xn'* ones(1,8); xtilde = (xtilde(:))';\r\n\r\nsubplot(2,2,1); stem(0:39,xtilde);axis([0,40,-0.1,1.5])\r\n\r\nxlabel('n'); ylabel('xtilde(n)'); title('N=5')\r\n\r\n%\r\n\r\nN = 10;\r\n\r\nk = 0:1:N-1;\r\n\r\nwk = 2*pi*k/N;\r\n\r\nzk = exp(j*wk);\r\n\r\nXk = (zk)./(zk-0.7);\r\n\r\nxn = real(idfs(Xk,N));\r\n\r\nxtilde = xn'* ones(1,4); xtilde = (xtilde(:))';\r\n\r\nsubplot(2,2,2); stem(0:39,xtilde);axis([0,40,-0.1,1.5])\r\n\r\nxlabel('n'); ylabel('xtilde(n)'); title('N=10')\r\n\r\n%\r\n\r\nN = 20;\r\n\r\nk = 0:1:N-1;\r\n\r\nwk = 2*pi*k/N;\r\n\r\nzk = exp(j*wk);\r\n\r\nXk = (zk)./(zk-0.7);\r\n\r\nxn = real(idfs(Xk,N));\r\n\r\nxtilde = xn'* ones(1,2); xtilde = (xtilde(:))';\r\n\r\nsubplot(2,2,3); stem(0:39,xtilde);axis([0,40,-0.1,1.5])\r\n\r\nxlabel('n'); ylabel('xtilde(n)'); title('N=20')\r\n\r\n%\r\n\r\nN = 40;\r\n\r\nk = 0:1:N-1;\r\n\r\nwk = 2*pi*k/N;\r\n\r\nzk = exp(j*wk);\r\n\r\nXk = (zk)./(zk-0.7);\r\n\r\nxn = real(idfs(Xk,N));\r\n\r\nsubplot(2,2,4); stem(0:39,xn);axis([0,40,-0.1,1.5])\r\n\r\nxlabel('n'); ylabel('xtilde(n)'); title('N=40')\r\n\r\n",
  "defaultParams": {},
  "params": [],
  "tags": [
    "chapter05",
    "dsp",
    "ex050500"
  ],
  "wikipediaLinks": [
    {
      "title": "Digital signal processing",
      "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
    }
  ]
};

export default ex050500;
