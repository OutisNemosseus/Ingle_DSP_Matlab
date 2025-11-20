// Chapter 5: Example 5.02
// Chapter 5: Example 5.02

const ex050200 = {
  "id": "ex050200",
  "title": "ex050200",
  "displayName": "Chapter 5: Example 5.02",
  "description": "Chapter 5: Example 5.02",
  "category": "DSP - Chapter 05",
  "chapter": "05",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: Chapter 5: Example 5.02\n# Chapter: 05\n# Source: Ingle DSP MATLAB Programs\n\nimport matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 5: Example 5.02\r\n\r\n# L = 5; N = 20\nx = [np.ones(1,L), np.zeros(1,N-L)]\nxn = x' * np.ones(1,3)\nxn = (xn(:))'\nn = -N:1:2*N-1\nplt.subplot(1, 1, 1)\nplt.subplot(2, 1, 2)\n\r\n\r\nplt.plt.stem(n,xn); plt.xlabel('n')\n plt.ylabel('xtilde(n)')\nplt.title('Three periods of xtilde(n)')\nplt.plt.axis([-N,2*N-1,-0.5,1.5])\r\n\r\n# print -deps2 fg0502.eps\r\n\r\n# plt.subplot(1, 1, 1)\n# Part (b)1\r\n\r\nL = 5; N = 20\nxn = [np.ones(1,L), np.zeros(1,N-L)]\nXk = dfs(xn,N)\nmagXk = np.abs([Xknp.arange(N/2+1, N + 1) Xknp.arange(1, N/2+1 + 1)])\nk = [-N/2:N/2]\nplt.subplot(2, 2, 1)\n plt.plt.stem(k,magXk); plt.plt.axis([-N/2,N/2,-0.5,5.5])\r\n\r\nplt.xlabel('k')\n plt.ylabel('Xtilde(k)')\nplt.title('DFS of SQ. wave, L=5, N=20')\r\n\r\n# Part (b)2\r\n\r\nL = 5; N = 40\nxn = [np.ones(1,L), np.zeros(1,N-L)]\nXk = dfs(xn,N)\nmagXk = np.abs([Xknp.arange(N/2+1, N + 1) Xknp.arange(1, N/2+1 + 1)])\nk = [-N/2:N/2]\nplt.subplot(2, 2, 2)\n plt.plt.stem(k,magXk); plt.plt.axis([-N/2,N/2,-0.5,5.5])\r\n\r\nplt.xlabel('k')\n plt.ylabel('Xtilde(k)')\nplt.title('DFS of SQ. wave, L=5, N=40')\r\n\r\n# Part (b)3\r\n\r\nL = 5; N = 60\nxn = [np.ones(1,L), np.zeros(1,N-L)]\nXk = dfs(xn,N)\nmagXk = np.abs([Xknp.arange(N/2+1, N + 1) Xknp.arange(1, N/2+1 + 1)])\nk = [-N/2:N/2]\nplt.subplot(2, 2, 3)\n plt.plt.stem(k,magXk); plt.plt.axis([-N/2,N/2,-0.5,5.5])\r\n\r\nplt.xlabel('k')\n plt.ylabel('Xtilde(k)')\nplt.title('DFS of SQ. wave, L=5, N=60')\r\n\r\n# Part (b)4\r\n\r\nL = 7; N = 60\nxn = [np.ones(1,L), np.zeros(1,N-L)]\nXk = dfs(xn,N)\nmagXk = np.abs([Xknp.arange(N/2+1, N + 1) Xknp.arange(1, N/2+1 + 1)])\nk = [-N/2:N/2]\nplt.subplot(2, 2, 4)\n plt.plt.stem(k,magXk); plt.plt.axis([-N/2,N/2,-0.5,7.5])\r\n\r\nplt.xlabel('k')\n plt.ylabel('Xtilde(k)')\nplt.title('DFS of SQ. wave, L=7, N=60')\r\n\r\n# print -deps2 fg0502b.eps\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
  "matlabCode": "% Chapter 5: Example 5.02\r\n\r\n%\r\n\r\nL = 5; N = 20;\r\n\r\nx = [ones(1,L), zeros(1,N-L)];\r\n\r\nxn = x' * ones(1,3);\r\n\r\nxn = (xn(:))';\r\n\r\nn = -N:1:2*N-1;\r\n\r\nsubplot(1,1,1);subplot(2,1,2);\r\n\r\nstem(n,xn); xlabel('n'); ylabel('xtilde(n)')\r\n\r\ntitle('Three periods of xtilde(n)')\r\n\r\naxis([-N,2*N-1,-0.5,1.5])\r\n\r\n%print -deps2 fg0502.eps\r\n\r\n%\r\n\r\nsubplot(1,1,1)\r\n\r\n% Part (b)1\r\n\r\nL = 5; N = 20;\r\n\r\nxn = [ones(1,L), zeros(1,N-L)];\r\n\r\nXk = dfs(xn,N);\r\n\r\nmagXk = abs([Xk(N/2+1:N) Xk(1:N/2+1)]);\r\n\r\nk = [-N/2:N/2];\r\n\r\nsubplot(2,2,1); stem(k,magXk); axis([-N/2,N/2,-0.5,5.5])\r\n\r\nxlabel('k'); ylabel('Xtilde(k)')\r\n\r\ntitle('DFS of SQ. wave: L=5, N=20')\r\n\r\n% Part (b)2\r\n\r\nL = 5; N = 40;\r\n\r\nxn = [ones(1,L), zeros(1,N-L)];\r\n\r\nXk = dfs(xn,N);\r\n\r\nmagXk = abs([Xk(N/2+1:N) Xk(1:N/2+1)]);\r\n\r\nk = [-N/2:N/2];\r\n\r\nsubplot(2,2,2); stem(k,magXk); axis([-N/2,N/2,-0.5,5.5])\r\n\r\nxlabel('k'); ylabel('Xtilde(k)')\r\n\r\ntitle('DFS of SQ. wave: L=5, N=40')\r\n\r\n% Part (b)3\r\n\r\nL = 5; N = 60;\r\n\r\nxn = [ones(1,L), zeros(1,N-L)];\r\n\r\nXk = dfs(xn,N);\r\n\r\nmagXk = abs([Xk(N/2+1:N) Xk(1:N/2+1)]);\r\n\r\nk = [-N/2:N/2];\r\n\r\nsubplot(2,2,3); stem(k,magXk); axis([-N/2,N/2,-0.5,5.5])\r\n\r\nxlabel('k'); ylabel('Xtilde(k)')\r\n\r\ntitle('DFS of SQ. wave: L=5, N=60')\r\n\r\n% Part (b)4\r\n\r\nL = 7; N = 60;\r\n\r\nxn = [ones(1,L), zeros(1,N-L)];\r\n\r\nXk = dfs(xn,N);\r\n\r\nmagXk = abs([Xk(N/2+1:N) Xk(1:N/2+1)]);\r\n\r\nk = [-N/2:N/2];\r\n\r\nsubplot(2,2,4); stem(k,magXk); axis([-N/2,N/2,-0.5,7.5])\r\n\r\nxlabel('k'); ylabel('Xtilde(k)')\r\n\r\ntitle('DFS of SQ. wave: L=7, N=60')\r\n\r\n%print -deps2 fg0502b.eps",
  "defaultParams": {},
  "params": [],
  "tags": [
    "chapter05",
    "dsp",
    "ex050200"
  ],
  "wikipediaLinks": [
    {
      "title": "Digital signal processing",
      "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
    }
  ]
};

export default ex050200;
