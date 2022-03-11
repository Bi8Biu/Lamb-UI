import{_ as n,c as s,o as a,a as p}from"./app.f2e27c0c.js";const g='{"title":"\u5FEB\u901F\u4E0A\u624B","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4F7F\u7528\u4E4B\u524D","slug":"\u4F7F\u7528\u4E4B\u524D"},{"level":2,"title":"\u5B8C\u6574\u5F15\u5165","slug":"\u5B8C\u6574\u5F15\u5165"},{"level":2,"title":"\u6309\u9700\u5F15\u5165","slug":"\u6309\u9700\u5F15\u5165"},{"level":3,"title":"Vue CLI","slug":"vue-cli"},{"level":3,"title":"Vite","slug":"vite"},{"level":3,"title":"\u5F15\u5165","slug":"\u5F15\u5165"},{"level":3,"title":"\u5907\u6CE8","slug":"\u5907\u6CE8"}],"relativePath":"document/quickLearn/index.md"}',t={},e=p(`<h1 id="\u5FEB\u901F\u4E0A\u624B" tabindex="-1">\u5FEB\u901F\u4E0A\u624B <a class="header-anchor" href="#\u5FEB\u901F\u4E0A\u624B" aria-hidden="true">#</a></h1><h2 id="\u4F7F\u7528\u4E4B\u524D" tabindex="-1">\u4F7F\u7528\u4E4B\u524D <a class="header-anchor" href="#\u4F7F\u7528\u4E4B\u524D" aria-hidden="true">#</a></h2><p>\u60A8\u5E94\u8BE5\u5728\u4E00\u5B9A\u7A0B\u5EA6\u4E0A\u4E86\u89E3 vue \u7684\u76F8\u5173\u6982\u5FF5\u3001\u57FA\u7840\u77E5\u8BC6\uFF0C\u8FD9\u6837\u5728\u4F7F\u7528\u672C\u6846\u67B6\u7684\u65F6\u5019\u4F1A\u66F4\u987A\u5229 <br><br></p><h2 id="\u5B8C\u6574\u5F15\u5165" tabindex="-1">\u5B8C\u6574\u5F15\u5165 <a class="header-anchor" href="#\u5B8C\u6574\u5F15\u5165" aria-hidden="true">#</a></h2><br><p>\u5728\u9879\u76EE\u7684\u5165\u53E3\u6587\u4EF6\uFF08\u4E00\u822C\u662F <code>main.js</code>\uFF09\u4E2D\u914D\u7F6E</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>

<span class="token comment">// \u5B8C\u6574\u5F15\u5165\u7EC4\u4EF6</span>
<span class="token keyword">import</span> LambUI <span class="token keyword">from</span> <span class="token string">&#39;lamb-ui&#39;</span>
<span class="token comment">// \u5B8C\u6574\u5F15\u5165\u7EC4\u4EF6\u6837\u5F0F</span>
<span class="token keyword">import</span> <span class="token string">&#39;lamb-ui/lib/styles/index.css&#39;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>LambUI<span class="token punctuation">)</span><span class="token punctuation">;</span>                <span class="token comment">// \u6CE8\u518C\u7EC4\u4EF6\u9700\u8981\u5728 mount(\u6302\u8F7D) \u4E4B\u524D\u54E6</span>

app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre></div><br><br><br><h2 id="\u6309\u9700\u5F15\u5165" tabindex="-1">\u6309\u9700\u5F15\u5165 <a class="header-anchor" href="#\u6309\u9700\u5F15\u5165" aria-hidden="true">#</a></h2><br><h3 id="vue-cli" tabindex="-1">Vue CLI <a class="header-anchor" href="#vue-cli" aria-hidden="true">#</a></h3><p>\u5728 <code>Webpack\u5DE5\u7A0B</code> \u4E2D\u501F\u52A9 <code>babel-plugin-import</code>\uFF0C\u6211\u4EEC\u53EF\u4EE5\u53EA\u5F15\u5165\u9700\u8981\u7684\u7EC4\u4EF6\uFF0C\u4EE5\u8FBE\u5230\u51CF\u5C0F\u9879\u76EE\u4F53\u79EF\u7684\u76EE\u7684 <br></p><p>\u9996\u5148\u5B89\u88C5 <code>babel-plugin-import</code></p><div class="language-shell"><pre><code><span class="token comment"># npm</span>
<span class="token function">npm</span> <span class="token function">install</span> babel-plugin-import -D

<span class="token comment"># yarn</span>
<span class="token function">yarn</span> <span class="token function">add</span> babel-plugin-import -D
</code></pre></div><br><p>\u7136\u540E\uFF0C\u5728 <code>babel.config.js</code> \u4E2D\u914D\u7F6E</p><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">[</span>
            <span class="token string">&#39;import&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">libraryName</span><span class="token operator">:</span> <span class="token string">&#39;lamb-ui&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">libraryDirectory</span><span class="token operator">:</span> <span class="token string">&#39;lib&#39;</span><span class="token punctuation">,</span>
                <span class="token function-variable function">customStyleName</span><span class="token operator">:</span> <span class="token parameter">name</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">lamb-ui/lib/styles/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.css</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token string">&#39;lamb-ui&#39;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><br><h3 id="vite" tabindex="-1">Vite <a class="header-anchor" href="#vite" aria-hidden="true">#</a></h3><p>\u5728 <code>Vite\u5DE5\u7A0B</code> \u4E2D \u501F\u52A9 <code>vite-plugin-style-import</code>\uFF0C\u6211\u4EEC\u53EF\u4EE5\u53EA\u5F15\u5165\u9700\u8981\u7684\u7EC4\u4EF6\uFF0C\u4EE5\u8FBE\u5230\u51CF\u5C0F\u9879\u76EE\u4F53\u79EF\u7684\u76EE\u7684 <br></p><p>\u9996\u5148\u5B89\u88C5 <code>vite-plugin-style-import</code></p><div class="language-shell"><pre><code><span class="token comment"># npm</span>
<span class="token function">npm</span> <span class="token function">install</span> vite-plugin-style-import -D

<span class="token comment"># yarn</span>
<span class="token function">yarn</span> <span class="token function">add</span> vite-plugin-style-import -D
</code></pre></div><p>\u7136\u540E\uFF0C\u5728 <code>vite.config.js</code> \u4E2D\u914D\u7F6E</p><div class="language-js"><pre><code><span class="token keyword">import</span> styleImport <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-style-import&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">styleImport</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">libs</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">libraryName</span><span class="token operator">:</span> <span class="token string">&#39;lamb-ui&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">ensureStyleFile</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token function-variable function">resolveStyle</span><span class="token operator">:</span> <span class="token parameter">name</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">lamb-ui/lib/styles/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.css</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token function-variable function">resolveComponent</span><span class="token operator">:</span> <span class="token parameter">name</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">lamb-ui/es/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><br><br><h3 id="\u5F15\u5165" tabindex="-1">\u5F15\u5165 <a class="header-anchor" href="#\u5F15\u5165" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>
<span class="token comment">// \u6309\u9700\u5F15\u5165\u9700\u8981\u7684\u7EC4\u4EF6</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Link <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;lamb-ui&#39;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6                        // ps \u4E5F\u53EF\u4EE5\u5728\u5355\u7EC4\u4EF6\u6587\u4EF6 (xxx.vue )  \u4E2D \u5C40\u90E8\u6CE8\u518C\u54E6</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Button<span class="token punctuation">)</span><span class="token punctuation">;</span>                 
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Link<span class="token punctuation">)</span><span class="token punctuation">;</span>                       <span class="token comment">// \u6CE8\u518C\u7EC4\u4EF6\u9700\u8981\u5728 mount(\u6302\u8F7D) \u4E4B\u524D\u54E6</span>

app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="\u5907\u6CE8" tabindex="-1">\u5907\u6CE8 <a class="header-anchor" href="#\u5907\u6CE8" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Link <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;lamb-ui&#39;</span>
<span class="token comment">// \u901A\u8FC7\u524D\u9762\u5BF9 babel.config.js \u6216 vite.config.js \u7684\u914D\u7F6E</span>
<span class="token comment">// \u8FD9\u6BB5\u4EE3\u7801\u5728\u751F\u4EA7\u73AF\u5883\u5C06\u88AB\u89E3\u6790\u4E3A: </span>

<span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">&#39;lamb-ui/lib/button.js&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;lamb-ui/lib/styles/button.css&#39;</span>

<span class="token keyword">import</span> Link <span class="token keyword">from</span> <span class="token string">&#39;lamb-ui/lib/link.js&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;lamb-ui/lib/styles/link.css&#39;</span>
</code></pre></div>`,32),o=[e];function c(l,i,u,r,k,d){return a(),s("div",null,o)}var b=n(t,[["render",c]]);export{g as __pageData,b as default};
