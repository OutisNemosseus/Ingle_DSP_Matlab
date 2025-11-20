// Chapter 05: Example 05.14: Circular convolution example
// Chapter 05: Example 05.14: Circular convolution example

const ex051500 = {
  "id": "ex051500",
  "title": "ex051500",
  "displayName": "Chapter 05: Example 05.14: Circular convolution example",
  "description": "Chapter 05: Example 05.14: Circular convolution example",
  "category": "DSP - Chapter 05",
  "chapter": "05",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: Chapter 05: Example 05.14: Circular convolution example\n# Chapter: 05\n# Source: Ingle DSP MATLAB Programs\n\n# Chapter 05: Example 05.14: Circular convolution example\r\n\r\n# # a) 5-point circular convolution\r\n\r\nx1 = [1,2,2]; x2 = [1,2,3,4]\ny = circonvt(x1,x2,5)\r\n\r\n# b) 6-point circular convolution\r\n\r\nx1 = [1,2,2]; x2 = [1,2,3,4]\ny = circonvt(x1,x2,6)",
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
};

export default ex051500;
