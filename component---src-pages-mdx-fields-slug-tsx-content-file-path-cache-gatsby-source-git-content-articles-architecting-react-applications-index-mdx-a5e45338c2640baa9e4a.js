"use strict";(self.webpackChunkrishikc_com=self.webpackChunkrishikc_com||[]).push([[399],{8203:function(e,a,t){t.r(a),t.d(a,{default:function(){return d}});var n=t(1151),s=t(7294);function o(e){const a=Object.assign({p:"p",a:"a",blockquote:"blockquote",span:"span",code:"code",h2:"h2",strong:"strong",em:"em"},(0,n.ah)(),e.components);return s.createElement(s.Fragment,null,s.createElement(a.p,null,"React has always been popular for its short learning curve and easy to use APIs. But if you have been working with this ",s.createElement(a.a,{href:"https://reactjs.org/",target:"_blank",rel:"nofollow noopener noreferrer"},"popular javascript library")," for a while now, you might agree with me on this one as well – If you don’t pay attention to it’s structure it will soon become an unmaintainable mess."),"\n",s.createElement(a.p,null,"Before joining my first job, I had some experience as a freelancer but didn’t know much about best practices and architecture apart from what I had come across either online or while development. And even as a freelancer I didn’t have experience with such large scale applications that we had to work with later in the job. This is when I started paying more attention to architecture. In the start, things used to get a little confusing sometimes - mostly because I was a bit more conscious about my code than before - which was obvious as I was part of a team now and not a solo freelancer."),"\n",s.createElement(a.p,null,"So I started looking through GitHub, online articles, papers and books. And as I kept working with React more and more on a large scale I had realised that"),"\n",s.createElement(a.blockquote,null,"\n",s.createElement(a.p,null,"The key to a robust, scalable and easy to maintain React application is architecture."),"\n"),"\n",s.createElement(a.p,null,"This applies to any application or software but with React, abstraction was a bit more difficult than other libraries / frameworks. This was until ",s.createElement(a.a,{href:"https://reactjs.org/docs/hooks-intro.html",target:"_blank",rel:"nofollow noopener noreferrer"},"Hooks were introduced")," - but we will keep it out of the context for now as it is still fairly new and most of the applications are still built with older versions of React. Also, there are a lot of improvements to be made; lot of do’s and dont’s to be discovered with its usage."),"\n",s.createElement(a.p,null,"As of now, I think the principle that I follow for structuring React applications will work fairly well with Hooks too! Since the focus was on a scalable web application architecture - not just React."),"\n",s.createElement("br"),"\n",s.createElement(a.p,null,"Let’s quickly take a look at the setup and then I’ll walk you through it and try to explain why it is structured that way. So the root of the project looks something like this :"),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 665px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/1f37035b5dbaff32447ee7845f853656/5f4af/base-struct.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 60.62500000000001%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsTAAALEwEAmpwYAAACSElEQVR42pXQ3UtTcRzH8f0d+bjnnbPHc862487mHp2ZQvak+VArwxsvI9NVqHNdiJ4tDXWmUeFtBF4VBN0GWQRRU8sMCfo/3rEjSCKUXXz4fn/84MXn9zPN5nLMDQ1RGh5mJneVkTNdXEhH6O5oJ6VEyEbipEIa6XCMrmSWZFCjM54hHdLoTGZJKBHatCRRSUULhDF9mrzH5sQEbycm+TA9Rb7nCpn205gdHgQxSLPFQ32Di/pGF3UNTmOeqnMYe0OTiMUuGfH6NTx+DdNu8RbbxTGq9/NUi7cZ6xtATZxHVTNksmeR5Dh2p4LTFcLhCuKToqiRDHIwQUCO4xRCCG7VuK/tpv25cfb1PD9LeX7po4z39uAOduD1tqDFsghiCLPVh9UewGrzY3NIB7EHcAphXGLYgGqzFtPW7CTbpQLfSlPs6XcZvdyPL9yJIARxe1uw2rw0m91/RDRmU7NgNHeJ6lFwWy+wUy6yWy7wQ7/DaO8BKIoho4HdGcTmkA3EbPEcpnaufcExsFp5wE5FZ29VZ39xmrHBa8jRi4huCSUYQxCUY9hfwS/rq3x9tsTu2jzfl2cYHbiOpJ3D79NobW0noqWx2f0nb/hxeYHPT1fYWn9EtVLmZv+QAYpCGFVN4vGGaWwSDpF/gu/WVthcq/D+ySqbj5cZ6csh+OL4Awqx1jZC4QR2x380fLO4xOuFRV6VH/JSn+fGpRweKYXoa0FWoshKDIvVe3JwY2qGjelZXhRLPC/MkesexCOnsDtkrDbfEewkT/4Nl6K0hy4IuioAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="base structure one"\n        title=""\n        src="/static/1f37035b5dbaff32447ee7845f853656/5f4af/base-struct.png"\n        srcset="/static/1f37035b5dbaff32447ee7845f853656/72799/base-struct.png 320w,\n/static/1f37035b5dbaff32447ee7845f853656/6af66/base-struct.png 640w,\n/static/1f37035b5dbaff32447ee7845f853656/5f4af/base-struct.png 665w"\n        sizes="(max-width: 665px) 100vw, 665px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",s.createElement(a.p,null,"And the ",s.createElement(a.code,null,"src")," directory ( which will contain all the source code for our application, ofcourse ) is structured like this :"),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 665px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/6ba5947fbf3cd9f601dd0d305a6cf485/5f4af/base-struct-2.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 21.5625%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA6UlEQVR42o3OT0vCYADHcd9JTnta5qY5n21t+oQRrYio6CYJReeO4alb9OcQiZtkMIXovXQK3FEDo5fyDXcYHTp0+Bx+ly+/XPJ4wyy8Zz645bt3TbfdwWoc4/l7bLaO8NUBG419pLOD7QbIBSfAdncxqwq9JFldczK5SRzxOQ6Zj3p8Pd/R7Zyz7h0iRBWlAjx/mxXdIq8ZaAUzs9jLopZG9JKdSoMfwz7T1yGzUcQ0euDq9IJ684RisYLttDBMl6V8Ga1gpJHf/gy+h09Mxi8kbzFJPOCyfUa5toUQFaRsYtVV9ug/D38ARFKU7R/eeuoAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="base structure two"\n        title=""\n        src="/static/6ba5947fbf3cd9f601dd0d305a6cf485/5f4af/base-struct-2.png"\n        srcset="/static/6ba5947fbf3cd9f601dd0d305a6cf485/72799/base-struct-2.png 320w,\n/static/6ba5947fbf3cd9f601dd0d305a6cf485/6af66/base-struct-2.png 640w,\n/static/6ba5947fbf3cd9f601dd0d305a6cf485/5f4af/base-struct-2.png 665w"\n        sizes="(max-width: 665px) 100vw, 665px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",s.createElement(a.p,null,"The first thing you might notice, and wonder maybe - and if you don’t, I’d recommend taking a look again - that we have two directories named ",s.createElement(a.code,null,"config")," in our project. No, this isn’t by mistake! It has a ( extremely ) simple reason."),"\n",s.createElement("br"),"\n",s.createElement(a.h2,{id:"two-config-directories-for-a-single-web-application-why-though",style:{position:"relative"}},s.createElement(a.a,{href:"#two-config-directories-for-a-single-web-application-why-though","aria-label":"two config directories for a single web application why though permalink",className:"autolink-header-icon before"},s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Two config directories for a single web application?! Why though??"),"\n",s.createElement(a.p,null,"The ",s.createElement(a.code,null,"config")," directory at the root contains all the configuration files related to build - like our application’s webpack config or any other bundler that we might use, environment files and other configs."),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 665px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/9daed9cd2feac42cb0eaa8f7fde7fec2/5f4af/config-snap.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 55.93750000000001%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAACEklEQVR42o2Q3UtTcRyHz39RQs15Nj1vO3s7e7GdzbdtTW3O5XQt3ItD02FlRIZEqaGlTHJmGkJQt11EF91322VQERUE4X/yhMeYJUVefHg+/C4ePr+vUK9WeTQ1xXZtmq3KOLtTFXYmy7y4PsP2RIndySqPK2UalQl2arOsFKusT1/lbvkK92s3mS/VuFO9xlyuxHy+gvB+ZZkPD5bYKuSZGYmTT/aQi/QwGu1mrKuP0VgvY7E+crE4WbOPTDTBoJlgMNZPMnKedG+ay5kC+YFRMj0XEPY3Fvi2OsfspSIeM4VD8eM2opwRdU6dlWlpVThtU2ixHfYD2kQde7sPu9OLvd2L2OGzaHN4EPYbi3xZu0U1m8cb7icaTZJKXcTtiaAoQVQthKIeixY+ihr+4134sbnE57XblIbGUP0JNM2g81wvokOj1a5YaRO1ZkSHC0kJIqshi4c92OzC/t46XxuLlIcLuAIpJEmnqzthSVUtgOYKWBJL9hfhcQrf9zb51FihlB1HDw7gdMpEzC4iZhwzepAEujv0z4UH/L0LH5/v8W6rTnGkgjecRpLdBEMx/IaJ34hYVDXjl+wEC98+ecqb+gaF3CS+ziEk2UuHEqRdDlhpE13Y29Sjb/9P+Hq1wcvldbIDBXR/HEU1kLVw88iiQ7ckJxa+uveQZzcWyCSG0bzddEi+w4WSgcPpbkpOKvwJm8GB7LMv3cAAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="config directory snapshot"\n        title=""\n        src="/static/9daed9cd2feac42cb0eaa8f7fde7fec2/5f4af/config-snap.png"\n        srcset="/static/9daed9cd2feac42cb0eaa8f7fde7fec2/72799/config-snap.png 320w,\n/static/9daed9cd2feac42cb0eaa8f7fde7fec2/6af66/config-snap.png 640w,\n/static/9daed9cd2feac42cb0eaa8f7fde7fec2/5f4af/config-snap.png 665w"\n        sizes="(max-width: 665px) 100vw, 665px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",s.createElement(a.p,null,"You might also notice that it is nested and that the webpack configuration lives in its own directory. This makes the configurations more organised and easier to manage. This might seem trivial but when the application starts growing , and with that the build process might also get complex - which then demands a well organised place of its own. Also, this brings a peace of mind while working with it – a large mess of configuration files is the last thing you might want while deploying your application in production! 👀"),"\n",s.createElement("br"),"\n",s.createElement(a.p,null,"The other ",s.createElement(a.code,null,"config")," directory inside our ",s.createElement(a.code,null,"src")," folder is for configurations related to our application, .i.e, the ones related to runtime. This may contain our json files ( or any other files ) that might shape the behaviour or capabilities of our app. Although, this may or may not be required as per your needs but for me, I have had this folder in most of the projects."),"\n",s.createElement("br"),"\n",s.createElement(a.h2,{id:"but-wait-what-about-the-resources-and-assets-directories-arent-assets-also-a-part-of-the-resources-for-our-react-application",style:{position:"relative"}},s.createElement(a.a,{href:"#but-wait-what-about-the-resources-and-assets-directories-arent-assets-also-a-part-of-the-resources-for-our-react-application","aria-label":"but wait what about the resources and assets directories arent assets also a part of the resources for our react application permalink",className:"autolink-header-icon before"},s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"But wait, what about the ",s.createElement(a.code,null,"resources")," and ",s.createElement(a.code,null,"assets")," directories? Aren’t assets also a part of the ‘resources’ for our react application?"),"\n",s.createElement("br"),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 675px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/c3dacc0ddfd785bc3eb75986cdb587f8/512c0/shrek.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 70.3125%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAOABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIDBf/EABUBAQEAAAAAAAAAAAAAAAAAAAEC/9oADAMBAAIQAxAAAAHOuiS0Jif/xAAcEAABBAMBAAAAAAAAAAAAAAACAAEREgMTISL/2gAIAQEAAQUCr5EoyH0o3KkJndf/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAaEAACAwEBAAAAAAAAAAAAAAABEQAQMQIh/9oACAEBAAY/Ah0SgTE/KWITcr//xAAaEAADAQEBAQAAAAAAAAAAAAAAAREhMVGh/9oACAEBAAE/IbSAFAfxRTcheEzI3b6T6OJ113p//9oADAMBAAIAAwAAABArP//EABURAQEAAAAAAAAAAAAAAAAAABBx/9oACAEDAQE/EIf/xAAWEQEBAQAAAAAAAAAAAAAAAAABACH/2gAIAQIBAT8Qddi//8QAGhABAQADAQEAAAAAAAAAAAAAAREAIUFRMf/aAAgBAQABPxAhQQ66+s8yKt/Bs8xUVDI8wpEiDchi/DnWNYQhXc//2Q==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="good question"\n        title=""\n        src="/static/c3dacc0ddfd785bc3eb75986cdb587f8/512c0/shrek.jpg"\n        srcset="/static/c3dacc0ddfd785bc3eb75986cdb587f8/cb69c/shrek.jpg 320w,\n/static/c3dacc0ddfd785bc3eb75986cdb587f8/c08c5/shrek.jpg 640w,\n/static/c3dacc0ddfd785bc3eb75986cdb587f8/512c0/shrek.jpg 675w"\n        sizes="(max-width: 675px) 100vw, 675px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",s.createElement(a.p,null,"Well, the ",s.createElement(a.code,null,"assets")," directory here is meant ",s.createElement(a.strong,null,s.createElement(a.em,null,"only"))," for images and other media ",s.createElement(a.em,null,", duhh,")),"\n",s.createElement(a.p,null,"whereas, ",s.createElement(a.code,null,"resources")," is for data that might be required by our web application, for example, constants and other static data which basically doesn’t have any or much logic associated to it. You can also add small methods to return the data, perhaps formatted to specific needs, and / or perform ",s.createElement(a.strong,null,s.createElement(a.em,null,"minor"))," operations on them there which can be used by parts of our application, which by the way – ",s.createElement(a.em,null,"trust me")," – will make your code a lot cleaner and more organised."),"\n",s.createElement(a.p,null,"This directory may also contain data and other ‘resources’ which can be occasionally fetched, stored and updated; and maybe processed a little before they are used in certain parts of our web application. Well, I guess you get the idea."),"\n",s.createElement("br"),"\n",s.createElement(a.h2,{id:"and-what-about-our-pages-and-all-the-react-components",style:{position:"relative"}},s.createElement(a.a,{href:"#and-what-about-our-pages-and-all-the-react-components","aria-label":"and what about our pages and all the react components permalink",className:"autolink-header-icon before"},s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"And what about our pages and all the react components??"),"\n",s.createElement(a.p,null,"So, here comes the interesting part. Atleast I think so. This is something that has been derived from a few other solutions on architecting react applications as well as other web applications along with some of my own practical experience. And by far, I’m pretty satisfied with it! 🤓"),"\n",s.createElement(a.p,null,"To start with, let’s assume our web application contains a home page, a profile page for the users and just for the sake of not having just two pages in the example, a third page that we will call – the other page. So the directory structure would look something like this :"),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="js"><pre class="language-js"><code class="language-js"><span class="token operator">--</span> src\n<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span> components\n<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span> config\n<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span> pages\n<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span> home\n<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span> index<span class="token punctuation">.</span>js\n<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span> index<span class="token punctuation">.</span>scss          <span class="token comment">// Mandatory sass file - I just wanted to make this look realistic!!</span>\n<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span> profile\n<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span> index<span class="token punctuation">.</span>js\n<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span> other<span class="token operator">-</span>page\n<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span> components\n<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span> index<span class="token punctuation">.</span>js\n<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span> resources\n</code></pre></div>'}}),"\n",s.createElement(a.p,null,"Notice how all the pages have their own separate directory with an entry point? And how that ‘other’ page has a component folder? Why do we need another component folder? Don’t we already have a component folder in the root of ",s.createElement(a.code,null,"src")," directory?"),"\n",s.createElement(a.p,null,"Wait, just hold on for a second! I’ll explain it real quick! ☝"),"\n",s.createElement(a.p,null,"This is what I call the “branching” structure. Each page has their own directory, their own set of components which are not used anywhere else except in that specific page, their own styles rules and other stuff which are associated with only that page. If any component is shared by two pages, guess where they’d go? Yes, you guessed it right – the ",s.createElement(a.code,null,"components")," directory in the root of our ",s.createElement(a.code,null,"src")," directory!"),"\n",s.createElement(a.p,null,"But.. you might wonder.. what is the point of doing that?"),"\n",s.createElement(a.p,null,"Let’s say, one day you and your teammates decide to get rid of the ‘other’ page – ",s.createElement(a.em,null,"maybe the name wasn’t good enough?")," – so what do you do? Spend an entire afternoon or a day on removing code, breaking and fixing the application? ",s.createElement(a.strong,null,"NO"),"."),"\n",s.createElement(a.p,null,"You just go ahead and delete the directory and remove its reference from where it was attached to / used in the web application. ",s.createElement(a.em,null,"And voila, it’s done!")," 💁🏻‍♂️"),"\n",s.createElement(a.p,null,"Nothing breaks in your app just because a bunch of code was deleted! Everything is independent of each other’s existence even if they were binded together at some point! A lot less to work with and worry about, isn’t it? And yeah, this principle can be applied to almost any application / software and not just some react application."),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 498px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/6aa1f3aec1ce2e22e330f44be58fc387/4e442/welcome.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 61.5625%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAMABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMFAgT/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABdwaSNgmFH//EABsQAQACAgMAAAAAAAAAAAAAAAECEgADISJB/9oACAEBAAEFApjXS9g4Zqe2c//EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAEDAQE/AYj/xAAYEQACAwAAAAAAAAAAAAAAAAAAAQIREv/aAAgBAgEBPwFys0f/xAAZEAACAwEAAAAAAAAAAAAAAAAAIRAxQZH/2gAIAQEABj8CRfTBz//EAB0QAAMAAQUBAAAAAAAAAAAAAAABESExQVFhgZH/2gAIAQEAAT8hTadteB6mHj0LgRjUWEwdj+n/2gAMAwEAAgADAAAAEM/v/8QAFhEBAQEAAAAAAAAAAAAAAAAAAREQ/9oACAEDAQE/ECSZ/8QAFhEBAQEAAAAAAAAAAAAAAAAAARAR/9oACAECAQE/EEWz/8QAHBABAQACAwEBAAAAAAAAAAAAAREAITFBUXGB/9oACAEBAAE/EGNarkH1vJK9Vdou/wBzbqUu7mqHxvu5KgU79xdsr4jP/9k=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="welcome"\n        title=""\n        src="/static/6aa1f3aec1ce2e22e330f44be58fc387/4e442/welcome.jpg"\n        srcset="/static/6aa1f3aec1ce2e22e330f44be58fc387/cb69c/welcome.jpg 320w,\n/static/6aa1f3aec1ce2e22e330f44be58fc387/4e442/welcome.jpg 498w"\n        sizes="(max-width: 498px) 100vw, 498px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",s.createElement(a.p,null,"Some of you might think – Well no, our application / software is quite complex and stuff is just too interconnected with each other. They ",s.createElement(a.strong,null,s.createElement(a.em,null,"shared"))," code, were ",s.createElement(a.strong,null,s.createElement(a.em,null,"bridged"))," together, etc. But I guess you might understand now what to do with the “shared code” and “bridges” if you try to apply this principle to it! This is just a simple example to demonstrate and give you an idea of how parts of the product can be organised for convenience and maintainability."),"\n",s.createElement("br"),"\n",s.createElement(a.h2,{id:"a-little-tip--something-that-i-learnt-while-developing-progressive-web-applications-with-gatsbyjs",style:{position:"relative"}},s.createElement(a.a,{href:"#a-little-tip--something-that-i-learnt-while-developing-progressive-web-applications-with-gatsbyjs","aria-label":"a little tip  something that i learnt while developing progressive web applications with gatsbyjs permalink",className:"autolink-header-icon before"},s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"A little tip – something that I learnt while developing progressive web applications with GatsbyJS"),"\n",s.createElement(a.p,null,"You can also go ahead and add another directory to the ",s.createElement(a.code,null,"src")," – called ",s.createElement(a.code,null,"layouts")," ( or maybe add it to the ",s.createElement(a.code,null,"components")," directory, whichever feels more appropriate to you ) which contains a layout file which is global to the application, or even have multiple layouts ; each associated with certain parts of the application. For example, let’s assume our application also has a fancy navbar and a decent footer which goes into all of our pages. Instead of having them shoved inside our ",s.createElement(a.code,null,"components")," directory and then repeatedly used inside each page - we can have a layout file that contains the navbar and the footer and renders the ",s.createElement(a.code,null,"children")," that are passed to it, like so :"),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="jsx"><pre class="language-jsx"><code class="language-jsx">\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">\n   Yayy! This is my fancy home page!!\n </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>\n\n<span class="token comment">// And in the profile page :</span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">\n   This is the page of the user whose data we\'re secretly trying to steal!\n   Please read our privacy policies (not so) carefully!!\n </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>\n</code></pre></div>'}}),"\n",s.createElement(a.p,null,"And in our Layout file, we can have something similar to this :"),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="jsx"><pre class="language-jsx"><code class="language-jsx"><span class="token keyword">const</span> <span class="token function-variable function">Layout</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Navbar</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n    </span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Footer</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> Layout<span class="token punctuation">;</span></code></pre></div>'}}),"\n",s.createElement(a.p,null,"Better now, isn’t it? Even this website, with its simplicity, has a layout component! 🤓"),"\n",s.createElement("br"),"\n",s.createElement(a.h2,{id:"but-wait-theres-more-to-architecting-react-applications",style:{position:"relative"}},s.createElement(a.a,{href:"#but-wait-theres-more-to-architecting-react-applications","aria-label":"but wait theres more to architecting react applications permalink",className:"autolink-header-icon before"},s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"But wait.. There’s more to architecting react applications!!"),"\n",s.createElement(a.p,null,"Yes, I haven’t forgotten about reducers, the lengthy sagas, services, a ton of action creators and what not! But that’s for the ",s.createElement(a.a,{href:"/articles/architecting-react-applications-redux-store-services-and-sagas/"},"second part of this article")," since I don’t want it to become too long and exhausting to read. Also, this first part might serve as a good starting point for beginners or other fellow developers who are new to React development."),"\n",s.createElement("br"),"\n",s.createElement(a.p,null,s.createElement(a.em,null,"Did you like this article? Or did I miss something? Is there something that you have that can be added to this article – that can make it even better?")),"\n",s.createElement(a.p,null,s.createElement(a.em,null,"Please leave a comment below or you can also contact me through my ",s.createElement(a.a,{href:"/"},"social media profiles"),".")),"\n",s.createElement(a.p,null,s.createElement(a.em,null,"Thank you for reading!")," 😄"),"\n",s.createElement("br"),"\n",s.createElement(a.p,null,"Happy hacking! Cheers! 🎉"),"\n",s.createElement("hr"))}var l=function(e){void 0===e&&(e={});const{wrapper:a}=Object.assign({},(0,n.ah)(),e.components);return a?s.createElement(a,e,s.createElement(o,e)):o(e)},r=t(1883),i=t(2108),c=t(7356),p=t(8368),A=t(4395);const h=e=>{var a,t,n,o,l,h,d;const{scrollYProgress:u}=(0,p.v)();return s.createElement(i.Z,null,s.createElement("div",{className:"root-container"},s.createElement("main",{className:"article-content-page-container"},s.createElement(r.Link,{className:"text-brand-600 hover:text-brand-800 back-navigation-link",to:"/articles"},"« go back to main list"),s.createElement("div",{className:"flex flex-col items-center sm:items-start article-header"},s.createElement("h1",{className:"text-center sm:text-left article-header-title"},null===(a=e.data.mdx.frontmatter)||void 0===a?void 0:a.title),s.createElement("h2",{className:"text-center sm:text-left article-header-subtitle"},null===(t=e.data.mdx.frontmatter)||void 0===t?void 0:t.subtitle),s.createElement("span",{className:"flex flex-wrap items-center justify-center article-header-tags"},null===(n=e.data.mdx.frontmatter)||void 0===n||null===(o=n.tags)||void 0===o?void 0:o.map((e=>s.createElement("span",null,s.createElement(c.Z,null,e))))),s.createElement("span",{className:"article-header-time"},s.createElement("span",null,null===(l=e.data.mdx.frontmatter)||void 0===l?void 0:l.date),"  ",s.createElement("strong",null,"·"),"  ",s.createElement("span",null,null===(h=e.data.mdx.fields)||void 0===h||null===(d=h.timeToRead)||void 0===d?void 0:d.text))),s.createElement(A.E.div,{className:"progress-bar",style:{scaleX:u}}),s.createElement("section",{className:"flex flex-col",itemProp:"articleBody"},e.children))))};function d(e){return s.createElement(h,e,s.createElement(l,e))}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-cache-gatsby-source-git-content-articles-architecting-react-applications-index-mdx-a5e45338c2640baa9e4a.js.map