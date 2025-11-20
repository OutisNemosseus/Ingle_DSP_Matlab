// Chapter 05: Example 5.23 High speed convolution
// Chapter 05: Example 5.23 High speed convolution

const ex05230b = {
  "id": "ex05230b",
  "title": "ex05230b",
  "displayName": "Chapter 05: Example 5.23 High speed convolution",
  "description": "Chapter 05: Example 5.23 High speed convolution",
  "category": "DSP - Chapter 05",
  "chapter": "05",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: Chapter 05: Example 5.23 High speed convolution\n# Chapter: 05\n# Source: Ingle DSP MATLAB Programs\n\nimport matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 05: Example 5.23 High speed convolution\r\n\r\n# part b) Plotting of saved data\r\n\r\n# run after part a)\r\n\r\nload times.txt -ascii\nconv_time=times(1,:)\nhsconv_time=times(2,:)\nn = 1:150; plt.subplot(1, 1, 1)\n # set(gca,'LineWidth',10)\nplt.plt.plt.plot(nnp.arange(25, 150 + 1)\n,conv_timenp.arange(25, 150 + 1),nnp.arange(25, 150 + 1),hsconv_timenp.arange(25, 150 + 1))\r\n\r\nplt.plt.axis([0,180,0,0.4])\nset(gca,'XTickMode','manual','XTick',[25;50;75;100;125;150])\nsetnp.arange(gca,'YTickMode','manual','YTick',[0.05, 0.35] + 0.05, 0.05); # plt.grid(True)\ntext(150,0.17,'highspeed')\r\n\r\ntext(150,0.155,'convolution')\r\n\r\ntext(150,0.34,'convolution')\r\n\r\nplt.xlabel('sequence length N')\n plt.ylabel('time in seconds')\n\r\n\r\nplt.title('Comparison of convolution times')\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
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
};

export default ex05230b;
