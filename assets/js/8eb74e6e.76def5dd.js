"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5909],{1262:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=t(4848),s=t(8453);const r={slug:"How to Read, Understand and Learn KDB/Q code",title:"How to Read, Understand and Learn KDB/Q code",authors:["alexander"],hide_table_of_contents:!0,tags:["kdb/q","Learning","Beginner","Qbie"]},o=void 0,a={permalink:"/blog/How to Read, Understand and Learn KDB/Q code",source:"@site/blog/2023-09-11-read/index.mdx",title:"How to Read, Understand and Learn KDB/Q code",description:"In my previous blog post, I shared my favourite Go-To KDB/Q Learning Resources to help you to get started. However, as you dive deeper into the KDB/Q programming language and you begin to read and review other's code you might experience a slight sense of overwhelm. Two main characteristics of KDB/Q, namely its tersness and and its left-of-right evaluation order (KDB/Q expressions are evaluated left-of-right which equates to expressions are evaluated right-to-left), can pose initial challenges for new KDB/Q developers. It's important to overcome these hurdles and become familiar with these features as you progress.",date:"2023-09-11T00:00:00.000Z",tags:[{label:"kdb/q",permalink:"/blog/tags/kdb-q"},{label:"Learning",permalink:"/blog/tags/learning"},{label:"Beginner",permalink:"/blog/tags/beginner"},{label:"Qbie",permalink:"/blog/tags/qbie"}],readingTime:13.505,hasTruncateMarker:!0,authors:[{name:"Alexander Unterrainer",title:"DefconQ, KDB/Q Developer, Consultant",url:"https://github.com/AUnterrainer",imageURL:"/img/alex.jpeg",key:"alexander"}],frontMatter:{slug:"How to Read, Understand and Learn KDB/Q code",title:"How to Read, Understand and Learn KDB/Q code",authors:["alexander"],hide_table_of_contents:!0,tags:["kdb/q","Learning","Beginner","Qbie"]},unlisted:!1,prevItem:{title:"Where to find help",permalink:"/blog/Where to find help"},nextItem:{title:"Go-To KDB/Q Learning Resources",permalink:"/blog/Go-To KDB/Q Learning Resources"}},l={authorsImageUrls:[void 0]},c=[{value:"Dividing code into smaller components",id:"dividing-code-into-smaller-components",level:2},{value:"Did you guess right? The anonymous function (or lambda) trims all the spaces before and after the text. The <code>1 function\\input</code> pattern applies a function and not applies it",id:"did-you-guess-right-the-anonymous-function-or-lambda-trims-all-the-spaces-before-and-after-the-text-the-1-functioninput-pattern-applies-a-function-and-not-applies-it",level:4},{value:"The power of Iterators and their applications",id:"the-power-of-iterators-and-their-applications",level:2},{value:"Exploring the versatility of Scan and Over",id:"exploring-the-versatility-of-scan-and-over",level:2},{value:"Other KDB/Q operators",id:"other-kdbq-operators",level:2},{value:"Putting it all together",id:"putting-it-all-together",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["In my previous blog post, I shared my favourite ",(0,i.jsx)(n.a,{href:"https://defconq.tech/blog/Go-To%20KDB/Q%20Learning%20Resources",children:"Go-To KDB/Q Learning Resources"})," to help you to get started. However, as you dive deeper into the KDB/Q programming language and you begin to read and review other's code you might experience a slight sense of overwhelm. Two main characteristics of KDB/Q, namely its tersness and and its ",(0,i.jsx)(n.a,{href:"https://code.kx.com/q4m3/4_Operators/#412-left-of-right-evaluation",children:"left-of-right"})," evaluation order (KDB/Q expressions are evaluated left-",(0,i.jsx)(n.strong,{children:"of"}),"-right which equates to expressions are evaluated right-",(0,i.jsx)(n.strong,{children:"to"}),"-left), can pose initial challenges for new KDB/Q developers. It's important to overcome these hurdles and become familiar with these features as you progress."]}),"\n",(0,i.jsx)(n.p,{children:"When you start looking at other's KDB/Q code for the first time, it can be akin to a five-year-old attempting to independently assemnle the gigantic Lego Millenium Falcon immediately after learning how to connect just two Lego pieces. The experience can be overwhelming, leaving you unsure where to start. THe image below serves as an illustration of the described sensation."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Lego Millenium Falcon",src:t(3657).A+"",width:"1200",height:"900"})}),"\n",(0,i.jsx)(n.p,{children:"When you assess your current knowledge in relation to the task at hand, you might perceive it as inadequate and insufficient."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Lego scale",src:t(3610).A+"",width:"1200",height:"675"})}),"\n",(0,i.jsx)(n.p,{children:"Nevertheless, if we deconstruct the code into smaller components and methodically examine it step by step, expression by expression, we often come to realize that the code we're grappling with may not always be as daunting as initially presumed."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Lego Block",src:t(4327).A+"",width:"1594",height:"1133"})}),"\n",(0,i.jsx)(n.h2,{id:"dividing-code-into-smaller-components",children:"Dividing code into smaller components"}),"\n",(0,i.jsx)(n.p,{children:"That's precisely the method we'll employ in this blog post. We'll dissect a line of KDB/Q code that could appear complex initially - maybe we won't even grasp its purpose at first glance. However, by breaking it down into small, discrete expressions and evaluating them sequentially, we'll unravel its underlying logic and functionality."}),"\n",(0,i.jsxs)(n.p,{children:["We are accomplishing this by examining a fascinating pattern introduced by Stephen Taylor, the KX Librarian, as outlined in this ",(0,i.jsx)(n.a,{href:"https://community.kx.com/t5/Community-Blogs/Meet-the-Zen-monks/ba-p/11604",children:"post"}),". Take a glance at the code provided below and take a moment to make an educated guess about its purpose."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'q){x{y _ x}/1 -1*(1 reverse\\" "<>x)?\'1b}"   Trim the spaces.  "\n'})}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:"Solution here "}),(0,i.jsxs)("p",{children:[(0,i.jsxs)(n.h4,{id:"did-you-guess-right-the-anonymous-function-or-lambda-trims-all-the-spaces-before-and-after-the-text-the-1-functioninput-pattern-applies-a-function-and-not-applies-it",children:["Did you guess right? The anonymous function (or lambda) trims all the spaces before and after the text. The ",(0,i.jsx)(n.code,{children:"1 function\\input"})," pattern applies a function and not applies it"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'q){x{y _ x}/1 -1*(1 reverse\\" "<>x)?\'1b}"   Trim the spaces.  "\n"Trim the spaces."\n'})})]})]}),"\n",(0,i.jsx)(n.p,{children:"It's quite surprising how much can be achieved with such little code,isn't it? Now, let's break it down methodically, taking each component into careful consideration."}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:["Remeber, KDB/Q is evaluated left-",(0,i.jsx)(n.strong,{children:"of"}),"-right, meaning we have to read our code right-",(0,i.jsx)(n.strong,{children:"to"}),"-left."]})}),"\n",(0,i.jsx)(n.p,{children:"The first code section we examine is the following."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"(expression)?'1b\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The '?' operator, along with the '!' operator, arguably possesses the greatest number of overloads among KDB/Q operators. In this specific context, the '?' operator functions as a ",(0,i.jsx)(n.a,{href:"https://code.kx.com/q/ref/find/",children:(0,i.jsx)(n.strong,{children:"'find'"})})," operation."]}),"\n",(0,i.jsx)(n.p,{children:"Let's look at an example. Suppose we have a list of integers and we would like to find the index at which that element occurs. We can do this the following way:"}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"Indexing starts at 0 in KDB/Q"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"q)10 5 4 3 2?3  // 3 occurs at the 4th position in the list\n3\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"danger",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"?"})," find only returns the first index of the elemnt you are searching for"]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"q)10 5 4 3 2 3?3\n3\nq)\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["It's strongly advised to have the ",(0,i.jsx)(n.a,{href:"https://code.kx.com/q/ref/",children:"KX reference card"})," readily available, particularly when you're starting your KDB/Q journey and are still becoming acquainted with various operators, their overloads, and functionalities."]})}),"\n",(0,i.jsx)(n.h2,{id:"the-power-of-iterators-and-their-applications",children:"The power of Iterators and their applications"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"'"})," operator exemplifies another unique concept within KDB/Q, which is the concept of ",(0,i.jsx)(n.a,{href:"https://code.kx.com/q/basics/iteration/",children:"iterators"}),". Iterators can be described as functions that take values as arguments and generate new functions that apply those values repetitively. In this specific instance, the ",(0,i.jsx)(n.code,{children:"'"})," operator signifies ",(0,i.jsx)(n.a,{href:"https://code.kx.com/q/ref/maps/#each",children:'"each"'})," and applies a value item-by-item to a dictionary, list, or conforming combinations of lists and dictionaries."]}),"\n",(0,i.jsx)(n.p,{children:"Allow me to demonstrate this behavior with a straightforward example. Imagine we have a list of strings and aim to determine the length of each string:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'q)list:("Hello";"World";"lorem";"ipsum")\nq)count list\n4\n'})}),"\n",(0,i.jsxs)(n.p,{children:["As you can see, ",(0,i.jsx)(n.code,{children:"count list"})," returns the length of the list of strings rather than the length of each individual string itself. We therefore have to use the ",(0,i.jsx)(n.code,{children:"each"})," operator to achieve the desired result."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"q)count each list\n5 5 5 5\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In the above example we make use of the mnemonic keyword ",(0,i.jsx)(n.strong,{children:"each"})," which can be used to apply a unary value without having to use parentheses or brackets. We could have achieved the same result by doing the following"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"count"})," is a unary value"]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"q)(count')list\n5 5 5 5\nq)count'[list]\n5 5 5 5\nq)count@'list\n5 5 5 5\n"})}),"\n",(0,i.jsxs)(n.p,{children:["When examining the entire code snippet together, we can see that ",(0,i.jsx)(n.code,{children:"(expression)?'1b"})," will search (and find) the index of the first occurence of 1b in ",(0,i.jsx)(n.strong,{children:"each"})," element of the list denoted by expression. Sounds complicated? Allow me to provide a demonstration for better clarity:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"q)(000101010111b;0101010101b)?'1b\n3 1\n"})}),"\n",(0,i.jsx)(n.p,{children:"Our next task is to determine the actual result of the expression enclosed within parentheses."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'(1 reverse\\" "<>x)?\'1b\n'})}),"\n",(0,i.jsx)(n.p,{children:"To do so, we solely focus on the expression within parentheses and ignore the second part. We can easily do this, we already know what it does"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'1 reverse\\" "<>x\n'})}),"\n",(0,i.jsxs)(n.p,{children:["This expression can be further divided into three components. The keyword ",(0,i.jsx)(n.code,{children:"reverse"}),", the component ",(0,i.jsx)(n.code,{children:'" "<>x'})," and the ",(0,i.jsx)(n.code,{children:"\\"}),", another KDB/Q ",(0,i.jsx)(n.a,{href:"https://code.kx.com/q/basics/iteration/",children:(0,i.jsx)(n.strong,{children:"iterator"})}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Let's examine each of these components separately, starting, in good KDB/Q fashion with the most right one:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'q)" "<>"Hello World"\n11111011111b\n'})}),"\n",(0,i.jsxs)(n.p,{children:['The code we executed produces a boolean mask. It compares each element of the string to the empty string " " and yields "',(0,i.jsx)(n.strong,{children:"true"}),'" for elements that differ and "',(0,i.jsx)(n.strong,{children:"false"}),'" for those that are the same. Consequently, we can infer that the ',(0,i.jsx)(n.code,{children:"<>"})," operator assesses inequality. If our aim is to do the opposite and examine equality, we can simply apply the equality operator, which is represented by ",(0,i.jsx)(n.code,{children:"="}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["This conveys another, valuable lesson in KDB/Q, specifically: ",(0,i.jsx)(n.em,{children:'"A fundamental feature of atomic functions is that their action extends automatically to the items in a list"'})," as explained in ",(0,i.jsx)(n.a,{href:"https://code.kx.com/q4m3/4_Operators/#403-extension-of-atomic-functions",children:"Chapter 4: Operators"}),' of "Q for Mortals".']}),"\n",(0,i.jsx)(n.p,{children:"Don't take my word for it, witness it for yourself:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"q)2 3 4+5 6 7\n7 9 11\n"})}),"\n",(0,i.jsxs)(n.admonition,{type:"danger",children:[(0,i.jsx)(n.p,{children:"Of course, if you want to combine two lists they must be of the same length, otherwise KDB/Q will throw an error"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"q)2 3 4+5 6\n'length\n  [0]  2 3 4+5 6\n            ^\n"})})]}),"\n",(0,i.jsxs)(n.p,{children:["Prior to delving into the ",(0,i.jsx)(n.code,{children:"1 function\\input"})," pattern, let's explore the functionality of the keyword ",(0,i.jsx)(n.code,{children:"reverse"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["As you probably can guess, the keyword ",(0,i.jsx)(n.a,{href:"https://code.kx.com/q/ref/reverse/",children:(0,i.jsx)(n.code,{children:"reverse"})})," reverses the order of items of a list or dictionary."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'q)reverse "Hello World"\n"dlroW olleH"\nq)reverse 0 1 2 3 4 5\n5 4 3 2 1 0\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The string ",(0,i.jsx)(n.code,{children:"Hello World"})," becomes ",(0,i.jsx)(n.code,{children:"dlroW olleH"})," and the list ",(0,i.jsx)(n.code,{children:"0 1 2 3 4 5"})," becomes ",(0,i.jsx)(n.code,{children:"5 4 3 2 1 0"})]}),"\n",(0,i.jsx)(n.h2,{id:"exploring-the-versatility-of-scan-and-over",children:"Exploring the versatility of Scan and Over"}),"\n",(0,i.jsxs)(n.p,{children:["Now, it's time to address the most intricate part of this code snippet - the ",(0,i.jsx)(n.code,{children:"1 function\\input"})," pattern. The ",(0,i.jsx)(n.code,{children:"\\"}),' operator is referred to as "Scan". To clarify the "Scan" iterator, we must first explain the "Over" iterator. ',(0,i.jsxs)(n.em,{children:['"The ',(0,i.jsx)(n.a,{href:"https://code.kx.com/q4m3/6_Functions/#676-over-for-accumulation",children:"Over"})," iterator ",(0,i.jsx)(n.code,{children:"/"}),' is a higher-order function that provides the principal mechanism for recursion in q. In its simplest form it modifies a binary function to accumulate results over a list"']}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.em,{children:['"The ',(0,i.jsx)(n.a,{href:"https://code.kx.com/q4m3/6_Functions/#678-scan",children:"Scan"})," iterator ",(0,i.jsx)(n.code,{children:"\\"})," is a higher-order function that behaves just like ",(0,i.jsx)(n.code,{children:"/"}),' except that it returns all the intermediate accumulations instead of just the final one".']})}),"\n",(0,i.jsx)(n.p,{children:"Now let's illustrate this with an example, a single line of code carries the weight of a thousand words."}),"\n",(0,i.jsxs)(n.p,{children:["First, let's look at ",(0,i.jsx)(n.code,{children:"Over"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"q)(+/)1 2 3 4 5\n15\n"})}),"\n",(0,i.jsxs)(n.p,{children:['Can you perceive what "Over" does? It applies the binary function ',(0,i.jsx)(n.code,{children:"+"})," to the list ",(0,i.jsx)(n.code,{children:"1 2 3 4 5"})," and accumulates the results over the list, effectively returning the sum of all elements ",(0,i.jsx)(n.code,{children:"1 2 3 4 5"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Now, let's look at ",(0,i.jsx)(n.code,{children:"Scan"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"q)(+\\)1 2 3 4 5\n1 3 6 10 15\n"})}),"\n",(0,i.jsx)(n.p,{children:"Much like Over, Scan also yields the cumulative sum of all elements in the list, however, with one key difference: Scan returns all intermediate steps, returning the rolling sum, rather than just the sum of all elements."}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["There exist two keywords for the two scenarios described above: the keyword ",(0,i.jsx)(n.strong,{children:"sum"})," corresponds to ",(0,i.jsx)(n.code,{children:"(+/)"})," and the keyword ",(0,i.jsx)(n.strong,{children:"sums"})," corresponds to ",(0,i.jsx)(n.code,{children:"(+\\)"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:"Here's the evidence"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"q)sum 1 2 3 4 5\n15\nq)sums 1 2 3 4 5\n1 3 6 10 15\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Because of KDB/Q's concise nature, operators have numerous overloads. This principle extends to the iterators Over and Scan. Depending on the valence (the number of inputs to a function) associated with Over or Scan, these iterators exhibit varying behavior. A comprehensive list of their behaviors can be found ",(0,i.jsx)(n.a,{href:"https://code.kx.com/q/ref/iterators/",children:"here"})]}),"\n",(0,i.jsxs)(n.p,{children:["In the context of the ",(0,i.jsx)(n.code,{children:"1 function\\input"}),' pattern, Scan functions similarly to what you might recognize as a "Do-Loop" in conventional programming languages. It\'s important to note that Scan will also produce the input as the initial result when applied to a unary function.']}),"\n",(0,i.jsx)(n.p,{children:"The following example should illustrate this behavior:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"q)5 enlist\\1\n1\n,1\n,,1\n,,,1\n,,,,1\n,,,,,1\n\nq)5(`f;)\\1\n1\n(`f;1)\n(`f;(`f;1))\n(`f;(`f;(`f;1)))\n(`f;(`f;(`f;(`f;1))))\n(`f;(`f;(`f;(`f;(`f;1)))))\n"})}),"\n",(0,i.jsx)(n.p,{children:"In the initial example, you'll observe that the number 1 is enlisted five times, whereas in the second example, a nested list is generated with a depth of five levels. Both examples begin by displaying the input as the initial step."}),"\n",(0,i.jsx)(n.p,{children:"Now, let's try to put things together and see what we get. Let's look at the following code snippet:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'q)1 reverse\\"Hello"\n"Hello"\n"olleH"\n'})}),"\n",(0,i.jsx)(n.p,{children:'As we explained earlier, the Scan will display the input first, and then repeat the function, reverse in this case, n-times, where n is 1, resulting into a list of strings consisting of "Hello" the original string, and its reverse "olleH"'}),"\n",(0,i.jsx)(n.p,{children:'Let\'s attempt to apply this concept to the originally provided string:  "     Trim spaces     ", and apply the whole expression within parentheses'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'q)1 reverse\\" "<>"   Trim the spaces.  "\n000111101110111111100b\n001111111011101111000b\n'})}),"\n",(0,i.jsx)(n.p,{children:"Apologies if that was too swift. Let's break it down step by step."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'q)" "<>"   Trim the spaces.  "\n000111101110111111100b\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The initial segment of the expression involves a character-by-character comparison between the given input string and an empty string. It yields a boolean mask with ",(0,i.jsx)(n.code,{children:"0b"})," where the elements differ and ",(0,i.jsx)(n.code,{children:"1b"})," where they match. This boolean mask is subsequently utilized as input for the ",(0,i.jsx)(n.code,{children:"1 function\\pattern."})," In this context, Scan begins by presenting the input, followed by applying the ",(0,i.jsx)(n.code,{children:"reverse"})," function precisely once."]}),"\n",(0,i.jsxs)(n.p,{children:["Let's combine that with the initial expression we examined, ",(0,i.jsx)(n.code,{children:"?'1b"})," find each 1b:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'q)(1 reverse\\" "<>"   Trim the spaces.  ")?\'1b\n3 2\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Upon inspecting the two boolean masks, it becomes evident that the initial ",(0,i.jsx)(n.code,{children:"1b"})," occurrence appears at index 3 in the first mask and index 2 in the second mask, respectively."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"000111101110111111100b   // first occurrence of 1b is at index 3\n001111111011101111000b   // first occurrence of 1b is at index 2\n"})}),"\n",(0,i.jsx)(n.p,{children:"The next part of the code is straightforward, we multiply 1 -1 with 3 2, REMEMBER: operators are atomic, meaning their functionality extends automatically to the items in a list. This yields the following result"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'q)1 -1*(1 reverse\\" "<>"   Trim the spaces.  ")?\'1b\n3 -2\n'})}),"\n",(0,i.jsx)(n.p,{children:"Next, we encounter another lambda function combined with an iterator, but in this case, it's Over."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'x{y _ x}/1 -1*(1 reverse\\" "<>x)?\'1b\n'})}),"\n",(0,i.jsx)(n.h2,{id:"other-kdbq-operators",children:"Other KDB/Q operators"}),"\n",(0,i.jsxs)(n.p,{children:["Let's take a closer look at the functionality of the operator ",(0,i.jsx)(n.code,{children:"_"})," inside the lambda does: ",(0,i.jsx)(n.code,{children:"_"})," also called ",(0,i.jsx)(n.a,{href:"https://code.kx.com/q/ref/drop/",children:"Drop"}),", drops items from a list, entries from a dictionary or columns from a table"]}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:["Let's avoid any confusion between ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"https://code.kx.com/q/ref/drop/",children:"drop"})})," and ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"https://code.kx.com/q/ref/cut/",children:"cut"})})," even though they are the same operator but function differently."]})}),"\n",(0,i.jsx)(n.p,{children:"From the KX refernce card:"}),"\n",(0,i.jsx)(n.p,{children:"Drop leading or trailing items"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"x _ y\t\t_[x;y]\n"})}),"\n",(0,i.jsx)(n.p,{children:"Where"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"x is an int atom"}),"\n",(0,i.jsx)(n.li,{children:"y a list or dictionary"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"returns y without the first or last x items."}),"\n",(0,i.jsx)(n.p,{children:"Let's look at an example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"q)5_0 1 2 3 4 5 6 7 8      /drop the first 5 items\n5 6 7 8\nq)-5_0 1 2 3 4 5 6 7 8     /drop the last 5 items\n0 1 2 3\nq)1 _ `a`b`c!1 2 3\nb| 2\nc| 3\n"})}),"\n",(0,i.jsxs)(n.p,{children:['Now, the remaining task is to integrate our understanding of "drop" with our knowledge of "Over." In this scenario, "Over" is applied to a binary function where "drop" takes two parameters, ',(0,i.jsx)(n.code,{children:"x"})," and ",(0,i.jsx)(n.code,{children:"y."})," Upon closer examination of the code, it's apparent that within the lambda, we apply ",(0,i.jsx)(n.code,{children:"y _ x"})," rather than ",(0,i.jsx)(n.code,{children:"x _ y."})," However, you might be wondering about the additional ",(0,i.jsx)(n.code,{children:"x"})," preceding the lambda. This variation arises from the different notation forms offered in KDB/Q. Functions can be expressed in either prefix or infix notation."]}),"\n",(0,i.jsxs)(n.p,{children:["Application of a binary function ",(0,i.jsx)(n.code,{children:"f"})," on arguments ",(0,i.jsx)(n.code,{children:"x"})," and ",(0,i.jsx)(n.code,{children:"y"})," is written ",(0,i.jsx)(n.code,{children:"f[x;y]"})," in ",(0,i.jsx)(n.strong,{children:"prefix"})," or ",(0,i.jsx)(n.code,{children:"x f y"})," in ",(0,i.jsx)(n.strong,{children:"infix"}),". Note: ",(0,i.jsx)(n.strong,{children:"infix"})," notation only works for Q functions, while functions defined by yourself can only be used in ",(0,i.jsx)(n.strong,{children:"prefix"})," notation."]}),"\n",(0,i.jsxs)(n.p,{children:["You can find the different applications of iterators and their valence ",(0,i.jsx)(n.a,{href:"https://code.kx.com/q/ref/accumulators/",children:"here"})]}),"\n",(0,i.jsx)(n.p,{children:"Over applied to a binary function can be written either"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"x v2/y\nor\nv2/[x;y]\n"})}),"\n",(0,i.jsxs)(n.p,{children:["meaning that the ",(0,i.jsx)(n.code,{children:"x"})," we observe in front of the lambda function ",(0,i.jsx)(n.code,{children:"{y _ x}/"})," is the first parameter to the function."]}),"\n",(0,i.jsx)(n.h2,{id:"putting-it-all-together",children:"Putting it all together"}),"\n",(0,i.jsxs)(n.p,{children:["If we take a closer look at the entire code, we'll notice that the input to the primary lambda function is the string we intend to trim. Additionally, the ",(0,i.jsx)(n.code,{children:"y"}),' parameter in the lambda corresponds to the two indexes, 3 and -2. If you recall from the initial part of the code, when we reverse the boolean mask, we obtain the first index of a "true" flag in the "original" boolean mask and the first index of a "true\' flag in the "reversed" boolean mask. However, let\'s pause for a moment and consider this. The first index of a "true" flag in the "reversed" boolean mask is, in fact, the same as the first index of the "original" boolean mask when we count from the opposite end of the boolean mask (namely from the back/end).']}),"\n",(0,i.jsx)(n.p,{children:'Haven\'t we recently discovered that "drop" used in conjunction with a negative number will discard the last "n" elements? Indeed, we have! So, the remaining piece of the puzzle is to grasp how "Over" is applied to this function. Yet, we\'re already acquainted with this concept, as "Over" serves as a higher-order function that facilitates recursion in q. In its basic form, it adapts a binary function to accumulate results over a list.'}),"\n",(0,i.jsx)(n.p,{children:"Let's take a peek. To simplify matters, I'll display some of the intermediate outcomes rather than the entire expression\n."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'q)"   Trim the spaces.  "{y _ x}/3 -2\n"Trim the spaces."\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:'A helpful technique for debugging and comprehending the actions of "Over" is to initially employ "Scan" and examine all the interim outcomes. This can provide valuable insights into the ultimate result.'})}),"\n",(0,i.jsx)(n.p,{children:'Let\'s give this technique a try. You can observe how "Scan" begins by removing the first three (empty) characters from the string and subsequently discards the last two (empty) characters, resulting in the desired outcome: a string that has been trimmed of all leading and trailing spaces.'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'q)"   Trim the spaces.  "{y _ x}\\3 -2\n"Trim the spaces.  "\n"Trim the spaces."\n'})}),"\n",(0,i.jsx)(n.p,{children:"And there you have it! As a final step, let's consolidate all the code and execute it one more time, appreciating how elegantly everything aligns."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'q){x{y _ x}/1 -1*(1 reverse\\" "<>x)?\'1b}"   Trim the spaces.  "\n"Trim the spaces."\n'})}),"\n",(0,i.jsxs)(n.p,{children:["As an exercise, you can delve into the second code example from the original ",(0,i.jsx)(n.a,{href:"https://community.kx.com/t5/Community-Blogs/Meet-the-Zen-monks/ba-p/11604",children:"post"})," by Stephen Taylor and attempt to decipher it independently. If you encounter any queries or uncertainties along the way, don't hesitate to reach out for assistance."]}),"\n",(0,i.jsx)(n.p,{children:"Happy coding!"})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},4327:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/lego_block-10f57693d0c0e81bb8b38c8eb14a34b7.jpg"},3610:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/lego_map-2d097343c2f8f40d5cc116631b0ed3af.png"},3657:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/lego_millenium_falcon-cdf46798eb4ee41eb41b725b9e689e5f.webp"},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(6540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);