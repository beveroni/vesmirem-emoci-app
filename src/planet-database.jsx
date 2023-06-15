import { GameAnger } from './components/GameAnger';
import { GameJoy } from './components/GameJoy';
import { GameLove } from './components/GameLove';
import { GameSadness } from './components/GameSadness';

export const planets = [
  {
    id: 1,
    label: 'Radost',
    name: 'joy',
    avatar: '/img/planet_joy.svg',
    colorText: '#f9f46d',
    colorStar: '#FFF503',
    planetDialog:
      'Jééé, ahoj raketko, jdeš ke mně na návštěvu? To je ale príma. Před chvílí, asi tak před 846 dny jsem se otočila konečně ke Slunci a můžu si s ním zase povídat. To mě totiž děsně baví. A taky chci chytit trochu bronz, jsem celá žlutá jako sýr. Pojď ke mně, ať se můžeš trochu opálit. Pomůžeš mi udělat radost i ostatním?',
    rocketDialog:
      'Ahoj planetko, ty máš ale dobrou náladu, že se tak usmíváš. Já byla vyslaná do vesmíru, abych prozkoumala jeho nekonečné možnosti...Jsi tak krásně radostná a zářivá tak se u Tebe na chvíli zdržím.',
    backgroundGame: '/img/backround_task_joy.svg',
    task: 'Čím uděláš radost králíčkovi, kosmonautovi a mimču? Klikni na správné obrázky a vyber tak dvojici, která k sobě patří.',
    question:
      'Co dělá radost tobě? A co udělá radost někomu blízkému (doplň si koho zrovna chceš).',
    game: GameJoy,
    description:
      'Radost je příjemná a veselá emoce, která vyjadřuje štěstí, potěšení a nadšení. Je spojena s pozitivními událostmi, úspěchy nebo příjemnými zážitky.',
  },
  {
    id: 2,
    label: 'Smutek',
    name: 'sadness',
    avatar: '/img/planet_sadness.svg',
    colorText: '#77cdfe',
    colorStar: '#04A5FF',
    planetDialog:
      'Ahoj, jsem úplně nejvíc smutná, víš... Prolítla tady kolem mě moc pěkná kometa s dlouhým ocasem.. a než jsem se stačila otočit, brek brek, byla pryč. Nestihla jsem si nic přát, brek brek. Pomůžeš mi, abych ji mohla vidět znova?',
    rocketDialog:
      'Ahoj planetko, proč pláčeš? Co se stalo, že si taková smutná? Můžu ti nějak pomoct?',
    backgroundGame: '/img/backround_task_sadness.svg',
    task: 'Pusť si stopky a počkej s planetkou na další letící kometu.',
    question:
      'Taky se ti stalo, že si něco prošvihl/a? Co umí rozesmutnit Tebe? Komu se svěřuješ, když je Ti smutno?',
    game: GameSadness,
    description:
      'Smutek je emoční stav vyjadřující zármutek, ztrátu nebo bolest. Lidé se cítí smutní v reakci na negativní události, jako je ztráta blízkého člověka, selhání nebo rozchod s někým koho mají rádi.',
  },
  {
    id: 3,
    label: 'Láska',
    name: 'love',
    avatar: '/img/planet_love.svg',
    colorText: '#f891cf',
    colorStar: '#FC68C1',
    planetDialog:
      'Ááách, ahoj, raketko, koukej, dostala jsem dopis od měsíce. Moc krásný. Napsal mi, že se těší, až se zase za měsíc uvidíme... ááách. Akorát nevím, co mu mám odpovědět. Trochu se stydím. Pomůžeš mi s tím?',
    rocketDialog:
      'Ahoj planetko, ty tak krásně růžově záříš po celé oběžné dráze. Pověz mi o tom víc.',
    backgroundGame: '/img/backround_task_love.svg',
    task: 'Pomoz planetce napsat zaláskovaný pohled měsíci:',
    question:
      'Koho máš taky rád/a? A co máš nejraději? Velké objetí s kým právě tohle čteš.',
    game: GameLove,
    description:
      'Láska je hluboká emoční připoutanost a náklonnost k někomu nebo něčemu. Vyjadřuje péči, soucit, ochranu a důvěru. Láska může být vztahem mezi rodinnými příslušníky, přáteli nebo romantickým partnerstvím.',
  },
  {
    id: 4,
    name: 'anger',
    label: 'Vztek',
    avatar: '/img/planet_anger.svg',
    colorText: '#f47979',
    colorStar: '#EC1F1F',
    planetDialog:
      'Chr....uff... já jim ukážu.. (#)=>{!?//*}... představ si... v klidu si dávám poobědovou siestu a najednou kolem mě prolítne takový nepořádek. Kdo se má na to tady koukat! Pomůžeš mi s úklidem?',
    rocketDialog:
      'Ahoj planetko, letím si vesmírem a vidím takovou zajímavou planetku ... tak jsem si řekla, že se tě zaletím zeptat proč jsi tak rudá?',
    backgroundGame: '/img/backround_task_anger.svg',
    task: 'Pomoz planetce a ukliď vesmírný nepořádek do popelnice.',
    question:
      'Co pomáhá Tobě, když se zlobíš? Umíš říct, proč se zlobíš? A kde zlobu cítíš v těle?',
    game: GameAnger,
    description:
      'Vztek je silná negativní emoce, která vyjadřuje hněv, frustraci a nevoli. Je spojen s pocitem nespravedlnosti, zklamání nebo nepříjemnými situacemi, které vyvolávají impuls k projevu nespokojenosti.',
  },
  // {
  //   id: 5,
  //   label: 'Nadšení',
  //   name: 'enthusiasm',
  //   avatar: '/img/planet_enthusiasm.svg',
  //   colorText: '#f8b271',
  //   colorStar: '#FF7D04',
  //   planetDialog:
  //     'Ahoj raketko, cha cha, koukej, jaký mám kolem sebe pěkný kruh! A víš co? Právě jsem zjistila, že se to odborně nazývá planetární prstenec. A víš, co ještě? Vygooglila jsem, že je složený z úlomků a prachu. No není nádherný? Koukej, jak mi sluší!',
  //   rocketDialog:
  //     'Ahoj planetko! Teda, Ty jsi pěkně veselá. Co se stalo, že se tak směješ?',
  //   backgroundGame: '/img/backround_task_enthusiasm.svg',
  //   task: 'Zahraj si a zkus trefit hvězdičku.',
  //   question: 'Z čeho si nadšený/á Ty? Co ti vykouzlí hvězdičky v očích?',
  //   description:
  //     'Nadšení je silná pozitivní emoce, která vyjadřuje kombinaci zvědavosti, odvahy a touhy pustit se do nových věcí. Je spojeno s očekáváním a radostí z budoucích událostí, nových zážitků nebo objevů.',
  // },
  // {
  //   id: 6,
  //   label: 'Nuda',
  //   name: 'boredom',
  //   avatar: '/img/planet_boredom.svg',
  //   colorText: '#7a5637',
  //   colorStar: '#793B03',
  //   planetDialog:
  //     ' text: Ahoj, raketko, co děláš tady vzadu? Jsem úplně nejdál. A jsem tu sama. Dny jsou tady děsně dlouhý. Počítala jsem meteority, co prolítnou kolem. Bylo jich 2782, družic 678, nebo 687 a jedno auto. Ale to už mě taky nebaví... A co děláš ty?',
  //   rocketDialog:
  //     'Ahoj planetko, téda, Ty máš ale výhled. Vidíš úplně na všechny. Jestli chceš, můžeme si něco zahrát',
  //   backgroundGame: '/img/backround_task_boredom.svg',
  //   task: 'Zahraj si s planetkou pexeso.',
  //   question: 'Co děláš, když se nudíš? A jakou činnost naopak děláš rád?',
  //   description:
  //     'Nuda je emoční stav vyjadřující nedostatek zájmu, stimulace nebo vzrušení. Nudíme se, když nemáme nic zajímavého, co by nás zabavilo. Dlouhodobá nuda může vést k pocitu neuspokojení nebo frustrace.',
  // },
  // {
  //   id: 7,
  //   label: 'Odvaha',
  //   name: 'courage',
  //   avatar: '/img/planet_courage.svg',
  //   colorText: '#3a8a4c',
  //   colorStar: '#038A21',
  //   planetDialog:
  //     'Ahoj! Pojď ke mně dál, ať jsi kdo jsi! Já mám pro strach uděláno. Koukni totiž, jaký mám bicáky. Vidíš támhle tu planetu úplně vzadu? Tak tu jsem předběhla. Jestli chceš, můžeš být se mnou v týmu a můžeme prozkoumávat vesmír spolu. Ale napřed sem ti připravila jeden úkol - máš odvahu na to jej splnit?',
  //   rocketDialog:
  //     'Ahoj planetko, no pane jo. Děkuju za nabídku, ale jsem tady u Tebe jen na skok. I tak bych se ráda něco od Tebe naučila a úkol zkusila zvládnout.',
  //   backgroundGame: '/img/backround_task_courage.svg',
  //   task: 'Vyber z uvedených dvou situaci tu, kde se podle Tebe nějaká osoba chová statečně?',
  //   question:
  //     'A co ty? Dostal/a jsi se někdy do situace, kdy jsi musel/a překonat své obavy a zachovat se statečně? Popiš tuto situaci - jak se udála a jak si se zachoval a proč. Zachoval/a by si se nyní třeba jinak?',
  //   description:
  //     'Odvaha je emocionální stav, který vyjadřuje statečnost, odhodlání a odvahu čelit strachu nebo nebezpečí. Je spojena s překonáním překážek, riskováním a prosazováním vlastních přesvědčení.',
  // },
  // {
  //   id: 8,
  //   label: 'Strach',
  //   name: 'fear',
  //   avatar: '/img/planet_fear.svg',
  //   colorText: '#aca29a',
  //   colorStar: '#58534f',
  //   planetDialog:
  //     'Jéééé, kdo jsi? Co tady děláš? Ty si mě teda vylekala. Všechny planety se mi někam ztratily. Žádnou nevidím.. Jsem tu taková sama malinkatá po tmě. A to nemám ráda. Řeknu ti tajemství, jo? Víš, já se bojím tmy. Ale nikomu to neříkej, jo? To se planetám nestává.. A taky se bojím, že na mne někdo přiletí a obsadí',
  //   rocketDialog:
  //     'Ahoj planetko, neboj, já zase odletím. Jsem na průzkumu. Počkej, mám nápad, co by ti mohlo pomoct, aby ses tak nebála.',
  //   backgroundGame: '/img/backround_task_fear.svg',
  //   task: 'Pomoz planetce vybrat z věcí ty, které by ji mohly pomoci, aby se tolik nebála.',
  //   question: 'Řekni, proč si je vybral/a? Čeho se bojíš Ty? A co Ti pomáhá?',
  //   description:
  //     'Strach je negativní emocionální stav vyvolaný pocitem ohrožení, nebezpečí nebo nejistoty. Lidé se cítí znepokojeni, nervózní nebo vystrašení při konfrontaci s možným rizikem nebo strašidelnou situací.',
  // },
];
