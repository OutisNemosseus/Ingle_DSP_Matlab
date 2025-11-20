// DSP Chapter 05 Programs
// Auto-generated from MATLAB files

const chapter05Programs = [
  {
    "id": "ex050200",
    "title": "ex050200",
    "displayName": "Chapter 5: Example 5.02\r",
    "description": "Chapter 5: Example 5.02\r",
    "category": "DSP - Chapter 05",
    "chapter": "05",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 5: Example 5.02\r\n\r\n# L = 5; N = 20\nx = [ones(1,L), zeros(1,N-L)]\nxn = x' * ones(1,3)\nxn = (xn(:))'\nn = -N:1:2*N-1\nplt.subplot(1, 1, 1)\nplt.subplot(2, 1, 2)\n\r\n\r\nstem(n,xn); plt.xlabel('n')\n plt.ylabel('xtilde(n)')\nplt.title('Three periods of xtilde(n)')\naxis([-N,2*N-1,-0.5,1.5])\r\n\r\n# print -deps2 fg0502.eps\r\n\r\n# plt.subplot(1, 1, 1)\n# Part (b)1\r\n\r\nL = 5; N = 20\nxn = [ones(1,L), zeros(1,N-L)]\nXk = dfs(xn,N)\nmagXk = np.abs([Xknp.arange(N/2+1, N + 1) Xknp.arange(1, N/2+1 + 1)])\nk = [-N/2:N/2]\nplt.subplot(2, 2, 1)\n stem(k,magXk); axis([-N/2,N/2,-0.5,5.5])\r\n\r\nplt.xlabel('k')\n plt.ylabel('Xtilde(k)')\ntitlenp.arange('DFS of SQ. wave, L=5, N=20' + 1)\r\n\r\n# Part (b)2\r\n\r\nL = 5; N = 40\nxn = [ones(1,L), zeros(1,N-L)]\nXk = dfs(xn,N)\nmagXk = np.abs([Xknp.arange(N/2+1, N + 1) Xknp.arange(1, N/2+1 + 1)])\nk = [-N/2:N/2]\nplt.subplot(2, 2, 2)\n stem(k,magXk); axis([-N/2,N/2,-0.5,5.5])\r\n\r\nplt.xlabel('k')\n plt.ylabel('Xtilde(k)')\ntitlenp.arange('DFS of SQ. wave, L=5, N=40' + 1)\r\n\r\n# Part (b)3\r\n\r\nL = 5; N = 60\nxn = [ones(1,L), zeros(1,N-L)]\nXk = dfs(xn,N)\nmagXk = np.abs([Xknp.arange(N/2+1, N + 1) Xknp.arange(1, N/2+1 + 1)])\nk = [-N/2:N/2]\nplt.subplot(2, 2, 3)\n stem(k,magXk); axis([-N/2,N/2,-0.5,5.5])\r\n\r\nplt.xlabel('k')\n plt.ylabel('Xtilde(k)')\ntitlenp.arange('DFS of SQ. wave, L=5, N=60' + 1)\r\n\r\n# Part (b)4\r\n\r\nL = 7; N = 60\nxn = [ones(1,L), zeros(1,N-L)]\nXk = dfs(xn,N)\nmagXk = np.abs([Xknp.arange(N/2+1, N + 1) Xknp.arange(1, N/2+1 + 1)])\nk = [-N/2:N/2]\nplt.subplot(2, 2, 4)\n stem(k,magXk); axis([-N/2,N/2,-0.5,7.5])\r\n\r\nplt.xlabel('k')\n plt.ylabel('Xtilde(k)')\ntitlenp.arange('DFS of SQ. wave, L=7, N=60' + 1)\r\n\r\n# print -deps2 fg0502b.eps\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
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
  },
  {
    "id": "ex050500",
    "title": "ex050500",
    "displayName": "Chapter 05: Example 05.05: Frequency-domain sampling\r",
    "description": "Chapter 05: Example 05.05: Frequency-domain sampling\r",
    "category": "DSP - Chapter 05",
    "chapter": "05",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 05: Example 05.05: Frequency-domain sampling\r\n\r\n# # x(n)=(0.7)**n * u(n)\r\n\r\n# X(z)=z/(z-0.7); |z|>0.7\r\n\r\nplt.subplot(1, 1, 1)\n# N = 5\nk = 0:1:N-1\nwk = 2*np.pi*k/N\nzk = np.exp(j*wk)\nXk = (zk)/(zk-0.7)\nxn = real(idfs(Xk,N))\nxtilde = xn'* ones(1,8); xtilde = (xtilde(:))'\nplt.subplot(2, 2, 1)\n stemnp.arange(0, 39,xtilde + 1);axis([0,40,-0.1,1.5])\r\n\r\nplt.xlabel('n')\n plt.ylabel('xtilde(n)')\n plt.title('N=5')\n# N = 10\nk = 0:1:N-1\nwk = 2*np.pi*k/N\nzk = np.exp(j*wk)\nXk = (zk)/(zk-0.7)\nxn = real(idfs(Xk,N))\nxtilde = xn'* ones(1,4); xtilde = (xtilde(:))'\nplt.subplot(2, 2, 2)\n stemnp.arange(0, 39,xtilde + 1);axis([0,40,-0.1,1.5])\r\n\r\nplt.xlabel('n')\n plt.ylabel('xtilde(n)')\n plt.title('N=10')\n# N = 20\nk = 0:1:N-1\nwk = 2*np.pi*k/N\nzk = np.exp(j*wk)\nXk = (zk)/(zk-0.7)\nxn = real(idfs(Xk,N))\nxtilde = xn'* ones(1,2); xtilde = (xtilde(:))'\nplt.subplot(2, 2, 3)\n stemnp.arange(0, 39,xtilde + 1);axis([0,40,-0.1,1.5])\r\n\r\nplt.xlabel('n')\n plt.ylabel('xtilde(n)')\n plt.title('N=20')\n# N = 40\nk = 0:1:N-1\nwk = 2*np.pi*k/N\nzk = np.exp(j*wk)\nXk = (zk)/(zk-0.7)\nxn = real(idfs(Xk,N))\nplt.subplot(2, 2, 4)\n stemnp.arange(0, 39,xn + 1);axis([0,40,-0.1,1.5])\r\n\r\nplt.xlabel('n')\n plt.ylabel('xtilde(n)')\n plt.title('N=40')\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
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
  },
  {
    "id": "ex050600",
    "title": "ex050600",
    "displayName": "Chapter 05: Example 05.06: Simple DFT Example\r",
    "description": "Chapter 05: Example 05.06: Simple DFT Example\r",
    "category": "DSP - Chapter 05",
    "chapter": "05",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 05: Example 05.06: Simple DFT Example\r\n\r\n# x = [1,1,1,1]\nplt.subplot(1, 1, 1)\n\r\n\r\n# # a) DTFT\r\n\r\nw = [0:1:500]*2*np.pi/500\n[H] = freqz(x,1,w)\nmagH = np.abs(H); phaH = angle(H); phaH(126)=-47.5841*np.pi/180\nplt.subplot(2, 1, 1)\n plt.plot(w/np.pi,magH)\n grid\r\n\r\nplt.xlabel('frequency in np.pi units')\n\r\n\r\nplt.ylabel('|X|')\n plt.title('Magnitude of the DTFT')\nplt.subplot(2, 1, 2)\n plt.plot(w/np.pi,phaH/np.pi*180)\n grid\r\n\r\nplt.xlabel('frequency in np.pi units')\n\r\n\r\nplt.ylabel('Degrees')\n plt.title('Angle of the DTFT')\n# print -deps2 me0506a.eps\r\n\r\npause;plt.subplot(1, 1, 1)\n# # b) 4-point DFT\r\n\r\nN = 4; w1 = 2*np.pi/N; k = 0:N-1\nX = dft(x,N)\nmagX = np.abs(X), phaX = angle(X)*180/np.pi\r\n\r\nplt.subplot(2, 1, 1)\nplt.plot(w*N/(2*np.pi)\n,magH,'--')\naxis([-0.1,4.1,-1,5]); # hold on\nstem(k,magX)\nplt.xlabel('k')\n\r\n\r\nplt.ylabel('|X(k)|')\n titlenp.arange('Magnitude of the DFT, N=4' + 1)\r\n\r\n# hold off\nplt.subplot(2, 1, 2)\nplt.plot(w*N/(2*np.pi)\n,phaH*180/np.pi,'--')\naxis([-0.1,4.1,-200,200]); # hold on\nstem(k,phaX)\nplt.xlabel('k')\n\r\n\r\nplt.ylabel('Degrees')\n titlenp.arange('Angle of the DFT, N=4' + 1)\r\n\r\n# print -deps2 me0506b.eps\r\n\r\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% Chapter 05: Example 05.06: Simple DFT Example\r\n\r\n%\r\n\r\nx = [1,1,1,1];\r\n\r\nsubplot(1,1,1);\r\n\r\n%\r\n\r\n% a) DTFT\r\n\r\nw = [0:1:500]*2*pi/500;\r\n\r\n[H] = freqz(x,1,w);\r\n\r\nmagH = abs(H); phaH = angle(H); phaH(126)=-47.5841*pi/180;\r\n\r\nsubplot(2,1,1); plot(w/pi,magH); grid\r\n\r\nxlabel('frequency in pi units');\r\n\r\nylabel('|X|'); title('Magnitude of the DTFT')\r\n\r\nsubplot(2,1,2); plot(w/pi,phaH/pi*180); grid\r\n\r\nxlabel('frequency in pi units');\r\n\r\nylabel('Degrees'); title('Angle of the DTFT')\r\n\r\n%print -deps2 me0506a.eps\r\n\r\npause;subplot(1,1,1)\r\n\r\n%\r\n\r\n% b) 4-point DFT\r\n\r\nN = 4; w1 = 2*pi/N; k = 0:N-1;\r\n\r\nX = dft(x,N);\r\n\r\nmagX = abs(X), phaX = angle(X)*180/pi\r\n\r\nsubplot(2,1,1);plot(w*N/(2*pi),magH,'--'); \r\n\r\naxis([-0.1,4.1,-1,5]); hold on\r\n\r\nstem(k,magX);\r\n\r\nxlabel('k');\r\n\r\nylabel('|X(k)|'); title('Magnitude of the DFT: N=4')\r\n\r\nhold off\r\n\r\nsubplot(2,1,2);plot(w*N/(2*pi),phaH*180/pi,'--');\r\n\r\naxis([-0.1,4.1,-200,200]); hold on\r\n\r\nstem(k,phaX);\r\n\r\nxlabel('k');\r\n\r\nylabel('Degrees'); title('Angle of the DFT: N=4')\r\n\r\n%print -deps2 me0506b.eps\r\n\r\n",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter05",
      "dsp",
      "ex050600"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex050700",
    "title": "ex050700",
    "displayName": "Chapter 05: Example 05.07: Zero-padding Example\r",
    "description": "Chapter 05: Example 05.07: Zero-padding Example\r",
    "category": "DSP - Chapter 05",
    "chapter": "05",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 05: Example 05.07: Zero-padding Example\r\n\r\n# plt.subplot(1, 1, 1)\n\r\n\r\nx = [1,1,1,1]\n# # a) DTFT\r\n\r\nw = [0:1:500]*2*np.pi/500\n[H] = freqz(x,1,w)\nmagH = np.abs(H); phaH = angle(H); phaH(126)=-47.5841*np.pi/180\n# # b) 8-point DFT\r\n\r\nN = 8; w1 = 2*np.pi/N; k = 0:N-1\nx = [x, zeros(1,4)]\nX = dft(x,N)\nmagX = np.abs(X), phaX = angle(X)*180/np.pi\r\n\r\nplt.subplot(2, 1, 1)\nplt.plot(w*N/(2*np.pi)\n,magH,'--')\naxis([-0.1,8.1,-1,5]); # hold on\nstem(k,magX)\nplt.xlabel('k')\n\r\n\r\nplt.ylabel('|X(k)|')\n titlenp.arange('Magnitude of the DFT, N=8' + 1)\r\n\r\n# hold off\nplt.subplot(2, 1, 2)\nplt.plot(w*N/(2*np.pi)\n,phaH*180/np.pi,'--')\naxis([-0.1,8.1,-200,200]); # hold on\nstem(k,phaX)\nplt.xlabel('k')\n\r\n\r\nplt.ylabel('Degrees')\n titlenp.arange('Angle of the DFT, N=8' + 1);pause\r\n\r\n# print -deps2 me0507a.eps\r\n\r\n# c) 16-point DFT\r\n\r\nplt.subplot(1, 1, 1)\nN = 16; w1 = 2*np.pi/N; k = 0:N-1\nx = [x, zeros(1,8)]\nX = dft(x,N)\nmagX = np.abs(X), phaX = angle(X)*180/np.pi\r\n\r\nplt.subplot(2, 1, 1)\nplt.plot(w*N/(2*np.pi)\n,magH,'--')\naxis([-0.1,16.1,-1,5]); # hold on\nstem(k,magX)\nplt.xlabel('k')\n\r\n\r\nplt.ylabel('|X(k)|')\n titlenp.arange('Magnitude of the DFT, N=16' + 1)\r\n\r\n# hold off\nplt.subplot(2, 1, 2)\nplt.plot(w*N/(2*np.pi)\n,phaH*180/np.pi,'--')\naxis([-0.1,16.1,-200,200]); # hold on\nstem(k,phaX)\nplt.xlabel('k')\n\r\n\r\nplt.ylabel('Degrees')\n titlenp.arange('Angle of the DFT, N=16' + 1)\r\n\r\n# print -deps2 me0507b.eps\r\n\r\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% Chapter 05: Example 05.07: Zero-padding Example\r\n\r\n%\r\n\r\nsubplot(1,1,1);\r\n\r\nx = [1,1,1,1];\r\n\r\n%\r\n\r\n% a) DTFT\r\n\r\nw = [0:1:500]*2*pi/500;\r\n\r\n[H] = freqz(x,1,w);\r\n\r\nmagH = abs(H); phaH = angle(H); phaH(126)=-47.5841*pi/180;\r\n\r\n%\r\n\r\n% b) 8-point DFT\r\n\r\nN = 8; w1 = 2*pi/N; k = 0:N-1;\r\n\r\nx = [x, zeros(1,4)];\r\n\r\nX = dft(x,N);\r\n\r\nmagX = abs(X), phaX = angle(X)*180/pi\r\n\r\nsubplot(2,1,1);plot(w*N/(2*pi),magH,'--'); \r\n\r\naxis([-0.1,8.1,-1,5]); hold on\r\n\r\nstem(k,magX);\r\n\r\nxlabel('k');\r\n\r\nylabel('|X(k)|'); title('Magnitude of the DFT: N=8')\r\n\r\nhold off\r\n\r\nsubplot(2,1,2);plot(w*N/(2*pi),phaH*180/pi,'--');\r\n\r\naxis([-0.1,8.1,-200,200]); hold on\r\n\r\nstem(k,phaX);\r\n\r\nxlabel('k');\r\n\r\nylabel('Degrees'); title('Angle of the DFT: N=8');pause\r\n\r\n%print -deps2 me0507a.eps\r\n\r\n% c) 16-point DFT\r\n\r\nsubplot(1,1,1)\r\n\r\nN = 16; w1 = 2*pi/N; k = 0:N-1;\r\n\r\nx = [x, zeros(1,8)];\r\n\r\nX = dft(x,N);\r\n\r\nmagX = abs(X), phaX = angle(X)*180/pi\r\n\r\nsubplot(2,1,1);plot(w*N/(2*pi),magH,'--'); \r\n\r\naxis([-0.1,16.1,-1,5]); hold on\r\n\r\nstem(k,magX);\r\n\r\nxlabel('k');\r\n\r\nylabel('|X(k)|'); title('Magnitude of the DFT: N=16')\r\n\r\nhold off\r\n\r\nsubplot(2,1,2);plot(w*N/(2*pi),phaH*180/pi,'--');\r\n\r\naxis([-0.1,16.1,-200,200]); hold on\r\n\r\nstem(k,phaX);\r\n\r\nxlabel('k');\r\n\r\nylabel('Degrees'); title('Angle of the DFT: N=16')\r\n\r\n%print -deps2 me0507b.eps\r\n\r\n",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter05",
      "dsp",
      "ex050700"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex050800",
    "title": "ex050800",
    "displayName": "Chapter 05: Example 05.08: HiRes Spectrum\r",
    "description": "Chapter 05: Example 05.08: HiRes Spectrum\r",
    "category": "DSP - Chapter 05",
    "chapter": "05",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 05: Example 05.08: HiRes Spectrum\r\n\r\n# # High resolution spectrum based on 100 samples of the signal x(n)\r\n\r\nplt.subplot(1, 1, 1)\nn=[0:1:99]\nx=np.cos(0.48*np.pi*n)+np.cos(0.52*np.pi*n)\nplt.subplot(2, 1, 1)\nstem(n,x);plt.title('signal x(n), 0 <= n <= 99')\nplt.xlabel('n')\naxis([0,100,-2.5,2.5])\r\n\r\nX=fft(x);magX=np.abs(Xnp.arange(1, 51 + 1, 1))\nk=0:1:50;w=2*np.pi/100*k\nplt.subplot(2, 1, 2)\nplt.plot(w/np.pi,magX)\nplt.title('DTFT Magnitude')\nplt.xlabel('frequency in np.pi units')\naxis([0,1,0,60])\r\n\r\ndisp('Press RETURN to continue');pause\n# print -deps2 me0508c.eps; subplot\r\n\r\n# # Spectrum based on the first 10 samples of x(n)\r\n\r\nn1=[0:1:9];y1=xnp.arange(1, 10 + 1, 1)\nplt.subplot(2, 1, 1)\nstem(n1,y1);plt.title('signal x(n), 0 <= n <= 9')\nplt.xlabel('n')\naxis([0,10,-2.5,2.5])\r\n\r\nY1=fft(y1);magY1=np.abs(Y1np.arange(1, 6 + 1, 1))\nk1=0:1:5;w1=2*np.pi/10*k1\nplt.subplot(2, 1, 2)\nstem(w1/np.pi,magY1);plt.title('Samples of DTFT Magnitude')\n\r\n\r\nplt.xlabel('frequency in np.pi units')\naxis([0,1,0,10])\r\n\r\ndisp('Press RETURN to continue');pause\nprint -deps2 me0508a.eps; subplot\r\n\r\n# # high density Spectrum (50 samples) based on the first 10 samples of x(n)\r\n\r\nn2=[0:1:49];y2=[xnp.arange(1, 10 + 1, 1) zeros(1,40)]\nplt.subplot(2, 1, 1)\nstem(n2,y2);plt.title('signal x(n), 0 <= n <= 9 + 40 zeros')\nplt.xlabel('n')\naxis([0,50,-2.5,2.5])\r\n\r\nY2=fft(y2);magY2=np.abs(Y2np.arange(1, 26 + 1, 1))\nk2=0:1:25;w2=2*np.pi/50*k2\nplt.subplot(2, 1, 2)\nplt.plot(w2/np.pi,magY2)\nplt.title('DTFT Magnitude')\nplt.xlabel('frequency in np.pi units')\naxis([0,1,0,10])\r\n\r\ndisp('Press RETURN to continue');pause; subplot\r\n\r\n# # High density spectrum (100 samples) based on the first 10 samples of x(n)\r\n\r\nn3=[0:1:99];y3=[xnp.arange(1, 10 + 1, 1) zeros(1,90)]\nplt.subplot(2, 1, 1)\nstem(n3,y3);plt.title('signal x(n), 0 <= n <= 9 + 90 zeros')\nplt.xlabel('n')\naxis([0,100,-2.5,2.5])\r\n\r\nY3=fft(y3);magY3=np.abs(Y3np.arange(1, 51 + 1, 1))\nk3=0:1:50;w3=2*np.pi/100*k3\nplt.subplot(2, 1, 2)\nplt.plot(w3/np.pi,magY3)\nplt.title('DTFT Magnitude')\nplt.xlabel('frequency in np.pi units')\naxis([0,1,0,10])\r\n\r\ndisp('Press RETURN to continue');pause\n# print -deps2 me0508b.eps; subplot\r\n\r\n\r\n\r\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% Chapter 05: Example 05.08: HiRes Spectrum\r\n\r\n%\r\n\r\n% High resolution spectrum based on 100 samples of the signal x(n)\r\n\r\nsubplot(1,1,1)\r\n\r\nn=[0:1:99];\r\n\r\nx=cos(0.48*pi*n)+cos(0.52*pi*n);\r\n\r\nsubplot(2,1,1);stem(n,x);title('signal x(n), 0 <= n <= 99');xlabel('n')\r\n\r\naxis([0,100,-2.5,2.5])\r\n\r\nX=fft(x);magX=abs(X(1:1:51));\r\n\r\nk=0:1:50;w=2*pi/100*k;\r\n\r\nsubplot(2,1,2);plot(w/pi,magX);title('DTFT Magnitude');xlabel('frequency in pi units')\r\n\r\naxis([0,1,0,60])\r\n\r\ndisp('Press RETURN to continue');pause;\r\n\r\n%print -deps2 me0508c.eps; subplot\r\n\r\n%\r\n\r\n% Spectrum based on the first 10 samples of x(n)\r\n\r\nn1=[0:1:9];y1=x(1:1:10);\r\n\r\nsubplot(2,1,1);stem(n1,y1);title('signal x(n), 0 <= n <= 9');xlabel('n')\r\n\r\naxis([0,10,-2.5,2.5])\r\n\r\nY1=fft(y1);magY1=abs(Y1(1:1:6));\r\n\r\nk1=0:1:5;w1=2*pi/10*k1;\r\n\r\nsubplot(2,1,2);stem(w1/pi,magY1);title('Samples of DTFT Magnitude');\r\n\r\nxlabel('frequency in pi units')\r\n\r\naxis([0,1,0,10])\r\n\r\ndisp('Press RETURN to continue');pause;\r\n\r\nprint -deps2 me0508a.eps; subplot\r\n\r\n%\r\n\r\n% high density Spectrum (50 samples) based on the first 10 samples of x(n)\r\n\r\nn2=[0:1:49];y2=[x(1:1:10) zeros(1,40)];\r\n\r\nsubplot(2,1,1);stem(n2,y2);title('signal x(n), 0 <= n <= 9 + 40 zeros');xlabel('n')\r\n\r\naxis([0,50,-2.5,2.5])\r\n\r\nY2=fft(y2);magY2=abs(Y2(1:1:26));\r\n\r\nk2=0:1:25;w2=2*pi/50*k2;\r\n\r\nsubplot(2,1,2);plot(w2/pi,magY2);title('DTFT Magnitude');xlabel('frequency in pi units')\r\n\r\naxis([0,1,0,10])\r\n\r\ndisp('Press RETURN to continue');pause; subplot\r\n\r\n%\r\n\r\n% High density spectrum (100 samples) based on the first 10 samples of x(n)\r\n\r\nn3=[0:1:99];y3=[x(1:1:10) zeros(1,90)];\r\n\r\nsubplot(2,1,1);stem(n3,y3);title('signal x(n), 0 <= n <= 9 + 90 zeros');xlabel('n')\r\n\r\naxis([0,100,-2.5,2.5])\r\n\r\nY3=fft(y3);magY3=abs(Y3(1:1:51));\r\n\r\nk3=0:1:50;w3=2*pi/100*k3;\r\n\r\nsubplot(2,1,2);plot(w3/pi,magY3);title('DTFT Magnitude');xlabel('frequency in pi units')\r\n\r\naxis([0,1,0,10])\r\n\r\ndisp('Press RETURN to continue');pause;\r\n\r\n%print -deps2 me0508b.eps; subplot\r\n\r\n\r\n\r\n",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter05",
      "dsp",
      "ex050800"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex050802",
    "title": "ex050802",
    "displayName": "Chapter 05: Example 05.08\r",
    "description": "Chapter 05: Example 05.08\r",
    "category": "DSP - Chapter 05",
    "chapter": "05",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 05: Example 05.08\r\n\r\n# High density vs HiRes Spectrum\r\n\r\n# # signal x(n)\r\n\r\nplt.subplot(1, 1, 1)\n\r\n\r\nn = [0:1:99]; x = np.cos(0.48*np.pi*n)+np.cos(0.52*np.pi*n)\n# # Spectrum based on the first 10 samples of x(n)\r\n\r\nn1 = [0:1:9]; y1 = xnp.arange(1, 10 + 1, 1)\nplt.subplot(2, 3, 1)\n stem(n1,y1)\nplt.title('x(n), 0 <= n <= 9')\nplt.xlabel('n')\n\r\n\r\naxis([0,10,-2.5,2.5]); set(gca,'fontsize',10)\r\n\r\nY1 = fft(y1); magY1 = np.abs(Y1np.arange(1, 6 + 1, 1))\nk1 = 0:1:5; w1 = 2*np.pi/10*k1\nplt.subplot(2, 3, 4)\nstem(w1/np.pi,magY1);plt.title('Samples of DTFT Magnitude')\n\r\n\r\nplt.xlabel('frequency in np.pi units')\n axis([0,1,0,10]); set(gca,'fontsize',10)\r\n\r\n# # High density spectrum (100 samples) based on the first 10 samples of x(n)\r\n\r\nn2= [0:1:99]; y2 = [xnp.arange(1, 10 + 1, 1) zeros(1,90)]\nplt.subplot(2, 3, 2)\n stem(n2,y2); plt.title('x(n), 0 <= n <= 9 + 90 zeros')\n plt.xlabel('n')\naxis([0,100,-2.5,2.5]); set(gca,'fontsize',10)\r\n\r\nY2 = fft(y2);magY2=np.abs(Y2np.arange(1, 51 + 1, 1))\nk2 = 0:1:50; w2 = 2*np.pi/100*k2\nplt.subplot(2, 3, 5)\n plt.plot(w2/np.pi,magY2)\n plt.title('DTFT Magnitude')\n plt.xlabel('frequency in np.pi units')\naxis([0,1,0,10]); set(gca,'fontsize',10)\r\n\r\n# # High resolution spectrum based on 100 samples of the signal x(n)\r\n\r\nplt.subplot(2, 3, 3)\n stem(n,x); plt.title('x(n), 0 <= n <= 99')\nplt.xlabel('n')\naxis([0,100,-2.5,2.5]); set(gca,'fontsize',10)\r\n\r\nX = fft(x); magX=np.abs(Xnp.arange(1, 51 + 1, 1))\nk = 0:1:50; w = 2*np.pi/100*k\nplt.subplot(2, 3, 6)\nplt.plot(w/np.pi,magX)\nplt.title('DTFT Magnitude')\nplt.xlabel('frequency in np.pi units')\naxis([0,1,0,60]); set(gca,'fontsize',10)\r\n\r\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% Chapter 05: Example 05.08\r\n\r\n%             High density vs HiRes Spectrum\r\n\r\n%\r\n\r\n% signal x(n)\r\n\r\nsubplot(1,1,1);\r\n\r\nn = [0:1:99]; x = cos(0.48*pi*n)+cos(0.52*pi*n);\r\n\r\n%\r\n\r\n% Spectrum based on the first 10 samples of x(n)\r\n\r\nn1 = [0:1:9]; y1 = x(1:1:10);\r\n\r\nsubplot(2,3,1); stem(n1,y1);\r\n\r\ntitle('x(n), 0 <= n <= 9');xlabel('n');\r\n\r\naxis([0,10,-2.5,2.5]); set(gca,'fontsize',10)\r\n\r\nY1 = fft(y1); magY1 = abs(Y1(1:1:6));\r\n\r\nk1 = 0:1:5; w1 = 2*pi/10*k1;\r\n\r\nsubplot(2,3,4);stem(w1/pi,magY1);title('Samples of DTFT Magnitude');\r\n\r\nxlabel('frequency in pi units'); axis([0,1,0,10]); set(gca,'fontsize',10)\r\n\r\n%\r\n\r\n% High density spectrum (100 samples) based on the first 10 samples of x(n)\r\n\r\nn2= [0:1:99]; y2 = [x(1:1:10) zeros(1,90)];\r\n\r\nsubplot(2,3,2); stem(n2,y2); title('x(n), 0 <= n <= 9 + 90 zeros'); xlabel('n')\r\n\r\naxis([0,100,-2.5,2.5]); set(gca,'fontsize',10)\r\n\r\nY2 = fft(y2);magY2=abs(Y2(1:1:51));\r\n\r\nk2 = 0:1:50; w2 = 2*pi/100*k2;\r\n\r\nsubplot(2,3,5); plot(w2/pi,magY2); title('DTFT Magnitude'); xlabel('frequency in pi units')\r\n\r\naxis([0,1,0,10]); set(gca,'fontsize',10)\r\n\r\n%\r\n\r\n% High resolution spectrum based on 100 samples of the signal x(n)\r\n\r\nsubplot(2,3,3); stem(n,x); title('x(n), 0 <= n <= 99');xlabel('n')\r\n\r\naxis([0,100,-2.5,2.5]); set(gca,'fontsize',10)\r\n\r\nX = fft(x); magX=abs(X(1:1:51));\r\n\r\nk = 0:1:50; w = 2*pi/100*k;\r\n\r\nsubplot(2,3,6);plot(w/pi,magX);title('DTFT Magnitude');xlabel('frequency in pi units')\r\n\r\naxis([0,1,0,60]); set(gca,'fontsize',10)\r\n\r\n",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter05",
      "dsp",
      "ex050802"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex050900",
    "title": "ex050900",
    "displayName": "Chapter 05: Example 05.09: Circular symmetry property\r",
    "description": "Chapter 05: Example 05.09: Circular symmetry property\r",
    "category": "DSP - Chapter 05",
    "chapter": "05",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 05: Example 05.09: Circular symmetry property\r\n\r\n# plt.subplot(1, 1, 1)\n# a) plot x((-n))N\r\n\r\nn = 0:10; x = 10*(0.8) ** n\ny = x(mod(-n,11)+1)\nplt.subplot(2, 1, 1)\n stem(n,x); plt.title('Original sequence')\nplt.xlabel('n')\n plt.ylabel('x(n)')\n axis([-0.5,10.5,-1,11])\r\n\r\nplt.subplot(2, 1, 2)\n stem(n,y); plt.title('Circularly folded sequence')\nplt.xlabel('n')\n plt.ylabel('x(-n mod 11)')\n axis([-0.5,10.5,-1,11])\r\n\r\npause\n# print -deps2 me0509a.eps\r\n\r\n# # b) verify property\r\n\r\nX = dft(x,11); Y = dft(y,11)\nplt.subplot(2, 2, 1)\n stem(n,real(X)); axis([-0.5,10.5,-5,50])\r\n\r\nplt.title('Real{DFT[x(n)]}')\n plt.xlabel('k')\n\r\n\r\nplt.subplot(2, 2, 2)\n stem(n,imag(X)); axis([-0.5,10.5,-20,20])\r\n\r\nplt.title('Imag{DFT[x(n)]}')\n plt.xlabel('k')\n\r\n\r\nplt.subplot(2, 2, 3)\n stem(n,real(Y)); axis([-0.5,10.5,-5,50])\r\n\r\nplt.title('Real{DFT[x((-n))11]}')\n plt.xlabel('k')\n\r\n\r\nplt.subplot(2, 2, 4)\n stem(n,imag(Y)); axis([-0.5,10.5,-20,20])\r\n\r\nplt.title('Imag{DFT[x((-n))11]}')\n plt.xlabel('k')\n\r\n\r\n# print -deps2 me0509b.eps\r\n\r\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% Chapter 05: Example 05.09: Circular symmetry property\r\n\r\n%\r\n\r\nsubplot(1,1,1)\r\n\r\n% a) plot x((-n))N\r\n\r\nn = 0:10; x = 10*(0.8) .^ n;\r\n\r\ny = x(mod(-n,11)+1);\r\n\r\nsubplot(2,1,1); stem(n,x); title('Original sequence')\r\n\r\nxlabel('n'); ylabel('x(n)'); axis([-0.5,10.5,-1,11])\r\n\r\nsubplot(2,1,2); stem(n,y); title('Circularly folded sequence')\r\n\r\nxlabel('n'); ylabel('x(-n mod 11)'); axis([-0.5,10.5,-1,11])\r\n\r\npause;\r\n\r\n%print -deps2 me0509a.eps\r\n\r\n%\r\n\r\n% b) verify property\r\n\r\nX = dft(x,11); Y = dft(y,11);\r\n\r\nsubplot(2,2,1); stem(n,real(X)); axis([-0.5,10.5,-5,50])\r\n\r\ntitle('Real{DFT[x(n)]}'); xlabel('k');\r\n\r\nsubplot(2,2,2); stem(n,imag(X)); axis([-0.5,10.5,-20,20])\r\n\r\ntitle('Imag{DFT[x(n)]}'); xlabel('k');\r\n\r\nsubplot(2,2,3); stem(n,real(Y)); axis([-0.5,10.5,-5,50])\r\n\r\ntitle('Real{DFT[x((-n))11]}'); xlabel('k');\r\n\r\nsubplot(2,2,4); stem(n,imag(Y)); axis([-0.5,10.5,-20,20])\r\n\r\ntitle('Imag{DFT[x((-n))11]}'); xlabel('k');\r\n\r\n%print -deps2 me0509b.eps\r\n\r\n",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter05",
      "dsp",
      "ex050900"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex051000",
    "title": "ex051000",
    "displayName": "Chapter 05: Example 05.10: Circular even/odd property\r",
    "description": "Chapter 05: Example 05.10: Circular even/odd property\r",
    "category": "DSP - Chapter 05",
    "chapter": "05",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 05: Example 05.10: Circular even/odd property\r\n\r\n# plt.subplot(1, 1, 1)\n# a) plot xec(n) and xoc(n)\r\n\r\nn = 0:10; x = 10*(0.8) ** n\n[xec,xoc] = circevod(x)\nplt.subplot(2, 1, 1)\n stem(n,xec); plt.title('Circular-even component')\nplt.xlabel('n')\n plt.ylabel('xec(n)')\n axis([-0.5,10.5,-1,11])\r\n\r\nplt.subplot(2, 1, 2)\n stem(n,xoc); plt.title('Circular-odd component')\nplt.xlabel('n')\n plt.ylabel('xoc(n)')\n axis([-0.5,10.5,-4,4])\r\n\r\npause\nprint -deps2 me0510a.eps\r\n\r\n# # b) verify property\r\n\r\nX = dft(x,11); Xec = dft(xec,11); Xoc = dft(xoc,11)\nplt.subplot(2, 2, 1)\n stem(n,real(X)); axis([-0.5,10.5,-5,50])\r\n\r\nplt.title('Real{DFT[x(n)]}')\n plt.xlabel('k')\n\r\n\r\nplt.subplot(2, 2, 2)\n stem(n,imag(X)); axis([-0.5,10.5,-20,20])\r\n\r\nplt.title('Imag{DFT[x(n)]}')\n plt.xlabel('k')\n\r\n\r\nplt.subplot(2, 2, 3)\n stem(n,real(Xec)); axis([-0.5,10.5,-5,50])\r\n\r\nplt.title('DFT[xec(n)]')\n plt.xlabel('k')\n\r\n\r\nplt.subplot(2, 2, 4)\n stem(n,imag(Xoc)); axis([-0.5,10.5,-20,20])\r\n\r\nplt.title('DFT[xoc(n)]')\n plt.xlabel('k')\n\r\n\r\nprint -deps2 me0510b.eps\r\n\r\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% Chapter 05: Example 05.10: Circular even/odd property\r\n\r\n%\r\n\r\nsubplot(1,1,1)\r\n\r\n% a) plot xec(n) and xoc(n)\r\n\r\nn = 0:10; x = 10*(0.8) .^ n;\r\n\r\n[xec,xoc] = circevod(x);\r\n\r\nsubplot(2,1,1); stem(n,xec); title('Circular-even component')\r\n\r\nxlabel('n'); ylabel('xec(n)'); axis([-0.5,10.5,-1,11])\r\n\r\nsubplot(2,1,2); stem(n,xoc); title('Circular-odd component')\r\n\r\nxlabel('n'); ylabel('xoc(n)'); axis([-0.5,10.5,-4,4])\r\n\r\npause;\r\n\r\nprint -deps2 me0510a.eps\r\n\r\n%\r\n\r\n% b) verify property\r\n\r\nX = dft(x,11); Xec = dft(xec,11); Xoc = dft(xoc,11);\r\n\r\nsubplot(2,2,1); stem(n,real(X)); axis([-0.5,10.5,-5,50])\r\n\r\ntitle('Real{DFT[x(n)]}'); xlabel('k');\r\n\r\nsubplot(2,2,2); stem(n,imag(X)); axis([-0.5,10.5,-20,20])\r\n\r\ntitle('Imag{DFT[x(n)]}'); xlabel('k');\r\n\r\nsubplot(2,2,3); stem(n,real(Xec)); axis([-0.5,10.5,-5,50])\r\n\r\ntitle('DFT[xec(n)]'); xlabel('k');\r\n\r\nsubplot(2,2,4); stem(n,imag(Xoc)); axis([-0.5,10.5,-20,20])\r\n\r\ntitle('DFT[xoc(n)]'); xlabel('k');\r\n\r\nprint -deps2 me0510b.eps\r\n\r\n",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter05",
      "dsp",
      "ex051000"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex051100",
    "title": "ex051100",
    "displayName": "Chapter 05: Example 05.11: Circular shift graphical display\r",
    "description": "Chapter 05: Example 05.11: Circular shift graphical display\r",
    "category": "DSP - Chapter 05",
    "chapter": "05",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 05: Example 05.11: Circular shift graphical display\r\n\r\n# plt.subplot(1, 1, 1)\n# a) plot x((n+4))11\r\n\r\nn = 0:10; x = 10*(0.8) ** n\nn1 = -11:21; x1 = [zeros(1,11), x, zeros(1,11)]\nplt.subplot(2, 2, 1)\n stem(n1,x1); plt.title('Original x(n)')\nplt.xlabel('n')\n axis([-6,17,-1,11])\r\n\r\nx2 = [x, x, x]\nplt.subplot(2, 2, 3)\n stem(n1,x2); plt.title('Periodic extention')\nplt.xlabel('n')\n axis([-6,17,-1,11])\r\n\r\nx3 = [x2np.arange(4+1, 33 + 1), xnp.arange(1, 4 + 1)]\nplt.subplot(2, 2, 2)\n stem(n1,x3); plt.title('Periodic shift')\nplt.xlabel('n')\n axis([-6,17,-1,11])\r\n\r\nx4 = x3 * [zeros(1,11), ones(1,11), zeros(1,11)]\nplt.subplot(2, 2, 4)\n stem(n1,x4); plt.title('Circular shift')\nplt.xlabel('n')\n axis([-6,17,-1,11])\r\n\r\npause\n# print -deps2 me0511a.eps\r\n\r\n# # b) plot x((n-3))15\r\n\r\nn = 0:10; x = [10*(0.8) ** n zeros(1,4)]\nn1 = -15:29; x1 = [zeros(1,15), x, zeros(1,15)]\nplt.subplot(2, 2, 1)\n stem(n1,x1); plt.title('Original x(n)')\nplt.xlabel('n')\n axis([-9,25,-1,11])\r\n\r\nx2 = [x, x, x]\nplt.subplot(2, 2, 3)\n stem(n1,x2); plt.title('Periodic extention')\nplt.xlabel('n')\n axis([-9,25,-1,11])\r\n\r\nx3 = [x2np.arange(43, 45 + 1),x2np.arange(1, 42 + 1)]\nplt.subplot(2, 2, 2)\n stem(n1,x3); plt.title('Periodic shift')\nplt.xlabel('n')\n axis([-9,25,-1,11])\r\n\r\nx4 = x3 * [zeros(1,15), ones(1,15), zeros(1,15)]\nplt.subplot(2, 2, 4)\n stem(n1,x4); plt.title('Circular shift')\nplt.xlabel('n')\n axis([-9,25,-1,11])\r\n\r\npause\n# print -deps2 me0511b.eps\r\n\r\n# \n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% Chapter 05: Example 05.11: Circular shift graphical display\r\n\r\n%\r\n\r\nsubplot(1,1,1)\r\n\r\n% a) plot x((n+4))11\r\n\r\nn = 0:10; x = 10*(0.8) .^ n;\r\n\r\nn1 = -11:21; x1 = [zeros(1,11), x, zeros(1,11)];\r\n\r\nsubplot(2,2,1); stem(n1,x1); title('Original x(n)')\r\n\r\nxlabel('n'); axis([-6,17,-1,11])\r\n\r\nx2 = [x, x, x];\r\n\r\nsubplot(2,2,3); stem(n1,x2); title('Periodic extention')\r\n\r\nxlabel('n'); axis([-6,17,-1,11])\r\n\r\nx3 = [x2(4+1:33), x(1:4)];\r\n\r\nsubplot(2,2,2); stem(n1,x3); title('Periodic shift')\r\n\r\nxlabel('n'); axis([-6,17,-1,11])\r\n\r\nx4 = x3 .* [zeros(1,11), ones(1,11), zeros(1,11)];\r\n\r\nsubplot(2,2,4); stem(n1,x4); title('Circular shift')\r\n\r\nxlabel('n'); axis([-6,17,-1,11])\r\n\r\npause;\r\n\r\n%print -deps2 me0511a.eps\r\n\r\n%\r\n\r\n% b) plot x((n-3))15\r\n\r\nn = 0:10; x = [10*(0.8) .^ n zeros(1,4)];\r\n\r\nn1 = -15:29; x1 = [zeros(1,15), x, zeros(1,15)];\r\n\r\nsubplot(2,2,1); stem(n1,x1); title('Original x(n)')\r\n\r\nxlabel('n'); axis([-9,25,-1,11])\r\n\r\nx2 = [x, x, x];\r\n\r\nsubplot(2,2,3); stem(n1,x2); title('Periodic extention')\r\n\r\nxlabel('n'); axis([-9,25,-1,11])\r\n\r\nx3 = [x2(43:45),x2(1:42)];\r\n\r\nsubplot(2,2,2); stem(n1,x3); title('Periodic shift')\r\n\r\nxlabel('n'); axis([-9,25,-1,11])\r\n\r\nx4 = x3 .* [zeros(1,15), ones(1,15), zeros(1,15)];\r\n\r\nsubplot(2,2,4); stem(n1,x4); title('Circular shift')\r\n\r\nxlabel('n'); axis([-9,25,-1,11])\r\n\r\npause;\r\n\r\n%print -deps2 me0511b.eps\r\n\r\n%\r\n\r\n",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter05",
      "dsp",
      "ex051100"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex051200",
    "title": "ex051200",
    "displayName": "Chapter 05: Example 05.12: Circular shift example\r",
    "description": "Chapter 05: Example 05.12: Circular shift example\r",
    "category": "DSP - Chapter 05",
    "chapter": "05",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 05: Example 05.12: Circular shift example\r\n\r\n# plt.subplot(1, 1, 1)\n# a) plot x((n-6))15\r\n\r\nn = 0:10; x = 10*(0.8) ** n\ny = cirshftt(x,6,15)\nn = 0:14; x = [x, zeros(1,4)]\nplt.subplot(2, 1, 1)\n stem(n,x); plt.title('Original sequence')\nplt.xlabel('n')\n plt.ylabel('x(n)')\n axis([-1,15,-1,11])\r\n\r\nplt.subplot(2, 1, 2)\n stem(n,y)\nplt.title('Circularly shifted sequence, N=15')\nplt.xlabel('n')\n plt.ylabel('x((n-6) mod 15)')\n \r\n\r\naxis([-1,15,-1,11])\r\n\r\npause; print -deps2 me0512.eps\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% Chapter 05: Example 05.12: Circular shift example\r\n\r\n%\r\n\r\nsubplot(1,1,1)\r\n\r\n% a) plot x((n-6))15\r\n\r\nn = 0:10; x = 10*(0.8) .^ n;\r\n\r\ny = cirshftt(x,6,15); \r\n\r\nn = 0:14; x = [x, zeros(1,4)];\r\n\r\nsubplot(2,1,1); stem(n,x); title('Original sequence')\r\n\r\nxlabel('n'); ylabel('x(n)'); axis([-1,15,-1,11])\r\n\r\nsubplot(2,1,2); stem(n,y); \r\n\r\ntitle('Circularly shifted sequence, N=15')\r\n\r\nxlabel('n'); ylabel('x((n-6) mod 15)'); \r\n\r\naxis([-1,15,-1,11])\r\n\r\npause; print -deps2 me0512.eps",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter05",
      "dsp",
      "ex051200"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex051300",
    "title": "ex051300",
    "displayName": "Chapter 05: Example 05.12: Circular shift example\r",
    "description": "Chapter 05: Example 05.12: Circular shift example\r",
    "category": "DSP - Chapter 05",
    "chapter": "05",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 05: Example 05.12: Circular shift example\r\n\r\n# plt.subplot(1, 1, 1)\n# a) plot x((n-6))15\r\n\r\nn = 0:10; x = 10*(0.8) ** n\ny = cirshftt(x,6,15)\nn = 0:14; x = [x, zeros(1,4)]\nplt.subplot(2, 1, 1)\n stem(n,x); plt.title('Original sequence')\nplt.xlabel('n')\n plt.ylabel('x(n)')\n axis([-1,15,-1,11])\r\n\r\nplt.subplot(2, 1, 2)\n stem(n,y)\nplt.title('Circularly shifted sequence, N=15')\nplt.xlabel('n')\n plt.ylabel('x((n-6) mod 15)')\n \r\n\r\naxis([-1,15,-1,11])\r\n\r\npause; print -deps2 me0512.eps\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% Chapter 05: Example 05.12: Circular shift example\r\n\r\n%\r\n\r\nsubplot(1,1,1)\r\n\r\n% a) plot x((n-6))15\r\n\r\nn = 0:10; x = 10*(0.8) .^ n;\r\n\r\ny = cirshftt(x,6,15); \r\n\r\nn = 0:14; x = [x, zeros(1,4)];\r\n\r\nsubplot(2,1,1); stem(n,x); title('Original sequence')\r\n\r\nxlabel('n'); ylabel('x(n)'); axis([-1,15,-1,11])\r\n\r\nsubplot(2,1,2); stem(n,y); \r\n\r\ntitle('Circularly shifted sequence, N=15')\r\n\r\nxlabel('n'); ylabel('x((n-6) mod 15)'); \r\n\r\naxis([-1,15,-1,11])\r\n\r\npause; print -deps2 me0512.eps",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter05",
      "dsp",
      "ex051300"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex051400",
    "title": "ex051400",
    "displayName": "Chapter 05: Example 05.14: Circular convolution example\r",
    "description": "Chapter 05: Example 05.14: Circular convolution example\r",
    "category": "DSP - Chapter 05",
    "chapter": "05",
    "source": "matlab",
    "pythonCode": "# Chapter 05: Example 05.14: Circular convolution example\r\n\r\n# x1 = [1,2,2]; x2 = [1,2,3,4]\ny = circonvt(x1,x2,4)",
    "matlabCode": "% Chapter 05: Example 05.14: Circular convolution example\r\n\r\n%\r\n\r\nx1 = [1,2,2]; x2 = [1,2,3,4];\r\n\r\ny = circonvt(x1,x2,4)",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter05",
      "dsp",
      "ex051400"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex051500",
    "title": "ex051500",
    "displayName": "Chapter 05: Example 05.14: Circular convolution example\r",
    "description": "Chapter 05: Example 05.14: Circular convolution example\r",
    "category": "DSP - Chapter 05",
    "chapter": "05",
    "source": "matlab",
    "pythonCode": "# Chapter 05: Example 05.14: Circular convolution example\r\n\r\n# # a) 5-point circular convolution\r\n\r\nx1 = [1,2,2]; x2 = [1,2,3,4]\ny = circonvt(x1,x2,5)\r\n\r\n# b) 6-point circular convolution\r\n\r\nx1 = [1,2,2]; x2 = [1,2,3,4]\ny = circonvt(x1,x2,6)",
    "matlabCode": "% Chapter 05: Example 05.14: Circular convolution example\r\n\r\n%\r\n\r\n% a) 5-point circular convolution\r\n\r\nx1 = [1,2,2]; x2 = [1,2,3,4];\r\n\r\ny = circonvt(x1,x2,5)\r\n\r\n% b) 6-point circular convolution\r\n\r\nx1 = [1,2,2]; x2 = [1,2,3,4];\r\n\r\ny = circonvt(x1,x2,6)",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter05",
      "dsp",
      "ex051500"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex051700",
    "title": "ex051700",
    "displayName": "Chapter 05: Example-5.17: Overlap and save\r",
    "description": "Chapter 05: Example-5.17: Overlap and save\r",
    "category": "DSP - Chapter 05",
    "chapter": "05",
    "source": "matlab",
    "pythonCode": "import numpy as np\n# Chapter 05: Example-5.17: Overlap and save\r\n\r\n# n = 0:9\nx = n+1; Lenx = len(x)\nh = [1,0,-1]; M = 3; M1 = M-1; L = N-M1\nN = 6; h = [h zeros(1,N-M)]\n# x = [zeros(1,M1), x, zeros(1,N-1)]\nK = floor((Lenx+M1-1)/(L))\nY = zeros(K+1,N)\nfor k in range(0, K + 1):\n\n\txk = xnp.arange(k*L+1, k*L+N + 1)\n\tY(k+1,:) = circonvf(xk,h,N)\nY = Y(:,M:N)'\ny = (Y(:))'",
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
  },
  {
    "id": "use",
    "title": "use",
    "displayName": "Chapter 05: Example-5.18: olsave function use\r",
    "description": "Chapter 05: Example-5.18: olsave function use\r",
    "category": "DSP - Chapter 05",
    "chapter": "05",
    "source": "matlab",
    "pythonCode": "# Chapter 05: Example-5.18: olsave function use\r\n\r\n# n = 0:9; x = n+1; h = [1,0,-1]; N = 6\n# y = ovrlpsav(x,h,N)\r\n\r\n",
    "matlabCode": "% Chapter 05: Example-5.18: olsave function use\r\n\r\n%\r\n\r\nn = 0:9; x = n+1; h = [1,0,-1]; N = 6;\r\n\r\n%\r\n\r\ny = ovrlpsav(x,h,N)\r\n\r\n",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter05",
      "dsp",
      "use"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex052000",
    "title": "ex052000",
    "displayName": "Chapter 05: Example 05.20: Eigenvalues and eigenvectors\r",
    "description": "Chapter 05: Example 05.20: Eigenvalues and eigenvectors\r",
    "category": "DSP - Chapter 05",
    "chapter": "05",
    "source": "matlab",
    "pythonCode": "# Chapter 05: Example 05.20: Eigenvalues and eigenvectors\r\n\r\n# H = [1,4,3,2;2,1,4,3;3,2,1,4;4,3,2,1]\n[V,D] = eig(H)\r\n\r\n# verification\r\n\r\nh = H(:,1)'\nHk = dft(h,4)\r\n\r\n",
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
  },
  {
    "id": "ex052200",
    "title": "ex052200",
    "displayName": "Computational Complexity of FFT using MATLAB\r",
    "description": "Computational Complexity of FFT using MATLAB\r",
    "category": "DSP - Chapter 05",
    "chapter": "05",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Computational Complexity of FFT using MATLAB\r\n\r\n# Nmax = 2048\nfft_time=zeros(1,Nmax)\nfor n in range(1, Nmax + 1, 1):\n\n   disp(n)\n   x=ones(1,n)\n   t=clock;fft(x);fft_time(n)=etime(clock,t)\nn=[1:1:Nmax]\nplt.plot(n,fft_time,'.')\n\r\n\r\nsave fft_time.mat fft_time n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% Computational Complexity of FFT using MATLAB\r\n\r\n%\r\n\r\nNmax = 2048;\r\n\r\nfft_time=zeros(1,Nmax);\r\n\r\nfor n=1:1:Nmax\r\n\r\n   disp(n);\r\n\r\n   x=ones(1,n);\r\n\r\n   t=clock;fft(x);fft_time(n)=etime(clock,t);\r\n\r\nend\r\n\r\nn=[1:1:Nmax];\r\n\r\nplot(n,fft_time,'.');\r\n\r\nsave fft_time.mat fft_time n;\r\n\r\n",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter05",
      "dsp",
      "ex052200"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex05220b",
    "title": "ex05220b",
    "displayName": "Chapter 05: Example 5.22 Ploting of FFT execution times\r",
    "description": "Chapter 05: Example 5.22 Ploting of FFT execution times\r",
    "category": "DSP - Chapter 05",
    "chapter": "05",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 05: Example 5.22 Ploting of FFT execution times\r\n\r\n# load fft_time.mat\ntop = ceil(np.max(fft_time))\n# n = 1:2048\nsubplot\r\n\r\nclg\r\n\r\nplt.plot(n,fft_time,'.')\naxis([0,2500,0,50])\r\n\r\nplt.xlabel('N')\nplt.ylabel('Time in Sec.')\nplt.title('FFT execution times')\ntext(2100,top,'o(N*N)')\r\n\r\ntext(2100,top/2,'o(N*N/2)')\r\n\r\ntext(2100,top/3,'o(N*N/3)')\r\n\r\ntext(2100,top/4,'o(N*N/4)')\r\n\r\ntext(2100,1,'o(N*logN)')\r\n\r\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% Chapter 05: Example 5.22 Ploting of FFT execution times\r\n\r\n%\r\n\r\nload fft_time.mat;\r\n\r\ntop = ceil(max(fft_time));\r\n\r\n%n = 1:2048;\r\n\r\nsubplot\r\n\r\nclg\r\n\r\nplot(n,fft_time,'.');axis([0,2500,0,50])\r\n\r\nxlabel('N');ylabel('Time in Sec.')\r\n\r\ntitle('FFT execution times')\r\n\r\ntext(2100,top,'o(N*N)')\r\n\r\ntext(2100,top/2,'o(N*N/2)')\r\n\r\ntext(2100,top/3,'o(N*N/3)')\r\n\r\ntext(2100,top/4,'o(N*N/4)')\r\n\r\ntext(2100,1,'o(N*logN)')\r\n\r\n",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter05",
      "dsp",
      "ex05220b"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex052300",
    "title": "ex052300",
    "displayName": "Chapter 05: Example 5.23 High speed convolution\r",
    "description": "Chapter 05: Example 5.23 High speed convolution\r",
    "category": "DSP - Chapter 05",
    "chapter": "05",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 05: Example 5.23 High speed convolution\r\n\r\n# conv_time = zeros(1,150); fft_time = zeros(1,150)\n# for N in range(1, 150 + 1):\n\n    tc = 0; tf=0\n    L = 2*N-1; nu = round((log10(L)/log10(2))+0.45); L = 2**nu\n    for I in range(1, 100 + 1):\n\n       h = randn(1,N)\n       x = rand(1,N)\n      t0 = clock; y1 = conv(h,x); t1=etime(clock,t0)\n      tc = tc+t1\n      t0 = clock; y2 = ifft(fft(h,L)*fft(x,L)); t2=etime(clock,t0)\n      tf = tf+t2\n# conv_time(N)=tc/100\n    fft_time(N)=tf/100\n# n = 1:150; plt.subplot(1, 1, 1)\n\r\n\r\nplt.plot(nnp.arange(25, 150 + 1)\n,conv_timenp.arange(25, 150 + 1),nnp.arange(25, 150 + 1),fft_timenp.arange(25, 150 + 1))\r\n\r\nsave times.txt conv_time fft_time -ascii -tabs\r\n\r\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% Chapter 05: Example 5.23 High speed convolution\r\n\r\n%\r\n\r\nconv_time = zeros(1,150); fft_time = zeros(1,150);\r\n\r\n%\r\n\r\nfor N = 1:150\r\n\r\n    tc = 0; tf=0;\r\n\r\n    L = 2*N-1; nu = round((log10(L)/log10(2))+0.45); L = 2^nu;\r\n\r\n    for I=1:100\r\n\r\n       h = randn(1,N);\r\n\r\n       x = rand(1,N);\r\n\r\n      t0 = clock; y1 = conv(h,x); t1=etime(clock,t0);\r\n\r\n      tc = tc+t1;\r\n\r\n      t0 = clock; y2 = ifft(fft(h,L).*fft(x,L)); t2=etime(clock,t0);\r\n\r\n      tf = tf+t2;\r\n\r\n    end\r\n\r\n%\r\n\r\n    conv_time(N)=tc/100;\r\n\r\n    fft_time(N)=tf/100;\r\n\r\nend\r\n\r\n%\r\n\r\nn = 1:150; subplot(1,1,1);\r\n\r\nplot(n(25:150),conv_time(25:150),n(25:150),fft_time(25:150))\r\n\r\nsave times.txt conv_time fft_time -ascii -tabs\r\n\r\n",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter05",
      "dsp",
      "ex052300"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex05230b",
    "title": "ex05230b",
    "displayName": "Chapter 05: Example 5.23 High speed convolution\r",
    "description": "Chapter 05: Example 5.23 High speed convolution\r",
    "category": "DSP - Chapter 05",
    "chapter": "05",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 05: Example 5.23 High speed convolution\r\n\r\n# part b) Plotting of saved data\r\n\r\n# run after part a)\r\n\r\nload times.txt -ascii\nconv_time=times(1,:)\nhsconv_time=times(2,:)\nn = 1:150; plt.subplot(1, 1, 1)\n # set(gca,'LineWidth',10)\nplt.plot(nnp.arange(25, 150 + 1)\n,conv_timenp.arange(25, 150 + 1),nnp.arange(25, 150 + 1),hsconv_timenp.arange(25, 150 + 1))\r\n\r\naxis([0,180,0,0.4])\nset(gca,'XTickMode','manual','XTick',[25;50;75;100;125;150])\nsetnp.arange(gca,'YTickMode','manual','YTick',[0.05, 0.35] + 0.05, 0.05); # grid\r\n\r\ntext(150,0.17,'highspeed')\r\n\r\ntext(150,0.155,'convolution')\r\n\r\ntext(150,0.34,'convolution')\r\n\r\nplt.xlabel('sequence length N')\n plt.ylabel('time in seconds')\n\r\n\r\nplt.title('Comparison of convolution times')\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% Chapter 05: Example 5.23 High speed convolution\r\n\r\n%\t\t\tpart b) Plotting of saved data\r\n\r\n%                               run after part a)\r\n\r\nload times.txt -ascii;\r\n\r\nconv_time=times(1,:);\r\n\r\nhsconv_time=times(2,:);\r\n\r\nn = 1:150; subplot(1,1,1); %set(gca,'LineWidth',10);\r\n\r\nplot(n(25:150),conv_time(25:150),n(25:150),hsconv_time(25:150))\r\n\r\naxis([0,180,0,0.4]);\r\n\r\nset(gca,'XTickMode','manual','XTick',[25;50;75;100;125;150]);\r\n\r\nset(gca,'YTickMode','manual','YTick',[0.05:0.05:0.35]); %grid\r\n\r\ntext(150,0.17,'highspeed')\r\n\r\ntext(150,0.155,'convolution')\r\n\r\ntext(150,0.34,'convolution')\r\n\r\nxlabel('sequence length N'); ylabel('time in seconds');\r\n\r\ntitle('Comparison of convolution times');",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter05",
      "dsp",
      "ex05230b"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  }
]

export default chapter05Programs
