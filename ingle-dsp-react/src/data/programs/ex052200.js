// Computational Complexity of FFT using MATLAB
// Computational Complexity of FFT using MATLAB

const ex052200 = {
  "id": "ex052200",
  "title": "ex052200",
  "displayName": "Computational Complexity of FFT using MATLAB",
  "description": "Computational Complexity of FFT using MATLAB",
  "category": "DSP - Chapter 05",
  "chapter": "05",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: Computational Complexity of FFT using MATLAB\n# Chapter: 05\n# Source: Ingle DSP MATLAB Programs\n\nimport matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Computational Complexity of FFT using MATLAB\r\n\r\n# Nmax = 2048\nfft_time=np.zeros(1,Nmax)\nfor n in range(1, Nmax + 1, 1):\n\n   disp(n)\n   x=np.ones(1,n)\n   t=clock;fft(x);fft_time(n)=etime(clock,t)\nn=[1:1:Nmax]\nplt.plt.plt.plot(n,fft_time,'.')\n\r\n\r\nsave fft_time.mat fft_time n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
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
};

export default ex052200;
