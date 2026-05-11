const GEMINI_API_KEY = "AIzaSyC5opHwo0vvW0O_3C330E33lrws5l2TeL4";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

const translations = {
  en: {
    title: "Breathe. You're safe now.", subtitle: "Our AI is scanning for tricks.",
    placeholder: "Paste message here...", btn: "Scan for Security",
    resultTitle: "🛡️ Analysis:", guideTitle: "How to Spot a Scam",
    guideText: "Scammers use panic or greed. Check if the link matches the official website (e.g., cbe.com.et vs cbe-birr.net). Never share PINs.",
    error: "System error, please try again later.",
    studyBtn: "🎓 Take Full Course", backBtn: "🔙 Back to Scanner",
    lessons: [
      { title: "The Urgency Trap", text: "Scammers say 'Act Now!' or 'Account Blocked!' to make you panic. Real organizations give you time to think." },
      { title: "Fake Job Deposits", text: "If a 'company' asks for money for training, equipment, or registration, it is 100% a scam. You work to get paid, not pay to work." },
      { title: "Suspicious Links", text: "Look closely. Does it say 'ethio-telecom' or 'ethio.telecom.rewards.com'? Tiny spelling errors mean it's a trap." },
      { title: "Identity Protection", text: "Never send photos of your ID or Passport to people on Telegram. They use your face to open fake accounts and commit crimes." },
      { title: "Prize Scam", text: "You cannot win a lottery you didn't enter. If someone says you won money for 'free', they are trying to steal your information." }
    ]
  },
  am: {
    title: "ትንሽ ይረፉ። ደህንነትዎ የተጠበቀ ነው።", subtitle: "የእኛ AI ማታለያዎችን ይፈልጋል።",
    placeholder: "መልእክቱን እዚህ ይለጥፉ...", btn: "ደህንነቱን አረጋግጥ",
    resultTitle: "🛡️ ትንተና፡", guideTitle: "ማጭበርበሪያን እንዴት መለየት ይቻላል?",
    guideText: "አጭበርባሪዎች ድንጋጤን ወይም ስግብግብነትን ይጠቀማሉ። ሊንኩ ከትክክለኛው ድርጅት ጋር መመሳሰሉን ያረጋግጡ (ለምሳሌ cbe.com.et እንጂ cbe-birr.net አይደለም)።",
    error: "የሲስተም ስህተት፣ ቆይተው ይሞክሩ።",
    studyBtn: "🎓 ሙሉ ትምህርት ይውሰዱ", backBtn: "🔙 ወደ ፍለጋ ይመለሱ",
    lessons: [
      { title: "የመጣደፍ ወጥመድ", text: "አጭበርባሪዎች 'አሁኑኑ ይላኩ' ወይም 'አካውንትዎ ተዘግቷል' በማለት ያስደነግጡዎታል። ትክክለኛ ድርጅቶች እንዲያስቡበት ጊዜ ይሰጡዎታል።" },
      { title: "የቅጥር ክፍያ ማጭበርበር", text: "ለስልጠና ወይም ለመመዝገቢያ ክፍያ የሚጠይቅ 'ድርጅት' 100% ሌባ ነው። ስራ የሚሰራው ገንዘብ ለማግኘት እንጂ ለመክፈል አይደለም።" },
      { title: "አጠራጣሪ ሊንኮች", text: "ሊንኩን በጥንቃቄ ይመልከቱ። 'ethio-telecom' ይላል ወይንስ 'ethio-telecom-birr.com'? ትንሽ የፊደል ስህተት ማለት ወጥመድ ነው።" },
      { title: "የማንነት ደህንነት", text: "በቴሌግራም ለማያውቁት ሰው የመታወቂያዎን ወይም የፓስፖርትዎን ፎቶ አይላኩ። የእርስዎን ማንነት ተጠቅመው ወንጀል ይሰራሉ።" },
      { title: "የሽልማት ወጥመድ", text: "ያልተሳተፉበት እጣ አይደርስዎትም። በነጻ ገንዘብ ደርሶዎታል የሚሉ ሰዎች መረጃዎን ለመስረቅ የሚሞክሩ ናቸው።" }
    ]
  },
  om: {
    title: "Boqodhu. Nageenyi kee eegamaadha.", subtitle: "AI'n keenya gowwoomsaa barbaada.",
    placeholder: "Ergaa as garagalfadhaa...", btn: "Nageenya Mirkaneessi",
    resultTitle: "🛡️ Xiinxala:", guideTitle: "Gowwoomsaa Adda Baafachuu",
    guideText: "Gowwoomsitoonni naasuu ykn haxummaa fayyadamu. Liinkichi kan dhaabbata dhugaa ta'uu mirkaneeffadhaa (fkn cbe.com.et malee cbe-birr.net miti).",
    error: "Dogoggora sirnaa, booda yaalaa.",
    studyBtn: "🎓 Barnoota Guutuu", backBtn: "🔙 Gara Xiinxalaatti",
    lessons: [
      { title: "Kkiyyo Naasuu", text: "Gowwoomsitoonni 'Amma raawwadhu' ykn 'Herregni kee cufameera' jedhu. Dhaabbanni dhugaan akka itti yaadduuf yeroo siif kenna." },
      { title: "Kaffaltii Hojii Soobaa", text: "Hojiif yoo kaffaltii si gaafatan, sun 100% gowwoomsaadha. Hojii kaffaltii argachuuf hojjatama malee kaffaltii kaffaluuf miti." },
      { title: "Liinkii Shakkisiisaa", text: "Liinkii sana gadifageenyaan ilaali. Qubee xiqqoo dogoggoreen gowwoomsu. 'ethio-telecom' moo 'ethio-telecom-birr.com'?" },
      { title: "Eenyummaa Eeggachuu", text: "Suuraa waraqaa eenyummaa keessanii Telegram irratti namoota hin beekneef hin erginaa. Maqaa keessaniin yakka raawwatu." },
      { title: "Badhaasa Soobaa", text: "Badhaasni ati hin hirmaatin siif hin gahu. Yoo badhaasni bilisaa siif gahe jedhan, odeeffannoo kee hatuufi." }
    ]
  }
};

let currentLang = 'en';
let currentLesson = 0;

function setLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];
  document.getElementById('ui-title').innerText = t.title;
  document.getElementById('ui-subtitle').innerText = t.subtitle;
  document.getElementById('userInput').placeholder = t.placeholder;
  document.getElementById('analyzeBtn').innerText = t.btn;
  document.getElementById('ui-result-title').innerText = t.resultTitle;
  document.getElementById('ui-guide-title').innerText = t.guideTitle;
  document.getElementById('ui-guide-text').innerText = t.guideText;
  document.getElementById('toggleStudy').innerText = document.getElementById('studySection').classList.contains('hidden') ? t.studyBtn : t.backBtn;
  
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.id === `btn-${lang}`));
  if (!document.getElementById('studySection').classList.contains('hidden')) updateLesson();
}

function toggleMode() {
  const scanner = document.getElementById('scannerSection');
  const study = document.getElementById('studySection');
  const btn = document.getElementById('toggleStudy');
  
  if (study.classList.contains('hidden')) {
    scanner.classList.add('hidden');
    study.classList.remove('hidden');
    btn.innerText = translations[currentLang].backBtn;
    updateLesson();
  } else {
    scanner.classList.remove('hidden');
    study.classList.add('hidden');
    btn.innerText = translations[currentLang].studyBtn;
  }
}

function updateLesson() {
  const lesson = translations[currentLang].lessons[currentLesson];
  document.getElementById('course-title').innerText = lesson.title;
  document.getElementById('course-content').innerHTML = `<p>${lesson.text}</p>`;
  document.getElementById('ui-progress').style.width = `${((currentLesson + 1) / 5) * 100}%`;
}

function nextLesson() { if (currentLesson < 4) { currentLesson++; updateLesson(); } }
function prevLesson() { if (currentLesson > 0) { currentLesson--; updateLesson(); } }

document.getElementById('analyzeBtn').addEventListener('click', async () => {
    const text = document.getElementById('userInput').value.trim();
    if (!text) return;
    const btn = document.getElementById('analyzeBtn');
    const resBox = document.getElementById('aiResponse');
    
    btn.disabled = true;
    document.getElementById('resultContainer').classList.remove('hidden');
    resBox.innerText = "...";

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: `Evaluate intent of message in ${currentLang}. Format: 🛑 Verdict, 🤔 Why, 💡 Tip. Text: "${text}"` }] }],
                safetySettings: [{ category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" }]
            })
        });
        const data = await response.json();
        resBox.innerText = data.candidates[0].content.parts[0].text;
    } catch (e) {
        resBox.innerText = translations[currentLang].error;
    } finally {
        btn.disabled = false;
    }
});

window.onload = () => setLanguage('en');
