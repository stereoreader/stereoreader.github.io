Disclaimer: I don't make make any medical claims; I only assume the existing possibility of improving vision with eye muscle exercises.

Being myopic (-4.5d), in 2023 I started doing simple eye exercises for 5–10 minutes before falling asleep. Since then, my vision improved to some degree, which I considered worth sharing, so I created a YouTube channel in Russian to share my experience. By that time, due to regular exercises, I had acquired pretty good eye muscle sensitivity, so I could feel which eye muscles contract and relax, given that I had learned [eye muscle anatomy](https://en.wikipedia.org/wiki/Extraocular_muscles) in detail. This allowed me to develop my own precise view of what causes myopia. This is a logical continuation of the [Bates method](https://en.wikipedia.org/wiki/Bates_method). Regardless of the mainstream consensus that it is false, the main idea—that coarse focusing is done by extraocular muscles and final focusing by the eye lens—allowed many people who shared their experiences with me to get rid of myopia and other eye focusing problems. I even read a 2018 article in an ophthalmological journal claiming that the Bates theory is not entirely without merit and that further studies should be conducted on the matter (unfortunately, I cannot find it now).

My experience suggested that myopia happens due to shortening of the eye [rectus muscles](https://en.wikipedia.org/wiki/Extraocular_muscles), especially the medial ones (internal, near the nose), which converge the eyes for near focusing. In July 2025, I began stereo reading—reading text in two columns in parallel view—where the eyes diverge to the point of exotropia, a state in which the eyes diverge beyond parallel alignment. I also found that my myopic audience has very poor ability to diverge and achieve any significant exotropia, whereas people without myopia have strong exotropia ability. Since then, exotropia and stereo reading have become my main tools for training my eyes. Reading alone is used in many vision improvement systems, including Bates’.

So I started in June 2025 being able to read (in non-stereo mode, just regular text) 2 mm lowercase letters from a 33-centimeter distance and ended on December 31 being able to read 7 mm lowercase letters from a 3-meter distance. That was a 2.6× improvement in angular letter size, which also corresponded to significant improvement in my everyday vision. Since then, I have been convinced that eye muscle exercises can be a working tool to mitigate eye focusing problems such as myopia.

In June 2025, I started the [Stereo Reader web app](https://stereoreader.github.io/app/) as my tool for stereo reading. Vue/TypeScript/PWA were selected for the implementation. What seemed like an easy project soon became a challenge.

![Home screen](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mkrncwlj3t22iujnlhz0.jpg)

![Reading mode](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jsv1hzwflk1c44pnmu3b.jpg)

After I shared the app with my eye training audience, it became clear that support for many e-book formats was required, including those with large amounts of text. Moreover, when adjusting reading settings such as font size, gap between text columns, and the span of the reading area, the currently visible text on the screen should not be lost.

So I developed a simple semantic system where any text document format is split into paragraphs (called “chunks” for brevity), each with its own font style, with lines calculated dynamically character by character based on the text column width. Since I had spent a lot of time [benchmarking](https://stackoverflow.com/search?tab=votes&q=user%3a14098260%20benchmark&searchOn=3) JavaScript and [avoiding any extra string/array allocation](https://dev.to/alexander-nenashev/series/27389), I achieved fairly fast text layout calculation. However, it still takes 300–400 ms to process a huge novel like Asimov’s *Forward the Foundation* (about 140,000 words) on mid-range mobile devices (I tested on Snapdragon 720G). The issue is that layout recalculation occurs on any setting change that affects text column width. In any case, the UX is acceptable.

Having the text layout available, I implemented virtual scrolling while maintaining the full text container’s real height. This allows the text to appear as if it were loaded into a single DOM element with scrolling. Further improvements could include rethinking how users interact with partial scrolling and using Web Workers to process text in parallel.

Further work included adding stereo image viewing and introducing games, such as a moving ball to train exotropia in motion, and so on.

In any case, this project seems to have become my ongoing lifelong journey, and I welcome anyone to join.

[The website](https://stereoreader.github.io) will include documentation on usage, the application can be tried [here](https://stereoreader.github.io/app/#try). You can also join its [YouTube channel](https://www.youtube.com/channel/UCbRfdGzQ0Lwm87MthvMfcyw) and [Telegram channel](https://t.me/stereoreader) for future tutorials and news, and ask any questions in the [community](https://t.me/stereoreader_chat) or via [telegram](https://t.me/alexoran) or [email](mailto:aleks4hour@gmail.com).


