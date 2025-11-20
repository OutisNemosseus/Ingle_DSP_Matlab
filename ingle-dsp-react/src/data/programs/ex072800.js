// Chapter 7 Example 7.28
// Chapter 7 Example 7.28

const ex072800 = {
  "id": "ex072800",
  "title": "ex072800",
  "displayName": "Chapter 7 Example 7.28",
  "description": "Chapter 7 Example 7.28",
  "category": "DSP - Chapter 07",
  "chapter": "07",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: Chapter 7 Example 7.28\n# Chapter: 07\n# Source: Ingle DSP MATLAB Programs\n\nimport matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 7 Example 7.28\r\n\r\n# Hilbert transformer design using PM algorithm\r\n\r\n# f = [0.05,0.95]; m = [1 1]; M = 51; N = M-1\nh = remez(N,f,m,'hilbert')\n[db,mag,pha,grd,w] = freqz_m(h,[1])\nfig = plt.figure(1)\n plt.subplot(1, 1, 1)\nplt.subplot(2, 1, 1)\n stemnp.arange([0, N],h + 1); plt.title('Impulse Response')\n\r\n\r\nplt.xlabel('n')\n plt.ylabel('h(n)')\n plt.plt.axis([0,N,-0.8,0.8])\r\n\r\nset(gca,'XTickMode','manual','XTick',[0,N])\r\n\r\nsetnp.arange(gca,'YTickMode','manual','YTick',[-0.8, 0.8] + 0.2, 0.2)\nplt.subplot(2, 1, 2)\n plt.plt.plt.plot(w/np.pi,mag)\n plt.title('Magnitude Response')\nplt.xlabel('frequency in np.pi units')\n plt.ylabel('|H|')\nset(gca,'XTickMode','manual','XTick',[0,f,1])\r\n\r\nset(gca,'YTickMode','manual','YTick',[0,1]);plt.grid(True)\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
  "matlabCode": "% Chapter 7 Example 7.28\r\n\r\n%           Hilbert transformer design using PM algorithm\r\n\r\n%\r\n\r\nf = [0.05,0.95]; m = [1 1]; M = 51; N = M-1;\r\n\r\nh = remez(N,f,m,'hilbert');\r\n\r\n[db,mag,pha,grd,w] = freqz_m(h,[1]);\r\n\r\nfigure(1); subplot(1,1,1)\r\n\r\nsubplot(2,1,1); stem([0:N],h); title('Impulse Response');\r\n\r\nxlabel('n'); ylabel('h(n)'); axis([0,N,-0.8,0.8])\r\n\r\nset(gca,'XTickMode','manual','XTick',[0,N])\r\n\r\nset(gca,'YTickMode','manual','YTick',[-0.8:0.2:0.8]);\r\n\r\nsubplot(2,1,2); plot(w/pi,mag); title('Magnitude Response')\r\n\r\nxlabel('frequency in pi units'); ylabel('|H|')\r\n\r\nset(gca,'XTickMode','manual','XTick',[0,f,1])\r\n\r\nset(gca,'YTickMode','manual','YTick',[0,1]);grid",
  "defaultParams": {},
  "params": [],
  "tags": [
    "chapter07",
    "dsp",
    "ex072800"
  ],
  "wikipediaLinks": [
    {
      "title": "Digital signal processing",
      "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
    }
  ]
};

export default ex072800;
