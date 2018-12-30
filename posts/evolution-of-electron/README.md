---
title: "[번역]Electron의 진화"
date: 2017-07-03 21:55:07
tags:
    - Electron
    - 번역
    - JavaScript
backgroundColor: "#167C80"
color: "#FFFFFF"
---
> 이 글은 [Cheng Zhao](https://github.com/zcbenz)의 [Evolution of Electron](http://cheng.guru/blog/2016/11/13/evolution-of-electron.html) ([일본어 번역](http://cheng.guru/blog/2016/11/13/evolution-of-electron-japanese.html))을 허락을 받고 번역한 글 입니다. 오역 및 번역 제안은 댓글로 달아 주시면 감사하겠습니다.

<script async class="speakerdeck-embed" data-id="5899341a59004c43b4f7823301ec04a6" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>

皆 さ ん こ ん に ち は(역주 - 여러분 안녕하세요), 저는 오늘 어떻게 Electron이 만들어 졌으며, 어떻게 인기를 얻어 갔는지 말씀 드리고자 합니다.
<hr>
그리고 Kohei TAKATA님의 번역에 감사드립니다, 덕분에 저는 이 강연을 일본어로 할 수 있습니다.
<hr>
우선, 제 소개를 조금 하겠습니다. 저는 3개의 이름을 가지고 있습니다,
중국인들은 저를 중국어로 ちょうせい(역주 - Chō sei) 라고 부릅니다.
미국에서는 제 이름의 영어 표기법을 따라 Cheng Zhao 이라고 부릅니다.
그렇지만 일본에서 제 이름은 제 영어 이름의 가타가나 표기인 ジャオ　チェン이 됩니다.
이 처럼 저는 같은 뜻의 이름을 3개 가지고 있습니다.

저는 Electron의 창시자 입니다. 지금은 GitHub에서 일하고 있으며, 여전히 Electron 개발을 하고 있습니다.
<hr>
Electron에 대해 이야기 하기 전에, Atom editor의 이야기를 먼저 해야합니다.
Electron는 Atom 덕분에 만들어 졌으며, Electron의 초기 기술 선택은 주로 Atom의 요구에 따른 것 이었습니다.
<hr>
Atom editor의 첫번째 에디션은 5년 전에 만들어 졌습니다.
GitHub CEO가 메인 개발자 였습니다.
그것은 Electron을 사용하지 않았고,
시스템 내장 webview를 사용한 간단한 Cocoa 응용 프로그램 이었습니다.
<hr>
Atom 개발자가 좀 더 늘어난 뒤,
Atom은 네이티브 레이어를 Chromium Embedded Framework로 변경 하였으며,
Chromium과 V8 및 WebKit을 플랫폼으로 사용하기 시작했습니다.
CEF(역주 - Chromium Embedded Framework)는 모든 플랫폼에 Atom을 이식할 수 있게 해주었고,
모던 web 플랫폼을 제공했기 때문에 개발이 훨씬 쉬워졌습니다.
<hr>
그러는 사이 Node.js가 인기를 끌기 시작했고, node-webkit도 태어났습니다.

node-webkit은 Atom과 매우 비슷한 길을 걷고 있었습니다. node-webkit의 첫번째 에디션은 Node.js symbol을 WebKit 브라우저에 추가한 Node.js 모듈 이었습니다.
제가 node-webkit 개발에 참여한 뒤에는,
node-webkit도 Chromium을 기반으로한 플랫폼이 되었습니다.
<hr>
따라서 Atom을 커스텀 네이티브 레이어에서 node-webkit으로 전환하려는 유혹이 매우 컸습니다.
그리고 Atom editor 개발자들은 실제로 node-webkit으로 포팅하려 시도했습니다.

그 당시에 이미 Atom은 큰 코드베이스가 되어 있었습니다.
따라서 포팅 작업량이 엄청났으며, Atom은 커스텀된 네이티브 바인딩을 많이 사용하고 있었기 때문에,
개발자들은 그 코드들을 Node.js API와 node-webkit으로 바꿔야 했습니다.

그렇지만, 결국 그 시도는 실패로 끝났습니다.
<hr>
실패의 원인은 많이 있었습니다. 그당시 node-webkit은 안정되지 않았고, 많은 중요한 기능이 없었습니다.
실패의 원인의 대부분은 node-webkit이 매우 어렸기 때문이며, 아무도 좋은 web 플랫폼은 어떤 모습이어야 하는지 몰랐기 때문입니다.

Atom은 거대한 코드베이스 였기에, 한 번에 모든 코드를 바꾸는 것은 매우 어려운 작업이었던 것도 원인이었습니다.
<hr>
하지만 Atom이 node-webkit을 버렸다는 의미는 아니었습니다,
대신에 나온 해결책은 node-webkit 개발자를 고용해 node-webkit을 개선하는 것 이었습니다.
즉, 저를 고용했습니다.
그리고 그 사이에 저는 Atom을 새로운 플랫폼으로 전환하기 위한 더 나은 방법을 도울 필요가 있었습니다.
<hr>
그래서 Atom의 새로운 계획은 다음과 같습이 되었습니다.
제 첫 번째 작업은 CEF에 Node.js의 지원을 추가하는 것이 었습니다.
덕분에 Atom은 점차 기존 코드를 Node.js로 전환 할 수 있었습니다.
이 프로젝트는 CEF와 Node를 합친 말인 cefode라고 불렀고,
제 GitHub 계정에서 프로젝트를 찾을 수 있습니다.

그 후, Atom 개발자들은 Node.js API를 사용하여 Atom을 개발하기 시작했습니다.
동시에 저는 Atom에게 더 나은 플랫폼이되도록 node-webkit을 계속 개선 했습니다.
일단 node-webkit이 충분히 성숙해 지면,
우리는 Atom을 node-webkit을 사용하도록 전환 할 수 있을 것이고,
잘 하면 손쉽게 전환 할 수도 있을 것 입니다.
<hr>
그러나 node-webkit 개선하는 중에, 저는 이 방식의 몇 가지 문제점을 깨닫기 시작했습니다.
첫째로, node-webkit의 아키텍처는 멀티 윈도우 응용 프로그램에는 적합하지 않았습니다.
node-webkit은 모든 응용 프로그램이 하나의 메인 창 만 가지고 있다고 가정하고 있었고,
하나의 응용 프로그램에서 여러창을 지원할때는 응용 프로그램의 코드는 엉망으로 변할 것 이었습니다.
이 문제를 해결하기 위해서는, node-webkit의 모든 API를 재 설계 해야했습니다.

또다른 문제는, node-webkit는 어떤 조직이 아닌 개인 프로젝트 였고,
원저자는 프로젝트가 유명해진 후에 제가 프로젝트의 리더십을 맡기를 원하지 않았습니다.

저는 모든 기술적인 결정을 원저자와 상의 해야 했습니다, 심지어 모든 제가 모든 코드를 작성 했더라도요.
<hr>
그래서 제게 남은 유일한 해결책은,
새 프로젝트를 시작하고 처음부터 node-webkit을 다시 작성하는 것이었습니다.
<hr>
그리하여 atom-shell이 태어났습니다.
atom-shell은 우리의 계획에서 node-webkit을 대체했습니다.
다시 (코드를) 작성하는데 오랜 시간이 걸렸지만, Atom에서는 꽤 잘 작동 했습니다.
<hr>
atom-shell과 node-webkit은 몇가지 큰 차이점이 있습니다.
atom-shell은 메인 프로세스에서 JavaScript를 실행할 수 있게 했습니다.
이것은 응용프로그램의 수명 주기를 스스로 관리 해야 하는 응용프로그램에게 매우 중요한 것이었습니다.

또한 atom-shell은 Chromium 빌드를 온라인 서버로 분리 했습니다.
따라서 개발자는 로컬에서 Chromium을 빌드할 필요가 없습니다.
이것은 개발을 훨씬 더 쉽고 빠르게 해줬으며,
느린 기기를 사용하는 개발자도 atom-shell 개발에 기여 할 수 있도록 해줬습니다.

마지막으로, 저는 Node.js를 Chromium에 통합하는 방법을 개선했습니다.
덕분에 더 이상 Chromium의 많은 부분을 패치 할 필요가 없었고,
Node.js 통합으로 인한 모든 충돌을 제거했습니다.
<hr>
요약하자면, atom-shell은 더 나은 디자인을 가지고 있었고, 기여자들에게 친화적이었습니다.
<hr>
그 뒤엔 상황이 일사천리로 진행되었습니다.

atom-shell을 1 년간 개발한 후, Atom과 함께 오픈소스로 공개 했습니다.
그리고 1 년 후 atom-shell을 더 나은 이름인 Electron로 변경 했습니다.
그리고 올해 Electron 1.0을 릴리즈 했습니다.
<hr>
Electron는 계속 사용자를 늘려 가고 있고,
GitHub의 스타수도 2년만에 37,000개 이상 증가했습니다.

이제는 거의 매일 같이 새로운 Electron 응용프로그램이 나오고 있고,
기업들도 Electron으로 프로그램을 만들고 있습니다.
<hr>
우리는 기여자들도 얻었습니다.
오늘날 우리는 25명의 커뮤니티 메인테이너와, 약 500명의 기여자가 있습니다.
최근 릴리즈에서는 변경사항의 절반 이상이 GitHub의 외부 기여자들에게서 발생했습니다.
<hr>
Electron 팀도 처음 저 뿐이었다가, 개발자가 4 명으로 늘었고,
더 많은 사람들을 Electron팀에 채용 하려고합니다.
<hr>
마지막으로, Electron이 크게 성장한 과정을 공유하고 싶습니다.
이것이 당신의 프로젝트에 도움이 되기를 바랍니다.

Electron 개인 프로젝트로 시작되었으며, 처음에는 사용자가 Atom editor 밖에 없었습니다.
그러나 Electron이 성장함에 따라, 더 많은 사용자를 모았고,
부가적으로 더 많은 기여자를 얻게 되었습니다.
그들중 몇몇은 또는 오랬동안 메인테이너가 될 것입니다.

더 많은 메인테이너를 보유하게 되면, 프로젝트는 더 커지고, 많은 사용자를 얻을 것 입니다.
이것은 눈덩이 계속 커지는 것과 같습니다.
그리고 성장의 핵심은 계속해서 더 많은 기여자를 얻는것 입니다.
만약 새로운 기여자를 얻을 수 없는 경우에는 그 프로젝트는 소규모로 머무르거나 끝나 버릴 것입니다.
<hr>
기여자을 유지하는 것에는, 두 가지 핵심 포인트가 있다고 생각합니다.

먼저, issue나 pull request에 즉시 반응하는 것입니다.
그렇지 않으면 기여자가 될 수도 있는 사람들은 그들의 작업이 무시 되었다고 느끼고 그냥 돌아 설것 입니다.

저는 Electron이 점을 잘 해내고 있다는 것을 자랑스럽게 생각하고 있습니다.
통계에 따르면 대부분의 issue나 pull request에 좋은 반응을 주었습니다.

두 번째로, 보다 쉽게 개발할 수 있도록 노력해야 합니다.
이를 달성 하는 방법은 여러가지가 있으며, 우리는 개발 환경을 자동으로 만들어주는 스크립트를 제공하거나, 기여자에게 프로젝트를 더 잘 알 수 있도록 더 나은 코드 리뷰를하고,
기여자들이 쉽게 코드를 이해 할 수 있도록 리팩토링을 계속 할 수 있습니다.

대부분의 기여자들이 당신의 프로젝트를 깊이 이해하고 있는 것은 아닙니다.
우리가 코드를 더 쉽게 기여할 수 있도록 하면, 더 많은 사람들이 기여자가 되어 줄 것입니다.

저는 Electron이 이것들을 아주 잘 해냈기 때문에 지금의 위치를 얻을 수 있었다고 생각합니다.
<hr>
이상입니다. 지금까지 들어주셔서 감사합니다.
<hr>

## 번역후기
JavaScript로 데스크탑 응용프로그램을 만드는 방법은 몇가지가 있지만 최근에는 Electron이 사실상의 표준이 되가는 것 같습니다.

제가 처음 접한 JavaScript 데스크탑 응용프로그램 툴은 Adobe에서 만든 [Brackets-shell](https://github.com/adobe/brackets-shell)이었습니다.
Atom처럼 [Brackets](http://brackets.io/)에티터를 위해 만들어진 툴인데, Atom과 달리 Brackets만을 위해서 만들어지고 있습니다.
최근에는 Adobe 개발자들도 [Electron에 관심을 보이는것 같습니다](https://github.com/electron/electron/issues/1582).

저도 Electron으로 [개인 프로젝트](https://github.com/sn0wle0pard/realm-browser-electron)를 만들고 있습니다 :)

이 글은 Electron이 만들어진 이유와 이런 기술들 속에서 높은 선호를 보이는 이유를 말하고 있어 번역했습니다.

잘못된 내용이 있다면 언제든지 알려주세요. 확인후 반영하겠습니다 :)