// Chapter 8: Example 8.10
// Chapter 8: Example 8.10

const ex081000 = {
  "id": "ex081000",
  "title": "ex081000",
  "displayName": "Chapter 8: Example 8.10",
  "description": "Chapter 8: Example 8.10",
  "category": "DSP - Chapter 08",
  "chapter": "08",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: Chapter 8: Example 8.10\n# Chapter: 08\n# Source: Ingle DSP MATLAB Programs\n\nimport matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 8: Example 8.10\r\n\r\n# Impulse Invariance Transformation\r\n\r\n# Simple example\r\n\r\n# plt.subplot(1, 1, 1)\n clg\r\n\r\nc = [1,1]; d = [1,5,6]; T = 0.1; Fs = 1/T\n[b,a] = imp_invr(c,d,T)\r\n\r\n# # b =  1.0000   -0.8966\r\n\r\n# # a =  1.0000   -1.5595    0.6065\r\n\r\n# Impulse response of the analog filter\r\n\r\nt = [0:0.01:3]; plt.subplot(2, 1, 1)\n impulse(c,d,t)\nplt.plt.axis([0,3,-0.1,1]);# \n# Impulse response of the digital filter\r\n\r\nn = [0:1:3/T]; hn = filter(b,a,impseq(0,0,3/T))\nplt.plt.stem(n*T,hn); plt.xlabel('time in sec')\n title ('Impulse Responses')\n# \n# Magnitude Response of the digital filter\r\n\r\n[db,magd,pha,grd,wd] = freqz_m(b,a)\n# magnitude response of the analog filter\r\n\r\n[db,mags,pha,ws] = freqs_m(c,d,2*np.pi*Fs)\nplt.subplot(2, 1, 2)\n plt.plt.plt.plot(ws/(2*np.pi)\n,mags*Fs,wd/(2*np.pi)*Fs,magd)\r\n\r\nplt.xlabel('frequency in Hz')\n plt.title('Magnitude Responses')\n\r\n\r\nplt.ylabel('Magnitude')\n \r\n\r\ntext(1.4,.5,'Analog filter'); text(1.5,1.5,'Digital filter')\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
  "matlabCode": "% Chapter 8: Example 8.10\r\n\r\n%            Impulse Invariance Transformation\r\n\r\n%                  Simple example\r\n\r\n%\r\n\r\nsubplot(1,1,1); clg\r\n\r\nc = [1,1]; d = [1,5,6]; T = 0.1; Fs = 1/T;\r\n\r\n[b,a] = imp_invr(c,d,T)\r\n\r\n%%b =  1.0000   -0.8966\r\n\r\n%%a =  1.0000   -1.5595    0.6065\r\n\r\n% Impulse response of the analog filter\r\n\r\nt = [0:0.01:3]; subplot(2,1,1); impulse(c,d,t); \r\n\r\naxis([0,3,-0.1,1]);hold on\r\n\r\n% Impulse response of the digital filter\r\n\r\nn = [0:1:3/T]; hn = filter(b,a,impseq(0,0,3/T));\r\n\r\nstem(n*T,hn); xlabel('time in sec'); title ('Impulse Responses');\r\n\r\nhold off\r\n\r\n% Magnitude Response of the digital filter\r\n\r\n[db,magd,pha,grd,wd] = freqz_m(b,a);\r\n\r\n% magnitude response of the analog filter\r\n\r\n[db,mags,pha,ws] = freqs_m(c,d,2*pi*Fs);\r\n\r\nsubplot(2,1,2); plot(ws/(2*pi),mags*Fs,wd/(2*pi)*Fs,magd)\r\n\r\nxlabel('frequency in Hz'); title('Magnitude Responses');\r\n\r\nylabel('Magnitude'); \r\n\r\ntext(1.4,.5,'Analog filter'); text(1.5,1.5,'Digital filter')",
  "defaultParams": {},
  "params": [],
  "tags": [
    "chapter08",
    "dsp",
    "ex081000"
  ],
  "wikipediaLinks": [
    {
      "title": "Digital signal processing",
      "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
    }
  ]
};

export default ex081000;
