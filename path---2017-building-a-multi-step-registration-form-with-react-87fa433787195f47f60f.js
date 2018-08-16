webpackJsonp([49163586475816],{330:function(n,s){n.exports={data:{markdownRemark:{html:'<blockquote>\n<p>이 글은 <a href="https://www.viget.com">viget</a>의 <a href="https://www.viget.com/about/team/tmarshall">Tommy Marshall</a>의<a href="https://www.viget.com/articles/building-a-multi-step-registration-form-with-react">Building a Multi-Step Registration Form with React</a> 을 허락을 받고 번역한 글 입니다. 오역 및 번역 제안은 댓글로 달아 주시면 감사하겠습니다.</p>\n</blockquote>\n<p>저희는 Viget에서 <a href="http://facebook.github.io/react/">React</a>와 함께 일하는 것을 정말로 즐겼습니다. 저희는 React를 클라이언트 프로젝트, 개인 벤처 그리고 가장 최근에는 <a href="https://viget.com/flourish/introducing-jambells-start-a-holiday-handbell-choir-with-your-phne">Pointless Corp</a>에 사용하였습니다.</p>\n<p>React의 가장 큰 특징 중 하나는 응용프로그램의 state를 처리하는 방법입니다. React 컴포넌트의 state가 업데이트 될 때마다, React는 업데이트 된 뷰를 다시 렌더링 합니다. 해석: React는 어떤 일이 일어 났을때 사용자에게 뭔가를 보여줄 필요가 있을때 아주 좋습니다.</p>\n<p>저는 컴포넌트의 state를 업데이트 하여 사용자가 어떤 단계에 있는지 표시한 후, 해당 단계에 적절한 필드를 표시하는 multi-step 폼이 이 기능을 보여주는 좋은 예라고 생각 했습니다. 시작하기 전에 우리가 무엇을 만들지 알아 보겠습니다.</p>\n<h3><a href="http://codepen.io/tommymarshall/pen/yyMOzj">CodePen 라이브 데모</a>와 <a href="https://github.com/tommymarshall/react-multi-step-form/">GitHub Repo</a></h3>\n<p>현재 단계를 조금 더 확실하게 보여주기 위해 약간의 마크업과 CSS 및 진행바를 추가했습니다.\n그외에는, 우리는 기본적으로 같은 것을 만들 겁니다.</p>\n<h3>시작하기</h3>\n<p>저희는 4단계 가입 과정을 만들었습니다. 사용자는 다음 과정을 거칠 것입니다:</p>\n<ol>\n<li>기본 계정 정보 입력</li>\n<li>간단한 설문응답</li>\n<li>올바른 정보를 입력했는지 확인</li>\n<li>성공 메시지 보기</li>\n</ol>\n<p>주어진 단계에 관한 필드만 표시하는 쉬운 방법은 해당 내용을 개별 컴포넌트로 만드는 것 입니다. 그런 다음 사용자가 다음 단계로 이동하면 step state(역주-지금 어느 단계에 있는지 표시하는 state)를 1씩 증가 시킵니다. React는 step state의 변화를 보고 자동으로 컴포넌트를 재렌더링 하여 사용자가 원하는 것을 정확히 보여줍니다. 다음은 기본 코드 입니다:</p>\n<div class="gatsby-highlight" data-language="jsx">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token comment">// file: Registration.jsx</span>\n\n<span class="token keyword">var</span> React         <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'react\'</span><span class="token punctuation">)</span>\n<span class="token keyword">var</span> AccountFields <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./AccountFields\'</span><span class="token punctuation">)</span>\n<span class="token keyword">var</span> SurveyFields  <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./SurveyFields\'</span><span class="token punctuation">)</span>\n<span class="token keyword">var</span> Confirmation  <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./Confirmation\'</span><span class="token punctuation">)</span>\n<span class="token keyword">var</span> Success       <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./Success\'</span><span class="token punctuation">)</span>\n\n<span class="token keyword">var</span> Registration <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n\tgetInitialState<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">return</span> <span class="token punctuation">{</span>\n\t\t\tstep<span class="token punctuation">:</span> <span class="token number">1</span>\n\t\t<span class="token punctuation">}</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n\trender<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">switch</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>step<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token keyword">case</span> <span class="token number">1</span><span class="token punctuation">:</span>\n\t\t\t\t<span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AccountFields</span> <span class="token punctuation">/></span></span>\n\t\t\t<span class="token keyword">case</span> <span class="token number">2</span><span class="token punctuation">:</span>\n\t\t\t\t<span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SurveyFields</span> <span class="token punctuation">/></span></span>\n\t\t\t<span class="token keyword">case</span> <span class="token number">3</span><span class="token punctuation">:</span>\n\t\t\t\t<span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Confirmation</span> <span class="token punctuation">/></span></span>\n\t\t\t<span class="token keyword">case</span> <span class="token number">4</span><span class="token punctuation">:</span>\n\t\t\t\t<span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Success</span> <span class="token punctuation">/></span></span>\n\t\t<span class="token punctuation">}</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> Registration</code></pre>\n      </div>\n<p><em>step</em> 이 1일 경우 (컴포넌트가 처음 로드 될 때) Account 필드를 보여줄 겁니다, 2일 경우에는 설문 조사 질문을 표시하고, 3일 경우 정보를 확인 하는 화면을, 마지막으로 4단계에서 성공 메시지를 표시합니다. 저는 CommonJS 패턴을 사용하여 이러한 컴포넌트를 구성할 것입니다. 이들 각각은 React 컴포넌트가 될 것입니다.</p>\n<p>다음으로, 사용자가 입력할 값을 저장할 객체를 만듭니다. 우리는 이름, 이메일, 비밀번호, 나이 및 좋아하는 색상 필드를 만들 겁니다. 여기선 이 정보를 상위 컴포넌트(Register.jsx)의 맨 위에 fieldValues로 저장하겠습니다.</p>\n<div class="gatsby-highlight" data-language="jsx">\n      <pre class="language-jsx"><code class="language-jsx"> <span class="token comment">// file: Registration.jsx</span>\n\n<span class="token keyword">var</span> fieldValues <span class="token operator">=</span> <span class="token punctuation">{</span>\n  name     <span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n  email    <span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n  password <span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n  age      <span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n  colors   <span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// The rest of our file</span>\n<span class="token operator">...</span></code></pre>\n      </div>\n<p>사용자에게 표시되는 첫번째 컴포넌트인 <code class="language-text">&lt;AccountFields /&gt;</code>에는 새 계정을 만드는데사용되는 <em>이름, 비밀번호, 이메일</em> 필드가 있습니다.\n사용자가 "Save and Continue"를 클릭하면 데이터가 저장되고 회원 가입 과정의 두 번째 단계로 넘어갑니다.</p>\n<div class="gatsby-highlight" data-language="jsx">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token comment">// file: AccountFields.jsx</span>\n\n<span class="token keyword">var</span> React <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'react\'</span><span class="token punctuation">)</span>\n\n<span class="token keyword">var</span> AccountFields <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  render<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">></span></span>Name<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span>\n             <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span>\n             <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>fieldValues<span class="token punctuation">.</span>name <span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">></span></span>Password<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span>\n             <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span>\n             <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>fieldValues<span class="token punctuation">.</span>password <span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">></span></span>Email<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span>\n             <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span>\n             <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>fieldValues<span class="token punctuation">.</span>email <span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span> <span class="token keyword">this</span><span class="token punctuation">.</span>saveAndContinue <span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Save and Continue<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n  saveAndContinue<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n    <span class="token comment">// this.refs를 통해 값을 받습니다.</span>\n    <span class="token keyword">var</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>\n      name     <span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>refs<span class="token punctuation">.</span>name<span class="token punctuation">.</span><span class="token function">getDOMNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">,</span>\n      password <span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>refs<span class="token punctuation">.</span>password<span class="token punctuation">.</span><span class="token function">getDOMNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">,</span>\n      email    <span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>refs<span class="token punctuation">.</span>email<span class="token punctuation">.</span><span class="token function">getDOMNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">saveValues</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">nextStep</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> AccountFields</code></pre>\n      </div>\n<p><strong><code class="language-text">&lt;AccountFields /&gt;</code></strong> 에서 알아야 할 4가지 사항:</p>\n<ol>\n<li><em>defaultValue</em>는 input의 기본값을 설정합니다.\nReact는HTML에서 기본 input 값을 처리하는 방식의어색함을 해결하기 위해 <em>value</em> 속성 대신에 이것을 사용합니다.\n이 주제에 대해 더 자세히 읽으려면 <a href="http://facebook.github.io/react/docs/forms.html#advanced-topics">여기</a>를 클릭하세요.</li>\n<li>우리는<em>defaultValue</em>를 부모 컴포넌트의 등록 정보(Registration.jsx)에 전달되는<em>this.props.fieldValues</em> 키와 연관시켰습니다. 이로 인해 사용자가 저장하고다음단계로 진행하여도 이전 단계로 돌아가면 이전에 입력한 내용이 표시됩니다</li>\n<li>우리는 refs를 사용해 DOM 노드를 참조하여 값을 얻고 있습니다. React에서 refs가 작동하는 방법을 보려면 <a href="http://facebook.github.io/react/docs/more-about-refs.html#the-ref-attribute">이 문서</a>를 확인 하세요. 이 방법은 노드를 참고하는 더 쉬운 방법입니다. </li>\n<li>우리는 Registration 컴포넌트(부모)에 <em>saveValues</em>와 <em>nextStep</em>메소드를 만들어야 합니다. 그런 다음 이를 <strong><code class="language-text">&lt;AccountFields /&gt;</code></strong>(자식)이 접근 할 수 있게 프로퍼티(property)로 전달해야 합니다. 그리고 2단계에서 이전 단계로 갈 수 있으므로 <em>previousStep</em>도 만들어야 합니다. </li>\n</ol>\n<div class="gatsby-highlight" data-language="jsx">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token comment">// file: Registration.jsx</span>\n<span class="token operator">...</span>\n\nsaveValues<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span>fields<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 이 파일의 맨 위에 `fieldValues`가 있다는걸 기억하세요</span>\n    <span class="token comment">// 우리는 단순히 `fieldValues`에 있는 키를 Object.assign을 사용하여`fleld`로 객체를 복사하고 있습니다</span>\n    <span class="token comment">// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign 를 참고하세요</span>\n    <span class="token comment">// 역주 - 한국어 자료 https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/assign</span>\n    fieldValues <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> fieldValues<span class="token punctuation">,</span> fields<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\nnextStep<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    step <span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>step <span class="token operator">+</span> <span class="token number">1</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n<span class="token comment">// nextStep과 같지만 숫자를 감소시킵니다</span>\npreviousStep<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    step <span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>step <span class="token operator">-</span> <span class="token number">1</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n<span class="token operator">...</span></code></pre>\n      </div>\n<p>여기에서 새로 만든 메소드를 각각의 자식 컴포넌트에 프로퍼티로 전달하여 호출 할 수 있게 합니다.</p>\n<div class="gatsby-highlight" data-language="jsx">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token comment">// file: Registration.jsx</span>\n<span class="token operator">...</span>\n\nrender<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">switch</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>step<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">case</span> <span class="token number">1</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AccountFields</span> <span class="token attr-name">fieldValues</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>fieldValues<span class="token punctuation">}</span></span>\n                            <span class="token attr-name">nextStep</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>nextStep<span class="token punctuation">}</span></span>\n                            <span class="token attr-name">saveValues</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>saveValues<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token keyword">case</span> <span class="token number">2</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SurveyFields</span> <span class="token attr-name">fieldValues</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>fieldValues<span class="token punctuation">}</span></span>\n                           <span class="token attr-name">nextStep</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>nextStep<span class="token punctuation">}</span></span>\n                           <span class="token attr-name">previousStep</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>previousStep<span class="token punctuation">}</span></span>\n                           <span class="token attr-name">saveValues</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>saveValues<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token keyword">case</span> <span class="token number">3</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Confirmation</span> <span class="token attr-name">fieldValues</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>fieldValues<span class="token punctuation">}</span></span>\n                           <span class="token attr-name">previousStep</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>previousStep<span class="token punctuation">}</span></span>\n                           <span class="token attr-name">submitRegistration</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>submitRegistration<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token keyword">case</span> <span class="token number">4</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Success</span> <span class="token attr-name">fieldValues</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>fieldValues<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>여러분은 <strong><code class="language-text">&lt;AccountFields /&gt;</code></strong>는 첫번째 단계 이므로 <em>previousStep</em>로 값을 전달 하지 않고, 이전 단계로 가지 않는 다는 것을 알게 될 것입니다. 또한 <em>saveValue</em> 또는 <em>nextStep</em>을 <strong><code class="language-text">&lt;Confirmation /&gt;</code></strong>에 전달하는 대신 새로 작성한 <em>submitRegistration</em> 메소드를 전달합니다. 이 메소드는 사용자 입력값(<em>fieldValues</em>)을 제출하고 step을 4로 늘려 <strong><code class="language-text">&lt;Success /&gt;</code></strong>를 표시합니다.</p>\n<p><strong><code class="language-text">&lt;SurveyFields /&gt;</code></strong>와  <strong><code class="language-text">&lt;Confirmation /&gt;</code></strong>그리고 <strong><code class="language-text">&lt;Success /&gt;</code></strong> 컴포넌트에도 <strong><code class="language-text">&lt;AccountFields /&gt;</code></strong>를 만드는 과정을 반복합니다. 간략히 하기 위해 코드는 <a href="https://github.com/tommymarshall/react-multi-step-form/blob/master/src/javascript/components/SurveyFields.jsx">여기</a>와 <a href="https://github.com/tommymarshall/react-multi-step-form/blob/master/src/javascript/components/Confirmation.jsx">여기</a> 그리고 <a href="https://github.com/tommymarshall/react-multi-step-form/blob/master/src/javascript/components/Success.jsx">여기</a>서 확인 하실 수 있습니다.</p>\n<h3>데이터 저장시 주의 사항</h3>\n<p>사용자의 입력을 저장하고 전달하는 방식(<em>fieldValues={fieldValues}</em>)에 주의하세요. 모든 컴포넌트에 이 방식을 매번 적용 해야 할까요? 이 데이터에 의존하는 더 많은 컴포넌트가 있거나 같은 화면에 여러 컴포넌트를 보여주어야 하는 상황을 생각해 보세요. 가장 최신 데이터를 보여줄 한가지 방법을 찾았지만 다른 방법은 없을까요? 보시다시피 위의 구현은 빠르게 지루해 지고 다루기 힘들어 집니다.</p>\n<p>저희는 Facebook이 <a href="http://facebook.github.io/react/blog/2014/05/06/flux.html">플럭스 스토어(Flux Store)</a>라고 부르는 저장소에 데이터를 저장함으로써 이런 상황을 벗어날 수 있었습니다. 우리는 이 저장소를 사용함으로써 한곳에 데이터를 저장하고 데이터 변경에 반응하는 컴포넌트만 다시 렌더링 할 수 있었습니다. 플럭스의 작동 방식을 조금 더 배우고 싶다면 Pete Hunt의 <a href="https://www.youtube.com/watch?v=nYkdrAPrdcw&#x26;list=PLb0IAmt7-GS188xDYE-u1ShQmFFGbrk0v#t=621">강연</a>을 보는 것을 추천합니다.</p>\n<h3>결론</h3>\n<p>React는 사용자에게 무언가를 보여줄지 처리할때 매우 좋습니다. 이 예제에서 보여지는 부분은 입력 필드(간단한 마크업)이며, 해당 필드가 표시되는 때는 현재 step(Registration component의 state)에 의해 결정됩니다. 이 관계에 대해 생각하는 한가지는 state가 결정하는 모양 입니다. 응용프로그램의 상태에 따라 문자 하나 만큼의 작거나 완전히 다른 컴포넌트를 표시하는 등 다양한 방식으로 간단하고도 예측 가능한 방식으로 렌더링 할 수 있습니다.</p>\n<p>React에 관한 질문이나 제가 한 작업에 대한 피드백이 있으시나요? 자유롭게 댓글로 달아주세요.</p>',frontmatter:{title:"[번역]React로 Multi-Step 가입 폼 만들기",date:"2017/01/20"}}},pathContext:{slug:"/2017/building-a-multi-step-registration-form-with-react/"}}}});
//# sourceMappingURL=path---2017-building-a-multi-step-registration-form-with-react-87fa433787195f47f60f.js.map