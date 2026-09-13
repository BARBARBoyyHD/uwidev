Desktop : 
Metrics
Collapse view
First Contentful Paint
0.4 s
First Contentful Paint marks the time at which the first text or image is painted. Learn more about the First Contentful Paint metric.
Largest Contentful Paint
0.6 s
Largest Contentful Paint marks the time at which the largest text or image is painted. Learn more about the Largest Contentful Paint metric
Total Blocking Time
19,320 ms
Sum of all time periods between FCP and Time to Interactive, when task length exceeded 50ms, expressed in milliseconds. Learn more about the Total Blocking Time metric.
Cumulative Layout Shift
0
Cumulative Layout Shift measures the movement of visible elements within the viewport. Learn more about the Cumulative Layout Shift metric.
Speed Index
7.7 s
Speed Index shows how quickly the contents of a page are visibly populated. Learn more about the Speed Index metric.
Captured at Sep 13, 2026, 5:24 PM GMT+7
Emulated Desktop with Lighthouse 13.4.1
Single page session
Initial page load
Custom throttling
Using HeadlessChromium 151.0.7922.173 with lr

Insights
Forced reflow
A forced reflow occurs when JavaScript queries geometric properties (such as offsetWidth) after styles have been invalidated by a change to the DOM state. This can result in poor performance. Learn more about forced reflows and possible mitigations.Unscored
Source
Total reflow time
[unattributed]
81 ms
Network dependency tree
Avoid chaining critical requests by reducing the length of chains, reducing the download size of resources, or deferring the download of unnecessary resources to improve page load.LCPUnscored
Maximum critical path latency: 1,168 ms
Initial Navigation
/en(uwidev.muhammadnahrulhayat98.workers.dev) - 676 ms, 19.52 KiB
…chunks/0hdgg6szz7wla.css(uwidev.muhammadnahrulhayat98.workers.dev) - 1,168 ms, 8.11 KiB
Preconnected origins
preconnect hints help the browser establish a connection earlier in the page load, saving time when the first request for that origin is made. The following are the origins that the page preconnected to.
no origins were preconnected
Preconnect candidates
Add preconnect hints to your most important origins, but try to use no more than 4.
No additional origins are good candidates for preconnecting
Render-blocking requests
Requests are blocking the page's initial render, which may delay LCP. Deferring or inlining can move these network requests out of the critical path.LCPFCPUnscored
URL
Transfer Size
Duration
workers.dev 1st party
8.1 KiB	0 ms
…chunks/0hdgg6szz7wla.css(uwidev.muhammadnahrulhayat98.workers.dev)
8.1 KiB
Legacy JavaScript Est savings of 13 KiB
Polyfills and transforms enable older browsers to use new JavaScript features. However, many aren't necessary for modern browsers. Consider modifying your JavaScript build process to not transpile Baseline features, unless you know you must support older browsers. Learn why most sites can deploy ES6+ code without transpilingLCPFCPUnscored
URL
Wasted bytes
workers.dev 1st party
13.4 KiB
…chunks/0m7ujsow3azwn.js(uwidev.muhammadnahrulhayat98.workers.dev)
13.4 KiB
…chunks/0m7ujsow3azwn.js:1:1116(uwidev.muhammadnahrulhayat98.workers.dev)
Array.prototype.at
…chunks/0m7ujsow3azwn.js:1:504(uwidev.muhammadnahrulhayat98.workers.dev)
Array.prototype.flat
…chunks/0m7ujsow3azwn.js:1:617(uwidev.muhammadnahrulhayat98.workers.dev)
Array.prototype.flatMap
…chunks/0m7ujsow3azwn.js:1:993(uwidev.muhammadnahrulhayat98.workers.dev)
Object.fromEntries
…chunks/0m7ujsow3azwn.js:1:1251(uwidev.muhammadnahrulhayat98.workers.dev)
Object.hasOwn
…chunks/0m7ujsow3azwn.js:1:246(uwidev.muhammadnahrulhayat98.workers.dev)
String.prototype.trimEnd
…chunks/0m7ujsow3azwn.js:1:161(uwidev.muhammadnahrulhayat98.workers.dev)
String.prototype.trimStart
Optimize DOM size
A large DOM can increase the duration of style calculations and layout reflows, impacting page responsiveness. A large DOM will also increase memory usage. Learn how to avoid an excessive DOM size.Unscored
Statistic
Element
Value
Total elements
648
DOM depth
div.flex > span.flex > svg.lucide > path
<path d="M5 12h14">
13
Most children
Business system diagram. Sales, inventory, and customers feed into the Uwi_Dev …
<svg viewBox="0 0 800 700" class="h-auto w-full" role="img" aria-label="Business system diagram. Sales, inventory, and customers feed into the Uwi…">
17
LCP breakdown
These insights are also available in the Chrome DevTools Performance Panel - record a trace to view more detailed information.
Diagnostics
Minimize main-thread work 30.4 s
Consider reducing the time spent parsing, compiling and executing JS. You may find delivering smaller JS payloads helps with this. Learn how to minimize main-thread workTBTUnscored
Category
Time Spent
Other
28,608 ms
Script Evaluation
1,254 ms
Style & Layout
251 ms
Script Parsing & Compilation
104 ms
Rendering
84 ms
Garbage Collection
55 ms
Parse HTML & CSS
22 ms
Reduce JavaScript execution time 1.3 s
Consider reducing the time spent parsing, compiling, and executing JS. You may find delivering smaller JS payloads helps with this. Learn how to reduce Javascript execution time.TBTUnscored
URL
Total CPU Time
Script Evaluation
Script Parse
workers.dev 1st party
30,073 ms	1,165 ms	92 ms
…chunks/449yz8mjrioyg.js(uwidev.muhammadnahrulhayat98.workers.dev)
23,653 ms
79 ms
9 ms
…chunks/0m7ujsow3azwn.js(uwidev.muhammadnahrulhayat98.workers.dev)
2,679 ms
844 ms
34 ms
…chunks/20vrsj1v4e6dv.js(uwidev.muhammadnahrulhayat98.workers.dev)
1,769 ms
12 ms
18 ms
…chunks/1rkw1xaobzsk2.js(uwidev.muhammadnahrulhayat98.workers.dev)
1,404 ms
45 ms
6 ms
/en(uwidev.muhammadnahrulhayat98.workers.dev)
359 ms
3 ms
6 ms
…chunks/1kci5-sc2hj6s.js(uwidev.muhammadnahrulhayat98.workers.dev)
107 ms
77 ms
19 ms
…chunks/3y4lkfs1_2v7o.js(uwidev.muhammadnahrulhayat98.workers.dev)
104 ms
103 ms
1 ms
Unattributable
250 ms	63 ms	0 ms
Unattributable
250 ms
63 ms
0 ms
Reduce unused JavaScript Est savings of 66 KiB
Reduce unused JavaScript and defer loading scripts until they are required to decrease bytes consumed by network activity. Learn how to reduce unused JavaScript.LCPFCPUnscored
URL
Transfer Size
Est Savings
workers.dev 1st party
170.1 KiB	66.0 KiB
…chunks/20vrsj1v4e6dv.js(uwidev.muhammadnahrulhayat98.workers.dev)
49.5 KiB
22.7 KiB
…chunks/1kci5-sc2hj6s.js(uwidev.muhammadnahrulhayat98.workers.dev)
50.0 KiB
21.9 KiB
…chunks/0m7ujsow3azwn.js(uwidev.muhammadnahrulhayat98.workers.dev)
70.6 KiB
21.4 KiB
Avoid long main-thread tasks 20 long tasks found
Lists the longest tasks on the main thread, useful for identifying worst contributors to input delay. Learn how to avoid long main-thread tasksTBTUnscored
URL
Start Time
Duration
workers.dev 1st party
6,074 ms
…chunks/1rkw1xaobzsk2.js(uwidev.muhammadnahrulhayat98.workers.dev)
1,236 ms
579 ms
…chunks/449yz8mjrioyg.js(uwidev.muhammadnahrulhayat98.workers.dev)
8,726 ms
577 ms
…chunks/0m7ujsow3azwn.js(uwidev.muhammadnahrulhayat98.workers.dev)
3,694 ms
451 ms
…chunks/449yz8mjrioyg.js(uwidev.muhammadnahrulhayat98.workers.dev)
28,165 ms
354 ms
…chunks/449yz8mjrioyg.js(uwidev.muhammadnahrulhayat98.workers.dev)
10,632 ms
350 ms
…chunks/449yz8mjrioyg.js(uwidev.muhammadnahrulhayat98.workers.dev)
19,256 ms
322 ms
…chunks/449yz8mjrioyg.js(uwidev.muhammadnahrulhayat98.workers.dev)
11,907 ms
296 ms
…chunks/449yz8mjrioyg.js(uwidev.muhammadnahrulhayat98.workers.dev)
25,231 ms
281 ms
…chunks/449yz8mjrioyg.js(uwidev.muhammadnahrulhayat98.workers.dev)
13,590 ms
264 ms
…chunks/449yz8mjrioyg.js(uwidev.muhammadnahrulhayat98.workers.dev)
12,573 ms
263 ms
…chunks/0m7ujsow3azwn.js(uwidev.muhammadnahrulhayat98.workers.dev)
20,537 ms
259 ms
…chunks/449yz8mjrioyg.js(uwidev.muhammadnahrulhayat98.workers.dev)
20,796 ms
250 ms
…chunks/449yz8mjrioyg.js(uwidev.muhammadnahrulhayat98.workers.dev)
20,294 ms
243 ms
…chunks/449yz8mjrioyg.js(uwidev.muhammadnahrulhayat98.workers.dev)
12,203 ms
237 ms
…chunks/0m7ujsow3azwn.js(uwidev.muhammadnahrulhayat98.workers.dev)
17,058 ms
235 ms
…chunks/449yz8mjrioyg.js(uwidev.muhammadnahrulhayat98.workers.dev)
14,849 ms
232 ms
…chunks/20vrsj1v4e6dv.js(uwidev.muhammadnahrulhayat98.workers.dev)
21,986 ms
232 ms
…chunks/449yz8mjrioyg.js(uwidev.muhammadnahrulhayat98.workers.dev)
15,081 ms
221 ms
…chunks/449yz8mjrioyg.js(uwidev.muhammadnahrulhayat98.workers.dev)
10,982 ms
216 ms
…chunks/20vrsj1v4e6dv.js(uwidev.muhammadnahrulhayat98.workers.dev)
4,769 ms
212 ms
Avoid non-composited animations 1 animated element found
Animations which are not composited can be janky and increase CLS. Learn how to avoid non-composited animationsCLSUnscored
Element
Name
Go to slide 5
<button type="button" aria-label="Go to slide 5" aria-current="false" class="h-2 rounded-full transition-all duration-200 w-2 bg-hairline hover:bg-acce…">
Unsupported CSS Property: width
width
Unsupported CSS Property: background-color
background-color
More information about the performance of your application. These numbers don't directly affect the Performance score.

mobile : 
57
Performance
100
Accessibility
100
Best Practices
100

Metrics
Collapse view
First Contentful Paint
1.0 s
First Contentful Paint marks the time at which the first text or image is painted. Learn more about the First Contentful Paint metric.
Largest Contentful Paint
2.7 s
Largest Contentful Paint marks the time at which the largest text or image is painted. Learn more about the Largest Contentful Paint metric
Total Blocking Time
20,140 ms
Sum of all time periods between FCP and Time to Interactive, when task length exceeded 50ms, expressed in milliseconds. Learn more about the Total Blocking Time metric.
Cumulative Layout Shift
0
Cumulative Layout Shift measures the movement of visible elements within the viewport. Learn more about the Cumulative Layout Shift metric.
Speed Index
10.5 s
Speed Index shows how quickly the contents of a page are visibly populated. Learn more about the Speed Index metric.
Captured at Sep 13, 2026, 5:24 PM GMT+7
Emulated Moto G Power with Lighthouse 13.4.1
Single page session
Initial page load
Slow 4G throttling
Using HeadlessChromium 151.0.7922.173 with lr

Performance
Values are estimated and may vary. The performance score is calculated directly from these metrics.See calculator.
0–49
50–89
90–100
Final Screenshot

Metrics
Collapse view
First Contentful Paint
1.0 s
First Contentful Paint marks the time at which the first text or image is painted. Learn more about the First Contentful Paint metric.
Largest Contentful Paint
2.7 s
Largest Contentful Paint marks the time at which the largest text or image is painted. Learn more about the Largest Contentful Paint metric
Total Blocking Time
20,140 ms
Sum of all time periods between FCP and Time to Interactive, when task length exceeded 50ms, expressed in milliseconds. Learn more about the Total Blocking Time metric.
Cumulative Layout Shift
0
Cumulative Layout Shift measures the movement of visible elements within the viewport. Learn more about the Cumulative Layout Shift metric.
Speed Index
10.5 s
Speed Index shows how quickly the contents of a page are visibly populated. Learn more about the Speed Index metric.
Captured at Sep 13, 2026, 5:24 PM GMT+7
Emulated Moto G Power with Lighthouse 13.4.1
Single page session
Initial page load
Slow 4G throttling
Using HeadlessChromium 151.0.7922.173 with lr
View Treemap
Screenshot
Screenshot
Screenshot
Screenshot
Screenshot
Screenshot
Screenshot
Screenshot
Show audits relevant to:

All

FCP

LCP

TBT

CLS
Insights
Legacy JavaScript Est savings of 13 KiB
Polyfills and transforms enable older browsers to use new JavaScript features. However, many aren't necessary for modern browsers. Consider modifying your JavaScript build process to not transpile Baseline features, unless you know you must support older browsers. Learn why most sites can deploy ES6+ code without transpilingLCPFCPUnscored
URL
Wasted bytes
workers.dev 1st party
13.4 KiB
…chunks/0m7ujsow3azwn.js(uwidev.muhammadnahrulhayat98.workers.dev)
13.4 KiB
…chunks/0m7ujsow3azwn.js:1:1116(uwidev.muhammadnahrulhayat98.workers.dev)
Array.prototype.at
…chunks/0m7ujsow3azwn.js:1:504(uwidev.muhammadnahrulhayat98.workers.dev)
Array.prototype.flat
…chunks/0m7ujsow3azwn.js:1:617(uwidev.muhammadnahrulhayat98.workers.dev)
Array.prototype.flatMap
…chunks/0m7ujsow3azwn.js:1:993(uwidev.muhammadnahrulhayat98.workers.dev)
Object.fromEntries
…chunks/0m7ujsow3azwn.js:1:1251(uwidev.muhammadnahrulhayat98.workers.dev)
Object.hasOwn
…chunks/0m7ujsow3azwn.js:1:246(uwidev.muhammadnahrulhayat98.workers.dev)
String.prototype.trimEnd
…chunks/0m7ujsow3azwn.js:1:161(uwidev.muhammadnahrulhayat98.workers.dev)
String.prototype.trimStart
Render-blocking requests Est savings of 70 ms
Requests are blocking the page's initial render, which may delay LCP. Deferring or inlining can move these network requests out of the critical path.LCPFCPUnscored
URL
Transfer Size
Duration
workers.dev 1st party
8.1 KiB	150 ms
…chunks/0hdgg6szz7wla.css(uwidev.muhammadnahrulhayat98.workers.dev)
8.1 KiB
150 ms
Forced reflow
A forced reflow occurs when JavaScript queries geometric properties (such as offsetWidth) after styles have been invalidated by a change to the DOM state. This can result in poor performance. Learn more about forced reflows and possible mitigations.Unscored
Source
Total reflow time
[unattributed]
37 ms
Network dependency tree
Avoid chaining critical requests by reducing the length of chains, reducing the download size of resources, or deferring the download of unnecessary resources to improve page load.LCPUnscored
Maximum critical path latency: 1,336 ms
Initial Navigation
/en(uwidev.muhammadnahrulhayat98.workers.dev) - 790 ms, 19.55 KiB
…chunks/0hdgg6szz7wla.css(uwidev.muhammadnahrulhayat98.workers.dev) - 1,336 ms, 8.10 KiB
Preconnected origins
preconnect hints help the browser establish a connection earlier in the page load, saving time when the first request for that origin is made. The following are the origins that the page preconnected to.
no origins were preconnected
Preconnect candidates
Add preconnect hints to your most important origins, but try to use no more than 4.
No additional origins are good candidates for preconnecting
Optimize DOM size
A large DOM can increase the duration of style calculations and layout reflows, impacting page responsiveness. A large DOM will also increase memory usage. Learn how to avoid an excessive DOM size.Unscored
Statistic
Element
Value
Total elements
648
DOM depth
div.flex > span.flex > svg.lucide > path
<path d="M5 12h14">
13
Most children
Business system diagram. Sales, inventory, and customers feed into the Uwi_Dev …
<svg viewBox="0 0 800 700" class="h-auto w-full" role="img" aria-label="Business system diagram. Sales, inventory, and customers feed into the Uwi…">
17
LCP breakdown
Each subpart has specific improvement strategies. Ideally, most of the LCP time should be spent on loading the resources, not within delays.LCPUnscored
Subpart
Duration
Time to first byte
10 ms
Element render delay
1,450 ms
These insights are also available in the Chrome DevTools Performance Panel - record a trace to view more detailed information.
Diagnostics
Minimize main-thread work 40.2 s
Consider reducing the time spent parsing, compiling and executing JS. You may find delivering smaller JS payloads helps with this. Learn how to minimize main-thread workTBTUnscored
Category
Time Spent
Other
38,713 ms
Script Evaluation
992 ms
Style & Layout
244 ms
Rendering
114 ms
Script Parsing & Compilation
98 ms
Garbage Collection
32 ms
Parse HTML & CSS
15 ms
Reduce unused JavaScript Est savings of 67 KiB
Reduce unused JavaScript and defer loading scripts until they are required to decrease bytes consumed by network activity. Learn how to reduce unused JavaScript.LCPFCPUnscored
URL
Transfer Size
Est Savings
workers.dev 1st party
170.3 KiB	66.6 KiB
…chunks/20vrsj1v4e6dv.js(uwidev.muhammadnahrulhayat98.workers.dev)
49.4 KiB
22.7 KiB
…chunks/0m7ujsow3azwn.js(uwidev.muhammadnahrulhayat98.workers.dev)
70.7 KiB
22.1 KiB
…chunks/1kci5-sc2hj6s.js(uwidev.muhammadnahrulhayat98.workers.dev)
50.1 KiB
21.8 KiB
Avoid long main-thread tasks 20 long tasks found
Lists the longest tasks on the main thread, useful for identifying worst contributors to input delay. Learn how to avoid long main-thread tasksTBTUnscored
URL
Start Time
Duration
workers.dev 1st party
2,870 ms
…chunks/1rkw1xaobzsk2.js(uwidev.muhammadnahrulhayat98.workers.dev)
3,116 ms
301 ms
…chunks/449yz8mjrioyg.js(uwidev.muhammadnahrulhayat98.workers.dev)
10,338 ms
167 ms
…chunks/449yz8mjrioyg.js(uwidev.muhammadnahrulhayat98.workers.dev)
11,263 ms
153 ms
…chunks/449yz8mjrioyg.js(uwidev.muhammadnahrulhayat98.workers.dev)
38,301 ms
145 ms
…chunks/449yz8mjrioyg.js(uwidev.muhammadnahrulhayat98.workers.dev)
35,793 ms
139 ms
…chunks/449yz8mjrioyg.js(uwidev.muhammadnahrulhayat98.workers.dev)
41,047 ms
139 ms
…chunks/20vrsj1v4e6dv.js(uwidev.muhammadnahrulhayat98.workers.dev)
21,005 ms
137 ms
…chunks/449yz8mjrioyg.js(uwidev.muhammadnahrulhayat98.workers.dev)
36,052 ms
134 ms
…chunks/0m7ujsow3azwn.js(uwidev.muhammadnahrulhayat98.workers.dev)
2,872 ms
133 ms
…chunks/449yz8mjrioyg.js(uwidev.muhammadnahrulhayat98.workers.dev)
11,131 ms
132 ms
…chunks/449yz8mjrioyg.js(uwidev.muhammadnahrulhayat98.workers.dev)
18,791 ms
131 ms
…chunks/449yz8mjrioyg.js(uwidev.muhammadnahrulhayat98.workers.dev)
38,446 ms
131 ms
…chunks/449yz8mjrioyg.js(uwidev.muhammadnahrulhayat98.workers.dev)
20,746 ms
130 ms
…chunks/449yz8mjrioyg.js(uwidev.muhammadnahrulhayat98.workers.dev)
28,289 ms
130 ms
…chunks/449yz8mjrioyg.js(uwidev.muhammadnahrulhayat98.workers.dev)
6,539 ms
129 ms
…chunks/0m7ujsow3azwn.js(uwidev.muhammadnahrulhayat98.workers.dev)
20,876 ms
129 ms
…chunks/449yz8mjrioyg.js(uwidev.muhammadnahrulhayat98.workers.dev)
8,899 ms
128 ms
…chunks/449yz8mjrioyg.js(uwidev.muhammadnahrulhayat98.workers.dev)
18,922 ms
128 ms
…chunks/449yz8mjrioyg.js(uwidev.muhammadnahrulhayat98.workers.dev)
7,742 ms
127 ms
…chunks/449yz8mjrioyg.js(uwidev.muhammadnahrulhayat98.workers.dev)
24,084 ms
127 ms
Avoid non-composited animations 1 animated element found
Animations which are not composited can be janky and increase CLS. Learn how to avoid non-composited animationsCLSUnscored
Element
Name
Go to slide 5
<button type="button" aria-label="Go to slide 5" aria-current="false" class="h-2 rounded-full transition-all duration-200 w-2 bg-hairline hover:bg-acce…">
Unsupported CSS Property: width
width
Unsupported CSS Property: background-color
background-color
