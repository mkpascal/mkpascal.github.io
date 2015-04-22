---
id: 40
title: JamVOX on OS X Lion
author: Pascal MUANG-KHOT
layout: post
---
JamVOX is a wonderful product. It&#8217;s a 2-in/2-out USB audio interface and powered monitor with two 3-inch full-range speakers. It&#8217;s a great practice tool for guitarist, just plug your guitar, choose your amp and you&#8217;re good to go! It&#8217;s also a good monitoring system powered only by the USB!

But there is a problem&#8230; it doesn&#8217;t work on OS X Lion. Why? Because OS X Lion boots to 64bit by default and the included driver doesn&#8217;t work with a 64bit system.

So the only solution is to put your system in 32bit mode, just type

<pre class="wp-code-highlight prettyprint">sudo systemsetup -setkernelbootarchitecture i386</pre>

on your Terminal. Restart and&#8230; it works!

**edit:** They just made a new update that works now with a 64bit OS X Kernel but we had to wait for 5 months, until then, the only way to make your JamVox was to put your system in 32bit mode! Not cool.

So don&#8217;t worry, if you just bought a JamVox and it doesn&#8217;t work, just plug it in and update first.
