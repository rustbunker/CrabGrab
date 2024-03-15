(function() {var type_impls = {
"cocoa":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Sel\" class=\"impl\"><a class=\"src rightside\" href=\"src/objc/runtime.rs.html#145\">source</a><a href=\"#impl-Sel\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"objc/runtime/struct.Sel.html\" title=\"struct objc::runtime::Sel\">Sel</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.register\" class=\"method\"><a class=\"src rightside\" href=\"src/objc/runtime.rs.html#148\">source</a><h4 class=\"code-header\">pub fn <a href=\"objc/runtime/struct.Sel.html#tymethod.register\" class=\"fn\">register</a>(name: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>) -&gt; <a class=\"struct\" href=\"objc/runtime/struct.Sel.html\" title=\"struct objc::runtime::Sel\">Sel</a></h4></section></summary><div class=\"docblock\"><p>Registers a method with the Objective-C runtime system,\nmaps the method name to a selector, and returns the selector value.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.name\" class=\"method\"><a class=\"src rightside\" href=\"src/objc/runtime.rs.html#156\">source</a><h4 class=\"code-header\">pub fn <a href=\"objc/runtime/struct.Sel.html#tymethod.name\" class=\"fn\">name</a>(&amp;self) -&gt; &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a></h4></section></summary><div class=\"docblock\"><p>Returns the name of the method specified by self.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_ptr\" class=\"method\"><a class=\"src rightside\" href=\"src/objc/runtime.rs.html#167\">source</a><h4 class=\"code-header\">pub unsafe fn <a href=\"objc/runtime/struct.Sel.html#tymethod.from_ptr\" class=\"fn\">from_ptr</a>(ptr: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.pointer.html\">*const </a><a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/ffi/enum.c_void.html\" title=\"enum core::ffi::c_void\">c_void</a>) -&gt; <a class=\"struct\" href=\"objc/runtime/struct.Sel.html\" title=\"struct objc::runtime::Sel\">Sel</a></h4></section></summary><div class=\"docblock\"><p>Wraps a raw pointer to a selector into a <code>Sel</code> object.</p>\n<p>This is almost never what you want; use <code>Sel::register()</code> instead.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_ptr\" class=\"method\"><a class=\"src rightside\" href=\"src/objc/runtime.rs.html#175\">source</a><h4 class=\"code-header\">pub fn <a href=\"objc/runtime/struct.Sel.html#tymethod.as_ptr\" class=\"fn\">as_ptr</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.pointer.html\">*const </a><a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/ffi/enum.c_void.html\" title=\"enum core::ffi::c_void\">c_void</a></h4></section></summary><div class=\"docblock\"><p>Returns a pointer to the raw selector.</p>\n</div></details></div></details>",0,"cocoa::base::SEL"],["<section id=\"impl-Sync-for-Sel\" class=\"impl\"><a class=\"src rightside\" href=\"src/objc/runtime.rs.html#189\">source</a><a href=\"#impl-Sync-for-Sel\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"objc/runtime/struct.Sel.html\" title=\"struct objc::runtime::Sel\">Sel</a></h3></section>","Sync","cocoa::base::SEL"],["<section id=\"impl-Eq-for-Sel\" class=\"impl\"><a class=\"src rightside\" href=\"src/objc/runtime.rs.html#186\">source</a><a href=\"#impl-Eq-for-Sel\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"objc/runtime/struct.Sel.html\" title=\"struct objc::runtime::Sel\">Sel</a></h3></section>","Eq","cocoa::base::SEL"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Sel\" class=\"impl\"><a class=\"src rightside\" href=\"src/objc/runtime.rs.html#194\">source</a><a href=\"#impl-Clone-for-Sel\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"objc/runtime/struct.Sel.html\" title=\"struct objc::runtime::Sel\">Sel</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/objc/runtime.rs.html#195\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"objc/runtime/struct.Sel.html\" title=\"struct objc::runtime::Sel\">Sel</a></h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","cocoa::base::SEL"],["<section id=\"impl-Copy-for-Sel\" class=\"impl\"><a class=\"src rightside\" href=\"src/objc/runtime.rs.html#192\">source</a><a href=\"#impl-Copy-for-Sel\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"objc/runtime/struct.Sel.html\" title=\"struct objc::runtime::Sel\">Sel</a></h3></section>","Copy","cocoa::base::SEL"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-Sel\" class=\"impl\"><a class=\"src rightside\" href=\"src/objc/runtime.rs.html#180\">source</a><a href=\"#impl-PartialEq-for-Sel\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"objc/runtime/struct.Sel.html\" title=\"struct objc::runtime::Sel\">Sel</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/objc/runtime.rs.html#181\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"objc/runtime/struct.Sel.html\" title=\"struct objc::runtime::Sel\">Sel</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/cmp.rs.html#239\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","cocoa::base::SEL"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Encode-for-Sel\" class=\"impl\"><a class=\"src rightside\" href=\"src/objc/encode.rs.html#129-147\">source</a><a href=\"#impl-Encode-for-Sel\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"objc/encode/trait.Encode.html\" title=\"trait objc::encode::Encode\">Encode</a> for <a class=\"struct\" href=\"objc/runtime/struct.Sel.html\" title=\"struct objc::runtime::Sel\">Sel</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/objc/encode.rs.html#129-147\">source</a><a href=\"#method.encode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"objc/encode/trait.Encode.html#tymethod.encode\" class=\"fn\">encode</a>() -&gt; <a class=\"struct\" href=\"objc/encode/struct.Encoding.html\" title=\"struct objc::encode::Encoding\">Encoding</a></h4></section></summary><div class='docblock'>Returns the Objective-C type encoding for Self.</div></details></div></details>","Encode","cocoa::base::SEL"],["<section id=\"impl-Send-for-Sel\" class=\"impl\"><a class=\"src rightside\" href=\"src/objc/runtime.rs.html#190\">source</a><a href=\"#impl-Send-for-Sel\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"objc/runtime/struct.Sel.html\" title=\"struct objc::runtime::Sel\">Sel</a></h3></section>","Send","cocoa::base::SEL"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Sel\" class=\"impl\"><a class=\"src rightside\" href=\"src/objc/runtime.rs.html#198\">source</a><a href=\"#impl-Debug-for-Sel\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"objc/runtime/struct.Sel.html\" title=\"struct objc::runtime::Sel\">Sel</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/objc/runtime.rs.html#199\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","cocoa::base::SEL"]],
"cocoa_foundation":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Sel\" class=\"impl\"><a class=\"src rightside\" href=\"src/objc/runtime.rs.html#145\">source</a><a href=\"#impl-Sel\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"objc/runtime/struct.Sel.html\" title=\"struct objc::runtime::Sel\">Sel</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.register\" class=\"method\"><a class=\"src rightside\" href=\"src/objc/runtime.rs.html#148\">source</a><h4 class=\"code-header\">pub fn <a href=\"objc/runtime/struct.Sel.html#tymethod.register\" class=\"fn\">register</a>(name: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>) -&gt; <a class=\"struct\" href=\"objc/runtime/struct.Sel.html\" title=\"struct objc::runtime::Sel\">Sel</a></h4></section></summary><div class=\"docblock\"><p>Registers a method with the Objective-C runtime system,\nmaps the method name to a selector, and returns the selector value.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.name\" class=\"method\"><a class=\"src rightside\" href=\"src/objc/runtime.rs.html#156\">source</a><h4 class=\"code-header\">pub fn <a href=\"objc/runtime/struct.Sel.html#tymethod.name\" class=\"fn\">name</a>(&amp;self) -&gt; &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a></h4></section></summary><div class=\"docblock\"><p>Returns the name of the method specified by self.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_ptr\" class=\"method\"><a class=\"src rightside\" href=\"src/objc/runtime.rs.html#167\">source</a><h4 class=\"code-header\">pub unsafe fn <a href=\"objc/runtime/struct.Sel.html#tymethod.from_ptr\" class=\"fn\">from_ptr</a>(ptr: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.pointer.html\">*const </a><a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/ffi/enum.c_void.html\" title=\"enum core::ffi::c_void\">c_void</a>) -&gt; <a class=\"struct\" href=\"objc/runtime/struct.Sel.html\" title=\"struct objc::runtime::Sel\">Sel</a></h4></section></summary><div class=\"docblock\"><p>Wraps a raw pointer to a selector into a <code>Sel</code> object.</p>\n<p>This is almost never what you want; use <code>Sel::register()</code> instead.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_ptr\" class=\"method\"><a class=\"src rightside\" href=\"src/objc/runtime.rs.html#175\">source</a><h4 class=\"code-header\">pub fn <a href=\"objc/runtime/struct.Sel.html#tymethod.as_ptr\" class=\"fn\">as_ptr</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.pointer.html\">*const </a><a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/ffi/enum.c_void.html\" title=\"enum core::ffi::c_void\">c_void</a></h4></section></summary><div class=\"docblock\"><p>Returns a pointer to the raw selector.</p>\n</div></details></div></details>",0,"cocoa_foundation::base::SEL"],["<section id=\"impl-Sync-for-Sel\" class=\"impl\"><a class=\"src rightside\" href=\"src/objc/runtime.rs.html#189\">source</a><a href=\"#impl-Sync-for-Sel\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"objc/runtime/struct.Sel.html\" title=\"struct objc::runtime::Sel\">Sel</a></h3></section>","Sync","cocoa_foundation::base::SEL"],["<section id=\"impl-Eq-for-Sel\" class=\"impl\"><a class=\"src rightside\" href=\"src/objc/runtime.rs.html#186\">source</a><a href=\"#impl-Eq-for-Sel\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"objc/runtime/struct.Sel.html\" title=\"struct objc::runtime::Sel\">Sel</a></h3></section>","Eq","cocoa_foundation::base::SEL"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Sel\" class=\"impl\"><a class=\"src rightside\" href=\"src/objc/runtime.rs.html#194\">source</a><a href=\"#impl-Clone-for-Sel\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"objc/runtime/struct.Sel.html\" title=\"struct objc::runtime::Sel\">Sel</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/objc/runtime.rs.html#195\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"objc/runtime/struct.Sel.html\" title=\"struct objc::runtime::Sel\">Sel</a></h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","cocoa_foundation::base::SEL"],["<section id=\"impl-Copy-for-Sel\" class=\"impl\"><a class=\"src rightside\" href=\"src/objc/runtime.rs.html#192\">source</a><a href=\"#impl-Copy-for-Sel\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"objc/runtime/struct.Sel.html\" title=\"struct objc::runtime::Sel\">Sel</a></h3></section>","Copy","cocoa_foundation::base::SEL"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-Sel\" class=\"impl\"><a class=\"src rightside\" href=\"src/objc/runtime.rs.html#180\">source</a><a href=\"#impl-PartialEq-for-Sel\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"objc/runtime/struct.Sel.html\" title=\"struct objc::runtime::Sel\">Sel</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/objc/runtime.rs.html#181\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"objc/runtime/struct.Sel.html\" title=\"struct objc::runtime::Sel\">Sel</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/cmp.rs.html#239\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","cocoa_foundation::base::SEL"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Encode-for-Sel\" class=\"impl\"><a class=\"src rightside\" href=\"src/objc/encode.rs.html#129-147\">source</a><a href=\"#impl-Encode-for-Sel\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"objc/encode/trait.Encode.html\" title=\"trait objc::encode::Encode\">Encode</a> for <a class=\"struct\" href=\"objc/runtime/struct.Sel.html\" title=\"struct objc::runtime::Sel\">Sel</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/objc/encode.rs.html#129-147\">source</a><a href=\"#method.encode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"objc/encode/trait.Encode.html#tymethod.encode\" class=\"fn\">encode</a>() -&gt; <a class=\"struct\" href=\"objc/encode/struct.Encoding.html\" title=\"struct objc::encode::Encoding\">Encoding</a></h4></section></summary><div class='docblock'>Returns the Objective-C type encoding for Self.</div></details></div></details>","Encode","cocoa_foundation::base::SEL"],["<section id=\"impl-Send-for-Sel\" class=\"impl\"><a class=\"src rightside\" href=\"src/objc/runtime.rs.html#190\">source</a><a href=\"#impl-Send-for-Sel\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"objc/runtime/struct.Sel.html\" title=\"struct objc::runtime::Sel\">Sel</a></h3></section>","Send","cocoa_foundation::base::SEL"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Sel\" class=\"impl\"><a class=\"src rightside\" href=\"src/objc/runtime.rs.html#198\">source</a><a href=\"#impl-Debug-for-Sel\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"objc/runtime/struct.Sel.html\" title=\"struct objc::runtime::Sel\">Sel</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/objc/runtime.rs.html#199\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","cocoa_foundation::base::SEL"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()