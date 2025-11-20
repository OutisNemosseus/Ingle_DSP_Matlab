// Chapter 05: Example 05.06: Simple DFT Example
// Chapter 05: Example 05.06: Simple DFT Example

const ex050600 = {
  "id": "ex050600",
  "title": "ex050600",
  "displayName": "Chapter 05: Example 05.06: Simple DFT Example",
  "description": "Chapter 05: Example 05.06: Simple DFT Example",
  "category": "DSP - Chapter 05",
  "chapter": "05",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: Chapter 05: Example 05.06: Simple DFT Example\n# Chapter: 05\n# Source: Ingle DSP MATLAB Programs\n\nimport matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 05: Example 05.06: Simple DFT Example\r\n\r\n# x = [1,1,1,1]\nplt.subplot(1, 1, 1)\n\r\n\r\n# # a) DTFT\r\n\r\nw = np.arange(0, 501)*2*np.pi/500\n[H] = freqz(x,1,w)\nmagH = np.abs(H); phaH = np.angle(H); phaH(126)=-47.5841*np.pi/180\nplt.subplot(2, 1, 1)\n plt.plt.plt.plot(w/np.pi,magH)\n plt.grid(True)\nplt.xlabel('frequency in np.pi units')\n\r\n\r\nplt.ylabel('|X|')\n plt.title('Magnitude of the DTFT')\nplt.subplot(2, 1, 2)\n plt.plt.plt.plot(w/np.pi,phaH/np.pi*180)\n plt.grid(True)\nplt.xlabel('frequency in np.pi units')\n\r\n\r\nplt.ylabel('Degrees')\n plt.title('Angle of the DTFT')\n# print -deps2 me0506a.eps\r\n\r\npause;plt.subplot(1, 1, 1)\n# # b) 4-point DFT\r\n\r\nN = 4; w1 = 2*np.pi/N; k = 0:N-1\nX = dft(x,N)\nmagX = np.abs(X), phaX = np.angle(X)*180/np.pi\r\n\r\nplt.subplot(2, 1, 1)\nplt.plt.plt.plot(w*N/(2*np.pi)\n,magH,'--')\nplt.plt.axis([-0.1,4.1,-1,5]); # \nplt.plt.stem(k,magX)\nplt.xlabel('k')\n\r\n\r\nplt.ylabel('|X(k)|')\n plt.title('Magnitude of the DFT, N=4')\r\n\r\n# \nplt.subplot(2, 1, 2)\nplt.plt.plt.plot(w*N/(2*np.pi)\n,phaH*180/np.pi,'--')\nplt.plt.axis([-0.1,4.1,-200,200]); # \nplt.plt.stem(k,phaX)\nplt.xlabel('k')\n\r\n\r\nplt.ylabel('Degrees')\n plt.title('Angle of the DFT, N=4')\r\n\r\n# print -deps2 me0506b.eps\r\n\r\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
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
};

export default ex050600;
