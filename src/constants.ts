import { BlogPost, Category } from './types';

export const CATEGORIES: Category[] = [
  'Sera',
  'Mikakati',
  'Hotuba',
  'Ziara',
  'Vision',
  'Uchumi',
  'Maendeleo'
];

export const DUMMY_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Dira ya Maendeleo ya Viwanda Tanzania',
    excerpt: 'Tunaangazia jinsi ya kuimarisha sekta ya viwanda ili kutoa ajira kwa vijana wengi zaidi nchini.',
    content: `
      <p>Sekta ya viwanda ni uti wa mgongo wa uchumi wa kisasa. Katika zama hizi mpya, tunahitaji mikakati madhubuti ya kuongeza thamani ya mazao yetu kabla ya kuyauza nje ya nchi.</p>
      <h2>Umuhimu wa Viwanda Vidogo na vya Kati</h2>
      <p>Viwanda vidogo (SMEs) vina uwezo mkubwa wa kuajiri watu wengi kwa gharama nafuu. Serikali inapaswa kuweka mazingira rafiki ya kodi na upatikanaji wa mikopo.</p>
      <blockquote>"Maendeleo ya kweli huanza na uwezo wa kuzalisha kile tunachotumia."</blockquote>
      <p>Hii ni sehemu ya sera yetu ya 'Maendeleo Jumuishi' inayolenga kuhakikisha kila Mtanzania ananufaika na ukuaji wa uchumi.</p>
    `,
    category: 'Sera',
    date: 'March 20, 2026',
    imageUrl: 'https://picsum.photos/seed/industry/800/600',
    author: 'Uongozi wa Maendeleo'
  },
  {
    id: '2',
    title: 'Hotuba ya Uzinduzi wa Jukwaa la Vijana',
    excerpt: 'Soma hotuba nzima iliyotolewa wakati wa uzinduzi wa jukwaa la vijana wazalendo jijini Dodoma.',
    content: `
      <p>Ndugu zangu vijana, leo ni siku ya kihistoria. Tunazindua jukwaa ambalo litakuwa sauti ya mabadiliko na ubunifu.</p>
      <h2>Vijana na Uongozi</h2>
      <p>Uongozi si cheo, bali ni huduma. Tunahitaji vijana ambao wako tayari kujifunza, kufanya kazi kwa bidii, na kuwa na uadilifu wa hali ya juu.</p>
      <p>Tanzania inawategemea ninyi. Msikubali kukatishwa tamaa na changamoto za sasa, bali zitumieni kama fursa ya kukua.</p>
    `,
    category: 'Hotuba',
    date: 'March 15, 2026',
    imageUrl: 'https://picsum.photos/seed/speech/800/600',
    author: 'Kiongozi Mkuu'
  },
  {
    id: '3',
    title: 'Ziara ya Kikazi Mkoani Mwanza',
    excerpt: 'Tathmini ya miradi ya maendeleo na mazungumzo na wananchi kuhusu changamoto za uvuvi.',
    content: `
      <p>Ziara yetu mkoani Mwanza imekuwa na mafanikio makubwa. Tumeweza kutembelea miradi ya maji na barabara inayotekelezwa kwa kasi.</p>
      <h2>Changamoto za Wavuvi</h2>
      <p>Wavuvi wa Ziwa Victoria wameeleza changamoto zao, ikiwemo ukosefu wa zana za kisasa na masoko ya uhakika. Tumeahidi kufanyia kazi kero hizi mara moja.</p>
    `,
    category: 'Ziara',
    date: 'March 10, 2026',
    imageUrl: 'https://picsum.photos/seed/lake/800/600',
    author: 'Timu ya Ziara'
  },
  {
    id: '4',
    title: 'Mkakati wa Uchumi wa Kidijitali',
    excerpt: 'Jinsi teknolojia inavyoweza kubadilisha maisha ya Watanzania vijijini na mijini.',
    content: `
      <p>Teknolojia ya habari na mawasiliano (TEHAMA) ni nyenzo muhimu ya maendeleo. Mkakati wetu unalenga kufikisha mtandao wa kasi kila kijiji.</p>
      <h2>Elimu na TEHAMA</h2>
      <p>Tunataka kuona watoto wetu wanajifunza coding na sayansi ya kompyuta tangu wakiwa shule za msingi.</p>
    `,
    category: 'Mikakati',
    date: 'March 05, 2026',
    imageUrl: 'https://picsum.photos/seed/digital/800/600',
    author: 'Mshauri wa Uchumi'
  }
];
