const a = [["H","Роуз, но она их никогда не использовала.","R","Они мои. Я хотела уйти, но у меня не было такой возможности."],
  ["R","Джимми купил их, чтобы выглядело так, будто он выиграл эти награды."],
  ["A","Он был моим. Мне подарили его на мой день рождения, но потом украли.","H","Это был кошелек той девочки, бедняжки.","R","Он принадлежал маленькой девочке."],
  ["A","Я не знала, что это такое, пока Джимми не показал мне.","P","Лучше спросите Джимми.","H","Это были мои вещи, но я не хранил их вместе.","R","Я не знаю. Они принадлежали Харви."],
  ["A","Он был у Джимми. И мне он не нравился.","P","Я видел, как Джимми играл с ним. Я думал, что это небезопасно.","H","У нас проходила выставка средневекового оружия. Джимми украл его.","R","Он принадлежал к комплекту доспехов, которые у нас были. Но потом куда-то пропал."],
  ["A","Не знаю, но детям нельзя пить алкоголь.","P","Наверное, из бара.","H","Не помню, но в том, чтобы немного выпить, нет ничего плохого.","R","Наверное, Харви их туда положил."],
  ["A","Их рисовал мальчик.","P","Джимми. Он их рисовал.","H","А вы как думаете? Джимми! У маленького Джимми было просто неистовое воображение.","R","Джимми рисовал картины о войне. Он был таким же, как и большинство мальчиков."],
  ["P","Джимми нашел её и надел.","H","Шеф! Кто еще носит шляпу шеф-повара?","R","Её носил наш повар."],
  ["A","Она могла быть моей.","P","Она была моей. Я сохранил её на случай, если она понадобится мне в качестве доказательства.","H","Я не знаю, но, возможно, она как-то связана с Доктором."],
  ["P","У некоторых людей он может помочь в лечении импульсивного поведения.","H","Вероятно, Доктор оставил его.","R","Оно принадлежало Доктору Боузу."],
  ["P","Не знаю, но Джимми нашел её.","H","Она всегда лежала под стойкой на регистрации. Не знаю, откуда она взялась.","R","Она принадлежала моему мужу."],
  ["A","Джимми сделал его. Не знаю зачем. Он был странным.","P","Джимми сделал его. Это было предупреждением, я должен был это предвидеть.","H","Джимми - раньше он вырезал статьи из новостей о жестоких учителях и врачах. Он был ненормальным ребёнком.","R","Харви сказал, что Джимми сделал его. Не помню точно."],
  ["P","Я связал их вместе. Это был эксперимент."],
  ["H","Он мог ударить током. Я оставил его, чтобы полиция могла его проверить.","R","Харви убрал его. Он сказал, что им опасно пользоваться."],
  ["A","Не знаю. Мальчик играл с ними.","P","Они принадлежали Харви. Не знаю зачем.","H","Я оставил их на случай, если они мне понадобятся.","R","Раньше они принадлежали моему мужу, когда он был учителем."],
  ["A","Он был в шкафу, в отеле. Я его там видела.","P","Раньше в отеле проходила выставка старинного оружия.","H","Он был с оружейной выставки, которая у нас проходила. Джимми он нравился.","R","Он был на стенде, который раньше демонстрировал Харви. Но мне не понравилось что он был в отеле."],
  ["H","Они были для двери от старой котельной.","R","Они были от котельной. Но нам пришлось заменить дверь."],
  ["P","Я никогда об этом не слышал.","H","Да, был пожар, нам удалось сдержать огонь, но многое сгорело.","R","Да. Но мы вовремя его заметили, прежде чем он успел распространиться."],
  ["P","Он принадлежал Харви. Мне не нравилось, что он находится в отеле.","H","Он был моим. Принадлежал моему отцу. В нём всё еще было несколько патронов.","R","Харви. Но он хранился в моей спальне."],
  ["A","Джимми показал мне его. Но он ему не принадлежал.","H","Это не кинжал, это открывалка для писем. Она не должна быть острой.","R","Это была открывалка для писем. Её кто-то подарил."],
  ["R","Это был комедийный персонаж, которого играл Джимми."],
  ["P","Я их не видел.","H","Я этого не помню.","R","Джимми разбил их."],
  ["A","Джимми носил её с собой","P","Он принадлежал Джимми. Он всегда держал его в кармане. Он не сказал мне, для чего он его использовал.","H","Джимми носил его с собой. Понятия не имею зачем.","R","Джимми носил с собой провод. Ему нравилось играть с электроникой."],
  ["R","Её написал Джимми."],
  ["H","Вероятно, принадлежит Роуз.","R","Оно было моим. Мне сделали предложение, от которого я не могла отказаться."],
  ["A","Я не знаю. Я не видела ребенка.","R","Она была для ребенка. Я хранила её в прикроватном ящике."],
  ["R","Джимми - сын Хьюго. Во всех смыслах."],
  ["A","Это была я - мальчик по имени Джимми запер меня в подвале. Потом он начал воровать у меня вещи.","P","Это была дочь гостя отеля. Джимми плохо вёл себя с ней.","H","Она жила в отеле со своей семьей.","R","Она была гостьей в нашем отеле."],
  ["A","Потому что он думал, что это забавно. Он вернул её, но потом все равно все испортил.","P","Понятия не имею, это просто то, что Джимми обычно делал.","H","Кто знает. Он, наверное, подумал, что это весело.","R","Нет. Девочка врала. Джимми ничего не крал."],
  ["A","Моя рука обгорела, было очень больно, но я никому не могла ничего сказать.","P","Ее рука была обожжена, очень сильно обожжена, но Джимми думал, что все это шутка.","H","Она обожглась, очень сильно обожглась.","R","Она обожглась, но продолжала делать такие же опасные вещи. Она была странной."],
  ["A","Я пыталась найти врача, но Джимми пригрозил мне и заставил остаться.","H","Вероятно, она боялась Джимми.","R","Не знаю, могло быть что угодно. Она была странной девочкой."],
  ["A","Мальчик сказал мне, что это лекарство. Оно было ужасно на вкус.","P","Меня тогда там не было, но, думаю, она выпила алкоголь."],
  ["A","Я чувствовала себя очень легкой, я думала, что смогу полететь.","P","Джимми заставил девочку выпить слишком много.","H","Она выпила бутылку виски, она не понимала, что делает.","R","Я не знаю. Я мало что знала о ней."],
  ["A","Я прыгнула, но потом все потемнело, и я не могла проснуться. Я больше не могу проснуться. Я не знаю где я.","P","Она упала с лестницы с верхнего этажа. Она была слишком пьяна, чтобы понимать, что делает. Это и стало причиной, по которой Роуз связалась со мной.","H","Она упала с верхнего этажа вниз. Я знал, что за этим стоит Джимми.","R","Она упала. Харви обвинил в этом Джимми. Это была вина самой девочки, а не Джимми."],
  ["P","Это был я - мне позвонила Роуз, мать Джимми. Она хотела, чтобы я поговорил с Джимми, узнал, что его беспокоит. Но Харви беспокоило разум Джимми, то, что он мог ещё придумать.","H","Это был Доктор Боуз. Он должен был помочь Джимми, но Джимми было уже не помочь.","R","Доктор Боуз. Он пришел помочь Джимми."],
  ["P","Джимми убивал мелких птиц, животных. Я понял, что ему нужно поработать над своими навыками сочувствия. Поэтому я попросил его придумать что-нибудь хорошее, что он может сделать для меня. Я был удивлен, ему сразу пришла в голову идея.","H","Джимми сказал, что где-то его нашел. То, что он сделал ему - совсем другая история.","R","Харви сказал, что Джимми, вероятно, убил его сам, но я ему не поверила."],
  ["P","Джимми делал мне бутерброд. Как я и просил, он принес его в мою комнату. Сначала я не подозревал, что что-то не так.","H","Врач пытался обучить Джимми, помочь ему. Это была большая ошибка.","R","Доктор Боуз продолжал свои попытки заставить Джимми делать то, чего он не хотел."],
  ["P","Джимми положил мне в бутерброд битое стекло. Я чуть не подавился. Я сохранил часть бутерброда и стекло, чтобы потом я мог обратиться в полицию, но понял, что недооценил болезнь Джимми. Мне просто пришлось срочно сделать его лечение более интенсивным.","H","Он узнал Джимми на собственном горьком опыте. Шалости Джимми всегда заходили слишком далеко.","R","Он сам порезался, но потом он пытался обвинить Джимми. Он сам поранился, и Джимми тут не причём."],
  ["P","Джимми отказал мне в приеме препарата. Пришлось бегать за ним по отелю. Затем он сказал Роуз, что я пытался заставить его принять его, что я применил насилие. Это просто смешно!","H","Не знаю, меня там не было.","R","Он пытался давать преппараты Джимми без моего разрешения."],
  ["P","Я волновался, что Роуз поверит Джимми. Это была неприкрытая ложь. Но мне удалось убедить Роуз, то что Джимми выдумывает.","H","Он беспокоился о том, что ещё Джимми может выдумать насчёт него. И не зря.","R","Я не знала, кому верить, но так как он беспокоился о своей репутации, я решила дать ему ещё один шанс."],
  ["P","Я подумал, когда он поймет, что его поймали на лжи, он начнет говорить со мной и делать то, что я прошу. Вместо этого он просто выдумал еще одну ложь. Только эта была намного хуже. Ужаснейшая ложь.","R","Он разговаривал с Джимми, пытаясь контролировать его. Заставлял его делать плохие вещи. Мне вообще не стоило ему доверять."],
  ["P","Роуз сообщила обо мне. в полицию. Я знал, что они меня заберут. В тот момент я понял, что у меня нет ни карьеры, ни будущего. Я решил взять все под свой контроль раз и навсегда.","H","Его собирались арестовать. Джимми испортил его жизнь. Но я не верил в истории Джимми.","R","Они пришли арестовать его. Он получил то, что заслужил."],
  ["P","С меня было достаточно. Обратного пути не было. Моя жизнь все равно была кончена.","H","Потому что его довели. Все думали, что он 'трогал' Джимми. Джимми, знаете ли, был слишком умён. У Доктора не было ни единого шанса, бедная душа.","R","Потому что он знал, что виновен. Он поступил правильно."],
  ["P","Это был Харви. Он знал, что Джимми лгал насчёт меня. Харви это понимал.","H","Это был я. Джимми обвинял Доктора. Роуз поверила ему, но где-то я уже слышал эту историю раньше.","R","Это был Харви. Он не поверил тому, что говорил Джимми. Но я знала, что он не лгал."],
  ["P","Джимми никогда не признавал во лжи.","H","Конечно, он этого не сделал! Он просто засмеялся. Затем он начал устанавливать маленькие ловушки против меня. Некоторые из них были не такими уж и маленькими.","R","Нет - как Джимми мог признаться в том, что не было правдой? Харви зря обвинял Джимми."],
  ["H","Он знал, что это мой обогреватель, он подключил его корпус к электросети. Почти убил меня. Он сделал это намеренно, но Роуз в это не верила. Я знал, что ему нужно преподать урок. Он нанёс ущерб моему имуществу, я нанёс ущерб его.","R","Харви обвинил Джимми, но этот обогреватель был неисправен. Харви давно стоило его выбросить."],
  ["P","Я не знаю, но жестоость всё только усугубляет.","H","Я разбил его телевизор и игровые приставки. Я был зол. Но это не сработало. Всё стало только хуже. В скором времени он мне отомстил.","R","Он испортил вещи Джимми. Он не мог контролировать свою злость."],
  ["H","Джимми установил ловушку так, что когда я открыл дверь, в меня попала стрела. Мне пришлось поехать в отделение неотложной помощи, наложить швы и сделать прививки от столбняка. Когда я вернулся, я не мог его найти. Роуз сказала, что он прятался в подвале. Это навело меня на мысль.","R","Харви сказал, что Джимми выстрелил в него стрелой из арбалета, но я знала, что Джимми не стал бы использовать такое оружие."],
  ["H","Я хотел использовать оружие Джимми против него же. Я думал, что там, внизу, он никому не навредит. Я ошибался.","R","Я не знаю, что он делал."],
  ["P","Я этого не помню.","H","Нам удалось сдержать огонь до того, как он вышел из-под контроля. Но все наши старые фотографии, письма и все остальное были там, все сгорело. Джимми вышел из-под контроля, мне это надоело. Я хотел, чтобы он ушел.","R","Харви обвинил Джимми, но пожар начался из-за оборванного провода. Это был несчастный случай."],
  ["P","Я не знаю. Но Харви не мог контролировать свою злость.","H","Я не знаю, что я собирался делать. Пригрозить ему, вывести из отеля ... Проблема была в том, что я не ожидал, что он тоже будет вооружён.","R","Я не знаю. Харви не стоило хранить пистолет в отеле."],
  ["H","Я искал Джимми."],
  ["H","Джимми подкрался ко мне сзади, я его не видел. В итоге Джимми всегда побеждал.","R","Харви сошёл с ума. Джимми просто защищался."],
  ["H","Роуз - Роуз поверила Джимми. Она защищала его до конца.","R","Это была я. Мне пришлось объяснить полиции, что кинжал был просто открывалкой для писем и что у Харви был заряженный пистолет. Джимми действовал в целях самообороны. Они поняли."],
  ["H","Джимми - они отпустили Джимми. Они сказали, что это была самооборона, что я пытался застрелить его. Но все это было ложью.","R","Джимми - он шел домой. Полиция все поняла. Ему поверили, но это изменило его. Он начал мне помогать, помогал управлять отелем. И он нашел способ привлечь больше гостей."],
  ["H","Я не знаю, кем он был.","R","Мне это нравилось, мы снова зарабатывали деньги. Казалось, все налаживается, пока… Джимми не начал вести себя странно. Я слышала, как он кричал, глядя на себя. Он казался рассерженным."],
  ["R","Джимми - Сначала я не понимала, я была сбита с толку. Но потом все стало ясно. Это был не Джимми. Как и зеркала, он начал разбиваться на осколки. Джимми больше не контролировал ситуацию."],
  ["H","Об этом я не знаю, но я знаю, что Джимми всегда все портил.","R","На сцене больше не было Джимми, это был Хьюго Панч, его комедийный персонаж. Хьюго начал оскорблять публику каждую ночь. Казалось, ему это нравилось. Однажды вечером после шоу гость сказала Джимми, что она думает о нем. Джимми вышел из себя. Он сделал кое-что глупое."],
  ["R","Журналисты, они искали Джимми. Но Джимми не контролировал ситуацию, женщину связал Хьюго Панч. Джимми больше не мог это контролировать. Он был подавлен. Он просто хотел все оставить в прошлом и двигаться дальше."],
  ["R","Это был Джимми. Он пытался убить себя. Вот почему мне пришлось сказать ему правду."],
  ["H","Я не знаю. Были вещи, которыми Роуз никогда со мной не делилась.","R","Хьюго, я похоронила его там, в бетоне, в секретной комнате. Я должна была сделать это раньше. Я позволяла ему слишком долго издеваться над Джимми. Это была моя вина, что Джимми стал таким. Я думала, что чувство вины исчезнет, если я расскажу Джимми. Я ошибалась. Стало только хуже. Я не могла принять то, что сделала. Для самой себя я была невыносима."],
  ["R","Если бы я не сделала это сама, Джимми сделал бы, или, вернее, Хьюго сделал бы. Хьюго по-прежнему главный, даже сейчас. Он контролирует Джимми. Попросите Джимми показать вам, где живет Хьюго."],
  ["H","Я его никогда не знал.","R","Он был иллюзионистом и артистом. Он купил отель, чтобы продвигать свое сценическое шоу. Он стал известным, его показывали на телевидении. Я работала его помощником, потом всё .... изменилось."],
  ["R","Я никогда не знала, чего он хотел. Я могла дать ему только одно."],
  ["R","Хьюго был жестоким, злым, больным человеком."],
  ["A","Да, он забрал их, когда я не видела, и украл мои деньги. Я отругала его, но он не слушал."],
  ["A","Он пропитал мою игрушку этой штукой в бутылке, я его ненавидела!"],
  ["A","Да - снял его со стены. Он выглядел очень острым. Он заставил меня пообещать никому не рассказывать и сказал, что может сделать так, что моя рука перестанет болеть."],
  ["A","Может быть - он сказал мне продолжать пить. Это было ужасно. Потом я начала чувствовать себя странно..."],
  ["P","Да, они предположили, что это бурная личность, но меня это особо не беспокоило, пока ... я не начал понимать, как далеко зашло его воображение."],
  ["P","Да - Джимми сказал, что сделает что-нибудь для меня, поэтому я последовал за ним, чтобы посмотреть, что он собирается делать."],
  ["P","Это была моя первая встреча с чувством юмора Джимми."],
  ["P","Это было не лучшим лекарством, но это единственное, что у меня было. Джимми требовалось срочное лечение; он был опасен."],
  ["P","Джимми сказал, что я избил его колотушкой. Я бы никогда не применил насилие к пациенту, это бессмыслица! Но Роуз ему поверила."],
  ["P","Джимми обвинил меня в самом ужасном преступлении. Он взял это из газетной статьи, которую читал. Он все это выдумывал."],
  ["P","Я экспериментировал с леской для стирки, но она оказалась слишком тонкой. Вместо этого я нашел веревку. У меня все еще были ключи от отеля, поэтому я пробрался туда однажды ночью, пока был выпущен под залог."],
  ["H","Всё было прямо как там! Как только я нашел этот альбом, я понял, откуда Джимми всё это брал. Всё было также, вплоть до каждой детали."],
  ["H","Джимми всегда играл с электричеством. Забавно, что его никогда не ударяло током."],
  ["H","Я оставил эти биты для самообороны, но я был зол. Я взял одну и пошел в комнату Джимми."],
  ["H","Джимми любил подобное оружие. Я не видел его всю ночь после того, как сломал его вещи. Я должен был догадаться, что он работал над своим следующим маленьким трюком."],
  ["H","Что ж, если Джимми хотел спрятаться там, я подумал, что ему должно быть там нравится."],
  ["H","Никто не понимал, как далеко зайдет Джимми, чтобы привлечь внимание."],
  ["H","Я был потерян, всё будто бы стало красным, я ненавидел его. Я не контролировал себя."],
  ["H","Это был даже не кинжал! Но я так и не усвоил урок, Джимми всегда был на шаг впереди меня."],
  ["R","Да, это был сценический номер Джимми. Он был комиком. Он был хорош, действительно хорош. Люди стали приходить просто посмотреть на него."],
  ["R","Бить зеркала было только началом. Я спросила его об этом, но он ничего не помнил. Затем начали происходить другие странности."],
  ["R","Джимми запер ее в комнате и связал. Я не знала, что он собирался делать. Я нашла её и отпустила. Джимми сказал, что это шутка! Она не выдвигала обвинений, но сообщила газетам."],
  ["R","Джимми ненавидел то, что наделал. Он всю жизнь боролся с Хьюго Панчем. Он жил внутри него, заставляя делать все эти ужасные поступки. Джимми больше не хотел жить."],
  ["R","Да, мы были женаты. Сначала мы были счастливы, но потом все начало меняться."],
  ["R","Я думала, что появление ребенка решит наши проблемы. Я ошибалась."],
  ["R","Я во всем призналась Джимми. Джимми не помнил Хьюго, он будто растворился в его памяти. Хьюго бил Джимми с момента его рождения в течение 2 лет. Я должна была прекратить это раньше."],
  ["R","У меня не было выбора. Джимми отправился искать могилу Хьюго. Я была одна. Я знала, что мне делать."]]

let leftrow = ''
let rightrow = ''
for(const rowI in a){
  const row = a[rowI]
  const array_chunks = (array, chunk_size) => Array(Math.ceil(array.length / chunk_size)).fill().map((_, index) => index * chunk_size).map(begin => array.slice(begin, begin + chunk_size));
  const row_ = array_chunks(row, 2)
  for(const files of row_) {
    // leftrow += `${files[0]}_O${Number(rowI) + 1}.mp3` + '\n'
    // rightrow += files[1]+'\n'
    console.log({'H': 'Харви', 'R': 'Роуз', 'P': 'Боуз', 'A': 'Эмми'}[files[0]])
  }
}

// console.log(leftrow)
// console.log()
// console.log()
// console.log()
// console.log()
// console.log()
// console.log()
// console.log(rightrow)