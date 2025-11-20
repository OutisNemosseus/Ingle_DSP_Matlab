// Chapter 05: Example 05.07: Zero-padding Example
// Chapter 05: Example 05.07: Zero-padding Example

const ex050700 = {
  "id": "ex050700",
  "title": "ex050700",
  "displayName": "Chapter 05: Example 05.07: Zero-padding Example",
  "description": "Chapter 05: Example 05.07: Zero-padding Example",
  "category": "DSP - Chapter 05",
  "chapter": "05",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: Chapter 05: Example 05.07: Zero-padding Example\n# Chapter: 05\n# Source: Ingle DSP MATLAB Programs\n\nimport matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 05: Example 05.07: Zero-padding Example\r\n\r\n# plt.subplot(1, 1, 1)\n\r\n\r\nx = [1,1,1,1]\n# # a) DTFT\r\n\r\nw = np.arange(0, 501)*2*np.pi/500\n[H] = freqz(x,1,w)\nmagH = np.abs(H); phaH = np.angle(H); phaH(126)=-47.5841*np.pi/180\n# # b) 8-point DFT\r\n\r\nN = 8; w1 = 2*np.pi/N; k = 0:N-1\nx = [x, np.zeros(1,4)]\nX = dft(x,N)\nmagX = np.abs(X), phaX = np.angle(X)*180/np.pi\r\n\r\nplt.subplot(2, 1, 1)\nplt.plt.plt.plot(w*N/(2*np.pi)\n,magH,'--')\nplt.plt.axis([-0.1,8.1,-1,5]); # \nplt.plt.stem(k,magX)\nplt.xlabel('k')\n\r\n\r\nplt.ylabel('|X(k)|')\n plt.title('Magnitude of the DFT, N=8')\r\n\r\n# \nplt.subplot(2, 1, 2)\nplt.plt.plt.plot(w*N/(2*np.pi)\n,phaH*180/np.pi,'--')\nplt.plt.axis([-0.1,8.1,-200,200]); # \nplt.plt.stem(k,phaX)\nplt.xlabel('k')\n\r\n\r\nplt.ylabel('Degrees')\n plt.title('Angle of the DFT, N=8');pause\r\n\r\n# print -deps2 me0507a.eps\r\n\r\n# c) 16-point DFT\r\n\r\nplt.subplot(1, 1, 1)\nN = 16; w1 = 2*np.pi/N; k = 0:N-1\nx = [x, np.zeros(1,8)]\nX = dft(x,N)\nmagX = np.abs(X), phaX = np.angle(X)*180/np.pi\r\n\r\nplt.subplot(2, 1, 1)\nplt.plt.plt.plot(w*N/(2*np.pi)\n,magH,'--')\nplt.plt.axis([-0.1,16.1,-1,5]); # \nplt.plt.stem(k,magX)\nplt.xlabel('k')\n\r\n\r\nplt.ylabel('|X(k)|')\n plt.title('Magnitude of the DFT, N=16')\r\n\r\n# \nplt.subplot(2, 1, 2)\nplt.plt.plt.plot(w*N/(2*np.pi)\n,phaH*180/np.pi,'--')\nplt.plt.axis([-0.1,16.1,-200,200]); # \nplt.plt.stem(k,phaX)\nplt.xlabel('k')\n\r\n\r\nplt.ylabel('Degrees')\n plt.title('Angle of the DFT, N=16')\r\n\r\n# print -deps2 me0507b.eps\r\n\r\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
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
};

export default ex050700;
