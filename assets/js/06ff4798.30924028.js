"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9613],{1023:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=i(4848),t=i(8453);const r={sidebar_position:4},l="Amend, Amend At: The Swiss Army knife among KDB/Q operators",o={id:"concepts/amend",title:"Amend, Amend At: The Swiss Army knife among KDB/Q operators",description:"Whenever I encounter the @ or . amend or amend at operators, I'm inevitably reminded of a Swiss Army pocketknife. Just like this versatile multi-tolled knife, the @ or . operators in KDB/Q are multi-functional, capable of solving various tasks. When combined with the expertise of a skilled KDB/Q developer, akin to the resourcefulness of a highly trained soldier or agent like MacGyver, the possibilities are limitless \u2013 you can conquer any challenge with ease.",source:"@site/docs/concepts/amend.mdx",sourceDirName:"concepts",slug:"/concepts/amend",permalink:"/docs/concepts/amend",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Garbage Collection",permalink:"/docs/concepts/garbageCollection"},next:{title:"Dictionaries and Tables",permalink:"/docs/concepts/dictionariesTables"}},d={},c=[{value:"Index, Apply, Trap",id:"index-apply-trap",level:2},{value:"Index",id:"index",level:3},{value:"Simple Lists",id:"simple-lists",level:3},{value:"Nested lists",id:"nested-lists",level:3},{value:"Index At",id:"index-at",level:3},{value:"Cross-Sections",id:"cross-sections",level:3},{value:"Nulls in index i",id:"nulls-in-index-i",level:3},{value:"Apply",id:"apply",level:3},{value:"Unary functions",id:"unary-functions",level:3},{value:"Multivalent functions",id:"multivalent-functions",level:3},{value:"Trap",id:"trap",level:3},{value:"Summary",id:"summary",level:3},{value:"Amend",id:"amend",level:2},{value:"Bonus Tip",id:"bonus-tip",level:3},{value:"Extra Exercise",id:"extra-exercise",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"amend-amend-at-the-swiss-army-knife-among-kdbq-operators",children:"Amend, Amend At: The Swiss Army knife among KDB/Q operators"}),"\n",(0,s.jsxs)(n.p,{children:["Whenever I encounter the ",(0,s.jsx)(n.a,{href:"https://code.kx.com/q/ref/amend/",children:(0,s.jsx)(n.code,{children:"@ or ."})})," amend or amend at operators, I'm inevitably reminded of a Swiss Army pocketknife. Just like this versatile multi-tolled knife, the ",(0,s.jsx)(n.code,{children:"@ or ."})," operators in KDB/Q are multi-functional, capable of solving various tasks. When combined with the expertise of a skilled KDB/Q developer, akin to the resourcefulness of a highly trained soldier or agent like MacGyver, the possibilities are limitless \u2013 you can conquer any challenge with ease."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Swiss army pockerknife",src:i(2627).A+"",width:"1920",height:"1275"})}),"\n",(0,s.jsxs)(n.p,{children:["In this article, I aim to demonstrate the versatility of the ",(0,s.jsx)(n.code,{children:"@ and ."})," operators, highlighting how they enable you to sidestep dataset iteration, which typically requires loops in traditional programming languages such as Java, C++ or Python. Mastering this powerful operator will not only enhances code efficiency but also boosts readability once you've become accustomed to the syntax. So without further ado, let's fire up a terminal and look at some code."]}),"\n",(0,s.jsx)(n.h2,{id:"index-apply-trap",children:"Index, Apply, Trap"}),"\n",(0,s.jsxs)(n.p,{children:["As pretty much all operators in KDB/Q, the ",(0,s.jsx)(n.code,{children:"@ and ."})," operators come with multiple overloads. Before looking at their amend functionality, I'd like to take a step back and explore three simpler use cases: ",(0,s.jsx)(n.a,{href:"https://code.kx.com/q/ref/apply/",children:"index, apply and trap"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"A fundamental aspect of KDB/Q to keep in mind is its nature as a vector/array programming language. In KDB/Q, every data type, except atoms, essentially function as lists. A simple list contains atoms, while mixed or general lists can include atoms or lists as their elements, resulting in nested lists. Dictionaries, fundamentally, represent a list of key-value mappings, while tables are essentially lists of column column dictionaries that conform to a consistent structure."}),"\n",(0,s.jsx)(n.h3,{id:"index",children:"Index"}),"\n",(0,s.jsxs)(n.p,{children:["Both operators, ",(0,s.jsx)(n.code,{children:"@ and ."})," can be used to index into a list. While the ",(0,s.jsx)(n.code,{children:"@"})," operator is used for indexing into simple lists, the ",(0,s.jsx)(n.code,{children:"."})," operator can be used to index into nested lists. Let's have a look at some examples:"]}),"\n",(0,s.jsx)(n.h3,{id:"simple-lists",children:"Simple Lists"}),"\n",(0,s.jsxs)(n.p,{children:["We can use the ",(0,s.jsx)(n.code,{children:"@"})," operator to index into a simple list. Given a list ",(0,s.jsx)(n.code,{children:"L"})," and an index ",(0,s.jsx)(n.code,{children:"i"}),", ",(0,s.jsx)(n.code,{children:"L@i"})," will return all elements at index ",(0,s.jsx)(n.code,{children:"i"}),", where ",(0,s.jsx)(n.code,{children:"i"})," can be any positive integer in the domain of ",(0,s.jsx)(n.code,{children:"L"}),", either an atom or a list itself."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"q)1 2 3@0\n1\nq)1 2 3 4@0 1\n1 2\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"Remember: Indexing starts at index 0 in KDB/Q"})}),"\n",(0,s.jsxs)(n.p,{children:["Indexing out of bound, will return the ",(0,s.jsx)(n.code,{children:"null"})," value for the type of the simple list"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"q)1 2 3@4\n0N\nq)1 2 3@-1\n0N\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"danger",children:(0,s.jsxs)(n.p,{children:["Using a negative integer as index will NOT throw an error but return the ",(0,s.jsx)(n.code,{children:"null"})," value for the type of the simple list"]})}),"\n",(0,s.jsx)(n.p,{children:"Using anything else but an integer will throw a type error"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"q)1 2 3@`b\n'type\n  [0]  1 2 3@`b\n            ^\nq)1 2 3@1.5\n'type\n  [0]  1 2 3@1.5\n            ^\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Using the ",(0,s.jsx)(n.a,{href:"https://code.kx.com/q/ref/identity/",children:(0,s.jsx)(n.code,{children:"Identity ::"})})," will return the whole list"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"q)1 2 3@enlist (::)\n1 2 3\n"})}),"\n",(0,s.jsx)(n.h3,{id:"nested-lists",children:"Nested lists"}),"\n",(0,s.jsxs)(n.p,{children:["Given a nested list ",(0,s.jsx)(n.code,{children:"L"}),", and a list ",(0,s.jsx)(n.code,{children:"i"})," of indexes, ",(0,s.jsx)(n.code,{children:"L . i"})," will successively index into ",(0,s.jsx)(n.code,{children:"L"}),", basically returning ",(0,s.jsx)(n.code,{children:"( (L@i[0]) @ i[1]) @ i[2] ..."})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"q)show L:((1 2 3;4 5 6 7) ;(8 9;10;11 12) ;(13 14;15 16 17 18;19 20))\n(1 2 3;4 5 6 7)\n(8 9;10;11 12)\n(13 14;15 16 17 18;19 20)\nq)L . enlist 1\t\t// returning element 1 of the list, i.e. L@1\n8 9\n10\n11 12\nq)L . 1 2\t\t// returning element 2 of element 1, i.e (L@1) @2\n11 12\nq)L . 1 2 0\t\t// returning element 0 of element 2 of elment 1, i.e ((L@1) @2) @0\n11\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"i"})," needs to be a list in order to index into a nested list. See first example above"]})}),"\n",(0,s.jsxs)(n.p,{children:["Again, using the ",(0,s.jsx)(n.a,{href:"https://code.kx.com/q/ref/identity/",children:(0,s.jsx)(n.code,{children:"Identity ::"})})," as right argument will return the entire nested list."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"q)L . enlist[::]\n(1 2 3;4 5 6 7)\n(8 9;10;11 12)\n(13 14;15 16 17 18;19 20)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"index-at",children:"Index At"}),"\n",(0,s.jsxs)(n.p,{children:["You can achieve the same behavior explained above by combining ",(0,s.jsx)(n.code,{children:"Index At"})," with the ",(0,s.jsx)(n.a,{href:"https://code.kx.com/q/ref/accumulators/",children:(0,s.jsx)(n.code,{children:"Over /"})})," iterator as follows"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"q)show L:((1 2 3;4 5 6 7) ;(8 9;10;11 12) ;(13 14;15 16 17 18;19 20))\n(1 2 3;4 5 6 7)\n(8 9;10;11 12)\n(13 14;15 16 17 18;19 20)\nq)L . enlist 1\n// Can be rewritten as\nq)L@/enlist 1\n8 9\n10\nq)L . 1 2\n11 12\n// Can be rewritten as\nq)L@/1 2\n11 12\nq)L . 1 2 0\n11\n// Can be rewritten as\nq)L@/1 2 0\n11\n"})}),"\n",(0,s.jsxs)(n.p,{children:["For illustration purposed, we can use the ",(0,s.jsx)(n.a,{href:"https://code.kx.com/q/ref/accumulators/",children:(0,s.jsx)(n.code,{children:"Scan \\"})})," to display the intermediate steps"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"q)L@\\1 2 0\n(8 9;10;11 12)\n11 12\n11\n"})}),"\n",(0,s.jsx)(n.h3,{id:"cross-sections",children:"Cross-Sections"}),"\n",(0,s.jsx)(n.p,{children:"When the elements of our index are lists, i.e when the index is a list of list, KDB/Q will create a cross-section. The following example should illustrate this concept"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"q)show L:((1 2 3;4 5 6 7) ;(8 9;10;11 12) ;(13 14;15 16 17 18;19 20))\n(1 2 3;4 5 6 7)\n(8 9;10;11 12)\n(13 14;15 16 17 18;19 20)\nq)L . (2 0;0 1)\t\t\t\n13 14 15 16 17 18\n1 2 3 4 5 6 7\n// This is the same as applying the following cross-section\nq)q)0N!2 0,/:\\:0 1\n((2 0;2 1);(0 0;0 1))\n2 0 2 1\n0 0 0 1\nq)L ./:/:2 0,/:\\:0 1\n13 14 15 16 17 18\n1 2 3 4 5 6 7\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"L . (2 0;0 1)"})," will first evaluate ",(0,s.jsx)(n.code,{children:"L . 2 0"}),", then ",(0,s.jsx)(n.code,{children:"L . 2 1"}),", followed by ",(0,s.jsx)(n.code,{children:"L . 0 0"})," and finally ",(0,s.jsx)(n.code,{children:"L . 0 1"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"q)L . (2 0;0 1)\n13 14 15 16 17 18\n1 2 3 4 5 6 7\nq)L . 2 0\n13 14\nq)L . 2 1\n15 16 17 18\nq)L . 0 0\n1 2 3\nq)L . 0 1\n4 5 6 7\n"})}),"\n",(0,s.jsx)(n.h3,{id:"nulls-in-index-i",children:"Nulls in index i"}),"\n",(0,s.jsxs)(n.p,{children:["If you would like to select all elements at a specific level of a nested list, you can simply use the ",(0,s.jsx)(n.a,{href:"https://code.kx.com/q/ref/identity/#null",children:(0,s.jsx)(n.code,{children:"null"})}),' operator. This basically means you "select all" elements at the selected level. Let\'s have a look at this behaviour.']}),"\n",(0,s.jsx)(n.p,{children:"If we would like to select element 0 and element 1 of all levels, we can simply use the following syntax:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"q)L . (::;0 1)\n1 2 3 4 5 6 7\n8 9   10\n13 14 15 16 17 18\n"})}),"\n",(0,s.jsx)(n.p,{children:"We can extend this behaviour to one more level"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"// First we select all elements of element 2 and elment 0\nq)L . (2 0;::)\n(13 14;15 16 17 18;19 20)\n(1 2 3;4 5 6 7)\n// We can now select elment 0 and elment 1 of all the elements selected in above statement by extending to\nq)L . (2 0;::;0 1)\n(13 14;15 16;19 20)\n(1 2;4 5)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If you would like to explorer indexing further, please review the official documentation ",(0,s.jsx)(n.a,{href:"https://code.kx.com/q/ref/apply/",children:"here"})]}),"\n",(0,s.jsx)(n.h3,{id:"apply",children:"Apply"}),"\n",(0,s.jsxs)(n.p,{children:["When it comes to (function) application, the ",(0,s.jsx)(n.code,{children:"@ and ."})," are basically syntactic sugar and can be used instead of bracket notation. Given an unary function ",(0,s.jsx)(n.code,{children:"f"})," and a one-element list ",(0,s.jsx)(n.code,{children:"ux"}),", the code ",(0,s.jsx)(n.code,{children:"f@ux"})," is equivalent to ",(0,s.jsx)(n.code,{children:"f[ux]"}),". Let's look at an example. Multivalent functions on the other hand, can be used in combination with the ",(0,s.jsx)(n.code,{children:"."})," operator. Given a multivalent function ",(0,s.jsx)(n.code,{children:"f"})," and a list of arguments vx, the code ",(0,s.jsx)(n.code,{children:"f[vx[0];vx[1];...;vx[n-1]]"})," is equivalent to ",(0,s.jsx)(n.code,{children:"f . vx"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"unary-functions",children:"Unary functions"}),"\n",(0,s.jsx)(n.p,{children:"Unary functions are functions that take only one argument."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"q)f:{2*x}\nq)f@3\n6\nq)f[3]\n6\nq)f[3]~f@3\n1b\n// You can use @ in pre-fix notation\nq)@[f;3]\n6\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["In the case of ",(0,s.jsx)(n.code,{children:"f[3]"})," the brackets around the argument are also syntactic sugar."]})}),"\n",(0,s.jsx)(n.h3,{id:"multivalent-functions",children:"Multivalent functions"}),"\n",(0,s.jsx)(n.p,{children:"Multivalent functions are functions that take two or more arguments. The application of a list of arguments to a multivalent function can be achieved as follows"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"q)f:{x+y}\nq)f . 1 2\n3\nq)f[1;2]\n3\nq)f[1;2]~f . 1 2\n1b\nq)f:{x+y+z}\nq)f . 1 2 3\n6\nq)f[1;2;3]\n6\nq)f[1;2;3]~f . 1 2 3\n1b\n// You can use . in pre-fix notation\nq).[f;(1;2;3)]\n6\n"})}),"\n",(0,s.jsx)(n.h3,{id:"trap",children:"Trap"}),"\n",(0,s.jsxs)(n.p,{children:["In software development, it's crucial to implement practices that ensure your application remains robust even when errors occur. In conventional programming languages like Java, a common approach is to encapsulate critical sections of code within a ",(0,s.jsx)(n.code,{children:"try-catch"}),' block. This will prevent your application from crashing in case you encounter an error, handling errors gracefully, redirecting control flow to the "catch" section in case you encounter an error. In KDB/Q, a similar concept exists called ',(0,s.jsx)(n.a,{href:"https://code.kx.com/q/ref/apply/#trap",children:(0,s.jsx)(n.code,{children:"trap"})})]}),"\n",(0,s.jsxs)(n.p,{children:["The ternary form of ",(0,s.jsx)(n.code,{children:"@ or ."}),' function as trap, providing similar functionality as the "try-catch" block of other programming languages. Let\'s have a closer look at some examples']}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"q)neg `a\n'type\n  [0]  neg `a\n       ^\nq)@[neg;`a;`error]\n`error\n"})}),"\n",(0,s.jsxs)(n.p,{children:["As you can see from above example, if we try to apply the ",(0,s.jsx)(n.a,{href:"https://code.kx.com/q/ref/neg/",children:(0,s.jsx)(n.code,{children:"neg"})})," operator to a symbol, we will obtain a ",(0,s.jsx)(n.code,{children:"type"})," error. However, if we use the ternary form of ",(0,s.jsx)(n.code,{children:"@"}),", we can trap the unary function ",(0,s.jsx)(n.code,{children:"neg"}),", throw an error message and continute the execution of our application without interruption."]}),"\n",(0,s.jsxs)(n.p,{children:["For multivalent functions, we can use the ternary form of ",(0,s.jsx)(n.code,{children:"."})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'q).[+;"ab";`ouch]\n`ouch\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The general form of ",(0,s.jsx)(n.code,{children:"Trap"})," is"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"@[f;fx;e] is equivalent to .[f;enlist fx;e]"})}),"\n",(0,s.jsxs)(n.p,{children:["where ",(0,s.jsx)(n.code,{children:"e"}),' the "error" block of trap can be any expression.']}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:['If the "error" block ',(0,s.jsx)(n.code,{children:"e"})," is a function, it will be evaluated only if ",(0,s.jsx)(n.code,{children:"f"})," fails. However, it will be parsed before and any of the expressions withing the error function ",(0,s.jsx)(n.code,{children:"e"})," are evalualted. It is up to you to make sure there are no errors in the function."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'q)@[2+;"42";{)}]\n\')\n  [0]  @[2+;"42";{)}]\n                  ^\n'})}),(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.code,{children:"e"})," is any expression other than a function, it will ",(0,s.jsx)(n.strong,{children:"always"})," be evaluated. Because KDB/Q is left-of-right (right-to-left), it is also the first expression to be evaluated."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'q)@[string;42;a:100] / expression not a function\n"42"\nq)a // but a was assigned anyway\n100\nq)@[string;42;{b::99}] / expression is a function\n"42"\nq)b // not evaluated\n\'b\n  [0]  b\n       ^\n'})}),(0,s.jsxs)(n.p,{children:["Ideally, you want ",(0,s.jsx)(n.code,{children:"e"})," to be a function as this will allow you to handle errors best."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'q).[+;"ab";{"Wrong ",x}]\n"Wrong type"\n'})})]}),"\n",(0,s.jsx)(n.h3,{id:"summary",children:"Summary"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"rank"}),(0,s.jsx)(n.th,{children:"syntax"}),(0,s.jsx)(n.th,{children:"function semantics"}),(0,s.jsx)(n.th,{children:"list semantics"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"2"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"v . vx"})," or  ",(0,s.jsx)(n.code,{children:".[v;vx]"})]}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.strong,{children:"Apply"}),": Apply v to list vx of arguments"]}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.strong,{children:"Index"}),": Get item/s vx at depth from v"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"2"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"u @ ux"})," or ",(0,s.jsx)(n.code,{children:"@[u;ux]"})]}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.strong,{children:"Apply At"}),": Apply unary u to argument ux"]}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.strong,{children:"Index At"}),": Get items ux from u"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"3"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:".[g;gx;e]"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.strong,{children:"Trap"}),": Try g . gx; catch with e"]}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"3"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"@[f;fx;e]"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.strong,{children:"Trap At"}),": Try f@fx; catch with e"]}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"Where"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"e"})," is an expression, typically a function"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"f"})," is a unary function and ",(0,s.jsx)(n.code,{children:"fx"})," in its domain"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"g"})," is a function of rank  and ",(0,s.jsx)(n.code,{children:"gx"})," an atom or list of count  with items in the domains of ",(0,s.jsx)(n.code,{children:"g"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"v"})," is a value of rank  (or a handle to one) and ",(0,s.jsx)(n.code,{children:"vx"})," a list of count  with items in the domains of ",(0,s.jsx)(n.code,{children:"v"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"u"})," is a unary value (or a handle to one) and ",(0,s.jsx)(n.code,{children:"ux"})," in its domain"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"amend",children:"Amend"}),"\n",(0,s.jsxs)(n.p,{children:["Now that we have explored the fundamental capabilities of ",(0,s.jsx)(n.code,{children:"@ and ."})," we can finally transition to the primary focus of this article: The ",(0,s.jsx)(n.strong,{children:"power"})," operator ",(0,s.jsx)(n.a,{href:"https://code.kx.com/q/ref/amend/",children:"Amend"})]}),"\n",(0,s.jsx)(n.p,{children:"Let's consider a scenario where we have a collection of values or any dataset containing multiple items. Our objective is to modify or update particular elements within our data at specific indices. In traditional programming languages like Java, this task requires iterating through our data, validating whether the index or element aligns with the one we intend to modify, and subsequently making the desired modification. The inefficiency of this process is pretty obvious and it becomes even more obvious if we want to update or modify nested lists - it would require nested loops, far from an optimal solution."}),"\n",(0,s.jsx)(n.p,{children:"In KDB/Q, accomplishing all of this requires just a single line of code. That's right, you heard correctly. Allow me to demonstrate this."}),"\n",(0,s.jsx)(n.p,{children:"Let's assume we have a list containing numbers from 0 to 10, inclusive, and our objective is to transform all even numbers into their respective negatives. This task can easily be achieved by the following code:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"// First we create our list\nq)l:til 11\nq)l\n0 1 2 3 4 5 6 7 8 9 10\n// Then we create out index\nq)show i:2*til 6\n0 2 4 6 8 10\n// Modify the elements\nq)@[l;i;neg]\n0 1 -2 3 -4 5 -6 7 -8 9 -10\n// We can also modify the elements in place by using symbolic reference\nq)@[`l;i;neg]\n`l\nq)l\n0 1 -2 3 -4 5 -6 7 -8 9 -10\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Modification via symbolic reference as shown above only works for global variables. If you would like to modify a local variable you have to reassign it."})}),"\n",(0,s.jsxs)(n.p,{children:["The same is true for nested lists. If you have a nested list, you can use the ",(0,s.jsx)(n.code,{children:"."})," operator to modify elements at indexes at depth. Let's assume you have a nested list of numbers and you would like to amend values to these nested lists. We can use cross-sections to achieve the desired result."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"q)show L:((1 2 3;4 5 6 7);(1 2 3;4 5 6 7);(13 14;15 16 17 18;19 20))\n(1 2 3;4 5 6 7)\n(1 2 3;4 5 6 7)\n(13 14;15 16 17 18;19 20)\nq).[L;(2 0;0 1 0); , ;(100 200 300; 400 500 600)]\n(1 2 3 400 600;4 5 6 7 500)\n(1 2 3;4 5 6 7)\n(13 14 100 300;15 16 17 18 200;19 20)\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"danger",children:[(0,s.jsxs)(n.p,{children:["If you use the assign operator ",(0,s.jsx)(n.a,{href:"https://code.kx.com/q/ref/assign/",children:(0,s.jsx)(n.code,{children:":"})})," rather than the join operator ",(0,s.jsx)(n.a,{href:"https://code.kx.com/q/ref/join/",children:(0,s.jsx)(n.code,{children:","})}),", the last assignment prevails."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"q)show L:((1 2 3;4 5 6 7);(1 2 3;4 5 6 7);(13 14;15 16 17 18;19 20))\n(1 2 3;4 5 6 7)\n(1 2 3;4 5 6 7)\n(13 14;15 16 17 18;19 20)\nq).[L;(2 0;0 1 0); : ;(100 200 300; 400 500 600)]\n600 500\n(1 2 3;4 5 6 7)\n(300;200;19 20)\n"})})]}),"\n",(0,s.jsxs)(n.p,{children:["The complete reference for Amend has been summarized by KX ",(0,s.jsx)(n.a,{href:"https://code.kx.com/q/ref/amend/",children:"here"})," but I have copied it below for simplicity:"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Amend"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Amend At"})}),(0,s.jsx)(n.th,{children:(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"values (d .i)"})," or ",(0,s.jsx)(n.code,{children:"(d @ i)"})]})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:".[d; i; u]"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"@[d; i; u]"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"u[d . i]"})," or ",(0,s.jsx)(n.code,{children:"u'[d @ i]"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:".[d; i; v; vy]"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"@[d; i; v; vy]"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"v[d . i;vy]"})," or ",(0,s.jsx)(n.code,{children:"v'[d @ i;vy]"})]})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"Where"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"d"})," is an atom, list, or a dictionary (value); or a handle to a list, dictionary or datafile"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"i"})," indexes where ",(0,s.jsx)(n.code,{children:"d"})," is to be amended:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"it must be a list for ."}),"\n",(0,s.jsxs)(n.li,{children:["if empty (for ",(0,s.jsx)(n.code,{children:"."}),") or the general null ",(0,s.jsx)(n.code,{children:"::"})," (for ",(0,s.jsx)(n.code,{children:"@"}),"), or if d is a non-handle atom, the selection ",(0,s.jsx)(n.code,{children:"S"})," is ",(0,s.jsx)(n.code,{children:"d"})," (Amend Entire)"]}),"\n",(0,s.jsxs)(n.li,{children:["otherwise ",(0,s.jsx)(n.code,{children:"S"})," is ",(0,s.jsx)(n.code,{children:".[d;i]"})," or ",(0,s.jsx)(n.code,{children:"@[d;i]"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"u"})," is a unary"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"v"})," is a binary, and ",(0,s.jsx)(n.code,{children:"vy"})," is"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["in the right domain of ",(0,s.jsx)(n.code,{children:"v"})]}),"\n",(0,s.jsxs)(n.li,{children:["unless ",(0,s.jsx)(n.code,{children:"S"})," is d, conformable to ",(0,s.jsx)(n.code,{children:"S"})," and of the same type\nthe items in ",(0,s.jsx)(n.code,{children:"d"})," of the selection ",(0,s.jsx)(n.code,{children:"S"}),"  are replaced"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["in the ternary, by ",(0,s.jsx)(n.code,{children:"u[S]"})," for ",(0,s.jsx)(n.code,{children:"."})," and by ",(0,s.jsx)(n.code,{children:"u'[S]"})," for ",(0,s.jsx)(n.code,{children:"@"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["in the quaternary, by ",(0,s.jsx)(n.code,{children:"v[S;vy]"})," for ",(0,s.jsx)(n.code,{children:"."})," and by ",(0,s.jsx)(n.code,{children:"v'[S;vy]"})," for ",(0,s.jsx)(n.code,{children:"@"}),"\nand if ",(0,s.jsx)(n.code,{children:"d"})," is a"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"value"}),", returns a copy of it with the item/s at ",(0,s.jsx)(n.code,{children:"i"})," modified"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"handle"}),", modifies the item/s of its reference at ",(0,s.jsx)(n.code,{children:"i"}),", and returns the handle"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.code,{children:"v"})," is Assign ",(0,s.jsx)(n.code,{children:"(:)"})," each item in the selection is replaced by the corresponding item in ",(0,s.jsx)(n.code,{children:"vy"}),".\n",(0,s.jsx)(n.code,{children:"u"})," and ",(0,s.jsx)(n.code,{children:"v"})," can be replaced with values of higher rank using projection or by enlisting their arguments and using ",(0,s.jsx)(n.a,{href:"https://code.kx.com/q/ref/apply/",children:"Apply"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"bonus-tip",children:"Bonus Tip"}),"\n",(0,s.jsxs)(n.p,{children:["When going through the examples of Amend on the official reference page ",(0,s.jsx)(n.a,{href:"https://code.kx.com/q/ref/amend/#amend-entire",children:"here"})," I encountered below code snippet, and it took me a little while to fully understand what was going on. So let me explain what's happening in case you are acing the same struggle"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"q).[1 2; (); 3 4 5]\n4 5\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In above example, it took me a while to understand why the result was ",(0,s.jsx)(n.code,{children:"4 5"}),". Upon reflection, I realised, that the the ternary form of Amend ",(0,s.jsx)(n.code,{children:".[d; i; u]"})," accepts a unary value ",(0,s.jsx)(n.code,{children:"u"}),". And a ",(0,s.jsx)(n.a,{href:"https://code.kx.com/q/basics/glossary/#unary-function",children:"unary"}),' can be "A value of rank 1, i.e. a function with 1 argument, or a list of depth \u22651."']}),"\n",(0,s.jsxs)(n.p,{children:["With ",(0,s.jsx)(n.code,{children:"3 4 5"})," being a list, this will basically be the same as"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"q)3 4 5@1 2\n4 5\n"})}),"\n",(0,s.jsx)(n.h3,{id:"extra-exercise",children:"Extra Exercise"}),"\n",(0,s.jsx)(n.p,{children:"Another excellent application of Amend can be demonstrated through the following example. Suppose we have a list of lists, specifically a list of strings, and our objective is to capitalize the first character of every string. Once more, in a conventional programming language, achieving this would require nested loops. However, in KDB/Q, it can be accomplished with a straightforward one-liner."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'q)s:(("hello";"world");enlist "defconQ";("kdb/q";"is";"fun"))\nq).[s;(::;::;0);upper]\n("Hello";"World")\n,"DefconQ"\n("Kdb/q";"Is";"Fun")\n'})}),"\n",(0,s.jsxs)(n.p,{children:["That's all Folks. I hope you enjoyed this article as much as I did. Don't forget to follow ",(0,s.jsx)(n.a,{href:"https://www.linkedin.com/in/alexanderunterrainer/",children:"me"})," and ",(0,s.jsx)(n.a,{href:"https://www.linkedin.com/company/defconq/",children:"DefconQ"})," on Linkedin."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},2627:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/knife-63956fa4563a4111e845f6f399157bd8.jpg"},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>o});var s=i(6540);const t={},r=s.createContext(t);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);