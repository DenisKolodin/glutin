(function() {var implementors = {};
implementors["libc"] = [];implementors["shared_library"] = ["impl&lt;K,&nbsp;V,&nbsp;S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(</a>K, V<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>)</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/std/collections/hash/map/struct.HashMap.html' title='std::collections::hash::map::HashMap'>HashMap</a>&lt;K,&nbsp;V,&nbsp;S&gt; <span class='where'>where K: <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html' title='core::cmp::Eq'>Eq</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a>, S: <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html' title='core::hash::BuildHasher'>BuildHasher</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/default/trait.Default.html' title='core::default::Default'>Default</a></span>","impl&lt;T,&nbsp;S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/std/collections/hash/set/struct.HashSet.html' title='std::collections::hash::set::HashSet'>HashSet</a>&lt;T,&nbsp;S&gt; <span class='where'>where S: <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html' title='core::hash::BuildHasher'>BuildHasher</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/default/trait.Default.html' title='core::default::Default'>Default</a>, T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html' title='core::cmp::Eq'>Eq</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a></span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/binary_heap/struct.BinaryHeap.html' title='collections::binary_heap::BinaryHeap'>BinaryHeap</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a></span>","impl&lt;A&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;A&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/vec_deque/struct.VecDeque.html' title='collections::vec_deque::VecDeque'>VecDeque</a>&lt;A&gt;","impl&lt;A&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;A&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/linked_list/struct.LinkedList.html' title='collections::linked_list::LinkedList'>LinkedList</a>&lt;A&gt;","impl&lt;P&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;P&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/std/path/struct.PathBuf.html' title='std::path::PathBuf'>PathBuf</a> <span class='where'>where P: <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html' title='core::convert::AsRef'>AsRef</a>&lt;<a class='struct' href='https://doc.rust-lang.org/nightly/std/path/struct.Path.html' title='std::path::Path'>Path</a>&gt;</span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/vec/struct.Vec.html' title='collections::vec::Vec'>Vec</a>&lt;T&gt;","impl&lt;'a,&nbsp;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='enum' href='https://doc.rust-lang.org/nightly/collections/borrow/enum.Cow.html' title='collections::borrow::Cow'>Cow</a>&lt;'a,&nbsp;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>[</a>T<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>]</a>&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a></span>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.char.html'>char</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;&amp;'a <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.str.html'>str</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='struct' href='https://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>",];implementors["serde"] = ["impl&lt;T&gt; <a class='trait' href='core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/binary_heap/struct.BinaryHeap.html' title='collections::binary_heap::BinaryHeap'>BinaryHeap</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a></span>","impl&lt;K,&nbsp;V&gt; <a class='trait' href='core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(</a>K, V<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>)</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/btree/map/struct.BTreeMap.html' title='collections::btree::map::BTreeMap'>BTreeMap</a>&lt;K,&nbsp;V&gt; <span class='where'>where K: <a class='trait' href='core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a></span>","impl&lt;T&gt; <a class='trait' href='core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/btree/set/struct.BTreeSet.html' title='collections::btree::set::BTreeSet'>BTreeSet</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a></span>","impl&lt;E&gt; <a class='trait' href='core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;E&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/enum_set/struct.EnumSet.html' title='collections::enum_set::EnumSet'>EnumSet</a>&lt;E&gt; <span class='where'>where E: <a class='trait' href='https://doc.rust-lang.org/nightly/collections/enum_set/trait.CLike.html' title='collections::enum_set::CLike'>CLike</a></span>","impl&lt;A&gt; <a class='trait' href='core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;A&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/linked_list/struct.LinkedList.html' title='collections::linked_list::LinkedList'>LinkedList</a>&lt;A&gt;","impl <a class='trait' href='core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.char.html'>char</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>","impl&lt;'a&gt; <a class='trait' href='core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;&amp;'a <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.str.html'>str</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>","impl <a class='trait' href='core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='struct' href='https://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>","impl&lt;T&gt; <a class='trait' href='core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/vec/struct.Vec.html' title='collections::vec::Vec'>Vec</a>&lt;T&gt;","impl&lt;'a,&nbsp;T&gt; <a class='trait' href='core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='enum' href='https://doc.rust-lang.org/nightly/collections/borrow/enum.Cow.html' title='collections::borrow::Cow'>Cow</a>&lt;'a,&nbsp;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>[</a>T<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>]</a>&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a></span>","impl&lt;A&gt; <a class='trait' href='core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;A&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/vec_deque/struct.VecDeque.html' title='collections::vec_deque::VecDeque'>VecDeque</a>&lt;A&gt;",];implementors["lazy_static"] = [];implementors["gleam"] = ["impl&lt;K,&nbsp;V,&nbsp;S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(</a>K, V<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>)</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/std/collections/hash/map/struct.HashMap.html' title='std::collections::hash::map::HashMap'>HashMap</a>&lt;K,&nbsp;V,&nbsp;S&gt; <span class='where'>where K: <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html' title='core::cmp::Eq'>Eq</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a>, S: <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html' title='core::hash::BuildHasher'>BuildHasher</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/default/trait.Default.html' title='core::default::Default'>Default</a></span>","impl&lt;T,&nbsp;S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/std/collections/hash/set/struct.HashSet.html' title='std::collections::hash::set::HashSet'>HashSet</a>&lt;T,&nbsp;S&gt; <span class='where'>where S: <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html' title='core::hash::BuildHasher'>BuildHasher</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/default/trait.Default.html' title='core::default::Default'>Default</a>, T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html' title='core::cmp::Eq'>Eq</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a></span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/binary_heap/struct.BinaryHeap.html' title='collections::binary_heap::BinaryHeap'>BinaryHeap</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a></span>","impl&lt;A&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;A&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/vec_deque/struct.VecDeque.html' title='collections::vec_deque::VecDeque'>VecDeque</a>&lt;A&gt;","impl&lt;A&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;A&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/linked_list/struct.LinkedList.html' title='collections::linked_list::LinkedList'>LinkedList</a>&lt;A&gt;","impl&lt;P&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;P&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/std/path/struct.PathBuf.html' title='std::path::PathBuf'>PathBuf</a> <span class='where'>where P: <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html' title='core::convert::AsRef'>AsRef</a>&lt;<a class='struct' href='https://doc.rust-lang.org/nightly/std/path/struct.Path.html' title='std::path::Path'>Path</a>&gt;</span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/vec/struct.Vec.html' title='collections::vec::Vec'>Vec</a>&lt;T&gt;","impl&lt;'a,&nbsp;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='enum' href='https://doc.rust-lang.org/nightly/collections/borrow/enum.Cow.html' title='collections::borrow::Cow'>Cow</a>&lt;'a,&nbsp;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>[</a>T<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>]</a>&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a></span>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.char.html'>char</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;&amp;'a <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.str.html'>str</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='struct' href='https://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>",];implementors["cocoa"] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='struct' href='cocoa/appkit/struct.NSWindowOrderingMode.html' title='cocoa::appkit::NSWindowOrderingMode'>NSWindowOrderingMode</a>&gt; for <a class='struct' href='cocoa/appkit/struct.NSWindowOrderingMode.html' title='cocoa::appkit::NSWindowOrderingMode'>NSWindowOrderingMode</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='struct' href='cocoa/appkit/struct.NSAlignmentOptions.html' title='cocoa::appkit::NSAlignmentOptions'>NSAlignmentOptions</a>&gt; for <a class='struct' href='cocoa/appkit/struct.NSAlignmentOptions.html' title='cocoa::appkit::NSAlignmentOptions'>NSAlignmentOptions</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='struct' href='cocoa/appkit/struct.NSWindowCollectionBehavior.html' title='cocoa::appkit::NSWindowCollectionBehavior'>NSWindowCollectionBehavior</a>&gt; for <a class='struct' href='cocoa/appkit/struct.NSWindowCollectionBehavior.html' title='cocoa::appkit::NSWindowCollectionBehavior'>NSWindowCollectionBehavior</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='struct' href='cocoa/appkit/struct.NSWindowOcclusionState.html' title='cocoa::appkit::NSWindowOcclusionState'>NSWindowOcclusionState</a>&gt; for <a class='struct' href='cocoa/appkit/struct.NSWindowOcclusionState.html' title='cocoa::appkit::NSWindowOcclusionState'>NSWindowOcclusionState</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='struct' href='cocoa/appkit/struct.NSEventSwipeTrackingOptions.html' title='cocoa::appkit::NSEventSwipeTrackingOptions'>NSEventSwipeTrackingOptions</a>&gt; for <a class='struct' href='cocoa/appkit/struct.NSEventSwipeTrackingOptions.html' title='cocoa::appkit::NSEventSwipeTrackingOptions'>NSEventSwipeTrackingOptions</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='struct' href='cocoa/appkit/struct.NSEventPhase.html' title='cocoa::appkit::NSEventPhase'>NSEventPhase</a>&gt; for <a class='struct' href='cocoa/appkit/struct.NSEventPhase.html' title='cocoa::appkit::NSEventPhase'>NSEventPhase</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='struct' href='cocoa/appkit/struct.NSTouchPhase.html' title='cocoa::appkit::NSTouchPhase'>NSTouchPhase</a>&gt; for <a class='struct' href='cocoa/appkit/struct.NSTouchPhase.html' title='cocoa::appkit::NSTouchPhase'>NSTouchPhase</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='struct' href='cocoa/appkit/struct.NSEventMask.html' title='cocoa::appkit::NSEventMask'>NSEventMask</a>&gt; for <a class='struct' href='cocoa/appkit/struct.NSEventMask.html' title='cocoa::appkit::NSEventMask'>NSEventMask</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='struct' href='cocoa/appkit/struct.NSEventModifierFlags.html' title='cocoa::appkit::NSEventModifierFlags'>NSEventModifierFlags</a>&gt; for <a class='struct' href='cocoa/appkit/struct.NSEventModifierFlags.html' title='cocoa::appkit::NSEventModifierFlags'>NSEventModifierFlags</a>",];implementors["glutin"] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='struct' href='cocoa/appkit/struct.NSWindowOrderingMode.html' title='cocoa::appkit::NSWindowOrderingMode'>NSWindowOrderingMode</a>&gt; for <a class='struct' href='cocoa/appkit/struct.NSWindowOrderingMode.html' title='cocoa::appkit::NSWindowOrderingMode'>NSWindowOrderingMode</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='struct' href='cocoa/appkit/struct.NSAlignmentOptions.html' title='cocoa::appkit::NSAlignmentOptions'>NSAlignmentOptions</a>&gt; for <a class='struct' href='cocoa/appkit/struct.NSAlignmentOptions.html' title='cocoa::appkit::NSAlignmentOptions'>NSAlignmentOptions</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='struct' href='cocoa/appkit/struct.NSWindowCollectionBehavior.html' title='cocoa::appkit::NSWindowCollectionBehavior'>NSWindowCollectionBehavior</a>&gt; for <a class='struct' href='cocoa/appkit/struct.NSWindowCollectionBehavior.html' title='cocoa::appkit::NSWindowCollectionBehavior'>NSWindowCollectionBehavior</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='struct' href='cocoa/appkit/struct.NSWindowOcclusionState.html' title='cocoa::appkit::NSWindowOcclusionState'>NSWindowOcclusionState</a>&gt; for <a class='struct' href='cocoa/appkit/struct.NSWindowOcclusionState.html' title='cocoa::appkit::NSWindowOcclusionState'>NSWindowOcclusionState</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='struct' href='cocoa/appkit/struct.NSEventSwipeTrackingOptions.html' title='cocoa::appkit::NSEventSwipeTrackingOptions'>NSEventSwipeTrackingOptions</a>&gt; for <a class='struct' href='cocoa/appkit/struct.NSEventSwipeTrackingOptions.html' title='cocoa::appkit::NSEventSwipeTrackingOptions'>NSEventSwipeTrackingOptions</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='struct' href='cocoa/appkit/struct.NSEventPhase.html' title='cocoa::appkit::NSEventPhase'>NSEventPhase</a>&gt; for <a class='struct' href='cocoa/appkit/struct.NSEventPhase.html' title='cocoa::appkit::NSEventPhase'>NSEventPhase</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='struct' href='cocoa/appkit/struct.NSTouchPhase.html' title='cocoa::appkit::NSTouchPhase'>NSTouchPhase</a>&gt; for <a class='struct' href='cocoa/appkit/struct.NSTouchPhase.html' title='cocoa::appkit::NSTouchPhase'>NSTouchPhase</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='struct' href='cocoa/appkit/struct.NSEventMask.html' title='cocoa::appkit::NSEventMask'>NSEventMask</a>&gt; for <a class='struct' href='cocoa/appkit/struct.NSEventMask.html' title='cocoa::appkit::NSEventMask'>NSEventMask</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.FromIterator.html' title='core::iter::traits::FromIterator'>FromIterator</a>&lt;<a class='struct' href='cocoa/appkit/struct.NSEventModifierFlags.html' title='cocoa::appkit::NSEventModifierFlags'>NSEventModifierFlags</a>&gt; for <a class='struct' href='cocoa/appkit/struct.NSEventModifierFlags.html' title='cocoa::appkit::NSEventModifierFlags'>NSEventModifierFlags</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
